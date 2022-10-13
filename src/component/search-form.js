import $ from 'jquery';
import {DataSource} from '../data/data-source.js';

class SearchForm extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get searchValue(){
        return this.querySelector('#searchMovieByTitle').value; 
    }

    switchPage(){
        $('.home-section').hide();
        $('.movie-tv-section').show();
        $('.detail-section').hide();
    }

    render(){
        this.innerHTML = `
        <style>
        .search-form{
            margin-bottom: auto;
            margin-top: auto;
        }
        
        .search-container{
            display: flex;
            width: 100%;
        }
        
        #searchMovieByTitle{
            background-color: #181C1C;
            color: #CFCFCF;
        }
        </style>
        <form id="searchForm" class="search-form">
            <div class="search-container">
                <input class="form-control" id="searchMovieByTitle" type="text" placeholder="Search...">
                <button class="btn" type="button" id="searchButton">
                    <img src="assets/search-logo.svg">
                </button>
            </div>
        </form>
        `;

        const resultPage = document.querySelector('.movie-tv-section movie-list')
        const tabTitle = document.querySelector('.tab-title');

        const getSearchResults = () => {
            tabTitle.innerText = `Results for: ${this.searchValue}`
            DataSource.search(this.searchValue)
                .then(renderResult)
        }

        const renderResult = (results) => {
            this.switchPage()
            resultPage.movies = results
        }

        const buttonSubmit = this.querySelector('#searchButton')
        buttonSubmit.addEventListener("click", function(){
            getSearchResults();
        });
    }
}

customElements.define('search-form', SearchForm);