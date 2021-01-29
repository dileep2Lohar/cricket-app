const API_KEY = "OcpvjiOKOJPDIYToHGM1TGiMmBz2"


export const Getmatches = () => {
    const url = `https://cricapi.com/api/matches/${API_KEY}`
    return fetch(url).then((response)=> response.json()).catch((error)=> console.log(error + " error"))
};