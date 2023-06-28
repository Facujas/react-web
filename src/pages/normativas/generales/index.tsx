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
                        <div className={ styles.title }>Normativas Generales</div>

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
        <b><li>1.1 — DEATMATCH (DM)</li></b>
        <p>El Deathmatch, es realizar cualquier tipo de rol agresivo hacia otro usuario sin un rol previo o anterior a este que justifique el mismo.</p>
        <b><li>1.2 — META-GAMING (MG)</li></b>
        <p>El meta-gaming es el ingreso de informacion OOC (fuera de nuestro personaje) a nuestro personaje.</p>
        <b><li>1.3 — POWER-GAMING (PG)</li></b>
        <p>El Power-Gaming es cualquier tipo de accion que nosotros realicemos en nuestro personaje, que en la vida real no podriamos hacer.</p>
        <b><li>1.4 — PLAYER KILL (PK)</li></b>
        <p>El player-kill es la muerte de nuestro jugador, perdiendo toda su memoria y todo lo pasado anteriormente a la muerte.</p>
        <b><li>1.5 — CHARACTER KILL (CK)</li></b>
        <p> El character-kill es la muerte permanente de tu personaje. Es decir, tu personaje se borrara para siempre y deberas empezar uno de cero.</p>
        <b><li>1.6 — REVENGE KILL (RK)</li></b>
        <p>El revenge-kill es la venganza de un personaje hacia otro usuario, cuando este recibio un PK. Es decir, volver al mismo lugar de la muerte y tomar venganza del asunto.</p>
        <b><li>1.7 — VEHICLE DEATHMATCH (VDM)</li></b>
        <p>El vehicle-deathmatch es usar nuestro vehiculo como un arma para defensa propia.</p>
        <b><li>1.8 — Insultos Fuera de Character (IOOC)</li></b>
        <p>Insultar fuera de nuestro persona, quiere decir, hacerle insultos a otro usuario con cosas personales o fuera del rol.</p>
        <b><li>1.9 — Rol agresivo desde un vehiculo</li></b>
        <p>Todo tipo de rol agresivo desde un vehiculo esta permitido SOLA y EXCLUSIVAMENTE para pinchar ruedas, siempre y cuando antes de este acto, haya ocurrido un mensaje anonimo (/anon) en el cual se detalle de forma correcta y formal, como modo de advertencia hacia el otro vehiculo. Cualquier otro tipo de acto agresivo hacia un vehiculo, encima de un vehiculo, queda totalmente prohibido.</p>
        <b><li>1.10 — Rol de entorno</li></b>
        <p>El rol de entorno es todo lo que ocurre alrededor de nuestro personaje, y este mismo, se debe respetar de todas las formas. Es decir, no se puede por ejemplo, matar a una persona en un Hospital.</p>
        <b><li>1.11 — NO ROL (NRL)</li></b>
        <p>EL NRL es basicamente, como lo dice su palabra, no rolear lo que le ocurre o esta ocurriendo a nuestro personaje.</p>
        <b><li>1.12 — Evasión de rol</li></b>
        <p>La evasion de rol queda totalmente prohibida en todo momento, esta terminantemente prohibido evadir rol ya sea a un staff, a un policia o a un same.</p>
        <b><li>1.13 — Zonas rojas</li></b>
        <p> En las zonas rojas podra ocurrir cualquier acto ilicito, ya sean tiroteos, ventas de drogas, toma de puntos y zonas de mafias.</p>
        <b><li>1.14 — Zonas de tiroteo</li></b>
        <p>Las zonas de tiroteo son todas aquellas que estan alrededor de los bancos, tiendas, lugares de secuestro mas conocidos y por lo general estaran marcadas en el minimapa como amarillas. Nadie podra circular por alli.</p>
        <b><li>1.15 — Zonas seguras</li></b>
        <p>Las zonas seguras son todas aquellas en las que haya un rol de entorno seguro, por ejemplo: Hospitales, centrales de policia, bancos, etc. Esta terminantemente prohibido realizar actos ilicitos en las mismas.</p>
        <b><li>1.16 — Abuso de Bugs</li></b>
        <p>Cualquier abuso de bug de programacion del servidor, sera motivo de baneo permanente y este sera unicamente apelado con un Developer/Ceo del servidor, de lo contrario el baneo no sera removido.</p>
        <b><li>1.17 — Uso de Modificaciones, Cheats & Autoclickers/Macros</li></b>
        <p>Cualquier uso de modificaciones, cheats o cualquier programa o uso de terceros que altere el juego, sera motivo de Ban HWID (Hardware ID) Inapelable.</p>
        <b><li>1.18 — Valorar vida</li></b>
        <p>Siempre que la vida de nuestro personaje corra peligro, se debera valorar vida, por ejemplo, si estamos siendo apuntados por dos personas, debemos valorar nuestra vida en todo momento, cualquier accion contraria, sera motivo de baneo.</p>
        <b><li>1.19 — Cuentas de juego y personajes</li></b>
        <p>Todos los usuarios de Mar del Plata RP, podran tener UNA SOLA CUENTA de steam, discord y rockstar. Todo tipo de cuentas de terceros que se encuentre, sera un motivo para el baneo de todas las cuentas vinculadas del usuario.</p>
        <b><li>1.20 — Requisitos para Robos & Aclaraciones</li></b>
        <p>Los requisitos para los robos seran los siguientes: <br></br>
        <br></br>
        <u><b>ACLARACIONES:</b></u> <br></br>
        <br></br>
        <b>(-)</b> Ningun atracador se podra poner chaleco en medio de un robo. <br></br>
        <br></br>
        <b>(-)</b> Las negociaciones no deberan comenzar hasta que todos los policias esten en la puerta del robo preparados. <br></br>
        <br></br>
        <b>(-)</b> Los tiradores no podran moverse sobre el perimetro con ningun tipo de vehiculo. <br></br>
        <br></br>
        <b>(-)</b> Las lanzagranadas de humo estaran UNICAMENTE disponibles para utilizar en Bancos Central y robos a Cayo Perico. <br></br>
        <br></br>
        <u><b>Bancos BBVA:</b></u> Minimo de 3 mafiosos y maximo 6 atracadores. <br></br> (2 tiradores como maximo) <br></br>
        <br></br>
        <u><b>Tiendas o supermercados:</b></u> Minimo de 1 atracador y maximo de 3 atracadores. <br></br> (2 tiradores como maximo) <br></br>
        <br></br>
        <u><b>Banco central:</b></u> Minimo de 7 mafiosos y maximo de 10 atracadores. <br></br> (3 tiradores como maximo) <br></br>
        <br></br>
        <u><b>Cayo Perico:</b></u> Minimo de 8 mafiosos y maximo de 12 atracadores (ROBO NO DISPONIBLE AUN) <br></br>
        <br></br>
        <u><b>Life Invader:</b></u> Minimo de 5 atracadores y maximo de 7 atracadores. <br></br> (1 tirador como maximo) <br></br>
        </p>
        <b><li>1.21 — Palabras indebidas o insultos en Discord</li></b>
        <p>Cualquier insulto o palabra indebida, permitira a cualquier staff tomar acciones y sancionar al usuario.</p>
        <b><li>1.22 — Machismo, racismo, xenofobia, etc</li></b>
        <p>Queda <b>TERMINANTEMENTE PROHIBIDO</b> el racismo, xenofobia, machismo, y todo tipo de discriminacion hacia cualquier usuario. En MDP Roleplay tratamos de que el ambiente de nuestros usuarios sea un ambiente llevadero y pacifico.</p>
        <b><li>1.23 — Ban HWID</li></b>
        <p>Todo tipo de Ban HWID podra ser revocado UNICAMENTE por un Developer o CEO del servidor. Cualquier staff que realice un tipo de corrupcion unbaneando a un usuario, sera baneado y blacklisteado sin poder volver a jugar en el servidor.</p>
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