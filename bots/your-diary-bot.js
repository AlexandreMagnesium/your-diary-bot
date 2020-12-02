const Telegraf= require('telegraf');
const bot = new Telegraf(process.env.TOKEN);

const cron = require('node-cron')

const day = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
const month = ["січня", "лютого", "беререзня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]


const startBot = () => {

	bot.start( ctx => ctx.reply(
`Привіт, ${ctx.from.first_name}!
Я – бот розроблений @my_Iover, щоб зручно вести щоденик.
Підключи мене до свого щоденника, як це вказано в інструкції нижче.`))
	
	bot.command("work", (ctx) => {
		ctx.reply("YES!!! -3!!! uuhhhuuuuu!!!!");
	});


	cron.schedule('0 7 * * *', () => {
  		bot.telegram.sendMessage(process.env.CHANNEL,
`<b>${day[new Date().getDay()]}, ${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}</b>



<b>П'ять речей, зроблених за день, якими я пишаюсь:</b>

<b>1. </b>
<b>2. </b>
<b>3. </b>
<b>4. </b> 
<b>5. </b>`, {parse_mode : "HTML"})
})

	bot.launch();
}


module.exports.startBot = startBot;
