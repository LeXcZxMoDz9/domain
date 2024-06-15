/* SC 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊
BASE : HW MODS
RECODE : 𝚂𝚎𝚕𝚣 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
CREATOR : 𝚂𝚎𝚕𝚣 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
BUY NO ENC? IG @𝚂𝚎𝚕𝚣 𝙺𝚞𝚣𝚗𝚎𝚝𝚜𝚘𝚟𝚊
*/

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { mediafireDl } = require('./lib/mediafire.js')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./all/keras/ngazap')
const { buttonkal } = require('./all/keras/buttonkal')
const { cttl } = require('./all/keras/cttl')
const { tizi } = require('./all/keras/tizi')
const { weg } = require('./all/keras/weg')
const { virtex7 } = require('./all/keras/virtex7')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
//=================================================//
module.exports = Lanofc = async (Lanofc, m, chatUpdate, store) => {
 try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Lanofc.decodeJid(Lanofc.user.id)
const sender = m.key.fromMe ? (Lanofc.user.id.split(':')[0]+'@s.whatsapp.net' || Lanofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || "No Name"
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Lanofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
global.premium = require("./lib/premium")
const esce = ('© LanXD')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const isPremium = isCreator || isCreator 
const sotoy = [
		'🍊 : 🍒 : 🍐 𝙆𝘼𝙇𝘼𝙃', 
		'🍒 : 🔔 : 🍊 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 🍇 : 💎 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍊 : 🍋 : 🔔 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 💎 : 🍐 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 🍒 : 🍊 𝙆𝘼𝙇𝘼𝙃',
        '🍊 : 💎 : 🔔 𝙆𝘼𝙇𝘼𝙃',		
		'🍐 : 🍒 : 💎 𝙆𝘼𝙇𝘼𝙃',
		'🍐 : 🍐 : 🍐 𝙈𝙀𝙉𝘼𝙉𝙂',
		'💎 : 💎 : 🍒 𝙆𝘼𝙇𝘼𝙃',
		'🔔 : 🔔 : 🍇 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍌 : 💎 : 🔔 𝙆𝘼𝙇𝘼𝙃',
		'🍐 : 🔔 : 🔔 𝘿𝙄𝙆𝙄𝙏 𝙇𝘼𝙂𝙄',
		'🍊 : 💎 : 🍒 𝙆𝘼𝙇𝘼𝙃',
		'🍋 : 🍋 : 💎 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 🔔 : 🍇 𝙆𝘼𝙇𝘼𝙃',
		'💎 : 💎 : 💎 𝙅𝘼𝘾𝙆𝙋𝙊𝙏',
		'🔔 : 🔔 : 🔔 𝙈𝙀𝙉𝘼𝙉𝙂',
		'🍒 : 🍒 : 🍒 𝙈𝙀𝙉𝘼𝙉𝙂',
		'🍌 : 🍌 : 🍌 𝙈𝙀𝙉𝘼𝙉𝙂'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }

let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Lanofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

    
// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//Premium Exp
premium.expiredCheck(Lanofc, m, premium);


//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./Lanofc.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// read database
let game = db.data.game
let tebaklagu = game.tebaklagu = []
let _family100 = game.family100 = []
let kuismath = game.math = []
let tebakgambar = game.tebakgambar = []
let tebakkata = game.tebakkata = []
let caklontong = game.lontong = []
let caklontong_desk = game.lontong_desk = []
let tebakkalimat = game.kalimat = []
let tebaklirik = game.lirik = []
let tebaktebakan = game.tebakan = []
let vote = db.data.others.vote = []

// Cek Database
const isContacts = contacts.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Lanofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Lanofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Lanofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:daffzpedia@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://www.daffzxdoffc.my.id\n
item3.URL:YouTube:https://youtube.com/@daffzofficial\n
item4.ADR:;;Japan🇯🇵;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot WA 𝙳𝚊𝚏𝚏𝚣 𝙿𝚎𝚍𝚒𝚊`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;𝙻𝚊𝚗𝚣𝙷𝚘𝚜𝚝,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/6c9a7a90e7ee20e9c1d65.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Lanofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const lana = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
// Function Reply
const reply = (teks) => { 
Lanofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝙳𝚊𝚏𝚏𝚣 𝙿𝚎𝚍𝚒𝚊", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": thumb, 
"mediaUrl": "https://chat.whatsapp.com/Ey04dtjCOJc3rYm514R4zs", 
"sourceUrl": "https://chat.whatsapp.com/Ey04dtjCOJc3rYm514R4zs" }}}, { quoted: m }) }

// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

// Anti Link
if (antilink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await Lanofc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
if (isAdmins) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
if (isOwner) return Lanofc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun\n\nMinimal Join\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`})
await Lanofc.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Lanofc.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini\n\nGroup\nhttps://chat.whatsapp.com/Joe0ueQMYuaHUiznyycB6t`, contextInfo:{mentionedJid:[sender]}}, {quoted:Lanofc})
}
}

