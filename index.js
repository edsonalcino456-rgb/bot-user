const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🤖 BOT USER está online!");
});

app.get("/status", (req, res) => {
  res.json({
    bot: "Usuário Bot",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`Usuário bot iniciado na porta ${PORT}`);
});
