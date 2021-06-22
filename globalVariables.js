export const pendingUpdate = [
	{ name: "add $8ball command", value: "no progress" },
	{ name: "fix daily trivia bugs", value: "in progress" },
	{ name: "display server status", value: "no progress" },
];

export const ruleList = [
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

export const commands = [
	{name: "$hello", value: "greet"},
	{name: "$rule [index]", value: "get the rules of this server by index"},
	{name: "$joke", value: "tell you a joke"},
	{name: "$ach [achievement]", value: "create a minecraft achievement"},
	{name: "$ans [answer]", value: "submit an answer to daily trivia"},
	{name: "$pending_updates", value: "get all the possible future updates of this bot"},
	{name: "$src_code", value: "get the source code of this bot"},
	{name: "$help", value: "shows you the list of all the commands"},
]

export const timeToSendTrivia1 = 7;
export const timeToSendTrivia2 = 9;
export const changeSentTrivia = (val) => {
	sentTrivia = val;
}
export let sentTrivia = false;
export const setTriviaAnswer = (val) => {
	triviaAnswer = val;
}
export let triviaAnswer = "";
