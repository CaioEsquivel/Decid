import './LandingPage.css'
import { LandingPageHeader } from '../../components/LandingPageHeader/LandingPageHeader'
import { Footer } from '../../components/Footer/Footer'
import { LandingPageHero } from '../../components/LandingPageHero/LandingPageHero'
import { LandingPageSectionTwo } from '../../components/LandingPageSectionTwo/LandingPageSectionTwo'
import { LandingPageSectionThree } from '../../components/LandingPageSectionThree/LandingPageSectionThree'
import { LandingPageSectionFour } from '../../components/LandingPageSectionFour/LandingPageSectionFour'

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export const LandingPage = ()=>{

    const [menu, setMenu] = useState(false)
    const [disabled, setDisabled] = useState(false)

    console.log(disabled);
    

    useEffect(()=>{
        if(menu){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'scroll'

        }

    },[menu])


    return(
        <motion.main initial={{opacity:0 }}  animate={{opacity:1}} transition={{
                            ease: "easeOut",
                            duration:0.6
                        }}
    exit={{ opacity: 0, filter: 'blur(6px)' }}
    className='landing-page-main'>

            <LandingPageHeader setMenu={setMenu} menu={menu} disabled={disabled} setDisabled={setDisabled}/>

            <LandingPageHero/>

            <LandingPageSectionTwo/>

            <LandingPageSectionThree/>
            
            <LandingPageSectionFour/>
            

            <Footer />

            <div className={`landing-menu-popup-blur ${menu?'landing-menu-popup-blur-active':''}`} onClick={()=>{
                if(!disabled){
                    setMenu(false)
                }
            }}>

            </div>

        </motion.main>
    )
}