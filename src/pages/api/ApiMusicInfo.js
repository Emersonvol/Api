async function ApiMusicInfo(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  
  res.json({
    name: "ola"

  })

 

}


export default ApiMusicInfo;