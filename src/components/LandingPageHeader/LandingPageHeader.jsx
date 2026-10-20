import './LandingPageHeader.css'
import { LandingPageButton } from '../../components/LandingPageButton/LandingPageButton'
import logo from '../../assets/logo.svg'
import { motion, AnimatePresence, useScroll, useVelocity, useSpring, useTransform } from "framer-motion"

export const LandingPageHeader = ({ setMenu, menu, disabled, setDisabled }) => {

    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)

    const rawY = useTransform(scrollVelocity, [-2000, 0, 2000], [20, 0, -10], {
        clamp: true
    })

    const y = useSpring(rawY, {
        stiffness: 300,
        damping: 20,
        mass: 1
    })

    const itemExitDuration = 0.2

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{
                y: 0,
                height: menu ? 'calc(-40px + 100svh)' : '70px'
            }}
            style={{ x: '-50%', y }}
            transition={{
                y: {
                    type: "spring",
                    stiffness: 75,
                    damping: 10,
                    mass: 1,
                    delay: 1
                },
                height: {
                    type: "spring",
                    stiffness: 300,
                    damping: 50,
                    mass: 1,
                    delay: menu ? 0 : itemExitDuration
                }
            }}
        >
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
                    <LandingPageButton keyword='transparente' content='Entrar' />
                    <LandingPageButton keyword='amarelo' content='Criar votação' />
                </div>
                <button className={`menu-handler ${menu ? 'menu-handler-active' : ''}`} disabled={disabled} onClick={() => {
                    setMenu(!menu)
                    setDisabled(true)
                    setTimeout(() => {
                        setDisabled(false)
                    }, 1000);
                }}><i className="ri-add-large-line"></i></button>
            </div>

            <AnimatePresence>
                {menu && (
                    <motion.div
                        className="header-popup-content header-popup-content-active"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ 
                                opacity: 0, 
                                transition: { duration: itemExitDuration, delay: 0 }
                            }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <button className='landing-nav-active'>INÍCIO</button>
                            <button>COMO FUNCIONA</button>
                            <button>EXPLORAR</button>
                        </motion.nav>

                        <motion.div
                            className="header-popup-btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ 
                                opacity: 0, 
                                y: 20,
                                transition: { duration: itemExitDuration, delay: 0 }
                            }}
                            transition={{ duration: 0.4, delay: 0.65 }}
                        >
                            <LandingPageButton keyword='transparente' content='Entrar' />
                            <LandingPageButton keyword='amarelo' content='Criar votação' />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}