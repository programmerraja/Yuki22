const { Telegraf } = require('telegraf')
	
const bot = new Telegraf(process.env.telegramToken)

let isstop=0;

bot.start((ctx) => { 
					ctx.reply(`Hai ${ctx.message.from.first_name}\n Welcome To yuki22.\n Check our website for more https://yuki22.herokuapp.com`)})

bot.command('help', (ctx) => ctx.reply(`Hey ${ctx.message.from.first_name}\n i am stil not fully compeleted`))

bot.command('joke', (ctx) => ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that ${ctx.message.from.first_name} was very bad boy`))

bot.command('suthan', (ctx) => ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that suthan also called as surthi. he love pacha`))

bot.command('raja', (ctx) => ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that raja is good boy and he created me`))
 
bot.command('dim', (ctx) => ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that dim is foodie. he loves doesa`))

bot.on("text",(ctx)=>{
	let msg=string(ctx.update.message.text)
	if(!isstop){
			if(msg==="/i love you"){
				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I love you 😘 TOO`)
			}
			else if(msg==="/rajastop"){
				isstop=1
			}
			else if(msg==="/rajastart"){
				isstop=0
			}
			else if(msg.startsWith("/")){
				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 you saying ${msg}`)
			}
			else{
				return ;
			}
	}
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

module.exports=bot
