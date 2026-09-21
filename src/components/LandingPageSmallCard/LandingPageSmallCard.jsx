import './LandingPageSmallCard.css'
import { motion } from 'motion/react'


export const LandingPageSmallCard = ({image, title,description,votesQuantity})=>{
    return(
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut"}} className="section-three-card">
            <img src={image} alt="" />
            <div className="section-three-card-content">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="card-information">
                    <span>{votesQuantity} votes</span>
                    <i class="ri-arrow-right-long-line"></i>
                </div>
                <div className="section-three-card-emoji">
                    <i class="ri-truck-line"></i>
                </div>
            </div>
        </motion.div>
    )
}