const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

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

// /start command handler with main menu
bot.start((ctx) => {
  ctx.reply(
    "Bienvenue sur Webtopia ! Découvrez les cultures, traditions et divertissements du monde entier.\n\n" +
    "Welcome to Webtopia! Discover world cultures, traditions, and entertainment.",
    Markup.inlineKeyboard([
      [Markup.button.callback("Cultures / Cultures", "menu_cultures")],
      [Markup.button.callback("Divertissements / Entertainment", "menu_entertainment")],
      [Markup.button.callback("Soutenir le projet / Support Project", "menu_support")]
    ])
  );
});

// Callback handlers for menu choices
bot.action("menu_cultures", (ctx) => {
  ctx.reply(
    "Explorez les traditions fascinantes d’Afrique, d’Océanie, et d'autres régions.\n" +
    "Explore the fascinating traditions of Africa, Oceania, and beyond.\n\n" +
    "Regardez maintenant : https://jestugoa.top/4/9097055"
  );
});

bot.action("menu_entertainment", (ctx) => {
  ctx.reply(
    "Profitez de vidéos, musiques, danses et plus encore du monde entier !\n" +
    "Enjoy videos, music, dance, and more from around the world!\n\n" +
    "Regardez maintenant : https://jestugoa.top/4/9097055"
  );
});

bot.action("menu_support", (ctx) => {
  ctx.reply(
    "Soutenez notre projet culturel en visitant ce lien :\n" +
    "Support our cultural project by visiting:\n\n" +
    "https://jestugoa.top/4/9097055"
  );
});

// Fallback text handler
bot.on('text', (ctx) => {
  ctx.reply("Tapez /start pour accéder au menu principal.\nType /start to access the main menu.");
});

// Start Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
