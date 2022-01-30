// const { Telegraf } = require('telegraf')
	
// const bot = new Telegraf(process.env.telegramToken)

// let isstop=0;

// bot.start((ctx) => { 
// 	if(!isstop){
// 				ctx.reply(`Hai ${ctx.message.from.first_name}\n Welcome To yuki22.\n Check our website for more https://yuki22.herokuapp.com`)
// 	}
// })

// bot.command('help', (ctx) =>{ 
// 		if(!isstop){
// 			ctx.reply(`Hey ${ctx.message.from.first_name}\n i am stil not fully compeleted`)
// 		}
// 	})

// bot.command('joke', (ctx) =>{ 
// 		if(!isstop){
// 			ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that ${ctx.message.from.first_name} was very bad boy`)
// 		}
// 	})

// bot.command('suthan', (ctx) =>{ 
// 		if(!isstop){
// 			ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that suthan also called as surthi. he love pacha`)
// 		}
// 	})

// bot.command('raja', (ctx) =>{ 
// 		if(!isstop){
// 			ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that raja is good boy and he created me`)
// 		}
// 	})
 
// bot.command('dim', (ctx) =>{ 
// 		if(!isstop){
// 			ctx.reply(`Hai ${ctx.message.from.first_name}\n Do you know that dim is foodie. he loves doesa`)
// 		}
// 	})

// bot.on("text",(ctx)=>{
// 	console.log()
// 	let msg=String(ctx.update.message.text)
// 	if(msg==="/rajastart" && ctx.update.message.from.username==='programmerraja' ){
// 			ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I will be start because my guru said to start me `)
// 			isstop=0
// 			return;
// 	}
// 	if(!isstop){
// 			if(msg==="/i love you"){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I love you 😘 TOO`)
// 			}
// 			else if(msg==="/stop" &&  ctx.update.message.from.username==='programmerraja'  ){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I will be stopped because my guru said to stop me `)
// 				isstop=1
// 			}
// 			else if(msg==="/rajastart" && ctx.update.message.from.username==='programmerraja' ){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I will be start because my guru said to start me `)
// 				isstop=0
// 			}
// 			else if(msg==="/stop" ){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I will not be stopped because my guru(raja) don't said to stop me.\n hello ${ctx.message.from.first_name} i won't obey your word `)
// 			}
// 			else if(msg==="/start" ){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 I will not be start because my guru(raja) don't said to start me.\n hello ${ctx.message.from.first_name} i won't obey your word `)
// 			}
// 			else if(msg==="/ask"){
// 				ctx.reply(`Hai  @juicyheck i am yuki a bot.\n Plse add intriew process for wipro.`)
// 			}
// 			else if(msg.startsWith("/")){
// 				ctx.reply(`Hai  ${ctx.message.from.first_name} 👋 you saying ${msg}`)
// 			}
// 			else{
// 				return ;
// 			}
// 	}
// });

// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

// module.exports=bot
