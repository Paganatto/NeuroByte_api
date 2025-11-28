const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const USER = {
  email: "admin@neurobyte.com.br",
  senha: "senha123"
};

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Envie email e senha." });
  }

  if (email === USER.email && senha === USER.senha) {
    return res.json({ mensagem: "Login realizado com sucesso!" });
  }

  return res.status(401).json({ erro: "Usuário ou senha inválidos." });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
