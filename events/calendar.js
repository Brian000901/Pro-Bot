module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('calendar')) {
            message.reply('# Powerful Calendar\n由 <@787317964994117653> 製造\n### 完全免費\nGithub開源免費下載\n### 零廣告\n介面簡單乾淨，沒有任何廣告或無關內容\n### 零內購\n沒有任何應用程式內購，無須付費解鎖付費版功能\n### 行程管理\n可記錄任何計畫，並且提醒您\n### 記帳功能\n包含簡單易用的記帳功能，讓您隨時可了解自己的財務狀況\n### 極簡設計\n介面直覺，可立即上手\n## [現在就前往下載](https://github.com/down-del/powerful-calendar)');
        }
    }
}
