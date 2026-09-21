import './AuthPage.css'
import logo_vermelho from '../../assets/logo_vermelho.svg'
import { NavLink, useLocation, useOutlet } from 'react-router'
import { AnimatePresence, motion,LayoutGroup  } from 'framer-motion'

export const AuthPage = () => {
    const location = useLocation()
    const outlet = useOutlet()

    return (
        <motion.main initial={{ opacity: 0,filter: 'blur(8px)' }}
    animate={{ opacity: 1,filter: 'blur(0px)' }} 
    exit={{ opacity: 0, filter: 'blur(8px)' }}
    className='auth-page-container'>
        
            <div className="auth-container">
                <LayoutGroup>
                    <motion.div layout transition={{
                        type: "spring",
                        stiffness: 800,
                        damping: 30,
                        mass: 1.5
                    }} className="auth-card">
                        <div className="auth-card-logo">
                            <img src={logo_vermelho} alt="" />
                            <span>Decid</span>
                        </div>

                        <div className="auth-card-content">
                            <div className="auth-button-toggle">
                                <NavLink className='auth-button-toggle-login' to='/auth' end>Entrar</NavLink>
                                <NavLink className='auth-button-toggle-register' to='register'>Registrar</NavLink>
                            </div>

                            <AnimatePresence mode="wait">
                                {outlet && (
                                    <div key={location.pathname} style={{ display: 'contents' }}>
                                        {outlet}
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </LayoutGroup>
            </div>
        </motion.main>
    )
}