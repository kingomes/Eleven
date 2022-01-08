const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('replies with pong'),
    new SlashCommandBuilder().setName('server').setDescription('replies with server info'),
    new SlashCommandBuilder().setName('user').setDescription('replies with user info')
]
    .map(command => command.toJSON())

const rest = new REST({version: '9'}).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Successfully registered commands.'))
    .catch(console.error)