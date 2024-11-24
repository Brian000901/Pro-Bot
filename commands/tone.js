const { SlashCommandBuilder } = require('discord.js');
const { pinyin } = require('pinyin-pro');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tone')
        .setDescription('檢查聲調')
        .addStringOption(option => option.setName('text').setDescription('輸入要檢查的文本').setRequired(true)),
    async execute(interaction) {
        let result = await pinyin(interaction.options.getString('text'), { pattern: 'num', type: 'array' });
        result = interaction.options.getString('text').split('').map((char, index) => char === '\n' ? '\n-# > ' : result[index]);
        result = result.map(num => num === '0' ? '5' : num);
        result = result.filter(x => x !== '');
        for (let i = 0; i < result.length - 3; i++) {
            if (
                (result[i] === '1' && result[i + 1] === '2' && result[i + 2] === '3' && result[i + 3] === '4') ||
                (result[i] === '4' && result[i + 1] === '3' && result[i + 2] === '2' && result[i + 3] === '1') ||
                (result[i] === result[i + 1] && result[i] === result[i + 2] && result[i] === result[i + 3])
            ) {
                result[i] = `**${result[i]}**`;
                result[i + 1] = `**${result[i + 1]}**`;
                result[i + 2] = `**${result[i + 2]}**`;
                result[i + 3] = `**${result[i + 3]}**`;
            }
        }
        await interaction.reply(`-# > ${result.join(' ')}`);
    }
}