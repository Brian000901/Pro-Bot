module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('aternos')) {
            message.reply('## Aternos.me - 全世界最大的 Minecraft Server 分享網站\n### 全球多個節點，最全面且快速的卡爛您的 Minecraft Server\n### 與多個抗攻擊廠商合作，確保他人侵入您的 Minecraft Server 時暢行無阻\n### 採用 Cloudfake AlwaysTrust 永信任服務，讓他人侵入您的 Minecraft Server 時受到系統的完全信任\n### 採用 Cloudfake 全球性 CDN，以最快的速度將您的 Minecraft Server 傳遞到全網\n## 永遠信任，成就洩漏。');
        }
    }
}
