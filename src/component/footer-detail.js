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
            }

            .detail-footer img {
                margin-bottom: 10px;
            }

            .detail-footer .left-part-footer {
                text-align: justify;
            }

            .detail-footer .left-part-footer h7{
                font-size: 13px;
            }            

            .detail-footer p {
                font-size: 12px;
                text-align: justify;
                margin-top: 40px;
            }

            .detail-footer .right-part-footer {
                padding-left: 30px;
            }

            .detail-footer .right-part-footer img{
                width: 30px;
            }

            .detail-footer .right-part-footer a{
                text-decoration: none;
            }

            .detail-footer .right-part-footer a{
                margin-right: 15px;
            }

            @media screen and (max-width: 991px){
                .border-line {
                    width: 200%;
                }
            }

            </style>
            <img class="border-line" width="100%" src="../assets/line-footer.svg">
            <img style="width:fit-content; margin-left: 30px" src="../assets/entomo-logo.svg"><br>
            <div class="detail-footer row">
                <div class="left-part-footer col col-md-9">
                    <h7>EnTOMO merupakan situs yang menyediakan informasi film dan series TV luar negeri. Seluruh data bersumber dari API The Movie Database. EnTOMO dibuat untuk memenuhi submission Dicoding: Belajar Fundamental Front-End Web Development.</h7>
                </div>
                <div class="right-part-footer col col-md-3">
                    <h5 style="margin-bottom: 20px">Contact</h5>
                    <div style="display: flex">
                        <a href="mailto:rifamarwa4869@gmail.com?subject=&body="><img src="../assets/gmail.png"><br></a>
                        <a href="https://github.com/rifamarwa"><img src="../assets/github.png"></a><br>
                        <a href="https://linkedin.com/in/rifa-marwa"><img src="../assets/linkedin.png"></a>
                    </div>
                </div>
                <p>Made with &#128150; by Rifa Marwa Rahadatul Aisy Putri &#9400; 2022</p>
                    
            </div>
            
        `
    }
}

customElements.define('footer-detail', FooterDetail)