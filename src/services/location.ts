import { API_ROUTE } from '@/config'; 
import axios from 'axios';
 
export default async function getClientLocation(ip:string) {
    return axios.get(`${ API_ROUTE }/location?ip=${ ip }`).then(response => { 
        return response.data;   
    }).catch((e) => { 
        return false; 
    }); 
}