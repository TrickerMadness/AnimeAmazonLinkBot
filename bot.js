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
      message.reply('To use this bot please enter the name of an anime with ^ in front of it and if we have that anime link it will display a website/link where you can watch it');
    } else if (msg === '^list') {
      message.reply('assassination classroom, blend s, re:zero, sao, akashic records of bastard magic instructor, conan, naruto, foodwars, dragonballz, pokemon');
    } else if (msg === '^trash') {
      message.reply('https://www.watchcartoononline.io/anime/sword-art-online');
    } else if (msg === '^akashic records of bastard magic instructor') {
      message.reply('http://www.crunchyroll.com/akashic-records-of-bastard-magic-instructor');
    } else if (msg === '^conan') {
      message.reply('https://www.animegg.org/series/detectiveconan');
    } else if (msg === '^naruto') {
      message.reply('https://www.animegg.org/series/naruto%27');
    } else if (msg === '^foodwars') {
      message.reply('https://www.animegg.org/series/shokugeki-no-souma');
    } else if (msg === '^dragonballz') {
      message.reply('https://www.animegg.org/series/dragonball-z%27');
    } else if (msg === '^pokemon') {
      message.reply('https://www.animegg.org/search?search=pokemon%27');
     
    
});

bot.on('ready', () => {
    console.log('Bot Launched...');
    bot.user.setStatus('online');
    bot.user.setPresence({ game: { name: 'MyName', type: 0 } });
});
client.login(process.env.BOT_TOKEN);
