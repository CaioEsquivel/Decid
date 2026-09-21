import './LandingPageButton.css'
import {  motion } from "framer-motion"
import { Link } from 'react-router'

export const LandingPageButton = ({content,keyword})=>{

    const buttonVariants = {
    rest: {
        scale: 1,
        transition: { type: "spring", duration: 0.6, bounce: 0.6 } // saída rápida, sem bounce
    },
    hover: {
        scale: 1.1,
        transition: { type: "spring", duration: 0.6, bounce: 0.6 } // entrada com bounce
    }
}

    if(keyword == 'amarelo'){
        return(
            <motion.a href="#" variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest" className='landing-button-voting'>{content} <i class="ri-arrow-right-long-line"></i> </motion.a>
        )
    }
        if(keyword == 'amarelo-play-section'){
            return(
                <motion.a variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest" href="#" className='landing-one-btn-two'><i class="ri-play-large-line"></i>{content} </motion.a>
            )
        }
    if(keyword == 'amarelo-arrow-section'){
        return(
            <motion.a variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest" href="#" className='landing-one-btn-two'>{content} <i class="ri-arrow-right-long-line"></i></motion.a>
        )
    }
        if(keyword == 'transparente-section'){
            return(
                <motion.a 
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                href="#" className='landing-one-btn-one'>{content}</motion.a>
            )
        }
    if(keyword == 'transparente'){
        return(
            <motion.div variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest">
                <Link  to='/auth' className='landing-button-login'>{content}</Link>
            </motion.div>
        )
    }
}