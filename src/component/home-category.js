class HomeCategory extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="now-playing-container">
            <div style="display: flex">
                <img src="./assets/line.svg">
                <h4 style="margin: auto 20px;">Now Playing</h4>
                <button type="button" id="btn-now-playing" class="btn btn-see-all">See All</button>
            </div><br>
            <movie-list class="now-playing-list row"></movie-list>
        </div><br><br>
        <div class="popular-container">
            <div style="display: flex">
                <img src="./assets/line.svg">
                <h4 style="margin: auto 20px;">Popular</h4>
                <button type="button" id="btn-popular" class="btn btn-see-all">See All</button>
            </div><br>
            <movie-list class="popular-list row"></movie-list>
        </div><br><br>
        <div class="movie-container">
            <div style="display: flex">
                <img src="./assets/line.svg">
                <h4 style="margin: auto 20px;">Upcoming</h4>
                <button type="button" id="btn-upcoming" class="btn btn-see-all">See All</button>
            </div><br>
            <movie-list class="upcoming-list row"></movie-list>
        </div>
        `
    }
}

customElements.define('home-category', HomeCategory)