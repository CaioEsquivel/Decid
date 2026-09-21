import './LandingPageSectionThree.css'
import { LandingPageSmallCard } from '../LandingPageSmallCard/LandingPageSmallCard'
import { LandingPageButton } from '../LandingPageButton/LandingPageButton'
import aviao from '../../assets/aviao.jpg'
import { motion } from 'motion/react'


export const LandingPageSectionThree = ()=>{
    return(
        <section className="landing-page-section-three">
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }} className="section-three-content">
                <span >EM DESTAQUE</span>
                <h3 >Pautas que<br/> fazem a diferença.</h3>
                <p >Participe das votações sobre temas que impactam diretamente a sua vida e a sua comunidade.</p>
                    <LandingPageButton content='Ver todas as votações' keyword='amarelo-play-section'/>

            </motion.div>

            <div className="section-three-card-container">
                
                <LandingPageSmallCard image={aviao} title='Transporte público' description='Qual a melhor solução para melhorar o transporte na usa cidade' votesQuantity={2.4}/>
                <LandingPageSmallCard image={aviao} title='Transporte público' description='Qual a melhor solução para melhorar o transporte na usa cidade' votesQuantity={2.4}/>
                <LandingPageSmallCard image={aviao} title='Transporte público' description='Qual a melhor solução para melhorar o transporte na usa cidade' votesQuantity={2.4}/>
                <LandingPageSmallCard image={aviao} title='Transporte público' description='Qual a melhor solução para melhorar o transporte na usa cidade' votesQuantity={2.4}/>
            </div>
        </section>
    )
}