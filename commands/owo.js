const { SlashCommandBuilder } = require('discord.js');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./data.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('owo')
        .setDescription('查看自己的owo次數'),
    async execute(interaction) {
        const owo = db.get(interaction.user.id) || 0;
        return interaction.reply(`**What's this?** | ${interaction.user.id}, you've **owo**'d \`${owo}\` times.`);
    }
};