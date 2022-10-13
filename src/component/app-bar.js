import './search-form.js'

class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get navigationValue(){
        return this.querySelector('.nav-link.active').id;
    }

    render(){
        this.innerHTML = `
        <style>
        .app-bar-container {
            position: relative;
            overflow: hidden;
            padding: 25px;
        }

        ul {
            position: relative;
            margin: 0;
            padding: 0;
            display: flex;
            color: white !important;
        }
        
        li {
            position: relative;
            margin-bottom: auto;
            margin-top: auto;
            flex-basis: 120px;
            list-style: none;
            width: 100%;
            color: white !important;
            font-weight: 300;
        }
        
        li a:hover {
            color: #F582A7 !important;
        }
        
        li .active {
            color:#F582A7 !important;
        }

        a {
            color: white !important;
        }

        .nav-link {
            cursor: pointer;
        }

        search-form {
            padding: 25px;
        }
        
        </style>
        <div class="app-bar-container row">
            <nav class="row col-8">
                <div class="nav logo col-4">
                    <a><img class="nav-link" id="home" src="./assets/entomo-logo.svg"></a>
                </div>
                <ul class="nav col-8">
                    <li><a class="nav-link" id="movies">Movies</a></li>
                    <li><a class="nav-link" id="tvShows">TV Shows</a></li>
                </ul>
            </nav>
        </div>
        
        `;

        const searchForm = document.createElement('search-form');
        searchForm.className = 'col-4';
        const container = document.querySelector('.app-bar-container');
        container.appendChild(searchForm);

        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach((navItem) => {
            navItem.addEventListener('click', (event) => {

                const selectedTab = document.querySelectorAll('.active');

                if(selectedTab.length > 0 && searchForm.click){
                    selectedTab[0].classList.remove('active');
                }

                event.target.classList.add('active');
                this.addEventListener('click', this._clickEvent);
            })
        })

    }

}

customElements.define('app-bar', AppBar);