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
                        Mar de Plata <span>Roleplay</span>
                    </div> 

                    <img draggable={ false }  src="https://www.megaidea.net/wp-content/uploads/2021/11/GT5-Equipo3.png" alt="image" />
                </div>

                <div className={ styles.section } style={{
                    marginTop: '90px'
                }}>
                    <div className={ styles.right }>
                        <div className={ styles.title }>Normativas Generales</div>
                        
                        <div className={ styles.description }>
                                <div>
                                <h2>Servidor y Discord</h2>
      <ul>
        <li>1.1 — DEATMATCH (DM)</li>
        <li>1.2 — META-GAMING (MG)</li>
        <li>1.3 — POWER-GAMING (PG)</li>
        <li>1.4 — PLAYER KILL (PK)</li>
        <li>1.5 — CHARACTER KILL (CK)</li>
        <li>1.6 — REVENGE KILL (RK)</li>
        <li>1.7 — VEHICLE DEATHMATCH (VDM)</li>
        <li>1.8 — Insultos Fuera de Character (IOOC)</li>
        <li>1.9 — Rol agresivo desde un vehiculo</li>
        <li>1.10 — Rol de entorno</li>
        <li>1.11 — NO ROL (NRL)</li>
        <li>1.12 — Evasión de rol</li>
        <li>1.13 — Zonas rojas</li>
        <li>1.14 — Zonas de tiroteo</li>
        <li>1.15 — Zonas seguras</li>
        <li>1.16 — Abuso de Bugs</li>
        <li>1.17 — Uso de Modificaciones de terceros</li>
        <li>1.18 — Valorar vida</li>
        <li>1.19 — Cuentas de juego y personajes</li>
        <li>1.20 — Requisitos para robos & Aclaraciones</li>
        <li>1.21 — Palabras indebidas o insultos en Discord</li>
        <li>1.22 — Machismo, racismo, xenofobia, etc.</li>
        <li>1.23 — Ban HWID</li>
      </ul>
    </div>         
                        </div>

                    </div>

                    <img draggable={ false }  className={ styles.criminal } src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/c4aaed728a0ede830dca12d8d17ae95262b9c4fa.png" alt="criminal" />
                </div>

                <div>

                <button className={ styles.webstore } onClick={() => router.push('/normativas/generales')}>Ver mas</button>
                </div>

                <div className={ styles.socials }> 
                    <div className={ styles.line }></div>

                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                    <img draggable={ false }  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="discord" />
                    <img draggable={ false }  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" />
                    <img draggable={ false }  src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="twitch" />
                </div>

                <div className={ styles.section }>
                    <img draggable={ false }  className={ styles.criminal } src={ `${ BASE_URL }/assets/criminal.png` } alt="criminal" />
                
                    <div className={ styles.right }>
                        <div className={ styles.title }>Normativas same</div>

                        <div className={ styles.description }>
                    <h2>Faccion</h2>
                        <ul>
                         <li>1.1 0  — INTRODUCCION A LA FACCION</li>
                         <li>1.1 A — REQUISITOS</li>
                         <li>1.1 B — NORMATIVAS GENERALES DE LA FACCION</li>
                         <li>1.1 C — JERARQUIA</li>
                        <li>1.1 D — USO DE ACCESORIOS</li>
                        <li>1.1 E — ORGANIZACION [TeamSpeak3]</li>
                        </ul>
                        </div>
                        <div>

                        <button className={ styles.webstore } onClick={() => router.push('/normativas/same')}>Ver mas</button>
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

                                <div className={ styles.section } style={{
                    marginTop: '90px'
                }}>
                    <div className={ styles.right }>
                        <div className={ styles.title }>Normativas pfa</div>
                        
                        <div className={ styles.description }>
                                <div>
    <h2>Faccion</h2>
      <ul>
        <li>1.1 — INTRODUCCION A LA FACCION</li>
        <li>1.2 — NORMATIVAS GENERALES DE LA FACCION</li>
        <li>1.3 — DERECHOS</li>
        <li>1.4 — CODIGOS RADIALES</li>
        <li>1.5 — CORRUPCION</li>
        <li>1.6 — MANDO</li>
      </ul>

      <h2>Subdivisiones [CONDOR, PDI, UTOI]</h2>
      <ul>
        <li>2.1  — GRUPO [CONDOR, PDI, UTOI]</li>
        <li>2.1 A — INTRODUCCION AL GRUPO</li>
        <li>2.1 B — REQUISITOS</li>
        <li>2.1 C — NORMATIVAS DEL GRUPO</li>
        <li>2.1 D — JERARQUIA</li>
        <li>2.1 e — ARMAMENTO</li>
      </ul>
    </div>         
                        </div>
                        <div>

<button className={ styles.webstore } onClick={() => router.push('/normativas/pfa')}>Ver mas</button>
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

                <div className={ styles.section }>
                    <img draggable={ false }  className={ styles.criminal } src={ `${ BASE_URL }/assets/criminal.png` } alt="criminal" />
                
                    <div className={ styles.right }>
                        <div className={ styles.title }>Normativas staff</div>

                        <div className={ styles.description }>
                    <h2>Introduccion</h2>
                        <ul>
                         <li>4.1 — EXAMEN ESCRITO & ORAL </li>
                         <li>4.2 — INTRODUCCION AL STAFF</li>
                         <li>4.3 — NORMATIVAS & REQUISITOS DEL STAFF</li>
                        </ul>
                        </div>
                        <div>

                        <button className={ styles.webstore } onClick={() => router.push('/normativas/staff')}>Ver mas</button>
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
                        <div className={ styles.title }>Aclaracion</div>
                        <div className={ styles.description }>
                            Cualquier normativa que no sea cumplida dentro del servidor o en Discord, podra conllevar una sancion de un miembro del equipo administrativo sin aviso previo.
                        </div>
                        <div>

                    <button className={ styles.webstore } onClick={() => router.push('/')}>Volver atras</button>
                    </div>
                    </div>

                    <img draggable={ false }  className={ styles.criminal } src='https://cutewallpaper.org/24/gta-online-png/gta-v-png-pic-png-all.png' alt="criminal" />
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