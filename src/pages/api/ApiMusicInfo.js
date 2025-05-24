async function ApiMusicInfo(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 
  // const musicas = fetch('/music/musicas.json')
  // const dados = await musicas.json()
  // console.log(dados)
  res.json({
      nome:"oola"

  })

 

}


export default ApiMusicInfo;