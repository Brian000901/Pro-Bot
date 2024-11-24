const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/channels.json');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listen')
        .setDescription('監聽這個頻道的爛笑話'),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator) && !interaction.member.id === '810409750625386497' ) return interaction.reply('你沒有權限使用此指令');
        if (!fs.existsSync('./db')) {
            fs.mkdirSync('./db');
        }
        const channel = interaction.channel.id;
        let channels = db.get('channels') || [];
        if (channels.includes(channel)) {
            return interaction.reply(`<#${channel}> 已經在監聽清單中`);
        } else {
            channels.push(channel);
            db.set('channels', channels);
            return interaction.reply(`已加入監聽清單: <#${channel}>`);
        }
    }
};