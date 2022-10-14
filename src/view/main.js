import { path, DataSource } from "../data/data-source";

const main = () => {
    const searchElement = document.querySelector('search-form');
    const navigation = document.querySelector('app-bar');

    const movieListElement = document.querySelector('.movie-tv-section movie-list');
    const nowPlayingListElement = document.querySelector('.now-playing-list');
    const popularListElement = document.querySelector('.popular-list');
    const upcomingListElement = document.querySelector('.upcoming-list');
    const trendingListElement = document.querySelector('.trending-list');

    const tabTitle = document.querySelector('.tab-title');
    const tabTitleContainer = document.getElementById('tabTitle');

    const getList = (path) => {
        DataSource.getList(path)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const getTopList = () => {
        let responses = [];
        const pathTopList = [path.nowPlaying, path.popular, path.upcoming];
        const elementTopList = [nowPlayingListElement, popularListElement, upcomingListElement];

        for(let i = 0; i < pathTopList.length; i++){
            DataSource.getList(pathTopList[i])
            .then(results => {
                responses = results.slice(0,6);
                return elementTopList[i].movies = responses;
            })
            .catch(fallbackResult);
        }
    }

    const getTrendingList = () => {
        let responses = [];
        DataSource.getList(path.trending)
            .then(results => {
                responses = results.slice(0,10);
                return trendingListElement.trendingMovies = responses;
            })
            .catch(fallbackResult);
    }

    const clearTabSelected = () => {
        navigation.querySelectorAll(".nav.nav-link").forEach((item) => {
            item.classList.remove("active");
        });
    }

    const renderResult = (results) => {
        movieListElement.movies = results;
    }

    const fallbackResult = (message) => {
        console.log(message);
    }

    const switchPage = (page) => {
        switch (page) {
            case 'home':
                $('.home-section').show();
                $('.movie-tv-section').hide();
                $('.detail-section').hide();
                break;
            case 'tab':
                $('.home-section').hide();
                $('.movie-tv-section').show();
                $('.detail-section').hide();
                break;
            case 'detail':
                $('.home-section').hide();
                $('.movie-tv-section').hide();
                $('.detail-section').show();
                break;
        }
    }

    const tabSelected = () => {
        searchElement.querySelector('#searchMovieByTitle').searchValue = "";
        const tab = navigation.navigationValue;
        switch(tab) {
            case 'home':
                switchPage('home');
                getTopList();
                getTrendingList();
                break;
            case 'movies':
                switchPage('tab');
                tabTitleContainer.style.display = 'flex';
                tabTitle.innerText = 'Movies';
                getList(path.movies);
                break;
            case 'tvShows':
                switchPage('tab');
                tabTitleContainer.style.display = 'flex';
                tabTitle.innerText = 'TV Shows';
                getList(path.tvShows);
                break;
        }
    }

    const buttonSeeAll = document.querySelectorAll(".btn-see-all");
    buttonSeeAll.forEach(button => {
        button.addEventListener('click', function(){
            tabTitleContainer.style.display = 'flex';
            switch (button.id){
                case 'btn-now-playing':
                    switchPage('tab');
                    tabTitle.innerText = 'Now Playing';
                    getList(path.nowPlaying);
                    break;
                case 'btn-popular':
                    switchPage('tab');
                    tabTitle.innerText = 'Popular';
                    getList(path.popular);
                    break;
                case 'btn-upcoming':
                    switchPage('tab');
                    tabTitle.innerText = 'Upcoming';
                    getList(path.upcoming);
                    break;
            }
        })
    })

    navigation.clickEvent = tabSelected;
    getTopList();
    getTrendingList();
}

export default main;