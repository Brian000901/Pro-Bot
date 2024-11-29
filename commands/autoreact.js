const { SlashCommandBuilder } = require('discord.js');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/autoreact.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autoreact')
        .setDescription('管理自動反應')
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('設置使用者的自動反應')
                .addUserOption(option => option.setName('user').setDescription('要設置自動反應的使用者').setRequired(true))
                .addStringOption(option => option.setName('emoji').setDescription('要自動反應的表情符號').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unset')
                .setDescription('取消使用者的自動反應')
                .addUserOption(option => option.setName('user').setDescription('要取消自動反應的使用者').setRequired(true))
        ),
    async execute(interaction) {
        if (!['810409750625386497', '890571642139451433'].includes(interaction.user.id)) {
            return interaction.reply('你沒有權限使用此命令');
        }

        const subcommand = interaction.options.getSubcommand();
        const user = interaction.options.getUser('user').id;

        if (subcommand === 'set') {
            const emoji = interaction.options.getString('emoji');
            db.set(user, emoji);
            return interaction.reply(`已為 <@${user}> 設置自動反應 ${emoji}`);
        } else if (subcommand === 'unset') {
            db.delete(user);
            return interaction.reply(`已移除 <@${user}> 的自動反應`);
        }
    },
};