if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Lanofc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Lanofc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Lanofc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
const time2 = moment().tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'SELAMAT MALAM | © 𝙳𝙰𝙵𝙵𝚉 - 𝙿𝙴𝙳𝙸𝙰'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'SELAMAT MALAM | © 𝙳𝙰𝙵𝙵𝚉 - 𝙿𝙴𝙳𝙸𝙰'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'SELAMAT SORE | © 𝙳𝙰𝙵𝙵𝚉 - 𝙿𝙴𝙳𝙸𝙰'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'SELAMAT SORE | © 𝙳𝙰𝙵𝙵𝚉 𝙿𝙴𝙳𝙸𝙰'
        }
if(time2 < "10:00:00"){
var ucapanWaktu = 'SELAMAT PAGI  | © 𝙳𝙰𝙵𝙵𝚉 - 𝙿𝙴𝙳𝙸𝙰'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'SELAMAT SUBUH | © 𝙳𝙰𝙵𝙵𝚉 𝙿𝙴𝙳𝙸𝙰'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'SELAMAT SUBUH | © 𝙳𝙰𝙵𝙵𝚉 - 𝙿𝙴𝙳𝙸𝙰'
}
    
switch (command) {
case "allmenu": {
var imgalmn = fs.readFileSync("./stay.png")
const mark_slebew = '0@s.whatsapp.net'
var footer_nya =`Created by - ${global.ownername}`
let menu = `「 ＢＯＴ ＩＮＦＯ 」
> = ɴᴀᴍᴀ ᴄʀᴇᴀᴛᴏʀ : ${namaCreator}
> = ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ : ${owner}
> = ʙᴏᴛ ɴᴀᴍᴇ : ${botname}
> = ʜᴀʀɪ : ${hariini}
> = ᴊᴀᴍ : ${jam}
> = ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}


━━『 ＯＷＮＥＲ ＭＥＮＵ 』━━
> = ${prefix}addprem
> = ${prefix}delprem
> = ${prefix}listdomain
> = ${prefix}addgc
> = ${prefix}delgc


━━━━━━━━━━━━━━━━━━━━━━`
Lanofc.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "𝙲𝚛𝚎𝚊𝚝𝚘𝚛 - ᴅᴀғғᴢ ᴘᴇᴅɪᴀ",
        thumbnailUrl: "https://telegra.ph/file/4a62ffb88f3d07cd77173.png",
        sourceUrl: "https://www.youtube.com/@ZeroOffc",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
break   

case "listdomain": {
if (!jangan) return reply("ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ʙɪsᴀ ᴀᴋsᴇs ғɪᴛᴜʀ ɪɴɪ, ᴊᴏɪɴ ɢʀᴏᴜᴘ ᴄʀᴇᴀᴛᴇ sᴜʙᴅᴏᴍᴀɪɴ ᴄᴜᴍᴀɴ 5.000 ᴀᴊᴀᴀ\n\nʜᴜʙᴜɴɢɪ Wa.me/6285601059864")
const listdomain = `Hai Kak @${sender.split("@")[0]}
━━『 ＬＩＳＴ ＤＯＭＡＩＮ 』━━
> = d1 lexcz.my.id
`

Lanofc.sendMessage(m.chat, {
    text: listdomain,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "𝙲𝚛𝚎𝚊𝚝𝚘𝚛 - ᴅᴀғғᴢ ᴘᴇᴅɪᴀ",
        thumbnailUrl: "https://telegra.ph/file/cb15689b2be353867ec25.jpg",
        sourceUrl: "https://www.youtube.com/@DaffzOfficial",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }
            break
	case 'addprem': {
        if (!isOwner) return reply(mess.only.owner)
        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        hl[1] = text.split(" ")[1];
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addprem @${m.sender.split("@")[0]} 30`);
        let user = global.db.data.users
        if (typeof user[hl[0]] == "undefined")
          throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`;
        let jumlahHari = 86400000 * hl[1];
        let now = new Date() * 1;
        user[hl[0]].premium = true;
        if (now < user[hl[0]].expired)
          user[hl[0]].expired += jumlahHari;
        else user[hl[0]].expired = now + jumlahHari;
        m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah Menjadi premium User Selama *${hl[1]}* Hari\n\nDetail premium: *${msToDate(user[hl[0]].expired - now)}*`);
        }
        break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285960349812`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

     case 'delgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Not Active DAFFZ PEDIA✅`)
break
case 'addgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Active To Crate Subdo LeXcZ✅`)

        break
case "test":{
if (!isOwner) return reply('Kocak Bet Wir')
m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ *BOT AKTIF SEJAK* : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━\n┣ ©copyright : LeXcZ\n┗━━━━━━━━━━`)}
break   
case 'enc': {
            if (!isOwner) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
break
      
//===================Create Domain=======================//    

 case 'd1': {
 
    if (!jangan) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙎𝙪𝙗𝙙𝙤𝙢𝙖𝙞𝙣\n\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 wa.me/6287743212449")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "3aefcb0e7939b3fd9a54eb3a573e6b5d";
    let apitoken = "CD8MfuBaz57hTXwdSeaVeMk6bBXyL5bN5N893yta";
    let tld = "lexcz.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = LeXcZ\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

               
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Lanofc.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
