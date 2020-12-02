const Telegraf= require('telegraf');
const bot = new Telegraf(process.env.TOKEN);

const cron = require('node-cron')

const day = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
const month = ["січня", "лютого", "беререзня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]


const startBot = () => {
	
	bot.command("a", (ctx) => {
		ctx.reply("AAAAAA!!");
	});

	bot.launch();
}


module.exports.startBot = startBot;
