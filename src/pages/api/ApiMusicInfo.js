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

  async function getArtist(artistId) {
    const token = await getToken(); // Obter o token de acesso

    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    return data;
  }

  async function main() {
    const artistId = '6K4tUn3H5fV0lW1X1hQ9zS'; // ID do artista (ex: Beyoncé)
    const artistData = await getArtist(artistId);

    console.log(artistData);
  }

  main();

}


export default ApiMusicInfo;