const { Telegraf } = require('telegraf')
	
const bot = new Telegraf(process.env.telegramToken)

let help_text="hai"


bot.start((ctx) => ctx.reply(`Hai ${ctx.message.from.username} \
							 Welcome To yuki bot.\n \
							 Check our website for more https://yuki22.herokuapp.com`))

bot.command('help', (ctx) => ctx.reply(`Hey ${ctx.message.from.username} \
										i am stil not fully compeleted`))

bot.command('joke', (ctx) => ctx.reply(`Hai ${ctx.message.from.username}\n \
										do you know that ${ctx.message.from.username} 
										\ was very bad boy`))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

module.exports=bot