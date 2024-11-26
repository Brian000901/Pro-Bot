const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choose')
        .setDescription('幫你選擇')
        .addStringOption(option =>
            option.setName('choices')
                .setDescription('選項(用半形逗號分隔)')
                .setRequired(true)),
    async execute(interaction) {
        const choices = interaction.options.getString('choices').split(',').map(choice => choice.trim());
        const choice = choices[Math.floor(Math.random() * choices.length)];
        await interaction.reply(choice);
    }
};