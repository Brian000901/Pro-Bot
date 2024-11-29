const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/autoreact.json');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (db.has(message.author.id)) {
            const emoji = db.get(message.author.id);
	    message.react(emoji).catch(console.error);
        }
    },
};
