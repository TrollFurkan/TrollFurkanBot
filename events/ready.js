const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "🔥ta!yardım By LetsGo🔥",

        "🔥ta!balık komudu aktif🔥",

        "🔥ta!aşkölçer Aktif🔥",

        "🔥ta!8ball Aktif🔥",

        "🔥ta!emojiyazı Aktif🔥",

        "🔥ta!çekiç Aktif🔥",

        "🔥 TrollFurkan'a Ulaşmak İçin Troll Furkan#8987🔥",
        "🔥ta!atasözü🔥",

        `${client.users.size} Kullanıcı İçin Teşekkürler`,

        `${client.guilds.size} Sunucu İçin Teşekkürler`,

        `Rıca Etsem Beni Eklermisin ta!davet`,



        `🔥Yapımcım Troll Furkan#8987`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], `https://www.twitch.tv/miafitz`);
        }, 2 * 2500);

};
