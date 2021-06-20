import axios from "axios"

export const greet = async (message) => {
	await axios.get("https://api.quotable.io/random")
	.then(res => message.channel.send(res.data["content"]))
}