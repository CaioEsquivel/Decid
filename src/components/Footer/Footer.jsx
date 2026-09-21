import './Footer.css'
import logo from '../../assets/logo.svg'

export const Footer = ()=>{
    return(
        <footer>
                <div className="logo-footer">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                        <span>Decid</span>
                    </div>
                    <span>Democracia se constroi com participação.</span>
                </div>

                <nav>
                    <a href="#" className='landing-nav-active'>Início</a>
                    <a href="#">Planos</a>
                    <a href="#">EMpresa</a>
                    <a href="#">Termos</a>
                </nav>

                <div className="footer-social">
                    <button><i class="ri-instagram-line"></i></button>
                    <button><i class="ri-twitter-x-line"></i></button>
                    <button><i class="ri-youtube-line"></i></button>
                    <button><i class="ri-tiktok-fill"></i></button>
                </div>


            </footer>
    )
}