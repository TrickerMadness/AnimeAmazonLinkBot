const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'assassination classroom') {
      message.reply('https://www.watchcartoononline.io/anime/assassination-classroom-english-subbed');
      }
});

client.login(process.env.BOT_TOKEN);
