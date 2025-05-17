function ApiMusicInfo(req, res) {
    const dataDinamica = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(200).end(); 
  }
    res.json({
        date: dataDinamica.toGMTString(),
        name:"ola"
    })
 res.status(200).json({
    date: dataDinamica.toGMTString(),
  });

  
}

export default ApiMusicInfo;