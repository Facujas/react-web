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
                        <div className={ styles.title }>Normativas Staff</div>

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
        <b><li>4.1 - EXAMEN ESCRITO & ORAL</li></b>
        <p>Para formar parte del equipo administrativo, deberan rendir y aprobar un examen escrito previamente al examen oral. TODA COPIA hacia este examen, sera motivo correcto de Ban HWID / Permanente del servidor.</p>
        <br></br>
        <b><li>4.2 - INTRODUCCION AL STAFF</li></b> 
        <br></br>
        <p>Luego de la etapa de los examenes, un miembro del "Advanced-Staff" debera introducirlos al equipo administrativo, enseñandoles a utilizar la web y los comandos del servidor.</p>
        <br></br>
        <b><li>4.3 - NORMATIVAS & REQUISITOS DEL STAFF</li></b>
        <p>     
        <b>(-)</b> Esta totalmente PROHIBIDO todo tipo de corrupcion. <br></br>
        <br></br>
        <b>(-)</b> Esta totalmente prohibido meterse en un ticket que ya fue atendido en el discord. <br></br>
        <br></br>
        <b>(-)</b> Esta totalmente prohibido rolear con permisos administrativos, una vez que ingresen con permisos, no podran rolear. Solamente podran moderar (atender reportes, ayudar a los usuarios, etc.) <br></br>
        <br></br>
        <b>(-)</b> Se deberan conocer TODAS las normativas de todo el servidor (generales y faccionarias) para formar parte del staff. <br></br>
        <br></br>
        <b>(-)</b> Se debera abrir bitacora en Discord una vez se ingrese a moderar para que la cuenta de horas sea correcta. <br></br> 
        <br></br>
        <b>(-)</b> Antes de sancionar, se debera dejar terminar el rol para intervenir en el mismo, esta PROHIBIDO cortar un rol. <br></br>
        <br></br>
        <b>(-)</b> Cualquier mentira o falsificacion de informacion, sera motivo de expulsion del cuerpo administrativo. <br></br>
        <br></br>
        <b>(-)</b> Un staff, debera contar con un microfono adecuado y entendible. <br></br>
        <br></br>
        <b>(-)</b> Para formar parte del equipo administrativo se requiere contar con una edad mayor a 15 años. <br></br>
        <br></br>
        <b>(-)</b> Siendo staff queda TOTALMENTE prohibido el Doxing, machismo, racismo, xenofobia, y todo tipo de discriminacion hacia los usuarios. <br></br>
        <br></br>
        <b>(-)</b> Se debera utilizar un lenguaje adecuado y correcto, no se permiten las faltas de ortografia o lenguaje inapropiado.
        </p>
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