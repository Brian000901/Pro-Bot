module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('brianthepro') || message.content.toLowerCase().includes('brian the pro')) {
            message.reply('# false');
        }
    }
}
