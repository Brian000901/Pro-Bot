module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('surfshark') || message.content.toLowerCase().includes('surf shark')) {
            message.reply('# Surfshark VPN\n\n:fire: 保護你的隱私，解鎖無限可能！ :rocket:\n:earth_asia: Surfshark VPN，帶來全方位的網路自由與安全！\n\n## :lock: 為什麼選擇Surfshark?\n\n- :shield: 軍事級加密：你的資料，我們來守護。\n- :globe_with_meridians: 全球伺服器：連接100+國家，無縫訪問受限內容。\n- :clapper: 解鎖流媒體：輕鬆觀看Netflix、Hulu、Disney+等。\n- :no_entry_sign: CleanWeb功能：告別廣告、惡意軟件與釣魚網站！\n- :computer: 無限制裝置：一次訂閱，所有設備都能保護！\n# 現在就行動吧！\n:point_right: [立即加入 Surfshark VPN](https://surfshark.com/)\n:white_check_mark: 30天退款保證，零風險體驗！\n:star2: Surfshark - 你的網路守護者！\n-# Made by ChatGPT');
        }
    }
}
