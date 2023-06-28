import Head from "next/head"; 
import { SERVER_NAME, LANDING_PAGE, API_ROUTE } from "@/config";
import { Navigator } from "@/components/navigator";
import { useState, useEffect } from "react";
import { getSteamAuth, hasPermissions } from "@/services/authorization";
import styles from '@/styles/Profile.module.css'; 
import { useRouter } from 'next/router'; 
import instance from "@/instance"; 
import PlayerInformation from "@/components/player/player";
import Spinner from "@/components/spinner/Spinner";

export default function Profile() {
    const router = useRouter(); 
    const [auth, handleAuth] = useState<any>(false); 
    const [identifier, handleIdentifier] = useState<string>(''); 
    const [loaded, handleLoaded] = useState<boolean>(false); 
    const [isAdministrator, handleIsAdmin] = useState<boolean>(false); 

    useEffect(() => { 
        if(auth) return; 

        const getAuth = async () => {
            const steam:any = await getSteamAuth(); 
            
            if(!steam) return router.push(LANDING_PAGE);  
            handleAuth(steam);  

            const perms:any = await hasPermissions(steam.steamid); 

            if(perms) handleIsAdmin(true); 
            
            instance.get(`${ API_ROUTE }/players/license?identifier=${ steam.steamid }`).then(response => {
                if(!response.data.done) return console.log(response.data.message); 
    
                handleIdentifier(response.data.identifier); 
            }); 

            handleLoaded(true); 
        }

        getAuth(); 
    }, [auth]); 

    if(!loaded) return <Spinner />;  

    const Logout = () => {
        instance.post(`${ API_ROUTE }/auth/logout`).then(response => {
            if(response.data.done) return handleAuth(false); 
        }).catch((e) => console.log(e));
    }

    return <> 
        <main>
            <Navigator />
            
            <div className={ styles.container }>
                <div className={ styles.left }>
                    <img draggable={ false } src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36c7442c-aed5-4e9a-86ec-0a59dd4c5a37/debidix-181b4f9a-4556-4ae8-abea-2685404e3ed2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2Yzc0NDJjLWFlZDUtNGU5YS04NmVjLTBhNTlkZDRjNWEzN1wvZGViaWRpeC0xODFiNGY5YS00NTU2LTRhZTgtYWJlYS0yNjg1NDA0ZTNlZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q4pqOx6nttrjs3603BW9qs8GsTUxFU4IZstqZfcjrss" alt="character" />
                    
                    <div>Información general</div>
                    <input disabled={ true } value={ "https://discord.gg/mdproleplay" } type="text" />
                    <input disabled={ true } value={ "mdproleplay@gmail.com" } type="text" />

                    <button onClick={() => Logout()}>Cerrar sesión</button>
                </div>

                <iframe src="https://discord.com/widget?id=936708968598867969&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> 
            </div>

            {
                identifier.length <= 0 || !identifier ? <div className={ styles.container }>
                    <div className={ styles.no_characters }>
                        ¡Ups! No hemos encontrado ningun personaje vinculado a esta cuenta.
                    </div>
                </div> : null 
            } 
        </main> 
        
        { identifier.length > 0 ? <PlayerInformation identifier={ identifier } administrator={ isAdministrator } /> : null }
    </>
}