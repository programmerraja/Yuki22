const { Telegraf } = require('telegraf')
	
const bot = new Telegraf(process.env.telegramToken)

bot.start((ctx) => ctx.reply('Welcome To yuki bot'))
bot.help((ctx) => ctx.reply('I am the King'))

bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

module.exports=bot