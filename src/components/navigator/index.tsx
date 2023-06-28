import { API_ROUTE, SERVER_NAME, LANDING_PAGE } from '@/config';
import styles from './navigator.module.css';  
import { useState, useEffect } from 'react'; 
import instance from '@/instance';  
import { useRouter } from 'next/router';
import { applyColorOpacity } from '@/functions';  
import { getSteamAuth, hasPermissions } from '@/services/authorization';  

interface IPlayer {
    identifier: string, 
    group: string, 
    firstname: string, 
    lastname: string, 
    job: string, 
    color: string,
    created_at: Date
}

export const Navigator = () => {
    const router = useRouter(); 
    const [authorized, handleAuth] = useState<any>(false); 
    const [input, handleInput] = useState<string>(''); 
    const [users, handleUsers] = useState<IPlayer[]>([]); 
    const [isAdministrator, handleIsAdmin] = useState<boolean>(false);

    useEffect(() => { 
        const getAuth = async () => {
            const steam:any = await getSteamAuth(); 
            const perms:any = await hasPermissions(steam.steamid);  
            
            if(steam) handleAuth(steam); 
            if(perms) handleIsAdmin(true); 
        }

        getAuth(); 
    }, []);

    useEffect(() => {
        if(input.length <= 0) return handleUsers([]); 

        instance.get(`${ API_ROUTE }/players/filter?input=${ input }`).then(response => {
            if(!response.data.done) return console.log(response.data.message); 

            handleUsers(response.data.result); 
        }).catch((e) => console.log(e));
    }, [input]);  

    return <>
        <div className={ styles.container }>
            <div className={ styles.middle }>
                <div className={ styles.name } title="Go home" onClick={() => router.push('/')}><span className='material-icons' style={{ marginRight: '20px' }}>public</span>{ SERVER_NAME }</div>
                
                {
                    isAdministrator ? <div className={ styles.search }>
                        <span className="material-icons" style={{ margin: '0px 20px' }}>search</span>
                        
                        <input type="text" maxLength={ 50 } placeholder='Buscar...' 
                            value={ input }
                            onChange={(e) => {
                                handleInput(e.target.value); 
                            }}
                        />
                    </div> : <div></div>
                }
                
                
            </div>
        </div> 

        {
            users.length > 0 ? <>
                <div className={ styles.filter }>
                    {
                        users.map((user:IPlayer) => {
                            return <div className={ styles.player } key={ user.identifier + user.firstname + user.job } onClick={() => router.push('/player/' + user.identifier)}>
                                <img draggable={ false }  src="https://sm.ign.com/t/ign_it/video/g/gta-5-how-to-transfer-characters-in-gta-online/gta-5-how-to-transfer-characters-in-gta-online_6cwz.1280.jpg" alt="mugshot" />
                            
                                {/* <div className={ styles.group }>{ user.group }</div> */}
                                <div className={ styles.name }>{ user.firstname + ' ' + user.lastname }</div>
                                <div className={ styles.job } style={{
                                    backgroundColor: applyColorOpacity(user.color, .4), 
                                    color: user.color
                                }}>{ user.job }</div> 
                            </div> 
                        })
                    }     
                </div>
            </> : null 
        }
    </>
}