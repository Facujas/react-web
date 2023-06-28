import axios from "axios";

export default async function getDiscordInformation(discordId:string) {
    return axios.get(`https://discordlookup.mesavirep.xyz/v1/user/${ discordId }`).then(response => {
        if(response.data.tag.includes('undefined')) return false; 

        return response.data; 
    })
}