const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : Aji/Ajmad
❑ *Umur* : 18 Tahun
❑ *Kelas* : 12/3 SMA
❑ *Ulang Tahun* : 3 September 2004
❑ *Alamat* : AS, AS, MATARAM
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: Aji,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙂𝙍𝙊𝙐𝙋 𝙊𝙒𝙉𝙀𝙍👥',
               url: 'https://chat.whatsapp.com/EOv8e2Fkncg0BEDXVmhY7c'
             }

           },
                {
               urlButton: {
               displayText: '𝙇𝙞𝙣𝙠 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 🌍',
               url: 'https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙚𝙬𝙖 𝘽𝙤𝙩 🏧',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪 ⛽',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝘿𝙤𝙣𝙖𝙨𝙞 𝘽𝙖𝙣𝙝 📮',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(biodata|.biodata)$/i
handler.command = new RegExp
handler.help = ['.biodata']
module.exports = handler
