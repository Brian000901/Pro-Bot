module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('gay') || message.content.toLowerCase().includes('甲')) {
            message.reply('你是甲');
        }
    }
}