export default async function GetImages(){
    try{
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=pokemon&api_key=5jPQE4Oe3NJuZbtMgBTGjkVPTmH2v9MV&limit=1", {mode: 'cors'});
        if(!response.ok){
            throw new Error(`Api request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data
    }
    catch(error)
    {
        console.error("Error fetching GIFS", error);
    }
    
}