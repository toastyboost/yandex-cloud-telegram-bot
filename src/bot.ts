import { Telegraf } from 'telegraf'

const BOT_TOKEN = process.env.BOT_TOKEN || ''

export const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Hello, I'm a bot deployed at ${process.env}`)
})

bot.on('text', async (ctx) => {
  try {
    const text = ctx.message.text;
    ctx.reply(text);
  } catch (e) {
    const err = String(e);
    ctx.reply(err);
  }
});

