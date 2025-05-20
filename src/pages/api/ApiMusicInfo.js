async function ApiMusicInfo(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    const dataDinamica = new Date();
    res.json({
        date: dataDinamica.toGMTString(),
        name: "ola"



    })



    const clientId = '388f9b1eab034fa0a2071d435f0e96a7'
    const clientSecret = '5ba16c69a08445479095d220497b7608'
    const redirectUrl = "https://open.spotify.com/intl-pt"



    const tokenApi = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(clientId + ':' + clientSecret).toString('base64')}`
        },
        body: 'grant_type=client_credentials'

    })

    const data = await tokenApi.json();
    return data.access_token;



}

export default ApiMusicInfo;