async function ApiMusicInfo(req, res) {
  const dataDinamica = new Date();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const apiDoSpotify = await fetch("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy") 
  const Dados = await apiDoSpotify.json()
  console.log(dados)


  if (req.method === "OPTIONS") {
    res.status(200).end();
  }
  res.json({


  })
  res.status(200).json({
    date: dataDinamica.toGMTString(),
  });


}

export default ApiMusicInfo;