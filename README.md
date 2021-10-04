# Bridge-Bot
Discord bot that make bridge between server. It read messages from a specific channel and send them to all the others guilds in the config.json. Messages are embeded with the sender username, the guild and the date.

## Setup
First go to the main directory and run `npm install`<br>
Then you need to create a file named config.json.
The content should be in this form:
```
{
  "token": "Your app token",
  "guildsId": ["The id of the guild", "The id of the channel to look at"]
}
```