import {path, DataSource} from "../data/data-source.js";
import "./movie-detail.js"
import moment from 'moment'

class TrendingItem extends HTMLElement {
    set trendingMovie(movie){
        this._trendingMovie = movie;
        this.render();
    }

    switchPage(){
        $('.home-section').hide();
        $('.movie-tv-section').hide();
        $('.detail-section').show();
    }

    render(){
        const detailMovie = document.querySelector('movie-detail');
        const ratingAverage = (this._trendingMovie.vote_average).toFixed(1);

        this.innerHTML = `
        <style>
        .trending-item {
            display: flex;
            margin: 10px 30px 30px 80px;
            position: relative;
        }

        .card-image-container .trending-rating-container {
            background: rgba(32, 36, 36, 0.75);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border-style: solid;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 8px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
        
        .card-image-container .trending-rating-container p {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 12px;
        }

        .trending-item-detail {
            margin-left: 20px;
        }

        .trending-item-detail h5{
            font-size: 16px;
        }

        .trending-item-detail p {
            font-size: 12px;
            width:100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-align: justify;
        }
    
        </style>
        <div class="trending-item card-movie" data-id="${this._trendingMovie.id}">
            <div class="card-image-container">
                <img src="https://image.tmdb.org/t/p/w92${this._trendingMovie.poster_path}" alt="${this._trendingMovie.original_title}">
                <div class="trending-rating-container">
                    <p>${ratingAverage}</p>
                </div>
            </div>
            <div class="trending-item-detail">
                <h5>${this._trendingMovie.original_title || this._trendingMovie.original_name}</h5>
                <p id="date">${moment(this._trendingMovie.release_date || this._trendingMovie.first_air_date).format('LL')}</p>
                <p>${this._trendingMovie.overview}</p>
            </div>
        </div>
        `;

        let ratings = this.querySelector('.trending-rating-container');
        console.log(ratingAverage)
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
                'genres': [genreArray],
                'language': results[0].production_countries[0].iso_3166_1,
                'runtime': results[0].runtime,
                'rating': results[0].vote_average,
                'total_vote' : results[0].vote_count,
                'overview' : results[0].overview,
                'poster_path' : results[0].poster_path,
                'casts' : results[1].slice(0,8),
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

customElements.define('trending-item', TrendingItem);