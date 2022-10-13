import '../assets/user.png'
import '../assets/star.svg'

class ReviewItem extends HTMLElement {
    set review (review){
        this._review = review;
        this.render()
    }

    render(){
        const avatarSource = () => {
            let source = this._review.author_details.avatar_path
            if(source == null){
                return '../assets/user.png'
            } else if (source.includes('https://www.gravatar.com/avatar/')){
                let newSource = source.slice(1)
                return newSource
            }
            else {
                return `https://image.tmdb.org/t/p/w154${source}`
            }
        }

        this.innerHTML = `
            <style>
                .author-container {
                    margin: 0 40px 20px 0;

                }
                .author-container .avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                    font-size: 5px;
                    margin-right: 20px;
                }
                .author-info p {
                    font-size: 14px;
                    width:100%;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-align: justify;
                }

                .author-info .author-info-header p {
                    font-size: 13px;
                    margin-left: 20px;
                }

            </style>
            <div class="author-container" style="display:flex">
                <img class="avatar" src="${avatarSource()}" alt="${this._review.author}">
                <div class="author-info">
                    <div class="author-info-header" style="display:flex">
                        <h6>${this._review.author}</h6>
                        <p>&#11088;${this._review.author_details.rating}</p>
                    </div>
                    <p>"${this._review.content}"</p>
                </div>
            </div>
        `

        
    }
}

customElements.define('review-item', ReviewItem)