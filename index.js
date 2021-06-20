import dotenv from "dotenv";
import discord from "discord.js";
import { greet, rule } from "./controllers.js";
dotenv.config();
const client = new discord.Client();

client.on("message", message => {

	// don't execute the next line if the message is not a bot command
	if (!message.content.startsWith("$")) return;

	const command = message.content.substring(1).split(" ");	

	// get the message content
	switch (command[0]) {

		// greet the user if the person says hello
		case "hello":
			greet(message);
			break;

		// display a rule according to the index given by the user if the user wants to display a rule
		case "rule":
			const index = command[1]; // get the index of the rule	
			rule(message, index); // display the rule according to the index
			break;

		default:
			break;
	}
})

client.login(process.env.TOKEN);