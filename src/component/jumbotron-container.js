class JumbotronContainer extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <style>
            .jb{
                margin: 0px 100px 30px 0px;
            }

            @media screen and (max-width: 1200px){
                .jb img{
                    width: 120%;
                }
            }

            @media screen and (max-width: 870px){
                .jb img{
                    width: 100%;
                }
            }
            @media screen and (max-width: 500px){

                .jb img{
                    width: 350px;
                }
            }
            </style>
            <div class="jb">
                <img src="./assets/jumbotron.png">
            </div>
        `
    }
}

customElements.define('jumbotron-container', JumbotronContainer)