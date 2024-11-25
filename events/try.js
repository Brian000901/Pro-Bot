module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('try it and see') || message.content.toLowerCase().includes('試試看')) {
            message.reply('https://tryitands.ee');
        }
    }
}
