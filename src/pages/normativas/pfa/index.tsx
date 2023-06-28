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
                        <div className={ styles.title }>Normativas Pfa</div>

                        <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>
                        
                        <div className={ styles.description }>
                                <div>
                                <h2>Normativas Faccionarias</h2>
      <ul>
        <b><li>3.1 - INTRODUCCION A LA FACCION</li></b>
        <p> La PFA es una fuerza federal con un rol activo en la cooperacion policial internacional a traves de interpol. Esta faccion es una faccion gubernamental por lo tanto es 100% legal. Y al ingrasar a cualquier tipo de faccion legal estaria aceptando cualquier tipo de normativa que haya que cumplir, y cualquier tipo de incumplimiento podria resultar en una sancion por parte de los rangos mayores.</p>
        <b><li>3.2 - NORMATIVAS GENERALES DE LA FACCION</li></b>
        <p>     
        <b><u>Todo agente que se encuentre en servicio: </u> </b> <br></br>
        <br></br>
        <b>(-)</b> Deberan acatar y seguir todo tipo de orden que provenga de un rango superior. <br></br>
        <br></br>
        <b>(-)</b> Deberan valorar su vida propia y la de los compañeros en cualquier tipo de situacion. <br></br>
        <br></br>
        <b>(-)</b> Se les prohibe traslado de civiles, exepto cuando este mismo sea detenido. <br></br>
        <br></br>
        <b>(-)</b> Se les prohibe abusar de los beneficios otorgados como faccion. <br></br>
        <br></br>
        </p>
        <p>     
        <b><u>Todo agente que se encuentre fuera de servicio: </u> </b> <br></br>
        <br></br>
        <b>(-)</b> Deberan mantener respeto hacia todas las personas. <br></br>
        <br></br>
        <b>(-)</b> Podran actuar en situaciones comprometedoras solo si son rango Inspector o mayor a este. <br></br>
        <br></br>
        <b>(-)</b> No podran portar armas ni objetos ni sustancias ilicitas. <br></br>
        <br></br>
        <b>(-)</b> No podran utilizar nada que tenga que ver con el cuerpo policial. <br></br>
        <br></br>
        </p>
        <b><li>3.3 - DERECHOS</li></b>
        <p>     
        <b>(-)</b> En el caso que algun agente del cuerpo de la PFA a la hora de transportar a la comisaria al sospechoso/atracador, este mismo podra presentar una queja y no ser enviado a servicios comunitarios, pero no podra retirarse de la comisaria ni recuperar sus objetos perdidos. <br></br>
        <br></br>
        <b>(-)</b> Usted tiene derecho a permanecer callado ya que todo lo que diga o haga sera usado en una corte ante un juez. <br></br>
        <br></br>
        <b>(-)</b> Tiene derecho a una llamada de 3 minutos frente a un oficial. <br></br>
        <br></br>
        <b>(-)</b> Tiene derecho a solicitar comida y bebida en caso de ser necesario. <br></br>
        <br></br>
        <b>(-)</b> Tiene derecho a un agente medico en caso de ser necesario. <br></br>
        <br></br>
        <b>(-)</b> El oficial esta obligado a repetir estos derechos hasta que el sujeto confirme que los comprende perfectamente, (en caso de que el oficial haya repetido 3 veces los derechos, no se repetiran una cuarta vez y se daran por comprendidos). <br></br>
        </p>
        <b><li>3.4 - CODIGOS RADIALES</li></b>
        <br></br>
        <br></br> <b>(-)</b> 10-00 Oficial herido. <br></br>
        <br></br> <b>(-)</b> 10-04 Recibido. <br></br>
        <br></br> <b>(-)</b> 10-05 Negativo. <br></br> 
        <br></br> <b>(-)</b> 10-06 No disponibles. <br></br>
        <br></br> <b>(-)</b> 10-09 Repita el mensaje. <br></br>
        <br></br> <b>(-)</b> 10-20 Ubicacion. <br></br>
        <br></br> <b>(-)</b> Clave 0 - Llamado de altra prioridad, abandonar todas las tareas y dirigirse a la central. <br></br>
        <br></br> <b>(-)</b> Codigo PIT - Maniobra con vehiculo. <br></br>
        <br></br> <b>(-)</b> Codigo S - Silencio en radio. <br></br> 
        <br></br> <b>(-)</b> Codigo C - Revisar el perimetro. <br></br> 
        <br></br>
        <b><li>3.5 - CORRUPCION</li></b>
        <p>La corrupcion en el cuerpo de la PFA solamente podra ser realizada por los agentes que sean rango Inspector en adelante.
            Deberan utilizar mascaras para no ser reconocidos.
            No podran hacer corrupcion frente a otros oficiales, civiles o atracadores</p>
        <b><li>3.6 - MANDO</li></b> 
        <br></br> El rol del mando dentro del cuerpo de la PFA es organizar a todos los moviles policiales para acudar a los distintos robos.
        El oficial que podra tomar mando es la primera persona en entrar al mismo o el oficial con rango mas alto. <br></br><br></br>
        <h2>SUBDIVISIONES</h2>
        <h3><b><u>Grupo CONDOR</u></b></h3>
        <b><li>3.7 A - Introduccion</li></b>
        <br></br>
        <b>(-)</b> El grupo CONDOR son los encargados de brindar apoyo aereo a los moviles terrestres ya sea abriendo fuego o brindando informacion. <br></br>
        <br></br>
        <b>(-)</b> Esta subdivision se encargara de manejar el helicoptero. <br></br>
        <br></br>
        <b>(-)</b> Seran los unicos en la faccion habilitados a poder dar permisos de manejo de helicoptero. 
        <br></br>
        <li><br></br> <u><b> 3.8 B - Requisitos </b></u><br></br></li>
        <br></br>
        <b>(-)</b> Deberan rellenar un formulario con normativas sobre condor. <br></br>
        <br></br>
        <b>(-)</b> Deberan pasar unas pruebas de manejo. <br></br>
        <br></br>
        <b>(-)</b> Deberan ser rango aprendiz para ser aspirantes, y rango cabo para ser miembros. <br></br>
        <br></br>
        <li><br></br> <u><b> 3.9 C - Normativas del Grupo </b></u><br></br></li>
        <br></br>
        <b>(-) </b> Deberan haber como minimo 5 policias para hacer un rol de pdi sin contar los oficiales que haran el mismo. <br></br>
        <br></br>
        <b>(-) </b> El oficial en caso de darse a conocer, no respetar las normativas, demostrar inactividad o utilizar mal la informacion obtenida podria ser sancionado o expulsado. <br></br>
        <br></br>
        <b>(-) </b> El armamento permitido para los roles de PDI son unicamente las pistolas, a no ser que el jefe autorice a utilizar otro armamento. <br></br>
        <br></br>
        <b>(-) </b> El mando lo tomara el encargado de la subdivision o el oficial con rango mas alto de la subdivision. <br></br>
        <br></br>
        <b>(-) </b> Solo se podra obtener informacion mediante una investigacion certera, no suponer cosas. <br></br>
        <br></br>
        <b>(-) </b> Esta prohibido ingresar a zonas rojas. <br></br>
        <br></br>
        <li> <u><b> 4.0 A - Interrogaciones </b></u><br></br></li>
        <br></br>
        <b>(-) </b> El interrogatorio no podra durar mas de 40 minutos. <br></br>
        <br></br>
        <b>(-) </b> No se podra abusar de los comandos ( /do /me etc ). <br></br>
        <br></br>
        <br></br> <u><b> 4.1 B Jerarquia </b></u><br></br>
        <br></br>
        <b>(-) </b> Director de PDI. <br></br>
        <br></br>
        <b>(-) </b> Jefe de PDI. <br></br>
        <br></br>
        <b>(-) </b> Sub jefe de PDI. <br></br>
        <br></br>
        <b>(-) </b> Experimentado de PDI. <br></br>
        <br></br>
        <b>(-) </b> Interrogador de PDI. <br></br>
        <br></br>
        <b>(-) </b> Aspirante de PDI. <br></br>
        <h3><u>4.2 A GRUPO UTOI</u></h3>
        <br></br>
        <li><b> 4.3 A - INTRODUCCION </b><br></br></li>
        <br></br>
        La UTOI es una fuerza especial , una unidad tactica de operaciones. Esta fuerza se desplegara en robos grandes (banco central, fleccas, redadas, allanamientos, secuestros etc).<br></br>
        <br></br>
        <li><b> 4.3 B NORMATIVAS DEL GRUPO </b><br></br></li>
        <br></br>
        Este grupo unicamente sera desplegado para robos grandes anteriormente mencionados.
        En caso de redadas, allanamientos o secuestros debera haber un rango alto del grupo para organizarlo junto a un rango alto de la pfa (el mando lo tomara el rango mas alto de UTOI)
        Siempre y cuando un miembro de la UTOI este presente en un robo sera el mando de este
        Los miembros de este grupo deberan ser anonimos, utilizando una mascara. Es decir, si te secuestran vestido de pfa normal y corriente no podras mentir sobre tu identidad, en cambio si te secuetran vestido de UTOI si podras mentir.
        <br></br>
        <br></br>
        <li><b> 4.4 C ARMAMENTO </b><br></br></li>
        <br></br>
        <b>(-) </b> Pistolas a gusto. <br></br>
        <b>(-) </b> Smg/smg de asalto. <br></br>
        <b>(-) </b> Gas BZ. <br></br>
        <b>(-) </b> Francotirador ( unicamente si director o jefe estan presentes y lo permiten). <br></br>
        <br></br>
        <li><b> 4.5 D JERARQUIA </b></li> <br></br>
        <b>(-) </b> Director de UTOI. <br></br>
        <b>(-) </b> Jefe de UTOI. <br></br>
        <b>(-) </b> Sub jefe de UTOI. <br></br>
        <b>(-) </b> Elite de UTOI. <br></br>
        <b>(-) </b> Teniente de UTOI. <br></br>
        <b>(-) </b> Miembro de UTOI. <br></br>
        <b>(-) </b> Aspirante de UTOI. <br></br>
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