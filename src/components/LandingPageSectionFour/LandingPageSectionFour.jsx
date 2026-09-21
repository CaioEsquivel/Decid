import './LandingPageSectionFour.css'
import { LandingPageComment } from '../LandingPageComment/LandingPageComment'
import mulher_1 from '../../assets/mulher_1.webp'
import { motion } from 'motion/react'




export const LandingPageSectionFour = ()=>{
    return(
        <section  className="landing-page-section-four">
            <div className="section-four-content">
                <motion.span initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut",delay:0.2}} >QUEM JA PARTICIPOU</motion.span>
                <motion.h3 initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut", delay:0.2}} >A voz de quem já fez parte</motion.h3>
            </div>

            <motion.div  className="section-four-card-container">

                
                <LandingPageComment image={mulher_1} commentary="“É muito fácil usar e sinto que realmente minha opinião é levada a sério.”" name="Lucas Martins" charge="Estudante"/>
                <LandingPageComment image={mulher_1} commentary="“É muito fácil usar e sinto que realmente minha opinião é levada a sério.”" name="Lucas Martins" charge="Estudante"/>
                <LandingPageComment image={mulher_1} commentary="“É muito fácil usar e sinto que realmente minha opinião é levada a sério.”" name="Lucas Martins" charge="Estudante"/>
            
            </motion.div>
            
        </section>
    )
}