import './LandingPageSectionTwo.css'
import thunder from '../../assets/thunder.svg'
import jogos from '../../assets/jogos_bg.avif'
import aviao from '../../assets/aviao.jpg'
import fire from '../../assets/fire_icon.svg'
import { motion } from "framer-motion"





export const LandingPageSectionTwo = ()=>{
    return(
        <section className='landing-page-section-two'>
                
                <motion.h2 
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }} >Como Funciona</motion.h2>

                <div className="section-two-card-container">
                    <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }} className="section-two-card">
                        <img src={thunder} alt="" />
                        <h4>Crie sua votação</h4>
                        <p>Defina o nome, as opções e o estilo da sua votação em poucos cliques. </p>
                        <span>01</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut", delay:0.2  }} className="section-two-card">
                        <img src={thunder} alt="" />
                        <h4>Crie sua votação</h4>
                        <p>Defina o nome, as opções e o estilo da sua votação em poucos cliques. </p>
                        <span>01</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut", delay:0.4  }} className="section-two-card">
                        <img src={thunder} alt="" />
                        <h4>Crie sua votação</h4>
                        <p>Defina o nome, as opções e o estilo da sua votação em poucos cliques. </p>
                        <span>01</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut", delay:0.6 }} className="section-two-card">
                        <img src={thunder} alt="" />
                        <h4>Crie sua votação</h4>
                        <p>Defina o nome, as opções e o estilo da sua votação em poucos cliques. </p>
                        <span>01</span>
                    </motion.div>
                </div>

                <motion.h2 initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}>Vote. Participe. <span>Acompanhe.</span></motion.h2>
                <motion.h3 initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}>Faça uma pergunta e acompanhe as respostas acontecendo <span>ao vivo.</span></motion.h3>

                <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }} className="section-two-enquete-container">
                    
                    <div className="section-two-enquete">
                        <img src={aviao} alt="" />
                        <div className="section-two-enquete-content">

                        <h4>Qual desses destinos você escolheria para viajar hoje?</h4>
                        <div className="enquete-vote-information">
                            <div className="enquete-vote-one">
                                <i class="ri-question-answer-line"></i>
                                <span>324 respostas</span>
                            </div>
                            <div className="enquete-vote-two">
                                <img src={fire} alt="" />
                                <span>1.2k upvote</span>
                            </div>
                        </div>

                        <div className="enquete-dados-container">
                            <div className="enquete-dados">
                                <span>1</span>
                                <div className="progress-bar-container">
                                    <span>🏝️ Fernando de Noronha</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '24%'}}></div>
                                    </div>
                                </div>
                                <span>24%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>2</span>
                                <div className="progress-bar-container">
                                    <span>🗼 Paris</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '31%'}}></div>
                                    </div>
                                </div>
                                <span>31%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>3</span>
                                <div className="progress-bar-container">
                                    <span>🏔️ Suíça</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '27%'}}></div>
                                    </div>
                                </div>
                                <span>27%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>4</span>
                                <div className="progress-bar-container">
                                    <span>🏖️ Maldivas</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '18%'}}></div>
                                    </div>
                                </div>
                                <span>18%</span>
                            </div>
                        </div>
                    
                    </div>



                    </div>
                    <div className="section-two-enquete">
                        <img src={jogos} alt="" />
                        <div className="section-two-enquete-content">

                        <h4>Qual estilo de jogo mais combina com você?</h4>
                        <div className="enquete-vote-information">
                            <div className="enquete-vote-one">
                                <i class="ri-question-answer-line"></i>
                                <span>842 respostas</span>
                            </div>
                            <div className="enquete-vote-two">
                                <img src={fire} alt="" />
                                <span>6.2k upvote</span>
                            </div>
                        </div>

                        <div className="enquete-dados-container">
                            <div className="enquete-dados">
                                <span>1</span>
                                <div className="progress-bar-container">
                                    <span>⚔️ Ação e aventura</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '32%'}}></div>
                                    </div>
                                </div>
                                <span>32%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>2</span>
                                <div className="progress-bar-container">
                                    <span>🧠 Estratégia</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '18%'}}></div>
                                    </div>
                                </div>
                                <span>18%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>3</span>
                                <div className="progress-bar-container">
                                    <span>🏎️ Corrida</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '15%'}}></div>
                                    </div>
                                </div>
                                <span>15%</span>
                            </div>
                            <div className="enquete-dados">
                                <span>4</span>
                                <div className="progress-bar-container">
                                    <span>👻 Terror</span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-result" style={{width: '35%'}}></div>
                                    </div>
                                </div>
                                <span>35%</span>
                            </div>
                        </div>
                    
                    </div>



                    </div>

                </motion.div>
                
                

            
            </section>
    )
}