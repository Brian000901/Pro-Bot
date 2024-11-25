const { SlashCommandBuilder } = require('discord.js');
const JSONdb = require('simple-json-db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('owo')
        .setDescription('查看自己的owo次數'),
    async execute(interaction) {
        const db = new JSONdb('./db/owo.json');
        const owo = (db.get('owoCounts') || {})[interaction.user.id] || 0;
        return interaction.reply(`**What's this?** | <@${interaction.user.id}>, you've **owo**'d \`${owo}\` times.`);
    }
};