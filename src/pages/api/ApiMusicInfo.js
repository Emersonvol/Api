function ApiMusicInfo(req, res) {
    const dataDinamica = new Date();

    res.json({
        date: dataDinamica.toGMTString()
    })

}

export default ApiMusicInfo;