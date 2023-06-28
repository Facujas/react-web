import { Navigator } from '@/components/navigator';
import styles from '@/styles/Landing.module.css'; 
import { SERVER_NAME, BASE_URL, DEVELOPERS } from '@/config'; 
import Head from 'next/head'; 
import { useState, useEffect } from 'react'; 
import getDiscordInformation from '@/services/discord';
import Footer from '@/components/footer/footer';
import { useRouter } from 'next/router'; 

export default function Landing() {
    const router = useRouter(); 

    return <> 
        <main>
            <Navigator />

            <div className={ styles.container }>  

                <div className={ styles.section } style={{
                    marginTop: '90px'
                }}>
                    <div className={ styles.right }>
                        <div className={ styles.title }>Edsger Dijkstra</div>
                        
                        <div className={ styles.description }>
                            Click aqui para acceder a la biografia de esta persona. <br></br> 

                            Podras encontrar todo tipo de informacion relacionada hacia el. <br></br> <br></br>
                            Edsger W. Dijkstra nació en Róterdam. Su padre, que fue presidente de la Sociedad Neerlandesa de Química, había aprendido química durante la secundaria y más tarde de su superintendente. Su madre era matemática, pero nunca tuvo un trabajo formal.
                        </div>

                        <button className={ styles.webstore } onClick={() => router.push('/informacion')}>Ir Ahora</button>
                    </div>

                    <img draggable={ false }  className={ styles.criminal } src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Edsger_Wybe_Dijkstra.jpg/800px-Edsger_Wybe_Dijkstra.jpg" alt="criminal" />
                </div>

                <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>

                <div className={ styles.section }>
                <img draggable={ false }  className={ styles.criminal } src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Turing-statue-Bletchley_11.jpg/800px-Turing-statue-Bletchley_11.jpg" alt="criminal" />
                
                    <div className={ styles.right }>
                        <div className={ styles.title }>Premio "Turing"</div>
                        <div className={ styles.description }>
                        El Premio Turing es un premio de las Ciencias de la Computación que es otorgado anualmente por la Asociación para la Maquinaria Computacional (ACM) a quienes hayan contribuido de manera trascendental al campo de las ciencias computacionales.

                        El galardón rinde homenaje a Alan Turing y desde 2014 es patrocinado por Google, que recompensa con un premio de 1 000 000 de dólares estadounidenses al ganador.
                        </div>
                    </div>
                </div>


                <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>

                <div className={ styles.section }>
                
                    <div className={ styles.right }>
                    <div className={ styles.title }>Developer</div>
                        <div className={ styles.description }>
                            Hola! Soy el desarrollador de esta web. Si me queres seguir en mis redes sociales, las podras encontrar debajo de toda la pagina! <br></br>
                            Espero te haya gustado!
                            Aqui podras ver mi Discord para contactarme
                           :)
                        </div>
                    </div>
                </div>


                <div className={ styles.developers }> 
                    {
                        DEVELOPERS && DEVELOPERS[0] ? DEVELOPERS.map((developer:string) => {
                            return <RenderDeveloperInfo key={ developer } discord={ developer } />
                        }) : null 
                    }

                </div>


            </div>

            <Footer />
        </main>
    </>
}

const RenderDeveloperInfo = ({ discord }: { discord:string }) => {
    const [information, handleInformation] = useState<any>(null);

    useEffect(() => {
        getDiscordInformation(discord).then(response => handleInformation(response));
    }, [])

    if(!information) return null; 

    return <div className={ styles.developer }> 
        <img src={ information && information.avatar.link ? information.avatar.link : 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg' } />
        <div>{ information && information.tag ? information.tag : 'Desconocido' }</div>
    </div>
}