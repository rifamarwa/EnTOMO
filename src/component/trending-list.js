import './trending-item.js'

class TrendingList extends HTMLElement {
    set trendingMovies(movies){
        this._trendingMovies = movies;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this._trendingMovies.forEach(movie => {
            const movieItemElement = document.createElement('trending-item');
            movieItemElement.trendingMovie = movie;

            this.appendChild(movieItemElement);
        })
    }
}

customElements.define('trending-list', TrendingList);