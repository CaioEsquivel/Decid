import './LandingPageHeader.css'
import { LandingPageButton } from '../../components/LandingPageButton/LandingPageButton'
import logo from '../../assets/logo.svg'
import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion"
import { useState } from 'react'




export const LandingPageHeader = ({setMenu ,menu, disabled, setDisabled })=>{

    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)

    // transforma a velocidade do scroll num deslocamento (invertido: desce = header sobe um pouco)
    const rawY = useTransform(scrollVelocity, [-2000, 0, 2000], [20, 0, -10], {
        clamp: true
    })

    // mola que suaviza e "puxa" o header de volta pro y:0 quando o scroll para
    const y = useSpring(rawY, {
        stiffness: 300,
        damping: 20,
        mass: 1
    })

    return(
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            style={{ x: '-50%', y }}
            transition={{
            type: "spring",
            stiffness: 75,
            damping: 10,
            mass: 1,
            delay:1
        }}
            className={`${menu?'header-actived':''}`}>

            <div className="header-content">
                    <div className="header-logo">
                    <img src={logo} alt="" />
                    <span>Decid</span>
                </div>
                <nav>
                    <button className='landing-nav-active'>INÍCIO</button>
                    <button>COMO FUNCIONA</button>
                    <button>EXPLORAR</button>
                </nav>
                <div className="header-button">
                    <LandingPageButton keyword='transparente' content='Entrar'/>
                    <LandingPageButton keyword='amarelo' content='Criar votação'/>
                </div>
                <button className={`menu-handler ${menu?'menu-handler-active':''}`} disabled={disabled} onClick={()=>{
                    setMenu(!menu)
                    setDisabled(true)
                    setTimeout(() => {
                        
                        setDisabled(false)
                    }, 1000);
                }}><i class="ri-add-large-line"></i></button>
            </div>
            
            <div className={`header-popup-content ${menu?'header-popup-content-active':''}`}>
                <nav>
                    <button  className='landing-nav-active'>INÍCIO</button>
                    <button>COMO FUNCIONA</button>
                    <button>EXPLORAR</button>
                </nav>
                <div className="header-popup-btn">
                    <LandingPageButton keyword='transparente' content='Entrar'/>
                    <LandingPageButton keyword='amarelo' content='Criar votação'/>
                </div>

            </div>


            
        </motion.header>
    )
}