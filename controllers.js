import axios from "axios"
import discord from "discord.js";

export const greet = async (message) => {
	await axios.get("https://api.quotable.io/random") // fetch data from the random quote api
	.then(res => {
 		// wrap the quote in an embed
		const embed = new discord.MessageEmbed()
		.setColor("#F1EC40")
		.setAuthor("Friday 2.0")
		.setDescription(res.data["content"]);
	
		message.channel.send(embed); // send the embed to the user
	})
}

export const rule = async (message, ruleIndex) => {
	const ruleList = [
		"Don't discuss religion or politics, except it's in a special scenario. If you do, keep it extremely respectful.",
		"Don't post illegal, threatening, racist, sexist, NSFW, homophobic, or transphobic content.",
		"Keep it kind of PG-13, because we might have some younger people here.",
		"Please be nice and respectful to everybody.",
		"Spam only at #😖spam ",
		"Use @mentions wisely (you can use @🙋‍♂️Want Notifications instead of @everyone).",
		"No caps unless it is really necessary.",
		"Other common discord rules apply.",
		"Common senses apply.",
	];
	
	// wrap the rule according to the index in an embed
	const embed = new discord.MessageEmbed()
	.setColor("#F1EC40")
	.setAuthor("Friday 2.0")
	.setTitle(`Rule #${ruleIndex}`)
	.setDescription(ruleList[ruleIndex-1])

	// send the embed to the user
	message.channel.send(embed);
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
		message.channel.send(embed);
	})
}

export const achievement = async (message, ach) => {
	// send the achievement image to the user
	message.channel.send(`https://minecraftskinstealer.com/achievement/${parseInt(Math.random() * 29)}/Achievement+Get%21/${ach.join("%20")}`); 
}

export var triviaAnswer = "";

export const generateTriviaQuestion = async (message) => {
	await axios.get("https://opentdb.com/api.php?amount=1")
	.then(res => {

		// wrap the question in an embed
		const embed = new discord.MessageEmbed()
		.setColor("#F1EC40")
		.setAuthor("Friday 2.0")
		.setTitle("Daily Trivia")
		.setDescription(res.data["results"][0]["question"])
		.addField("category", res.data["results"][0]["category"])
		.addField("difficulty", res.data["results"][0]["difficulty"])

		// update the answer variable to the answer of this question		
		triviaAnswer = res.data["results"][0]["correct_answer"].split(" ");

		message.channel.send(embed);
	})
}

export const checkTriviaAnswer = async (message, userAnswer) => {
	
	// if the user's answer is in the trivia answer, congratulate the user
	for (var acceptableAns of triviaAnswer) {
		if (userAnswer === acceptableAns) {

			// wrap the congratulation message in an embed
			const embed = new discord.MessageEmbed()
			.setColor("#F1EC40")
			.setAuthor("Friday 2.0")
			.setTitle(`Hello ${message.author.username}!`)
			.setDescription(`
			This is regarding to your answer for the trivia in ZenoGameDev's server.
			You guessed it correctly! Congratulations!
			The full answer is ${triviaAnswer.join(" ")}
			Now that you know the answer, it is up to you if you want to reveal this answer to the others or keep it a secret.
			Finally, thank you for joining ZenoGameDev. I am Friday 2.0, and thank you for your support!
			`)

			// DM the embed to the user
			message.author.send(embed);

			break;
		}
	}
}

export const revealTriviaAnswer = async (message) => {
	if (message.author.id === "715474608152772648") {
		message.author.send(triviaAnswer.join(" "));
	}
}