import '../assets/gmail.png'
import '../assets/github.png'
import '../assets/linkedin.png'

class FooterDetail extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <style>
            .detail-footer {
                padding: 0px 35px 30px;
                display: flex;
            }

            .detail-footer img {
                margin-bottom: 10px;
            }

            .detail-footer .left-part-footer h7{
                font-size: 13px;
                text-align: justify;
            }            

            .detail-footer .left-part-footer p {
                font-size: 12px;
                text-align: justify;
                margin-top: 40px;
            }

            .detail-footer .right-part-footer {
                margin-top: 40px;
            }

            .detail-footer .right-part-footer img{
                width: 30px;
                margin-right: 15px;
            }

            .detail-footer .right-part-footer a{
                text-decoration: none;
            }

            .detail-footer .right-part-footer span{
                font-size: 14px;
            }
            
            </style>
            <img width="100%" src="../assets/line-footer.svg">
            <div class="detail-footer row col">
                <div class="left-part-footer col-9">
                    <img src="../assets/entomo-logo.svg"><br>
                    <h7>EnTOMO merupakan situs yang menyediakan informasi film dan series TV luar negeri. Seluruh data bersumber dari API The Movie Database. EnTOMO dibuat untuk memenuhi submission Dicoding: Belajar Fundamental Front-End Web Development.</h7>
                    <p>Made with &#128150; by Rifa Marwa Rahadatul Aisy Putri &#9400; 2022</p>
                    </div>
                <div class="right-part-footer col-3">
                    <h5 style="margin-bottom: 20px">Contact</h5>
                    <img src="../assets/gmail.png"><span>rifamarwa4869@gmail.com</span><br>
                    <a href="https://github.com/rifamarwa"><img src="../assets/github.png"><span>github.com/rifamarwa</span></a><br>
                    <a href="https://linkedin.com/in/rifa-marwa"><img src="../assets/linkedin.png"><span>linkedin.com/in/rifa-marwa</span></a>
                </div>
            </div>
        `
    }
}

customElements.define('footer-detail', FooterDetail)