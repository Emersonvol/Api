function ApiMusicInfo(req, res) {
    const dataDinamica = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.json({
        date: dataDinamica.toGMTString()
    })

}

export default ApiMusicInfo;