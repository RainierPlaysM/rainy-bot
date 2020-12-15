const Discord = require('discord.js');
const client = new Discord.Client()

const command = require('./commands.js')
const config = require('./config.json');

client.on('ready', () => {
    console.log('The bot is online');

    command(client, ['ping', 'test'], message => {
      message.channel.send('Poggers!') 
    })

    command(client, ['servers'], message => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members.`)
        }) 
    })

    command(client, ['purge'], message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(results)
            })
        }
    })

    client.user.setPresence({
        activity: {
            name: '$help | v1.0.0',
            type: 'PLAYING'
        }
    })
})

client.login(config.token)
