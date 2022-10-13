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
            </style>
            <div class="jb">
                <img src="./assets/jumbotron.png">
            </div>
        `
    }
}

customElements.define('jumbotron-container', JumbotronContainer)