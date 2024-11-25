const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/channels.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stoplisten')
        .setDescription('停止監聽這個頻道的爛笑話'),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator) && !interaction.user.id === '810409750625386497' ) return interaction.reply('你沒有權限使用此指令');
        const channel = interaction.channel.id;
        let channels = db.get('channels') || [];
        if (!channels.includes(channel)) {
            return interaction.reply(`<#${channel}> 不在監聽清單中`);
        } else {
            channels = channels.filter(item => item !== channel);
            db.set('channels', channels);
            return interaction.reply(`已停止監聽: <#${channel}>`);
        }
    }
};