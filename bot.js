const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toLowerCase();
    if (msg === '^assassination classroom') {
      message.reply('https://www.watchcartoononline.io/anime/assassination-classroom-english-subbed');
    } else if (msg === '^blend s') {
      message.reply('https://https://www.watchcartoononline.io/anime/blend-s-english-subbed');
    } else if (msg === '^re:zero') {
      message.reply('https://www.watchcartoononline.io/anime/re-zero-kara-hajimeru-isekai-seikatsu-english-subbed');
    } else if (msg === '^help') {
      message.reply('To use this bot please enter the name of an anime with ^ in front of it and if we have that anime link it will');
    } else if (msg === '^list') {
      message.reply('assassination classroom, blend s, re:zero ');
    }
});

client.login(process.env.BOT_TOKEN);
