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
                        <div className={ styles.title }>Biografia</div>
                        
                        <div className={ styles.description }>
                        Edsger W. Dijkstra nació en Róterdam. Su padre, que fue presidente de la Sociedad Neerlandesa de Química, había aprendido química durante la secundaria y más tarde de su superintendente. Su madre era matemática, pero nunca tuvo un trabajo formal.

                        Era conocido porque alertó sobre los peligros de la sentencia GOTO en la programación, que culminó en 1968 con la carta al editor que se publicó con el título Go To Statement Considered Harmful (La sentencia Goto considerada perjudicial), visto como un paso importante hacia el rechazo de la expresión GOTO y de su eficaz reemplazo por estructuras de control tales como el bucle while. El famoso título del artículo no era obra de Dijkstra, sino de Niklaus Wirth, entonces redactor de Comunicaciones del ACM. Dijkstra era un aficionado bien conocido de ALGOL, y trabajó en el equipo que desarrolló el primer compilador para este lenguaje. En ese mismo año creó el primer sistema operativo con estructura jerárquica, de niveles o capas. Fue denominado THE (Technische Hogeschool, Eindhoven) que se utilizó con fines didácticos.      
                        </div>

                        <button className={ styles.webstore } onClick={() => router.push('https://es.wikipedia.org/wiki/Edsger_Dijkstra')}>Saber mas</button>
                    </div>

                    <img draggable={ false }  className={ styles.criminal } src="https://www.ecured.cu/images/thumb/5/59/Edsger_Wybe_Dijkstra_2.jpg/300px-Edsger_Wybe_Dijkstra_2.jpg" alt="criminal" />
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
                        <div className={ styles.title }>Logros realizados</div>
                        <div className={ styles.description }>
                        Aunque parezca irónico, Dijkstra, uno de los mayores desarrolladores del software de su época, evitó el uso de computadores en su trabajo durante décadas. Cuando, finalmente, sucumbió a la tecnología, únicamente utilizó los ordenadores para enviar correos electrónicos y hacer búsquedas en la red. Dijkstra nunca utilizó un computador para realizar ninguno de sus trabajos, todos ellos fueron realizados a mano.

                        Desde una edad muy temprana destacó por su ingenio y elocuencia. Cuando era pequeño le aseguró a su madre que no resolvería ningún problema o cuestión que le ocupará más de cinco líneas de un folio.
                        </div>
                        <div className={ styles.description }>
                        </div>
                        <img draggable={ false }  className={ styles.criminal } src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Edsger_Dijkstra_1994.jpg/1920px-Edsger_Dijkstra_1994.jpg" alt="criminal" />
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
                    <div className={ styles.title }>Actualidad</div>
                        <div className={ styles.description }>
                        
                        </div>
                        <div className={ styles.description }>
                        Dijkstra llevaba un modesto estilo de vida, hasta el punto de considerasele espartano.7​ Su casa en Nuenen era sencilla, pequeña y sin pretensiones. No tenía ni televisión, ni vídeo, ni teléfono móvil, ni iba al cine.7​ Tocaba el piano y, mientras estaba en Austin, le gustaba ir a conciertos. Entusiasta oyente de música clásica, el compositor favorito de Dijkstra era Mozart.8​

                        Dijkstra murió el 6 de agosto de 2002. Según los responsables de la Universidad de Texas, la causa de la muerte fue el cáncer.
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
                        <div className={ styles.title }>Premios</div>
                        <div className={ styles.description }>
                        <li>
                        <a>Stichting Digidome. 3 de septiembre de 2003. Archivado desde el original el 6 de diciembre de 2004.</a>   <br></br>
                        <br></br>
                        </li>
                        <li>
                        <a>O'Connor, J J; Robertson, E F (July 2008). «Dijkstra biography». The MacTutor History of Mathematics, School of Mathematics and Statistics, University of St Andrews, Scotland. Archivado desde el original el 11 de octubre de 2013. Consultado el 18 de enero de 2014.</a> 
                        </li>
                        <br></br>
                        <li>
                        <a>Hoare, Tony (March 2003). "Obituary: Edsger Wybe Dijkstra". Physics Today. 56 (3): 96–98</a>   <br></br>
                        </li>
                        <br></br>
                        <li>
                        <a>Chacón Sartori, Camilo. Mentes geniales. La vida y obra de 12 grandes informáticos. [Barcelona]: Marcombo. </a> 
                        </li>     
                        <br></br>
                        <li>
                        <a>Faulkner, Larry R.; Durbin, John R. (19 de agosto de 2013). «In Memoriam: Edsger Wybe Dijkstra» (en inglés). University of Texas at Austin. Consultado el 20 de agosto de 2015.</a>   <br></br>
                        </li>
                        <br></br>   
                        <li>
                        <a>Silberschatz, Abraham; Peterson, James L. (1988). Conceptos de sistemas operativos. </a>   <br></br>
                        </li>
                        <br></br>  
                        <li>
                        <a>Dijkstra, Edsger. On the cruelty of really teaching computer science.</a>   <br></br>
                        </li>
                        <br></br>  
                        <li>
                        <a>UT News (en inglés estadounidense). 7 de agosto de 2002. Consultado el 4 de agosto de 2020.</a>   <br></br>
                        </li>
                        <br></br>
                        <li>
                        <a>Dale, Nell; Lewis, John (31 de diciembre de 2014). Computer Science Illuminated (en inglés). Jones & Bartlett Publishers. p. 316.</a>   <br></br>
                        </li>
                        </div>
                    </div>

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