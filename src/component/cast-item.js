class CastItem extends HTMLElement{

    set cast(cast){
        this._cast = cast;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
            .card-cast {
                background-color : #202424 !important;
                border-color: #181C1C !important;
                color: #FFFFFF;
                width: 100px !important;
                border-radius: 5px !important;
                margin-bottom: 20px;
            }

            .card-cast .card-cast-body {
                background-color : #202424 !important;
                border-radius: 5px !important;
                width: 100px;
                height: 95px;
            }

            .card-cast .card-body h6 {
                font-size: 14px;
                font-weight: 500;
                width:100%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .card-cast .card-body p {
                font-size: 11px;
                width:100%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            @media screen and (max-width: 991px){

            }
        </style>
        <div class="card card-cast">
            <img src="https://image.tmdb.org/t/p/w154${this._cast.profile_path}" class="card-img-top" alt="${this._cast.name}">
            <div class="card-body card-cast-body">
                <h6>${this._cast.name}</h6>
                <p>${this._cast.character}</p>
            </div>
        </div>
        `

    }
}

customElements.define('cast-item', CastItem)