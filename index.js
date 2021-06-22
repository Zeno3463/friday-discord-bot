import dotenv from "dotenv";
import discord from "discord.js";
import * as http from "http";
import { achievement, checkTriviaAnswer, generateTriviaQuestion, greet, joke, pendingUpdates, revealTriviaAnswer, rule } from "./controllers.js";
dotenv.config();
const client = new discord.Client();

http.createServer((req, res) => {
	res.writeHead(200, {"content-type": "text/plain"});
	res.write("welcome to the server of Friday 2.0");
	res.end();
}).listen(3000 | process.env.PORT);

const timeToSendTrivia1 = 7;
const timeToSendTrivia2 = 9;
var sentTrivia = false;

// called every 1 minute
setInterval(() => {
	// if it is time to send trivia
	if (new Date().getUTCHours() === timeToSendTrivia1 || new Date().getUTCHours() === timeToSendTrivia2){
		// if the trivia has not been sent yet
		if (!sentTrivia){
			sentTrivia = true;
			generateTriviaQuestion(client); // send the trivia
		}
	} else {
		sentTrivia = false;
	}
}, 6000);

// called when the user sent a message
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
			break;

		// check the answer if the user submits an answer to the daily trivia
		case "ans":
			command.shift();
			const answer = command.join(" ");
			checkTriviaAnswer(message, answer);
			break;

		// generate a new trivia question
		case "trivia":
			// execute this code only if Zeno sends this command 
			if (message.author.id === "715474608152772648") generateTriviaQuestion(client);
			break;

		// reveal the answer to the trivia question
		case "ansReveal":
			revealTriviaAnswer(message);
			break;

		case "pending_updates":
			pendingUpdates(message);
			break;

		default:
			break;
	}
})

client.login(process.env.TOKEN);