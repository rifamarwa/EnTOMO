import './search-form.js'
import "../assets/menu-icon.svg"

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
            display: flex;
        }

        nav {
           display: flex;
           width: 70%;
        }

        nav .logo {
            width: 40%;
        }

        ul {
            position: relative;
            margin: 0;
            padding: 0;
            width: 70%;
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

        .icon {
            display: none;
        }

        @media screen and (max-width: 870px){
            nav {
                display: block;
            }

            nav ul {
                margin-left: 10px;
            }

            search-form {
                width: 100%;
            }
        }

        @media screen and (max-width: 750px){
            .app-bar-container {
                display: block;
            }
        }

        @media screen and (max-width: 600px){
            .app-bar-container {
                display: block;
            }
            
            nav ul {
                display: flex;
                width: 120%;
            }

            search-form {
                width: 100%;
            }
        }
        
        </style>
        <div class="app-bar-container">
            <nav class="navigation">
                <div class="nav logo">
                    <a><img class="nav-link" id="home" src="./assets/entomo-logo.svg"></a>
                </div>
                <ul class="nav">
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