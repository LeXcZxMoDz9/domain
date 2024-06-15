/* SC ZERONE OFFICIAL 
BASE : HW MODS
RECODE : ZERONE OFFICIAL 
CREACOT : ZERONE OFFICIAL 
*/

// Api
global.API = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'UWtTUH6RXjxQQDm',
}

const fs = require('fs')
const chalk = require('chalk')

global.apikey = "ZERO"
global.owner = "6287743212449"
global.namabot = "*_© LeXcZ_*"
global.botname = "*_LeXcZ_*"
global.namaCreator = "LeXcZ"
global.buysc = "*_6287743212449_*"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'Zerone' //Gausah Juga
global.stay = fs.readFileSync("./stay.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.typemenu = ""
global.packname = ""
global.author = "Sticker By LeXcZ"

global.namastore = "LeXcZ DIGITAL"
global.nodana = ""
global.nogopay = ""
global.noovo = ""
global.qris = ""

global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   prem: "ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴘᴇɴɢɢᴜɴᴀ ᴘʀᴇᴍɪᴜᴍ",
   wait: "sᴀʙᴀʀ ʙᴀɴɢ ʟᴀɢɪ ᴅɪ `ᴘʀᴏsᴇs` 😑",
   success: "`sᴜᴋsᴇs ɴɢᴀʙs`",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "`sᴜᴅᴀʜ ᴀᴋᴛɪғ ʙᴀʙɪ`", 
   off: "`sᴜᴅᴀʜ ᴏғғ ʙᴇɢɪ`",
   endLimit: "ʟɪᴍɪᴛ ᴋᴀᴍᴜ sᴜᴅᴀʜ ʜᴀʙɪs ᴍᴏʜᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴᴜɴɢɢᴜ ᴊᴀᴍ 12 ʟɪᴍɪᴛ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ʀᴇsᴇᴛ ᴏᴛᴏᴍᴀᴛɪs 😁",
   query: {
       text: "`ᴛᴇxᴛ ɴʏᴀ ᴍᴀɴᴀ?`",
       link: "`ʟɪɴᴋ ɴʏᴀ ᴍᴀɴᴀ?`",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "`ғɪᴛᴜʀ ɴʏᴀ ᴄᴜᴍᴀɴ ʙɪsᴀ ᴅɪ ᴅᴀʟᴇᴍ ɢʀᴜᴘ ʏᴀʜ ʙᴀɴɢ`",
       private: "`ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ ʙᴀɴɢ 𝘋𝘢𝘧𝘧𝘻 ʙɪᴀʀ ʙɪsᴀ ᴅɪ ᴘᴀᴋᴇ`",
       owner: "`ɢᴀ ᴜsᴀʜ ᴘᴀᴋᴇ ғɪᴛᴜʀ ɪɴɪ ᴀsᴜ ʟᴜ ʙᴜᴋᴀɴ ᴘᴀᴄᴀʀɴʏᴀ ᴇʀᴀᴀ`",
       admin: "`ɢᴀ ᴜsᴀʜ ᴘᴀᴋᴇ ғɪᴛᴜʀ ɪɴɪ ᴀsᴜ ʟᴜ ʙᴜᴋᴀɴ ᴘᴀᴄᴀʀɴʏᴀ ᴇʀᴀᴀ`",
       badmin: "> ᴍᴀᴀғ ᴋᴀᴋ ᴋᴀʏᴀ ɴʏᴀ ᴋᴀᴋᴀᴋ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪ ᴋᴀʀᴇɴᴀᴋᴀɴ ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ",
       premium: "ᴍᴀᴀғ ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ sɪʟᴀʜᴋᴀɴ ʙᴇʟɪ ᴋᴇ ᴏᴡɴᴇʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ .ᴏᴡɴᴇʀ",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "∞",
    free: 25
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})