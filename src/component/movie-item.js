import {path, DataSource} from "../data/data-source.js";
import "./movie-detail.js";
import $ from 'jquery';
import moment from 'moment'

class MovieItem extends HTMLElement{
    set movie(movie){
        this._movie = movie;
        this.render();
    }

    switchPage(){
        $('.home-section').hide();
        $('.movie-tv-section').hide();
        $('.detail-section').show();
    }

    render(){
        const detailMovie = document.querySelector('movie-detail');
        const ratingAverage = (this._movie.vote_average).toFixed(1);

       this.innerHTML = `
       <style>
        .card {
            position: relative;
            border-radius: 0 !important;
            background-color: #181C1C !important;
            border-color: #181C1C !important;
        }

        .card-movie {
            cursor: pointer;
        }

        .card-image-container {
            position: relative;
        }
        
        .card-image-container img {
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        
        .card-image-container .rating-container {
            background: rgba(32, 36, 36, 0.75);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border-style: solid;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 10px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
        
        .card-image-container .rating-container p {
            width: 100%;
            height: 100%;
            text-align: center;
        }
        
        .card-body {
            padding: 10px 10px;
        }
        
        .card-body h5 {
            font-size: 16px;
            font-weight: 500;
            line-height: 25px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        
        .card-body p {
            font-size: 13px;
        }
       </style>
        <div class="card card-movie" data-id="${this._movie.id}">
            <div class="card-image-container">
                <img class="card-img-top" src="https://image.tmdb.org/t/p/w342${this._movie.poster_path}" alt="${this._movie.original_title}">
                <div class="rating-container">
                    <p>${ratingAverage}</p>
                </div>
            </div>
            <div class="card-body">
                <h5>${this._movie.title || this._movie.name}</h5>
                <p class="date">${moment(this._movie.release_date || this._movie.first_air_date).format('YYYY')}<p>
            </div>
        </div>
       ` ;

       let ratings = this.querySelector('.rating-container');
        if (ratingAverage >= 7.0) {
            ratings.style.borderColor = '#47D221'
        } else if (ratingAverage < 7.0 && ratingAverage > 4.0) {
            ratings.style.borderColor = '#E5DF1B'
        } else if (ratingAverage < 4){
            ratings.style.borderColor = 'red'
        }

        const renderResult = (results) => {
            this.switchPage();
            
            let genreArray = results[0].genres;
            for(let i = 0; i < genreArray.length; i++){
                genreArray[i] = genreArray[i].name;
            }

            const trailer = results[4].filter(result => result.type == "Trailer")

            const dataMovie = {
                'title': (results[0].title ? results[0].title : results[0].name) ,
                'release_date': (results[0].release_date ? results[0].release_date : results[0].first_air_date),
                'genres': genreArray,
                'language': results[0].production_countries[0].iso_3166_1,
                'runtime': results[0].runtime,
                'rating': results[0].vote_average,
                'total_vote' : results[0].vote_count,
                'overview' : results[0].overview,
                'poster_path' : results[0].poster_path,
                'casts' : results[1].slice(0,9),
                'trailer' : trailer[0].key,
                'recommendations' : results[2].slice(0,4),
                'reviews' : results[3].slice(0,3)
            }
            detailMovie.detail = dataMovie;
        }

        const informationSelected = (id) => {
            DataSource.getDetail(path.detailMovie, id).then(renderResult);
            const tab = document.querySelector('app-bar').navigationValue;
            switch(tab) {
                case 'home' || 'movies':
                    DataSource.getDetail(path.detailMovie, id)
                        .then(renderResult)
                        .catch(fallbackResult);
                    break;
                case 'tvShows':
                    DataSource.getDetail(path.detailTV, id)
                        .then(renderResult)
                       
                    break;
            }
        }

        const fallbackResult = (message) => {
            alert(message);
        }

        const cardMovie = this.querySelector(".card-movie");
        cardMovie.addEventListener("click", function(){
            const idMovie = this.getAttribute("data-id");
            informationSelected(idMovie);
        });
    }

    
}


customElements.define('movie-item', MovieItem);