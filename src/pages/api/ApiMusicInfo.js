function ApiMusicInfo(req, res) {
  const dataDinamica = new Date();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader("https://accounts.spotify.com/api/token")
  res.setHeader("Content-Type: application/x-www-form-urlencoded")
  res.setHeader("grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret")

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