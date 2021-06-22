export const pendingUpdate = [
	{ name: "add $help command", value: "in progress" },
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

export const timeToSendTrivia1 = 7;
export const timeToSendTrivia2 = 9;
export const changeSentTrivia = (val) => {
	sentTrivia = val;
}
export let sentTrivia = false;

