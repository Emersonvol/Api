export default function handler(req, res) {
  // Adiciona CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end(); // pré-verificação
    return;
  }

  const dataDinamica = new Date();

  res.status(200).json({
    date: dataDinamica.toGMTString(),
  });
}