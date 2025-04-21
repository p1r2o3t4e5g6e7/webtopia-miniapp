const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf } = require('telegraf');

const app = express();
const port = process.env.PORT || 3000;
const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware to parse incoming requests
app.use(bodyParser.json());

// Telegram webhook endpoint
app.post(`/bot`, (req, res) => {
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

// Bot handlers
bot.start((ctx) => {
  ctx.reply(
    "Bienvenue sur Webtopia ! Découvrez les cultures, traditions et divertissements du monde entier.\n\nWelcome to Webtopia! Discover world cultures, traditions, and entertainment."
  );
});

bot.hears(/culture|tradition|entertainment/i, (ctx) => {
  ctx.reply("Explorez les traditions fascinantes d’Afrique, d’Océanie, et d’autres régions.\nExplore the fascinating traditions of Africa, Oceania, and other regions.");
  ctx.reply("Regardez maintenant : https://jestguoa.top/4/9097055\nWatch now: https://jestguoa.top/4/9097055");
});

bot.on('text', (ctx) => {
  ctx.reply("Tapez 'culture' ou 'tradition' pour commencer l'exploration.\nType 'culture' or 'tradition' to begin exploring.");
});

// Launch Express server (not bot.launch)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
