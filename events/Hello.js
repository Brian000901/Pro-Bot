module.exports = {
    name: 'messageCreate', 
    once: false, 
    async execute(message, client) { 
        if (message.content === '<@1310115872945213490>') { 
            message.reply('Hello World!'); 
        }
    }
}