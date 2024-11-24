const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('看看機器人是不是活的'),
    async execute(interaction) {
        await interaction.reply(`機器人延遲: ${interaction.client.ws.ping}ms`);
    }
};