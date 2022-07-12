// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
	if (message.content == "") return;
	if (!message.guild) return;
	if (message.author != client.user)
	{
		process.env.guildsId.forEach(guildId => {
			if (message.guildId != guildId[0])
			{
				const channel = client.channels.cache.get(guildId[1]);
				const msgEmbed = new MessageEmbed()
					.setColor('#0099ff')
					.setAuthor(message.author.username, message.author.avatarURL())
					.setDescription(message.content)
					.setTimestamp()
					.setFooter('From ' + message.guild.name, message.guild.iconURL());
				channel.send({embeds: [msgEmbed]});
			}
		});
	}
   });

// Login to Discord with your client's token
client.login(process.env.token);
