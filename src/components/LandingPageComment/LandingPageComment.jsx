import './LandingPageComment.css'
import { motion } from 'framer-motion'
export const LandingPageComment = ({image,commentary,name,charge})=>{
    return(
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut"}} className="section-four-card">
            <img src={image} alt="" />
            <p>{commentary}</p>
            <div className="section-four-card-details">
                <h5>{name}</h5>
                <span>{charge}</span>

            </div>
        </motion.div>
    )
}