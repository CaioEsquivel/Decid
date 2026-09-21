import './LandingPageHero.css'
import { LandingPageButton } from '../LandingPageButton/LandingPageButton'
import phone from '../../assets/phone.png'
import personGroup from '../../assets/person_group.png'
import { AnimatedTitle } from '../AnimatedTitle/AnimatedTitle'
import { AnimatedParagraph } from '../AnimatedParagraph/AnimatedParagraph'
import {  motion } from "framer-motion"




export const LandingPageHero = ()=>{

    

    return(
         <section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }} className='landing-page-section-one'>
        
            <div className="section-one-content">

                <motion.span >SIMPLES, RÁPIDO E PODEROSO.</motion.span>
                <AnimatedTitle
                    className='hero-title-animated'
                    segments={[
                        { text: 'Make', highlight: true },
                        { text: 'Every', highlight: true },
                        { text: 'Voice', highlight: true },
                        { text: 'Count.', highlight: true, className: 'hero-highlight' }
                    ]}
                />
                <AnimatedParagraph 
                lines={[
                    'Crie votações em segundos, compartilhe com sua comunidade e veja ',
                    'os resultados em tempo real.',
                    'Tudo em um só lugar, de forma simples e intuitiva.'

                ]} className="hero-subtitle"/>

                <div className="section-one-content-button">
                    <LandingPageButton content='Criar uma votação' keyword='transparente-section'/>
                    <LandingPageButton content='Ver como funciona' keyword='amarelo-play-section'/>
                    
                </div>

                <motion.div initial={{opacity:0 , y: 10}}  animate={{opacity:1,y: 0}} transition={{
                    ease: "easeOut",
                    delay:0.8,
                    duration:0.6
                }} className="section-one-content-details">
                    <div className="details-cotent-one">
                        <img src={personGroup} alt="" />
                        <span>
                            <h5>+ 12.8k pessoas</h5>
                            <p>já criaram suas votações</p>
                        </span>
                    </div>
                    <div className="details-content-two">
                        <div className="detail-dot"></div>
                        <span>
                            <h5>Votação ao vivo</h5>
                            <p>Reunião da Juventude - 324 votos</p>
                        </span>
                    </div>
                </motion.div>
                
            </div>

            <motion.div initial={{opacity:0 , y: 20}} style={{top:'55%', right:80, translate:'0 -50%' }}  animate={{opacity:1,y: 0}} transition={{
                    ease: "easeOut",
                    delay:0.4,
                    duration:0.6
                }} className="section-one-phone">
                <img src={phone} alt="" />
            </motion.div>
            

        </section>
    )
}