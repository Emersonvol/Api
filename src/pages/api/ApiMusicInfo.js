async function ApiMusicInfo(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 
  const musicas =await fetch('http://localhost:3000/json/musicas.json')
  const dados = await musicas.json()
 
  res.json({
      nome:dados

  })

 

}


export default ApiMusicInfo;