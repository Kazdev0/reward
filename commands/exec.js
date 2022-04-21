const exec = require('child_process')
const Discord = require('discord.js');
const owner = require("../config/keys").botOWNER

module.exports.run = async (client, message, args) => {//renata#0001
    if (message.author.id !== owner) return message.channel.send(":no_entry: Bu komutu sadece bot sahibi kullanabilir.");
    if (!args.join(" ")) return message.channel.send(":no_entry: Çalıştırılacak komudu boş bırakmayın.")
    exec.exec(`${args.join(' ')}`, (error, stdout) => {
        const response = (error || stdout);
        let embed = new Discord.MessageEmbed()
            .setTitle(` Exec`)
            .addField("Giriş", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
            .addField("Çıkış", `\`\`\`js\n${response}\n\`\`\``)
            .setColor('RED');

        message.channel.send(embed);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['execute', 'ex'],
    permLevel: 0
};

exports.help = {
    name: "exec"
};