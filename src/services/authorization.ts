import instance from '@/instance';
import { API_ROUTE } from '@/config';  

export const getSteamAuth = async () => {   
    try {
        const response:any = await instance.get(`${ API_ROUTE }/auth/check`); 

        if(!response.data.done) return false; 
        return response.data.steam; 
    } catch (error) {
        return false 
    }
}

export const hasPermissions = async (steam:string) => {
    if(!steam) return false; 

    try { 
        const response:any =  await instance.get(`${ API_ROUTE }/players/single?identifier=${ steam }`);
        
        if(!response.data.done) return false;  

        if(response.data.result[0].has_staff_perms) return true; 

        return false; 
    } catch (error) {
        return false; 
    }
}