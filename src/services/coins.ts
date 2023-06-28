import instance from '@/instance';
import { API_ROUTE } from '@/config';  

export const getCoins = async () => {   
    try {
        const response:any = await instance.get(`${ API_ROUTE }/payments/coins/get`); 

        if(!response.data.done) return 0; 
        return response.data.coins; 
    } catch (error) {
        return 0
    }
} 

export const getTransactions = async () => {   
    try {
        const response:any = await instance.get(`${ API_ROUTE }/payments/transactions/get`); 

        if(!response.data.done) return false; 
        return response.data.transactions; 
    } catch (error) {
        return false
    }
} 

export const getDonationCodes = async () => {   
    try {
        const response:any = await instance.get(`${ API_ROUTE }/payments/codes/get`); 

        if(!response.data.done) return false; 
        return response.data.codes; 
    } catch (error) {
        return false
    }
} 