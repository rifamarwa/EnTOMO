import './movie-item.js'

class MovieList extends HTMLElement{
    
    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.className = "col-4 col-md-2";
            movieItemElement.movie = movie;

            this.appendChild(movieItemElement);
        })

        
    }
}

customElements.define('movie-list', MovieList)