module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('repl.it') || message.content.toLowerCase().includes('replit')) {
            message.reply('## Repl.it - 全世界最大的 Token 分享網站\n### 全球多個節點，最全面且快速的洩漏您的 Token\n### 與多個抗攻擊廠商合作，確保他人取用您的 Token 時暢行無阻\n### 採用 Cloudfake AlwaysTrust 永信任服務，讓他人取用您的 Token 時受到系統的完全信任\n### 採用 Cloudfake 全球性 CDN，以最快的速度將您的 Token 傳遞到全網\n### 檔案極度安全\n確保您的檔案無人能夠取得，包括您自己\n## 永遠信任，成就洩漏。\n\n-# by. owen0924電神');
        }
    }
}
