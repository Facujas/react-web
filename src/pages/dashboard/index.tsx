import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Navigator } from '@/components/navigator'
import { SERVER_NAME, LANDING_PAGE } from '@/config' 
import { useState, useEffect } from 'react'; 
import instance from '@/instance'; 
import { API_ROUTE } from '@/config';
import { diffForHumans } from '@/functions'
import { useRouter } from 'next/router'; 
import { getSteamAuth, hasPermissions } from '@/services/authorization';
import Spinner from '@/components/spinner/Spinner';
 
interface IPlayer {
    identifier: string,    
    group: string, 
    created_at?: Date, 
    firstname: string, 
    lastname: string, 
    job: string, 
    color: string, 
    staff_rank?: string, 
    staff_label?: string
}

export default function Home() {  
    const router = useRouter(); 
    const [filter, handleFilter] = useState<string>(''); 
    const [administrators, handleAdministrators] = useState<IPlayer[]>([]); 
    const [loaded, handleLoaded] = useState<boolean>(false); 
    const [auth, handleAuth] = useState<any>(false);

    function orderByRankId(a:any, b:any) {
        if (a.staff_rank === null && b.staff_rank === null) {
          return 0;
        }
        
        if (a.staff_rank === null) {
          return 1;
        }

        if (b.staff_rank === null) {
          return -1;
        }

        return a.staff_rank - b.staff_rank;
    } 

    useEffect(() => { 
        handleLoaded(false); 
        
        const getAuth = async () => {
            const steam:any = await getSteamAuth(); 
            const perms:any = await hasPermissions(steam.steamid);  
            
            if(!steam || !perms) return router.push(LANDING_PAGE); 
            handleLoaded(true); 
            handleAuth(steam);  
        }

        getAuth(); 

        instance.get(`${ API_ROUTE }/players/administrators`).then(response => {
            if(!response.data.done) return console.log(response.data.message); 
            const ordered = response.data.result.sort(orderByRankId); 

            handleAdministrators(ordered);  
        }).catch((e) => console.log(e));  
    }, [])

    if(!loaded) return <Spinner />;

    return (
        <> 
            <main>
                <Navigator /> 

                <div className={styles.container}>
                    <div className={styles.wallpaper}>
                        <div className={styles.panel}>
                            <div className={styles.info}>
                                <span className='material-icons' style={{ fontSize: "35px", marginBottom: "15px" }}>group</span>
                                <span className={styles.title}>{ administrators.length }</span>
                                <span className={styles.description}>staffs registrados.</span>
                            </div>
                        </div>
                        <div className={styles.panel}>
                            <div className={styles.info}>
                                <span className='material-icons' style={{ fontSize: "35px", marginBottom: "15px" }}>block</span>
                                <span className={styles.title}>0</span>
                                <span className={styles.description}>baneos registrados.</span>
                            </div>
                        </div>
                        <div className={styles.panel}>
                            <div className={styles.info}>
                                <span className={styles.title} style={{ color: "black" }}>0</span>
                                <span className={styles.description} style={{ color: "black" }}>baneos registrados.</span>
                            </div>
                            <img draggable={ false }  className={styles.fivemLogo} src="https://cdn.discordapp.com/attachments/923212101189771284/1099976332563206164/FiveM-Logo.png" />
                        </div>
                    </div>

                    <div className={ styles.information }>
                        <div className={ styles.title }>Administradores</div>

                        <div className={ styles.description }>
                            En esta sección podrás ver todos los administradores de tu servidor además de sus acciones.
                        </div>
                    </div>

                    <div className={ styles.administrators }>
                        <div className={ styles.section }>
                            <input type="text" value={ filter } onChange={(e) => handleFilter(e.target.value)} maxLength={ 30 } placeholder='Filtrar (Nombre, Apellido, Grupo)' />
                        </div>

                        <table> 
                            <thead>
                                <tr>
                                    <th>Registro</th>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Grupo</th>
                                    <th>Creación</th>
                                    <th></th>
                                </tr>
                            </thead> 

                            <tbody>
                                {
                                    administrators ? administrators.map((administrator:IPlayer, index:number) => {
                                        if(
                                            administrator.group.includes(filter) || 
                                            administrator.firstname.includes(filter) || 
                                            administrator.lastname.includes(filter) 
                                        ) return <tr key={ 'administrator:' + administrator.identifier + ':index:' + index }>
                                            <td>
                                                <img draggable={ false } src="https://sm.ign.com/t/ign_it/video/g/gta-5-how-to-transfer-characters-in-gta-online/gta-5-how-to-transfer-characters-in-gta-online_6cwz.1280.jpg" alt="mugshot" />
                                            </td>
                                            <td>{ index + 1 }</td> 
                                            <td>{ administrator.firstname }</td>
                                            <td>{ administrator.lastname }</td>
                                            <td className={ styles.group }><span>{ administrator.staff_label || administrator.group }</span></td>
                                            <td>{ diffForHumans(administrator.created_at + "") }</td>
                                            <td className={ styles.actions }>
                                                <span title='Ver' onClick={() => router.push('/player/' + administrator.identifier)} className='material-icons'>visibility</span>
                                                <span title='Copiar identificador' className='material-icons' onClick={() => {
                                                    document.execCommand('copy', true, administrator.identifier)
                                                }}>inventory</span>
                                            </td>
                                        </tr> 
                                    }) : null 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}
