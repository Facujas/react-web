import { useState, useEffect } from 'react'; 
import instance from '@/instance'; 
import { API_ROUTE, BASE_URL } from '@/config'; 
import styles from '@/styles/Player.module.css'; 
import { applyColorOpacity } from '@/functions';   
import { getFlagEmoji } from '@/functions';
import getClientLocation from '@/services/location';
import getDiscordInformation from '@/services/discord';
import { IPlayer } from '@/pages/player/[identifier]';

interface IBans {
    id: number, 
    reason: string, 
    permanent: number, 
    expiry: number, 
    active: number, 
    admin: string, 
    created_at?: Date
}

export default function PlayerInformation({ identifier, administrator }: { identifier:string, administrator:boolean }) { 
    const [characters, handleCharacters] = useState<IPlayer[]>([]); 
    const [location, handleLocation] = useState<any>(null); 
    const [discord, handleDiscord] = useState<any>(null);
    const [bans, handleBans] = useState<IBans[]>([]); 

    const getBans = () => {
        instance.get(`${ API_ROUTE }/bans/check?identifier=${ identifier }`).then(response => {
            if(!response.data.done) return console.log(response.data.message); 

            handleBans(response.data.bans); 
        }).catch((e) => console.log(e)); 
    }

    useEffect(() => { 
        handleLocation(null); 
        handleDiscord(null); 

        instance.get(`${ API_ROUTE }/players/single?identifier=${ identifier }`).then(response => {
            if(!response.data.done) return console.log(response.data.message); 

            if(response.data.result[0]) { 
                handleCharacters([response.data.result[0]]);  
            }

            const { result } = response.data; 

            if(result[0]) { 
                if(result[0].last_ip) getClientLocation(result[0].last_ip.toString()).then(response => handleLocation(response));
                if(result[0].discord) getDiscordInformation(result[0].discord).then(response => handleDiscord(response)); 

                getBans();
            }
        }).catch((e) => console.log(e));  
    }, [identifier]); 

    return <> 
 
        <main>  
            {
                bans && bans.length > 0 ? <>
                    <div className={ styles.container }> 
                        {
                            bans[0].active ? <div className={ styles.banned }>
                                ¡Vaya! Parece que hay un baneo { bans[0].permanent ? 'permanente' : 'temporal' } por, "{ bans[0].reason }" <span>Ban ID: { bans[0].id }</span>
                            </div> : null
                        }
                    </div>

                    <div className={ styles.container }>
                        <div className={ styles.body }>
                            <div className={ styles.section }>
                                <div className={ styles.title }>Bans</div>

                                <div className={ styles.description }>
                                    Todo lo relacionado con los baneos que se han asigado a esta cuenta
                                </div>
                            </div>

                            <table> 
                                <tbody>
                                    {
                                        bans.map((ban:IBans) => {
                                            return <tr key={ ban.id }>
                                                <td>{ ban.id }</td>
                                                <td>{ ban.reason }</td>
                                                <td>{ !ban.active ? '-' : ban.permanent ? 'Permanente' : ban.expiry }</td>
                                                <td>{ ban.active ? <span className={ styles.active }>Activo</span> : <span className={ styles.appealed }>Apelado</span> }</td>
                                                
                                                {
                                                    administrator && ban.active ? <td><span title='Apelar baneo' className={ `material-icons ${ styles.gavel }` } onClick={() => {
                                                        instance.post(`${ API_ROUTE }/bans/appeal`, {
                                                            id: ban.id
                                                        }).then(response => {
                                                            if(!response.data.done) return console.log(response.data.message); 

                                                            getBans();
                                                        }).catch((e) => console.log(e));
                                                    }}>gavel</span></td> : <td></td> 
                                                }
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </> : null
            } 

            <div className={ styles.account_information } style={{
                backgroundImage: 'url(https://i.pinimg.com/originals/13/29/c5/1329c5fc8c468b92dead3fb941e160e9.jpg)'
            }}> 
                <div className={ styles.discord }>
                    <img draggable={ false }  src={ discord && discord.avatar.link ? discord.avatar.link : 'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg' } />
                    
                    <div className={ styles.information }>
                        <div><span className='material-icons'>badge</span>{ discord && discord.tag && !discord.tag.includes('undefined') ? discord.tag : 'Sin vincular' }</div>
                        <div style={{ cursor: 'pointer' }}><span className='material-icons'>verified</span>{ discord && discord.tag && !discord.tag.includes('undefined') ? discord.id : 'Sin vincular' }</div>
                        <div style={{ cursor: 'pointer' }}><span className='material-icons'>apps</span>{ characters && characters[0] ? characters[0].identifier : '' }</div>
                        <div><span className='material-icons'>location_on</span> { location ? 
                            `${ getFlagEmoji(location.countryCode) } ${ location.country } - ${ location.regionName }` 
                            : 'Desconocida' }
                        </div>
                    </div> 
                </div> 
            </div>

            {
                characters && characters[0] ? characters.map((character:IPlayer) => {
                    return <div className={ styles.container } key={ character.identifier + character.firstname + character.lastname }>
                        <div className={ styles.body }>
                            <div className={ styles.section }>
                                <div className={ styles.title }>Información</div>

                                <div className={ styles.description }>
                                    Aquí podrás encontrar información general sobre este personaje
                                </div>
                            </div>

                            <table> 
                                <tbody>
                                    <tr>
                                        <td>Nombre & Apellido</td>
                                        <td>{ character.firstname + ' ' + character.lastname }</td>
                                    </tr>

                                    <tr>
                                        <td>Fecha de Nacimiento</td>
                                        <td>{ character.dateofbirth }</td>
                                    </tr>

                                    <tr>
                                        <td>Trabajo</td>
                                        <td><span style={{
                                            backgroundColor: applyColorOpacity(character.color, .2),
                                            color: character.color, 
                                            padding: '5px', 
                                            borderRadius: '4px', 
                                        }}>{ character.job }</span></td>
                                    </tr>

                                    <tr>
                                        <td>Dinero en banco</td>
                                        <td className={ styles.money }> 
                                            <div>
                                                <span className='material-icons'>account_balance</span>
                                                { JSON.parse(character.accounts).bank.toLocaleString('es-ES') }$
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Dinero en mano</td>
                                        <td className={ styles.money }> 
                                            <div>
                                                <span className='material-icons'>savings</span>
                                                { JSON.parse(character.accounts).money.toLocaleString('es-ES') }$
                                            </div>
                                        </td>
                                    </tr>

                                    {
                                        character.player_vehicles ? <>
                                            <tr>
                                                <td>Vehículos</td>
                                                <td className={ styles.player_vehicles }> 
                                                    {
                                                        character.player_vehicles.split(', ').map((vehicle:string) => {
                                                            return <div key={ vehicle }>
                                                                { vehicle }
                                                            </div>
                                                        })
                                                    }
                                                </td>
                                            </tr>
                                        </> : null 
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className={ styles.inventory }>
                            {
                                character.inventory != '[]' ? Object.entries(JSON.parse(character.inventory)).map((item:any, index:number) => {
                                    if(!item[1]) return; 

                                    return <div className={ styles.item } key={ 'item' + item[1].name + ':' + index + ':' + item[1].slot }>
                                        <img  draggable={ false } onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src= `${ BASE_URL }/assets/items/packaged_chicken.png`;
                                        }} src={`${ BASE_URL }/assets/items/${ item[1].name }.png`}  />    
                                    </div>
                                }) : null
                            } 
                        </div>
                    </div>
                }) : null
            } 
        </main>
    </>
}