import dotenv from "dotenv";
import discord from "discord.js";
import { greet } from "./controllers.js";
dotenv.config();
const client = new discord.Client();

client.on("message", message => {
	if (!message.content.startsWith("$")) return
	switch (message.content.substring(1)) {
		case "hello":
			greet(message)
			break;
	
		default:
			break;
	}
})

client.login(process.env.TOKEN);