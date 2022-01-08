import DiscordJS, { Intents } from 'discord.js'
import {token, prefix} from './config.json'


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS
    ]
})

client.on('ready', () => {
    console.log('the bot is ready')
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild?.name}\n Total Members: ${interaction.guild?.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\n Your id: ${interaction.user.id}`);
	}
})

client.login(token)