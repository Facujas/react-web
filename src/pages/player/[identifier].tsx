import { Navigator } from '@/components/navigator';
import { useState, useEffect } from 'react';  
import Spinner from '@/components/spinner/Spinner';
import { API_ROUTE, LANDING_PAGE } from '@/config';  
import { getSteamAuth, hasPermissions } from '@/services/authorization'; 
import { useRouter } from 'next/router'; 
import styles from '@/styles/Player.module.css'; 
import PlayerInformation from '@/components/player/player';
import instance from '@/instance';

export interface IPlayer {
    identifier: string, 
    dateofbirth: string, 
    loadout: string, 
    inventory: string, 
    accounts: string, 
    group: string, 
    created_at?: Date, 
    firstname: string, 
    lastname: string, 
    job: string, 
    color: string,
    player_vehicles?: string, 
    steam: string, 
    discord: string, 
    last_login?: Date, 
    last_ip?: string, 
    has_staff_perms: number,
}

export default function Player(props:IProps) {
    const router = useRouter();     
    const [isAdministrator, handleIsAdmin] = useState<boolean>(false); 
    const [loading, handleLoading] = useState<boolean>(true);
    const [error, handleError] = useState<string>('');
    const [banReason, handleReason] = useState<string>(''); 
    const [banTime, handleBanTime] = useState<string>('custom'); 

    useEffect(() => { 
        handleLoading(true);

        const getAuth = async () => {
            const steam:any = await getSteamAuth(); 
            const perms:any = await hasPermissions(steam.steamid); 
            if(!steam || !perms) return router.push(LANDING_PAGE); 

            if(perms) handleIsAdmin(true);  
            handleLoading(false);
        }

        getAuth(); 
    }, []); 

    if(loading) return <Spinner />

    return <> 
        <main>
            <Navigator />

            <div className={ styles.container }>
                <div className={ styles.ban }>
                    { error ? <>
                        <div className={ styles.error }>{ error }</div>
                    </> : null }

                    <div className={ styles.form }>
                        <input type="text" maxLength={ 50 } value={ banReason } onChange={(e) => handleReason(e.target.value)} placeholder="Razón del baneo" /> 

                        <select onChange={(e) => handleBanTime(e.target.value)}>
                            <option value="custom"></option>
                            <option value="3600">1 hora</option>
                            <option value="86400">1 Día</option>
                            <option value="604800">1 Semana</option>
                            <option value="18144000">30 Días</option>
                            <option value="-1">Permanente</option>
                        </select>

                        <button onClick={() => {
                            if(!banReason || !banTime) return handleError('* Por favor, rellena todos los campos'); 

                            handleLoading(true);

                            instance.post(`${ API_ROUTE }/bans/create`, {
                                reason: banReason, 
                                time: banTime, 
                                identifier: props.identifier
                            }).then(response => {
                                handleLoading(false);
                                if(!response.data.done) return console.log(response.data.message); 

                                handleError("El servidor ha recibido tu solicitud de baneo...");
                            }).catch((error) => console.log(error))
                            
                            handleError(''); 
                            handleReason(''); 
                            handleBanTime(''); 
                        }}>Banear</button>
                    </div>
                </div>
            </div>

            <PlayerInformation identifier={ props.identifier } administrator={ isAdministrator } />
        </main>
        
    </>
}

interface IProps {
    identifier: string
}

export async function getServerSideProps(context: any) {
    return {
        props: {
            identifier: context.query.identifier
        },
    }
}
