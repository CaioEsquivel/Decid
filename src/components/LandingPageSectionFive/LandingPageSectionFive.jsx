import './LandingPageSectionFive.css'
import { LandingPageButton } from '../LandingPageButton/LandingPageButton'


export const LandingPageSectionFive = ()=>{
    return(
        <section className="landing-page-section-five">
            <div className="section-five-content-one">
                <i class="ri-megaphone-line"></i>
                <h3>Juntos por uma sociedade melhor</h3>
            </div>
            <div className="section-five-content-two">
                <p>Sua opinião transforma ideias em ações.
                Cadastre-se agora e faça parte dessa mudança</p>
                <LandingPageButton keyword='amarelo-arrow-section' content='Fazer o login'/>
            </div>
        </section>
    )
}