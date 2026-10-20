import google_logo from '../../assets/google_logo.svg'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form"




export const AuthRegisterContent = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    console.log(errors);
    
    const onSubmit=(data)=>{
        console.log(data);
        
    }

    return (
        <motion.form
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(5px)' }}
            transition={{
                opacity: { duration: 0.2 },
                layout: {
                    duration: 0.35,
                    ease: "easeInOut"
                }
            }}
            onSubmit={handleSubmit(onSubmit)}
            className='auth-card-outlet-container'
        >
            <motion.div 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }} 
                className={`auth-input ${errors?.email ? 'input-error' : ''}`}
            >
                <i className="ri-user-line"></i>
                <input autocomplete="off" data-lpignore="true" type="text" placeholder='Nome de usuário' {...register('name', {
        required: 'O nome é obrigatório',
        minLength: {
          value: 2,
          message: 'O nome deve ter pelo menos 2 caracteres'
        }
      }) }/>
            </motion.div>
            {errors?.name?.type === 'required' && <p className='error-text'>O nome é obrigatório.</p>}
            {errors?.name?.type === 'minLength' && <p className='error-text'>O nome deve ter pelo menos 2 caracteres.</p>}


            <motion.div 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} 
                className={`auth-input ${errors?.email ? 'input-error' : ''}`}
            >
                <i className="ri-mail-line"></i>
                <input autocomplete="off" data-lpignore="true" type='email' placeholder='E-mail' {...register('email', {required:true, pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Digite um e-mail válido'
                }})}  />
            </motion.div>
            {errors?.email?.type === 'required' && <p className='error-text'>O email é necessário.</p>}
            {errors?.email?.type === 'pattern' && <p className='error-text'>Digite um email válido.</p>}
            

            <motion.div 

                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} 
                className={`auth-input ${errors?.email ? 'input-error' : ''}`}
            >
                <i className="ri-lock-line"></i>
                <input autocomplete="off" data-lpignore="true" type="text" placeholder='Senha' {...register('password', {
                    required: 'A senha é obrigatória',
                    minLength: {
                    value: 8,
                    message: 'A senha deve ter pelo menos 8 caracteres'
                    }
                })} />
            </motion.div>
            {errors?.password?.type === 'required' && <p className='error-text'>A senha é necessária.</p>}
            {errors?.password?.type === 'minLength' && <p className='error-text'>A senha deve ter pelo menos 8 caracteres.</p>}


            <motion.div 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} 
                className="auth-input-detail"
            >
                <label>
                    <input type="checkbox"  {...register('terms', {required:true})} />
                    <span className={errors?.terms?.type === 'required' ? 'checkbox-error' : ''} >Aceitar os Termos e Condições</span>
                </label>
            </motion.div>

            <motion.button 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }} 
                className='auth-btn-login'
                type='submit'
            >
                Registrar <i className="ri-arrow-right-long-line"></i>
            </motion.button>

            <motion.div 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }} 
                className="line-split"
            >
                <div className="line"></div>
                <span>OU</span>
                <div className="line"></div>
            </motion.div>

            <motion.button 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }} 
                className='auth-btn-google'
            >
                <img src={google_logo} alt="" /> Entrar com o Google
            </motion.button>

            <motion.span 
                initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            >
                Já tem uma conta? <Link to="/auth">Entrar</Link>
            </motion.span>
        </motion.form>
    )
}