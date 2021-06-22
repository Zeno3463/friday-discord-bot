import axios from "axios"
import discord from "discord.js";
import { pendingUpdate, ruleList } from "./globalVariables.js";

export const greet = async (message) => {
	await axios.get("https://api.quotable.io/random") // fetch data from the random quote api
	.then(res => {
 		// wrap the quote in an embed
		const embed = new discord.MessageEmbed()
		.setColor("#F1EC40")
		.setAuthor("Friday 2.0")
		.setTitle(`Hello ${message.author.username}`)
		.setDescription(res.data["content"]);
	
		message.reply(embed); // send the embed to the user
	})
}

export const rule = async (message, ruleIndex) => {
	
	// wrap the rule according to the index in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle(`Rule #${ruleIndex}`)
	.setDescription(ruleList[ruleIndex-1])

	// send the embed to the user
	message.reply(embed);
}

export const joke = async (message) => {
	await axios.get("https://official-joke-api.appspot.com/random_joke") // get a joke from the api
	.then(res => {

		// wrap the joke in an embed
		const embed = new discord.MessageEmbed()
		.setColor("#F1EC40")
		.setAuthor("Friday 2.0")
		.setTitle(res.data["setup"])
		.setDescription(res.data["punchline"])

		// send the embed to the user
		message.reply(embed);
	})
}

export const achievement = async (message, ach) => {
	// send the achievement image to the user
	message.channel.send(`https://minecraftskinstealer.com/achievement/${parseInt(Math.random() * 29)}/Achievement+Get%21/${ach.join("%20")}`); 
}

export var triviaAnswer = "";

export const generateTriviaQuestion = async (client) => {
	await axios.get("https://opentdb.com/api.php?amount=1")
	.then(res => {

		// get all the answer choices
		var answerChoices = [];
		for (var ans of res.data["results"][0]["incorrect_answers"]) answerChoices.push(ans);
		answerChoices.splice(Math.random * (answerChoices.length - 1), 0, res.data["results"][0]["correct_answer"]);

		// wrap the question in an embed
		const embed = new discord.MessageEmbed()
		.setColor("#F1EC40")
		.setAuthor("Friday 2.0")
		.setTitle(res.data["results"][0]["question"].split("&quot;").join('"'))
		.setDescription("you may guess and submit your answer by typing $ans [answer] in #riddle_answer")
		.addField("category", res.data["results"][0]["category"])
		.addField("difficulty", res.data["results"][0]["difficulty"])
		.addField("answer choices", answerChoices.join("|"));

		// update the answer variable to the answer of this question		
		triviaAnswer = res.data["results"][0]["correct_answer"];

		// send a trivia question to the selected channel
		client.channels.cache.get("856092599165124617").send(embed);
	})
}

export const checkTriviaAnswer = async (message, userAnswer) => {
	
	// wrap the congratulation message in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle(`Hello ${message.author.username}!`)

	// if the user's answer is in the trivia answer, congratulate the user
	if (userAnswer === triviaAnswer) {
		embed.setDescription(`
		This is regarding to your answer for the trivia in ZenoGameDev's server.
		You guessed it correctly! Congratulations!
		Now that you know the answer, it is up to you if you want to reveal this answer to the others or keep it a secret.
		Finally, thank you for joining ZenoGameDev. I am Friday 2.0, and thank you for your support!
		`)

		// DM the embed to the user
		message.author.send(embed);
	} else {
		embed.setDescription(`
		This is regarding to your answer for the trivia in ZenoGameDev's server.
		Unfortunately, you got the incorrect answer. :(
		But, don't give up! Keep on trying! You'll get there!
		Nonetheless, thank you for joining ZenoGameDev. I am Friday 2.0, and thank you for your support!
		`)

		// DM the embed to the user
		message.author.send(embed);
	}
}

export const revealTriviaAnswer = async (message) => {
	if (message.author.id === "715474608152772648") {
		message.author.send(triviaAnswer);
	}
}

export const pendingUpdates = async (message) => {
	
	// wrap the congratulation message in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle("Future Updates")
	.addFields(...pendingUpdate)	
	
	message.reply(embed);
}

export const help = async (message) => {
	// wrap the congratulation message in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle("Friday 2.0 Commands")
	.addFields(
		{name: "$hello", value: "greet"},
		{name: "$rule [index]", value: "get the rules of this server by index"},
		{name: "$joke", value: "tell you a joke"},
		{name: "$ach [achievement]", value: "create a minecraft achievement"},
		{name: "$ans [answer]", value: "submit an answer to daily trivia"},
		{name: "$pending_updates", value: "get all the possible future updates of this bot"},
		{name: "$help", value: "shows you the list of all the commands"},
		)
		
		message.reply(embed);
	}
	
export const invalidCommand = async (message) => {
	// wrap the congratulation message in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle("Future Updates")
	.setDescription("unknown command, $help for help")

	message.reply(embed);
}