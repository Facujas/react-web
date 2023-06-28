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
                <div className={ styles.header }>
                    <div className={ styles.name }>
                        Mar del Plata <span>Roleplay</span>
                    </div> 

                    <img draggable={ false }  src="https://www.megaidea.net/wp-content/uploads/2021/11/GT5-Equipo3.png" alt="image" />
                </div>

                <div className={ styles.section } style={{
                    marginTop: '90px'
                }}>
                    <div className={ styles.right }>
                        <div className={ styles.title }>Normativas Same</div>

                        <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>
                        
                        <div className={ styles.description }>
                                <div>
                                <h2>Servidor y Discord</h2>
      <ul>
        <b><li>2.1 - INTRODUCCION A LA FACCION</li></b>
        <p>Same es un sistema publico de atencion medica de urgencias y emergencias ya sea individuales o colectivas. Esta faccion es gubernamental por lo tanto es 100% legal. Y al ingresar a cualquier tipo de faccion legal estaria aceptando cualquier tipo de normativa que haya que cumplir, y cualquier tipo de incumplimiento podria resultar en una sancion por parte de los rangos mayores.</p>
        <b><li>2.2 - NORMATIVAS GENERALES DE LA FACCION</li></b>
        <p>     
        <b>(-)</b> Los SAMES no podran portar armamento de ningun tipo y mucho menos realizar actos ilicitos cuando esten en servicio. <br></br>
        <br></br>
        <b>(-)</b> No deberan dejar vehiculos de la faccion por cualquier parte de la ciudad. <br></br>
        <br></br>
        <b>(-)</b> Los llamados prioritarios siempre seran los de PFA. <br></br>
        <br></br>
        <b>(-)</b> Fuera de servicio deran ciudadanos normales, eso no significa que podran cometer actos ilicitos. <br></br>
        <br></br>
        <b>(-)</b> No se podran aceptar pagos a cambio de servicios medicos, sin embargo, si podran aceptar propinas. <br></br>
        </p>
        <b><li>2.3 - CODIGOS RADIALES</li></b>
        <p>     
        <b>(-)</b> 10-4 (Afirmativo). <br></br>
        <br></br>
        <b>(-)</b> 10-5 (Negativo). <br></br>
        <br></br>
        <b>(-)</b> 10-20 (Ubicacion). <br></br>
        <br></br>
        <b>(-)</b> 10-40 (Solicita ambulancia). <br></br>
        <br></br>
        <b>(-)</b> Codigo S - (Silencio en radio). <br></br>
        </p>
        <b><li>2.4 - CORRUPCION</li></b>
        <br></br>
        <u><b>Corrupcion dentro de servicio:</b></u> <br></br>
        <br></br> <b>(-)</b> No podran negarse a atender pacientes dentro del hospital. <br></br>
        <br></br> <b>(-)</b> No podran vender objetos pertenecientes a la faccion. <br></br>
        <br></br> <b>(-)</b> Podran hacer enlaces con mafias o organizaciones ilegales para tener prioridad en los llamados. <br></br> 
        <br></br>
        <u><b>Corrupcion fuera de servicio:</b></u> <br></br>
        <br></br> <b>(-)</b> Podran portar armamento ilegal. <br></br>
        <br></br> <b>(-)</b> Podran farmear droga. <br></br>
        <br></br> <b>(-)</b> No podran vender informacion sobre la faccion. <br></br> 
        <br></br>
        <b><li>2.5 - MANDO</li></b>
        <p>Todos los usuarios que pertenezcan a esta faccion, deberan respetar al Mando que se encuentre en ese momento en el Teamspeak3. De lo contrario, al rango mas alto que se encuentre en la radio de Same (107).</p>
        <b><li>2.6 - SUBDIVISIONES</li></b> 
        <br></br> <u><b> UNIDAD AEREA: </b></u><br></br><br></br>
        <br></br>
        <b>(-)</b>Antes de ingresar a esta unidad, deberan realizar las pruebas para formar parte, siendo responsable un rango alto de la unidad aerea capacitado. <br></br>
        <br></br>
        <b>(-)</b> Esta subdivision se encargara de manejar el helicoptero. <br></br>
        <br></br>
        <b>(-)</b> Seran los unicos en la faccion habilitados a poder dar permisos de manejo de helicoptero. <br></br>
        <br></br>
        <br></br> <u><b> UNIDAD NAUTICA: </b></u><br></br><br></br>
        <br></br>
        <b>(-)</b>Antes de ingresar a esta unidad, deberan realizar las pruebas para formar parte, siendo responsable un rango alto de la unidad nautica capacitado. <br></br>
        <br></br>
        <b>(-)</b> Esta subdivision se encargara de manejar todo tipo de lanchas, motos de agua, etc. <br></br>
        <br></br>
        <b>(-)</b> Seran los unicos habilitados en la faccion para utilizar este tipo de vehiculos. <br></br>
        <br></br>
        <b>(-)</b> Esta permitido el uso de estos vehiculos para ir hacia Cayo Perico. <br></br>
      </ul>
    </div>         
                        </div>

                    </div>

                    <img draggable={ false }  className={ styles.criminal } src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/c4aaed728a0ede830dca12d8d17ae95262b9c4fa.png" alt="criminal" />
                </div>

                <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>

                <div>

                <button className={ styles.webstore } onClick={() => router.push('/normativas')}>Volver atras</button>
                </div>
                <br></br>
                <br></br>
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