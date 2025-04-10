const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// /start command
bot.start((ctx) => {
  ctx.reply("Bienvenue sur Webtopia ! Découvrez les cultures, traditions et divertissements du monde entier.\n\nWelcome to Webtopia! Discover world cultures, traditions, and entertainment.");
  ctx.reply("Soutenez notre projet culturel en visitant ce lien : https://jestugoa.top/4/9097055\nSupport our cultural project by visiting this link:https://jestugoa.top/4/9097055");
});

// Keywords: culture / tradition / entertainment
bot.hears(/culture|tradition|entertainment/i, (ctx) => {
  ctx.reply("Explorez les traditions fascinantes d’Afrique, d’Océanie, et d'autres régions.\nExplore the fascinating traditions of Africa, Oceania, and beyond.");
  ctx.reply("Regardez maintenant : https://jestugoa.top/4/9097055\nWatch now: https://jestugoa.top/4/9097055");
});

// Default reply
bot.on('text', (ctx) => {
  ctx.reply("Tapez 'culture' ou 'tradition' pour commencer l'exploration.\nType 'culture' or 'tradition' to begin exploring.");
});

bot.launch();
          
