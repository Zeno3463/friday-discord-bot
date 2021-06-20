import axios from "axios"
import discord from "discord.js";
import { embedTemplate } from "./embedTemplate.js";

export const greet = async (message) => {
	await axios.get("https://api.quotable.io/random") // fetch data from the random quote api
	.then(res => {
		const embed = embedTemplate.setDescription(res.data["content"]); // wrap the quote in an embed
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
	const embed = embedTemplate
	.setTitle(`Rule #${ruleIndex}`)
	.setDescription(ruleList[ruleIndex-1])

	// send the embed to the user
	message.channel.send(embed);
}

export const joke = async (message) => {
	await axios.get("https://official-joke-api.appspot.com/random_joke") // get a joke from the api
	.then(res => {

		// wrap the joke in an embed
		const embed = embedTemplate
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