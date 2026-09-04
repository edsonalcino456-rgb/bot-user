const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🤖 BOT USER está online!");
});

app.get("/status", (req, res) => {
  res.json({
    bot: "Bot User",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`Bot User iniciado na porta ${PORT}`);
});
