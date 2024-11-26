const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/owo.json');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase() === 'owo') {
            message.reply('What\'s This?');
            const userId = message.author.id;
            let owoCounts = db.get('owoCounts');
            if (!owoCounts) {
                owoCounts = {};
            }
            if (!owoCounts[userId]) {
                owoCounts[userId] = 0;
            }
            owoCounts[userId] += 1;
            db.set('owoCounts', owoCounts);
        }
    }
};