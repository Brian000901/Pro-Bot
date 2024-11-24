const JSONdb = require('simple-json-db');
const channel = new JSONdb('./db/channels.json');
const count = new JSONdb('./db/count.json');
const { pinyin } = require('pinyin-pro');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        const channels = channel.get('channels') || [];
        if (channels.includes(message.channel.id)) {
            let result = await pinyin(message.content, { pattern: 'num', type: 'array' });
            result = message.content.split('').map((char, index) => char === '\n' ? '\n-# > ' : result[index]);
            result = result.map(num => num === '0' ? '5' : num);
            let send;
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
                    send = true;
                }
            }
            if (send === true) {
                count.set(message.author.id, (count.get(message.author.id) || 0) + 1);
                message.channel.send(`### :warning: <@${message.author.id}> 檢測到聲調笑話！你已經講了 ${count.get(message.author.id)} 次聲調笑話。\n-# > ${result.join(' ')}`);
            }
        }
    }
};