const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=6eb8b7e63aea5cde611ee50450ef3ee8';

const path = {
    nowPlaying: 'movie/now_playing',
    popular: 'movie/popular',
    upcoming: 'movie/upcoming',
    trending: 'trending/all/week',
    movies: 'discover/movie',
    tvShows: 'discover/tv',
    detailMovie: 'movie/',
    detailTV: 'tv/',
    searchMovie: 'search/multi',
    review: 'review/',
}

class DataSource {
    static getList(path){
        return fetch(`${baseUrl}${path}${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if(responseJSON.results){
                    return Promise.resolve(responseJSON.results);
                }
            })
    }

    static getDetail(path, id){
        return Promise.all([
            fetch(`${baseUrl}${path}${id}${apiKey}`)
                .then(response => { return response.json(); })
                .then(responseJSON => {
                    if(responseJSON){
                        return Promise.resolve(responseJSON);
                    }
                }),
            fetch(`${baseUrl}${path}${id}/credits${apiKey}`)
                .then(response => { return response.json(); })
                .then(responseJSON => {
                    if(responseJSON.cast){
                        return Promise.resolve(responseJSON.cast);
                    }
                }),
            fetch(`${baseUrl}${path}${id}/recommendations${apiKey}`)
            .then(response => { return response.json(); })
            .then(responseJSON => {
                if(responseJSON.results){
                    return Promise.resolve(responseJSON.results);
                }
            }),
            fetch(`${baseUrl}${path}${id}/reviews${apiKey}`)
            .then(response => { return response.json(); })
            .then(responseJSON => {
                if(responseJSON.results){
                    return Promise.resolve(responseJSON.results);
                }
            }),
            fetch(`${baseUrl}${path}${id}/videos${apiKey}`)
            .then(response => { return response.json(); })
            .then(responseJSON => {
                if(responseJSON.results){
                    return Promise.resolve(responseJSON.results);
                }
            })
        ])
    }

    static search(keyword){
        return fetch(`${baseUrl}${path.searchMovie}${apiKey}&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                if(responseJSON.results) {
                    return Promise.resolve(responseJSON.results);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan.`)
                }
            })
    }
}

export {path, DataSource}