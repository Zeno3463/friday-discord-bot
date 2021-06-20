import dotenv from "dotenv";
import discord from "discord.js";
import { achievement, greet, joke, rule } from "./controllers.js";
dotenv.config();
const client = new discord.Client();

client.on("message", message => {

	// don't execute the next line if the message is not a bot command
	if (!message.content.startsWith("$")) return;

	// get the command
	const command = message.content.substring(1).split(" ");	

	switch (command[0]) {

		// greet the user if the person user says hello
		case "hello":
			greet(message);
			break;

		// display a rule according to the index given by the user if the user wants to display a rule
		case "rule":
			const index = command[1]; // get the index of the rule	
			rule(message, index); // display the rule according to the index
			break;

		// send a joke if the user asks for a joke
		case "joke":
			joke(message);
			break;

		// send a minecraft achievement image if the user asks for it
		case "ach":
			command.shift(); // remove the first element of the command
			var ach = command; // get the rest of the elements of the command
			achievement(message, ach);

		default:
			break;
	}
})

client.login(process.env.TOKEN);