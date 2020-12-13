const Discord =require('discord.js');
const client = new Discord.Client()

const command = require('./command')
const config = require('./config.json');

client.on('ready', () => {
    console.log('The bot is online');
})

client.login(config.token)
