/*
* Sc Ory : Xie Dev Team
* Scpirt Ini Free Buat Kalian!
* Jadi Jangan Di Jual Scpirtnya!
* Tapi Lihat Dibawah!
* Recode Sewajarnya Aja
* Nama Author, XieDevTeam, Jangan Dihapus!!
*/
const {
   WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime
} = require('@adiwajshing/baileys')
const fs = require("fs-extra")
const util = require('util')
const axios = require("axios")
const moment = require('moment-timezone')
const { spawn, exec, execSync } = require('child_process')
const fetch = require('node-fetch')
const ig = require('insta-fetcher');
const hx = require("hxz-api")
const Fb = require('fb-video-downloader');
const googleImage = require('g-i-s')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const yts = require( 'yt-search')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif')
const exif = new Exif()

const { xiecaa1 } = require('./lib/xiecaa1')
const { fetchJson, kyun } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { antiSpam } = require('./lib/antispam')
const { bahasa } = require('./lib/bahasa')
const { cmdadd } = require('./lib/totalcmd')
const { mediafireDl } = require('./lib/mediafire.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythdx } = require('./lib/ytdl2')
const { igdl, upload, formatDate } = require('./lib/ytdl')
const { getBuffer, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const user = JSON.parse(fs.readFileSync('./database/user.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const _stikcmd = JSON.parse(fs.readFileSync('./database/scmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))
const blocked = JSON.parse(fs.readFileSync('./database/blocked.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const mimixie = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const sticker = JSON.parse(fs.readFileSync('./media/sticker.json'))
const audio = JSON.parse(fs.readFileSync('./media/audio.json'))
const image = JSON.parse(fs.readFileSync('./media/image.json'))
const video = JSON.parse(fs.readFileSync('./media/video.json'))

public = false
readGc = true
readPc = true
autojoin = false
hit_today = []
prefix = "#"

var fxnya = ["❏","⚘","●","⚟","❐"]
var fx = fxnya[Math.floor(Math.random() * fxnya.length)]

var namanya = ["Xie Bot","Pinky Bot","Manca Bot"]
var namabot = namanya[Math.floor(Math.random() * namanya.length)]

var authornya = ["Author FxSx","Author FdlX","Author NuyFaa","Author Fatih","Author Adam","Author Rodho"]
var authorbot = authornya[Math.floor(Math.random() * authornya.length)]

// Sticker Cmd
const sCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _stikcmd.push(obj)
    fs.writeFileSync('./database/scmd.json', JSON.stringify(_stikcmd))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_stikcmd).forEach((i) => {
        if (_stikcmd[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_stikcmd).forEach((i) => {
        if (_stikcmd[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _stikcmd[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_stikcmd).forEach((i) => {
        if (_stikcmd[i].id === id) {
            status = true
        }
    })
    return status
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function starts() {
	const xiedev = new WAConnection()
	xiedev.logger.level = 'warn'
	console.log(banner.string)
	xiedev.version = [2, 2119, 6]
	xiedev.on('qr', () => {
		console.log(color('[SCAN]','aqua'), color('Waktu 30 Detik', 'yellow'))
	})
	fs.existsSync('./xiedevteam.json') && xiedev.loadAuthInfo('./xiedevteam.json')
	xiedev.on('connecting', () => {
		start('2', 'Proses...')
	})
	xiedev.on('open', () => {
		success('2', 'Done!')
		console.log(color('⟩=====================⟨', 'aqua'))
		console.log(color('[DEV] : ', 'yellow'), color('FXSX', 'green'))
		console.log(color('[DEV] : ', 'yellow'), color('FDLX', 'green'))
		console.log(color('[DEV] : ', 'yellow'), color('NUYFAA', 'green'))
		console.log(color('[BOT] : ', 'yellow'), color('XIECAA', 'green'))
		console.log(color('⟩=====================⟨', 'aqua'))
	})
	await xiedev.connect({timeoutMs: 30*1000})
   fs.writeFileSync('./xiedevteam.json', JSON.stringify(xiedev.base64EncodedAuthInfo(), null, '\t'))
   

	xiedev.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
			try {
            mem = anu.participants[0]
			   console.log(anu)
            try {
            pp_user = await xiedev.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
       if (anu.action == 'add') {
            mdata = await xiedev.groupMetadata(anu.jid)
            member = mdata.participants.length
        	   num = anu.participants[0]
            anu_user = xiedev.contacts[mem]
            halo = await fs.readFileSync('./mp3/halo.mp3')
            buff = await getBuffer(pp_user)
            xiedev.sendMessage(mdata.id, halo, MessageType.audio, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Welcome @${num.split('@')[0]}`, orderTitle: `Welcome @${num.split('@')[0]}`, thumbnail: buff, sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, mimetype: 'audio/mp4', ptt:true, duration: 999990000})
            }
       if (anu.action == 'remove') {
            mdata = await xiedev.groupMetadata(anu.jid)
            num = anu.participants[0]
            anu_user = xiedev.contacts[mem]
            member = mdata.participants.length
            halo = await fs.readFileSync('./mp3/jamet.mp3')
            buff = await getBuffer(pp_user)
            xiedev.sendMessage(mdata.id, halo, MessageType.audio, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Sayonara @${num.split('@')[0]}\nJamet:v`, orderTitle: `Sayonara @${num.split('@')[0]}\nJamet:v`, thumbnail: buff, sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, mimetype: 'audio/mp4', ptt:true, duration: 999990000})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
      }

   })

   xiedev.on('CB:action,,call', async json => {
   const callerId = json[2][0][1].from;
   console.log("Call Dari "+ callerId)
     xiedev.sendMessage(callerId, "Telpon = Block!", MessageType.text)
     await sleep(3000)
     await xiedev.blockUser(callerId, "add")
   })

	xiedev.on('chat-update', async (team) => {
		   try {
			if (!team.hasNewMessage) return
			team = team.messages.all()[0]
			if (!team.message) return
			if (team.key && team.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked
			team.message = (Object.keys(team.message)[0] === 'ephemeralMessage') ? team.message.ephemeralMessage.message : team.message
			const content = JSON.stringify(team.message)
			const from = team.key.remoteJid
			const type = Object.keys(team.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
         const cmd = (type === 'conversation' && team.message.conversation) ? team.message.conversation : (type == 'imageMessage') && team.message.imageMessage.caption ? team.message.imageMessage.caption : (type == 'videoMessage') && team.message.videoMessage.caption ? team.message.videoMessage.caption : (type == 'extendedTextMessage') && team.message.extendedTextMessage.text ? team.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(team.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(team.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(team.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
			body = (type === 'listResponseMessage' && team.message.listResponseMessage.title) ? team.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && team.message.buttonsResponseMessage.selectedButtonId) ? team.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && team.message.conversation.startsWith(prefix)) ? team.message.conversation : (type == 'imageMessage') && team.message.imageMessage.caption.startsWith(prefix) ? team.message.imageMessage.caption : (type == 'videoMessage') && team.message.videoMessage.caption.startsWith(prefix) ? team.message.videoMessage.caption : (type == 'extendedTextMessage') && team.message.extendedTextMessage.text.startsWith(prefix) ? team.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(team.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(team.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(team.message.stickerMessage.fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? team.message.conversation : (type === 'extendedTextMessage') ? team.message.extendedTextMessage.text : ''
			var devxie = (type === 'conversation' && team.message.conversation) ? team.message.conversation : (type == 'imageMessage') && team.message.imageMessage.caption ? team.message.imageMessage.caption : (type == 'videoMessage') && team.message.videoMessage.caption ? team.message.videoMessage.caption : (type == 'extendedTextMessage') && team.message.extendedTextMessage.text ? team.message.extendedTextMessage.text : ''
			const xieteam = devxie.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)
			const arg = body.substring(body.indexOf(' ') + 1)
			const args = body.trim().split(/ +/).slice(1)
			const ar = args.map((v) => v.toLowerCase())
			chats = (type === 'conversation') ? team.message.conversation : (type === 'extendedTextMessage') ? team.message.extendedTextMessage.text : ''
			const argss = chats.slice(command.length + 2, chats.length)
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)

			const botNumber = xiedev.user.jid
			const ownerNumber = ["6283873517269@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? team.participant : team.key.remoteJid
			const totalChat = await xiedev.chats.all()
			const groupMetadata = isGroup ? await xiedev.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const itsMe = sender == botNumber ? true : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isBanchat = isGroup ? bancht.includes(from) : false
         const isAuto = isGroup ? autosticker.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const conts = team.key.fromMe ? xiedev.user.jid : xiedev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
         const pushname = team.key.fromMe ? xiedev.user.name : conts.notify || conts.vname || conts.name || '-'
			const mentionByTag = type == "extendedTextMessage" && team.message.extendedTextMessage.contextInfo != null ? team.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && team.message.extendedTextMessage.contextInfo != null ? team.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
			const more = String.fromCharCode(8206)
         const readMore = more.repeat(4001)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				xiedev.sendMessage(from, teks, text, {quoted: team})
			}
			const sendMess = (hehe, teks) => {
				xiedev.sendMessage(hehe, teks, text)
	      }
			const replyyy = (teks) => {
        	    grupy = xiedev.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6283815956151-1616169743@g.us', "inviteCode": '', "groupName": "Xie Dev Team", "footerText": "Author FxSx", "jpegThumbnail": fs.readFileSync('./src/fotobot2.jpg'), "caption": teks}}, {quoted: {key: {fromMe:false, participant:`6283818221226@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {}) },message:{"orderMessage":{"orderId":"174238614569481","thumbnail": fs.readFileSync('./src/fotobot2.jpg'),"itemCount":29,"status":"INQUIRY","surface":"CATALOG","message": ${namabot},"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             xiedev.relayWAMessage(grupy)
         }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? xiedev.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : xiedev.sendMessage(from, teks.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": memberr}})
			}
			
         const ftroli = {key: {fromMe:false, participant:`6283818221226@s.whatsapp.net`, ...(from ? {remoteJid: "6283815956151-1616169743@g.us" }: {}) },message:{"orderMessage":{"orderId":"174238614569481","thumbnail": fs.readFileSync('./src/fotobot.jpg'),"itemCount":29,"status":"INQUIRY","surface":"CATALOG","message": ${namabot},"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}
         
         const sendMediaURL = async(url, text="", mids=[]) =>{
         if(mids.length > 0){
          text = normalizeMention(to, text, mids)
         }
         const fn = Date.now() / 10000;
         const filename = fn.toString()
         let mime = ""
         var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
             mime = res.headers['content-type']
             request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
         };
         download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          xiedev.sendMessage(from, media, type, { quoted: team, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
          });
         }
         
			const sendFileFromUrl = async(link, type, options) => {
             hasil = await getBuffer(link)
	          xiedev.sendMessage(from, hasil, type, options).catch(e => {
	          fetch(link).then((hasil) => {
	          xiedev.sendMessage(from, hasil, type, options).catch(e => {
	          xiedev.sendMessage(from, { url : link }, type, options).catch(e => {
	          reply('Maaf Eror, Saat Mendownload Dan Kirim File')
	          console.log(e)
             })
            })
           })
          })
         }
         
         const kontagall = async function(from, nomor, nama){
         let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:kontak Tag All\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
         let anu = await xiedev.groupMetadata(from)
         let members = anu.participants
         let ane = []
         for (let i of members){
         ane.push(i.jid)
         }
         xiedev.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
         }
         
         const sendBug = async (target, teks) => {
         if (!teks) teks = "Halo All";
         await xiedev.relayWAMessage(
         xiedev.prepareMessageFromContent(
          target,
          xiedev.prepareDisappearingMessageSettingContent(0),
          {}
          ),
           { waitForAck: true }
          );
          xiedev.sendMessage(target, teks, "conversation");
         };
            
         const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
         if (time2 < "24:59:00") {
            var ucapanWaktu = "Selamat Malam🌃";
         }
         if (time2 < "19:00:00") {
            var ucapanWaktu = "Selamat Senja🌞";
         }
         if (time2 < "18:00:00") {
            var ucapanWaktu = "Selamat Sore🌄";
         }
         if (time2 < "15:00:00") {
            var ucapanWaktu = "Selamat Siang☀️";
         }
         if (time2 < "11:00:00") {
            var ucapanWaktu = "Selamat Pagi🌅";
         }
         if (time2 < "05:00:00") {
            var ucapanWaktu = "Selamat Malam🌃";
         }
         
         mess = {
				wait: '*Sedang Diproses*',
				sukses: '*Sukses*',
				error: {
					eror: '*Eror*',
					link: '*Link Invalid*'
				},
				only: {
					group: '*Khusus Group*',
					benned: `*Maaf Nomer Kamu Tidak Bisa Gunakan ${namabot}*`,
					ownerG: '*Khusus Owner Group*',
					ownerB: `*Khusus Owner ${namabot}*`,
					premium: `*Khusus Premium ${namabot}*`,
					userB: `Hai ${pushname}\nKamu Belum Terdaftar\nSilahkan Ketik : ${prefix}daftar`,
					admin: '*Khusus Admin Group*',
					Badmin: `*Jadikan ${namabot} Admin Dulu*`
				}
			}
         
         const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
             try {
		       ppUser = await xiedev.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		       } catch {
		       ppUser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		       }
	        	 buffer = await getBuffer(ppUser)
             imgnya = await xiedev.prepareMessage(from, buffer, location, {thumbnail: buffer})
         const buttonMessages = {
             locationMessage: imgnya.message.locationMessage,
             contentText: text1,
             footerText: desc1,
             buttons: but,
             headerType: 6
         }
         xiedev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
         }
         const sendButtLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
             data = fs.readFileSync('./lib/image.js');
             jsonData = JSON.parse(data);
             randXiedev = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randXiedev];
             buffer = await getBuffer(randKey.image)
             imgnya = await xiedev.prepareMessage(from, buffer, location, {thumbnail: buffer})
         const buttonMessages = {
             locationMessage: imgnya.message.locationMessage,
             contentText: text1,
             footerText: desc1,
             buttons: but,
             headerType: 6
         }
         xiedev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
         }
         
         const replyy = (id, text1, desc1, but = [], options = {}) => {
         const buttonMessage = {
           contentText: text1,
           footerText: desc1,
           buttons: but,
           headerType: 1,
         };
         xiedev.sendMessage(
           id,
           buttonMessage,
           MessageType.buttonsMessage,
           options
         );
         };
         
         const dev1 = `Hai @${sender.split('@')[0]}\nKamu Belum Terdaftar\nSilahkan Klik Dibawah\nAtau Ketik ${prefix}daftar`
         const dev2 = `${authorbot}`
         const dev3 = [
         {
            buttonId: `${prefix}daftar`,
            buttonText: {
              displayText: `DAFTAR USER`,
            },
            type: 1,
         },]
         
         const team1 = `Hai @${sender.split('@')[0]}\nNomer Kamu Sudah Terbanned\nJika Ingin Dibuka Banned Nya\nSilahkan Hubungi Owner!`
         const team2 = `${authorbot}`
         const team3 = [
         {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `OWNER BOT`,
            },
            type: 1,
         },]
			
			if (isGroup && autojoin == true) {
         if (budy.includes("://chat.whatsapp.com/")) {
         console.log(color("[ AUTO-JOIN ]", "aqua"), 'from', color(pushname, 'blue'), 'in', color(groupName, "yellow"))
         xiedev.query({
             json: [
                  "action",
                  "invite",
                  `${budy.replace("https://chat.whatsapp.com/","")}`,
                 ],
              });
            }
         }
			
			if (isCmd) cmdadd()
			
			// Read Groups All
         var readGroups = await xiedev.chats.array.filter(v => v.jid.endsWith('g.us'))
         readGroups.map( async ({ jid }) => {
         if (readGc === false) return
         await xiedev.chatRead(jid)
         })
         // Read Private Chat
         var readPrivate = await xiedev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
         readPrivate.map( async ({ jid }) => {
         if (readPc === false) return
         await xiedev.chatRead(jid)
         })
			
			// Antispam Private Chat 6 Detik
         if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
         console.log(color('[ SPAM ]', 'aqua'), color(time, 'red'), color(`${command} [${args.length}]`, 'yellow'), 'from', color(pushname, 'aqua'))
         return reply('Mohon Jangan Spam\nKasih Waktu 6 Detik!')
         }
         // Antispam Grup Chat 6 Detik
         if (isCmd && antiSpam.isFiltered(from) && isGroup) {
         console.log(color('[ SPAM ]', 'aqua'), color(time, 'red'), color(`${command} [${args.length}]`, 'yellow'), 'from', color(pushname, 'aqua'), 'in', color(groupName, 'green'))
         return reply('Mohon Jangan Spam\nKasih Waktu 6 Detik!')
         }
			
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
         const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
         const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
         const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			
			
			// Mode Afk Simpel
         for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "User Yang Anda Tag/Reply Sedang Afk"
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan Alasan : " + afk[x.split('@')[0]]
                    }
                    buff = fs.readFileSync('./src/afk.jpg')
                    const imgg2 = await xiedev.prepareMessage(from, buff, MessageType.location,{thumbnail: buff})
			           const imgg = imgg2.message["ephemeralMessage"] ? imgg2.message.ephemeralMessage : imgg2
                    welcomeBut = [{buttonId:`${prefix}okee`,buttonText:{displayText:'OKE XIE'},type:1}]
                    welcomeButt = {contentText: `${ini_txt} `, footerText: `${authorbot}`, buttons: welcomeBut, headerType: 6, locationMessage: imgg.message.locationMessage}
                    xiedev.sendMessage(from, welcomeButt, MessageType.buttonsMessage, {quoted: team, contextInfo: {"mentionedJid": [sender]}})
               }
         }
         if (afk.hasOwnProperty(sender.split('@')[0])) {
            buff = fs.readFileSync('./src/afk.jpg')
            const imggg2 = await xiedev.prepareMessage(from, buff, MessageType.location,{thumbnail: buff})
			   const imggg = imggg2.message["ephemeralMessage"] ? imggg2.message.ephemeralMessage : imggg2
            welcomBut = [{buttonId:`${prefix}okee`,buttonText:{displayText:'OKE XIE'},type:1}]
            welcoButt = {contentText: `Anda Telah Keluar Dari Mode Afk\n\nSaat Nya Mulu Yak : ${pushname}`, footerText: `${authorbot}`, buttons: welcomBut, headerType: 6, locationMessage: imggg.message.locationMessage}
            xiedev.sendMessage(from, welcoButt, MessageType.buttonsMessage, {quoted: team, contextInfo: {"mentionedJid": [sender]}})
            delete afk[sender.split('@')[0]]
            fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
         }
         
         for (let dev of sticker){
				if (budy === dev){
					buff = fs.readFileSync(`./media/sticker/${dev}.webp`)
					xiedev.sendMessage(from, buff, sticker, {quoted: team, contextInfo: {forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let all of audio){
				if (budy === all){
					buff = fs.readFileSync(`./media/audio/${all}.mp3`)
					xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team, contextInfo: {forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let teamm of image){
				if (budy === teamm){
					buff = fs.readFileSync(`./media/image/${teamm}.jpg`)
					xiedev.sendMessage(from, buff, image, {thumbnail: buff, quoted: team, contextInfo: {forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let temm of video){
				if (budy === temm){
					buff = fs.readFileSync(`./media/video/${teamm}.mp4`)
					xiedev.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: team, contextInfo: {forwardingScore: 508, isForwarded: true}})
					}
			}
         
         if (xieteam.includes('assalamualaikum','asalammualaikum','assalammualaikum')) {
         const loli = fs.readFileSync('./mp3/waalaikumsalam.mp3')
         xiedev.sendMessage(from, loli, MessageType.audio, {quoted: team, mimetype: 'audio/mp4', ptt:true, duration: -999000})
         }
         if (xieteam.includes('tq','tqs','terimakasih','makasih')) {
         const loli = fs.readFileSync('./mp3/makasih.mp3')
         xiedev.sendMessage(from, loli, MessageType.audio, {quoted: team, mimetype: 'audio/mp4', ptt:true, duration: -999000})
         }
         
         if (budy.startsWith('=-')){
         try {
     	   if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
         return xiedev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ftroli})
         } catch(err) {
         e = String(err)
         reply(e)
         }
         }
         
         if (budy.startsWith('<=')){
		   if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
			console.log(color('[ EVAL ]'), color(moment(team.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Xie Eval V1 :~`))
			try{
			reply(require('util').format(await eval(`(async () => { ${chats.slice(2)} })()`)))
         }catch(err){
	      e = String(err)
       	reply(e)
	      }
         }
         
         if (budy.startsWith('=>')){
         if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
         var konsol = budy.slice(3)
         Return = (sul) => {
         var sat = JSON.stringify(sul, null, 2)
         bang = util.format(sat)
         if (sat == undefined){
         bang = util.format(sul)
         }
         return reply(bang)
         }
         try {
         reply(util.format(eval(`;(async () => { ${konsol} })()`)))
         console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
         } catch(e){
         reply(String(e))
         }
         }
         
         if (itsMe){
         if (chats.toLowerCase() == `${prefix}self`){
         public = false
         reply(`Success`, `Status : Self`)
         }
         if (chats.toLowerCase() == 'status'){
         reply(`STATUS : ${public ? 'Public' : 'Self'}`)
         }
         }
         if (!public){
         if (!team.key.fromMe) return
         }
         
			if (isCmd && !isGroup) console.log(color('[CMD PRIVAT]', 'aqua'), color(time, 'green'), color(`${command} [${args.length}]`, 'yellow'), 'from', color(pushname, 'blue'))
         if (isCmd && isGroup) console.log(color('[CMD GROUP]', 'aqua'), color(time, 'green'), color(`${command} [${args.length}]`, 'yellow'), 'from', color(pushname, 'blue'), 'in', color(groupName, 'aqua'))
			
			if (isCmd && !isOwner) antiSpam.addFilter(from)
			
			switch(command) {
			case 'menu':
			case 'help':
			     if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
			     if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
			     menunya = `╭${fx}「 INFO 」
├ Author: FxSx
├ Nama Bot: ${namabot}
├ Owner: ${isOwner ? "✓":"✗"}
└ Prefix: ${prefix}

╭${fx}「 ABOUT 」
├ ${prefix}owner
├ ${prefix}status
├ ${prefix}info
├ ${prefix}rules
├ ${prefix}bahasa
├ ${prefix}banlist
├ ${prefix}blocklist
└ ${prefix}listscmd
${readMore}
╭${fx}「 GROUP 」
├ ${prefix}welcome on/off
├ ${prefix}autosticker on/off
├ ${prefix}grup buka/tutup
├ ${prefix}linkgrup
├ ${prefix}resetlinkgc
├ ${prefix}infogrup
├ ${prefix}add
├ ${prefix}kick
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}kontag
├ ${prefix}listadmin
├ ${prefix}liston
└ ${prefix}pemilikgrup

╭${fx}「 FUNNY 」
├ ${prefix}afk
├ ${prefix}apakah
├ ${prefix}kapankah
├ ${prefix}watak
├ ${prefix}darkjokes
├ ${prefix}cewek
└ ${prefix}cowok

╭${fx}「 ANIME 」
├ ${prefix}levi
└ ${prefix}randomanime

╭${fx}「 CONVERT 」
├ ${prefix}sticker
├ ${prefix}stickerwm
├ ${prefix}takesticker
├ ${prefix}toimg
├ ${prefix}tomp3
├ ${prefix}tourl
├ ${prefix}bass
├ ${prefix}bass2
├ ${prefix}robot
├ ${prefix}gemuk
├ ${prefix}balik
├ ${prefix}tupai
├ ${prefix}cepat
├ ${prefix}pelan
├ ${prefix}imut
├ ${prefix}hengker
└ ${prefix}tts

╭${fx}「 DOWNLOAD 」
├ ${prefix}play
├ ${prefix}ytsearch
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}ytmp4hd
├ ${prefix}ig
├ ${prefix}igstalk
├ ${prefix}igstory
├ ${prefix}tiktok
├ ${prefix}ttmp3
├ ${prefix}fb
├ ${prefix}mediafire
├ ${prefix}image
└ ${prefix}asupan

╭${fx}「 STORAGE 」
├ ${prefix}addsticker
├ ${prefix}liststicker
├ ${prefix}delsticker
├ ${prefix}addaudio
├ ${prefix}listaudio
├ ${prefix}delaudio
├ ${prefix}addimage
├ ${prefix}listimage
├ ${prefix}delimage
├ ${prefix}addvideo
├ ${prefix}listvideo
└ ${prefix}delvideo

╭${fx}「 OWNER 」
├ ${prefix}public
├ ${prefix}self
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}autoread
├ ${prefix}autojoin
├ ${prefix}setprefix
├ ${prefix}setthumb
├ ${prefix}setvnwelcome
├ ${prefix}ban
├ ${prefix}unban
├ ${prefix}block
├ ${prefix}unblock
├ ${prefix}scmd
├ ${prefix}delcmd
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}revoke
├ ${prefix}ambil
├ ${prefix}bc
├ ${prefix}clone
├ ${prefix}join
├ ${prefix}leave
├ => [code]
├ <= [code]
└ =- [code]
`
              sendButtLocation(from, `${menunya}`, `${authorbot}`, {jpegThumbnail: fs.readFileSync('./src/fotobot.jpg')}, 
              [
                 {buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1},

                 {buttonId:`${prefix}daftarinfo`,buttonText:{displayText:'INFO BOT'},type:1}

              ], {quoted: team, contextInfo: {"mentionedJid": [sender]}})
			     break
         case 'daftarinfo':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
			     if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              listMssg = {
              buttonText: 'DAFTAR INFO',
              footerText: `${authorbot}`,
              description: `${ucapanWaktu} Kak @${sender.split('@')[0]},\nSilahkan Pilih Dibawah`,
              sections: [
                   {
                    "title": "DAFTAR INFO",
              rows: [
                   {
                     "title": `Owner Bot`,
                     "rowId": `${prefix}owner`
                   },
                   {
                    "title": `Info Bot`,
                    "rowId": `${prefix}info`
                   },
                   {
                     "title": `Rules Bot`,
                     "rowId": `${prefix}rules`
                   },
                   {
                     "title": `Ban List`,
                     "rowId": `${prefix}banlist`
                   },
                   {
                     "title": `Block List`,
                     "rowId": `${prefix}blocklist`
                   },
                   {
                     "title": `List Scmd`,
                     "rowId": `${prefix}listscmd`
                    }
                  ]
                }
              ],
              listType: 1
              }
              xiedev.sendMessage(from, listMssg, MessageType.listMessage, {contextInfo: {mentionedJid: [sender]}, quoted:ftroli})
              break
//>>>>>>>>>[ KHUSUS INFO BOT ]<<<<<<<<<<\\
         case 'owner':
         case 'creator':
         case 'author':
              let ini_list = []
              const ownerNumbeer = ["6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net","6283873517269@s.whatsapp.net"]
              for (let i of ownerNumbeer) {
              const vname = xiedev.contacts[i] != undefined ? xiedev.contacts[i].vname || xiedev.contacts[i].notify : undefined
              ini_list.push({
              "displayName": "Faa",
              "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xiedev.user.name}`}\nORG:Owner Xie Bot\nTITLE:Developer\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:XieeCaa7@gmail.com\nitem2.X-ABLabel:Gmail\nEND:VCARD`
              })
              }
              hhehe = await xiedev.sendMessage(from, {"displayName": `${ini_list.length} kontak`,"contacts": ini_list}, 'contactsArrayMessage', {quoted: team})
              await sleep(3000)
              xiedev.sendMessage(from,`Ini Kak Kontak Owner\n${namabot} 🤗`,text,{quoted: hhehe})
              break
         case 'status':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
			     if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
			     const status = public ? "PUBLIC":"SELF"
			     return reply(`STATUS : ${status}`)
			     break
         case 'info':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              var groups = xiedev.chats.array.filter(v => v.jid.endsWith('g.us'))
              var privat = xiedev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              me = xiedev.user
				  uptime = process.uptime() 
              teksnya = `╭${fx}「 INFO BOT 」\n├ Nama Bot: ${namabot}\n├ Nomor Bot: @${me.jid.split('@')[0]}\n├ Prefix: ${prefix}\n├ Prvt Chat: ${privat.length}\n├ Grup Chat: ${groups.length}\n├ Total Chat: ${totalChat.length}\n├ Banned: ${ban.length}\n├ Block: ${blocked.length}\n├ Total Req: ${mimixie}\n├ Hit Today: ${hit_today.length}\n└ Aktif Bot: ${kyun(uptime)}\n\nMaaf Bang Fitur Botnya Dikit\nTapi Work Kan Hehehe`
              data = fs.readFileSync('./lib/image.js');
              jsonData = JSON.parse(data);
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              buffer = await getBuffer(randKey.image)
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, quoted: team, caption: teksnya})
              break
         case 'rules':
         case 'rulesbot':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teksnya = `「 RULES BOT 」\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Bot Akan Blocks Otomatis.\n8. Apapun yang anda perintah pada bot ini, OWNER TIDAK BERTANGGUNG JAWAB!\n\n*TERIMA KASIH*`
              const fduc2 = {"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Ahn1QvxbhABRggFOJXoaohrfnXE5MGvQbg9--aFolZ_Y.enc","mimetype": "image/jpeg","fileSha256": "ViRNzid9QeEsJCaZcseZCjzx+DMZo2tD+fGWKjuSNyg=","fileLength": "0","height": 450,"width": 845,"mediaKey": "UAG49T+qficzxxf1mw0S2Q6HXgbNpwVOaon5Gf3W2nM=","fileEncSha256": "PQ3NUWG1y8b9qVmrnel1iA2Ca5G145QxtAJnveLr7Cc=","directPath": "/v/t62.7118-24/40999194_223465573147244_6081626207846738390_n.enc?ccb=11-4&oh=1343f6895dcc4e6b28a8e35e2aefe599&oe=617BF69C","mediaKeyTimestamp": "1632884125","jpegThumbnail": fs.readFileSync('./src/fotobot.jpg')},"productId": "4559966904061216","title": "RULES XIE","description": `${teksnya}`,"currencyCode": "IDR","priceAmount1000": "30000","productImageCount": 1,"salePriceAmount1000": "0"},"businessOwnerJid": "6283818221226@s.whatsapp.net"}},
			  	  ress = await xiedev.prepareMessageFromContent(from, fduc2, {quoted: ftroli, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWAMessage(ress)
              break
         case 'bahasa':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              xiedev.sendMessage(from, bahasa(fx), text)
              break
         case 'banlist':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  ben = `╭${fx} 「 LIST BAN 」\n`
				  for (let banned of ban) {
					   ben += `├ @${banned.split('@')[0]}\n`
				  }
				  ben += `└ Total : ${ban.length}`
				  xiedev.sendMessage(from, ben.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": ban}})
				  break
         case 'blocklist':
         case 'listblock':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teks = `╭${fx}「 LIST BLOCK 」\n`
              for (let block of blocked) {
              teks += `├ @${block.split('@')[0]}\n`
              }
              teks += `└ Total : ${blocked.length}`
              xiedev.sendMessage(from, teks.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": blocked}})
              break
         case 'listscmd':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              let teksnyee = `「 LIST CMD STICKER 」`
              let cemde = [];
              for (let i of _stikcmd) {
              cemde.push(i.id)
              teksnyee += `\n\n*${fx} ID :* ${i.id}\n*${fx} Cmd :* ${i.chats}`
              }
              reply(teksnyee)
              break
         case 'fotobot':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              captionnya = `*Owner:* ${isOwner ? "✓":"✗"}`
              data = fs.readFileSync('./lib/image.js');
              jsonData = JSON.parse(data);
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              buffer = await getBuffer(randKey.image)
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, quoted: team, caption: captionnya})
              break
         case 'daftar':
         case 'verify':
         case 'register':
              xiedev.updatePresence(from, Presence.composing)
              if (isUser) return reply(`Kamu Sudah Jadi User ${namabot}`)
              user.push(sender)
              fs.writeFileSync('./database/user.json', JSON.stringify(user))
              captionnya = `╭${fx}「 PENDAFTARAN 」\n├ Pada ${date} ${time}\n├ Nama : ${pushname}\n├ Nomer : wa.me/${sender.split('@')[0]}\n└ Total User : ${user.length}`
              sendButLocation(from, `${captionnya}`, `${authorbot}`, {jpegThumbnail: fs.readFileSync('./src/fotobot.jpg')},[{buttonId:`${prefix}menu`,buttonText:{displayText:'ALL CMD'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES BOT'},type:1}], {quoted: team, contextInfo: {"mentionedJid": [sender]}})
              break
//>>>>>>>>>[ END INFO BOT ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS FUNNY ]<<<<<<<<<<\\
         case 'apakah':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              apakah = body.slice(1)
              const apakahh = ["Ya","Tidak","Ga tau","Bisa Jadi","Bener Banget"]
              const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
              xiedev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, {quoted: team})
              break
         case 'kapankah':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              kapankah = body.slice(1)
              const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
              const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
              xiedev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, {quoted: team})
              break
         case 'watak':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              watak = body.slice(1)
              const wa = ["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
              const tak = wa[Math.floor(Math.random() * wa.length)]
              xiedev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, {quoted: team})
              break
         case 'darkjokes':
         case 'darkjok':
         case 'darkjoke':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  data = fs.readFileSync('./lib/drak.js');
              jsonData = JSON.parse(data);
              randIndex = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randIndex];
              buffer = await getBuffer(randKey.result)
              imggnya = await xiedev.prepareMessage(from, buffer, image, {thumbnail: buffer})
              gbutsan = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'MORE'}, type: 1}]
              gbuttona = {imageMessage: imggnya.message.imageMessage, contentText: `Jika Ingin Lagi Silahkan Klik Dibawah`, footerText: `${authorbot}`, buttons: gbutsan, headerType: 4}
              await xiedev.sendMessage(from, gbuttona, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotobot.jpg'), contextInfo: {mentionedJid: [sender]}, quoted: team, fileLength: 1000000000})
				  break
         case 'cewek':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  data = fs.readFileSync('./lib/cewek.js');
              jsonData = JSON.parse(data);
              randIndex = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randIndex];
              buffer = await getBuffer(randKey.result)
              iimggnya = await xiedev.prepareMessage(from, buffer, image, {thumbnail: buffer})
              gbbutsan = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'MORE'}, type: 1}]
              ggbuttona = {imageMessage: iimggnya.message.imageMessage, contentText: `Jika Ingin Lagi Silahkan Klik Dibawah`, footerText: `${authorbot}`, buttons: gbbutsan, headerType: 4}
              await xiedev.sendMessage(from, ggbuttona, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotobot.jpg'), contextInfo: {mentionedJid: [sender]}, quoted: team})
				  break
         case 'cowok':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  data = fs.readFileSync('./lib/cowok.js');
              jsonData = JSON.parse(data);
              randIndex = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randIndex];
              buffer = await getBuffer(randKey.result)
              immggnya = await xiedev.prepareMessage(from, buffer, image, {thumbnail: buffer})
              gbutttsan = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'MORE'}, type: 1}]
              gbuuttona = {imageMessage: immggnya.message.imageMessage, contentText: `Jika Ingin Lagi Silahkan Klik Dibawah`, footerText: `${authorbot}`, buttons: gbutttsan, headerType: 4}
              await xiedev.sendMessage(from, gbuuttona, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotobot.jpg'), contextInfo: {mentionedJid: [sender]}, quoted: team})
				  break
         case 'afk':
				  if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  if (args.length == 0) return reply('Teksnya Mana?')
              alasan = args.join(" ")
              afk[sender.split('@')[0]] = alasan.toLowerCase()
              fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
              ini_txt = "Anda Telah Afk\n"
              if (alasan != "") {
              ini_txt += "Dengan Alasan : " + alasan
              }
              buff = fs.readFileSync('./src/afk.jpg')
              const imgg2 = await xiedev.prepareMessage(from, buff, MessageType.location,{thumbnail: buff})
			     const imgg = imgg2.message["ephemeralMessage"] ? imgg2.message.ephemeralMessage : imgg2
              welcomeBut = [{buttonId:`${prefix}okee`,buttonText:{displayText:'OKE XIE'},type:1}]
              welcomeButt = {contentText: `${ini_txt} `, footerText: `${authorbot}`, buttons: welcomeBut, headerType: 6, locationMessage: imgg.message.locationMessage}
              xiedev.sendMessage(from, welcomeButt, MessageType.buttonsMessage, {quoted: team, contextInfo: {"mentionedJid": [sender]}})
              break
         case 'd':
			case 'del':
			case 'delete':
				  xiedev.deleteMessage(from, { id: team.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				  break
//>>>>>>>>>[ END FUNNY ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS ANIME ]<<<<<<<<<<\\
         case 'levi':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=levi%20ackerman`)
				  buffer = await getBuffer(anu.image)
				  immgggnya = await xiedev.prepareMessage(from, buffer, image, {thumbnail: buffer})
              gbuttssan = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'MORE'}, type: 1}]
              gbutttonna = {imageMessage: immgggnya.message.imageMessage, contentText: `Jika Ingin Lagi Silahkan Klik Dibawah`, footerText: `${authorbot}`, buttons: gbuttssan, headerType: 4}
              await xiedev.sendMessage(from, gbutttonna, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotobot.jpg'), contextInfo: {mentionedJid: [sender]}, quoted: team})
				  break
         case 'randomanime':
         case 'rdmanime':
         case 'rdmnime':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
				  data = fs.readFileSync('./lib/randomanime.js');
              jsonData = JSON.parse(data);
              randIndex = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randIndex];
              buffer = await getBuffer(randKey.result)
              imgggnya = await xiedev.prepareMessage(from, buffer, image, {thumbnail: buffer})
              gbuttsan = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'MORE'}, type: 1}]
              gbutttona = {imageMessage: imgggnya.message.imageMessage, contentText: `Jika Ingin Lagi Silahkan Klik Dibawah`, footerText: `${authorbot}`, buttons: gbuttsan, headerType: 4}
              await xiedev.sendMessage(from, gbutttona, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotobot.jpg'), contextInfo: {mentionedJid: [sender]}, quoted: team})
				  break
//>>>>>>>>>[ END ANIME ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS CONVERT ]<<<<<<<<<<\\
         case 'stiker':
         case 'sticker':
         case 'stik':
         case 'stick':
         case 's':
         case 'sgif':
         case 'stickergif':
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (isMedia && !team.message.videoMessage || isQuotedImage) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : team
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              await ffmpeg(`${media}`)
              .input(media)
              .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              reply(mess.error.eror)
              })
              .on('end', function () {
              console.log('Finish')
              exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: team})
              fs.unlinkSync(media)	
              fs.unlinkSync(`./sticker/${sender}.webp`)	
              })
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
              } else if ((isMedia && team.message.videoMessage.fileLength < 10000000 || isQuotedVideo && team.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : team
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              await ffmpeg(`${media}`)
              .inputFormat(media.split('.')[4])
              .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(mess.error.eror)
              })
              .on('end', function () {
              console.log('Finish')
              exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: team})
              fs.unlinkSync(media)
              fs.unlinkSync(`./sticker/${sender}.webp`)
              })
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
              } else {
              reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
              }
              break
         case 'stickerwm':
         case 'swm':
         case 'stickwm':
         case 'stikwm':
         case 'wmsticker':
         case 'wmstick':
         case 'wmstik':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (isMedia && !team.message.videoMessage || isQuotedImage) {
              ppp = `${args.join(' ')}`
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : team
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              const packname1 = ppp.split('|')[0]
              const author1 = ppp.split('|')[1]
              exif.create(packname1, author1, `stickwm_${sender}`)
              await ffmpeg(`${media}`)
              .input(media)
              .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              reply(mess.error.eror)
              })
              .on('end', function () {
              console.log('Finish')
              exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: team})
              fs.unlinkSync(media)	
              fs.unlinkSync(`./sticker/${sender}.webp`)	
              fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
              })
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
              } else if ((isMedia && team.message.videoMessage.fileLength < 10000000 || isQuotedVideo && team.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
              wmsti = body.slice(11)
              if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : team
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              const packname1 = wmsti.split('|')[0]
              const author1 = wmsti.split('|')[1]
              exif.create(packname1, author1, `stickwm_${sender}`)
              await ffmpeg(`${media}`)
              .inputFormat(media.split('.')[4])
              .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(mess.error.eror)
              })
              .on('end', function () {
              console.log('Finish')
              exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: team})
              fs.unlinkSync(media)
              fs.unlinkSync(`./sticker/${sender}.webp`)
              fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
              })
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
              } else {
              reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
              }
              break
         case 'takestick': 
         case 'take': 
         case 'takes':
         case 'takesticker':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedSticker) return reply(`Contoh : Reply Sticker Caption ${prefix + command} Nama|Author`)
              ppp = `${args.join(' ')}`
              const encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              const packname = ppp.split('|')[0]
              const author = ppp.split('|')[1]
              exif.create(packname, author, `takestick_${sender}`)
              exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: team})
              fs.unlinkSync(media)
              fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
              })
              break
         case 'toimg':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedSticker) return reply('Reply Stickernya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buffer = fs.readFileSync(ran)
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'tomp3':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedVideo) return reply('Reply Vidionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp4')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buffer = fs.readFileSync(ran)
              xiedev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'tourl':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if ((isMedia && !team.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              encmedia = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo : team
              media = await xiedev.downloadMediaMessage(encmedia)
              res = await upload(media)
              reply(res)
              } else {
              reply('Kirim Gambar/Video Dan Reply')
              }
              break
         case 'robot':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'gemuk':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'balik':
         case 'putar':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, duration: 999990000, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'bass':
         case 'bas':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, duration: 999990000, quoted: team})
              fs.unlinkSync(ran)
              })
				  break
         case 'bass2':
         case 'bas2':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              reply(`Hai Kak Fitur Bass Ini Bisa Diatur\nContoh : ${prefix + command} 50`)
				  var req = args.join(' ')            
				  encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				  media = await xiedev.downloadAndSaveMediaMessage(encmedia)
				  ran = getRandom('.mp3')
				  exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
				  fs.unlinkSync(media)
				  if (err) return reply(mess.error.eror)
				  buff = fs.readFileSync(ran)
				  xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt:true, quoted: team})
              fs.unlinkSync(ran)
				  })
		        break
         case 'tupai':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'fast':
         case 'cepat':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'slow':
         case 'pelan':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'imut':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'hengker':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply Audionya')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.error.eror)
              buff = fs.readFileSync(ran)
              xiedev.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, quoted: team})
              fs.unlinkSync(ran)
              })
              break
         case 'gtts':
         case 'tts':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 2) return xiedev.sendMessage(from, `Silahkan Ketik ${prefix}bahasa`, text, {quoted: team})
              const gtts = require('./lib/gtts')(args[0])
              if (args.length < 1) return xiedev.sendMessage(from, 'Textnya Mana?', text, {quoted: team})
              dtt = body.slice(8)
              ranm = getRandom('.mp3')
              rano = getRandom('.ogg')
              dtt.length > 500
              ? reply('Textnya Kebanyakan!')
              : gtts.save(ranm, dtt, function() {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
              fs.unlinkSync(ranm)
              buffer = fs.readFileSync(rano)
              if (err) return reply(mess.error.eror)
              xiedev.sendMessage(from, buffer, audio, {quoted: team, ptt:true, duration: -9999900000})
              fs.unlinkSync(rano)
              })
              })
              break
//>>>>>>>>>[ END CONVERT ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS GROUP ]<<<<<<<<<<\\
         case 'liston':
         case 'listonline':
         case 'here':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              try {
              let pinky = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
              let online = [...Object.keys(xiedev.chats.get(pinky).presences), xiedev.user.jid]
              xiedev.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {quoted: ftroli, contextInfo: {"mentionedJid": online}})
              } catch (e) {
              reply(`${e}`)
              }
              break
         case 'tagall':
			     if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
				  members_id = []
				  teks = (args.length > 1) ? body.slice(8).trim() : ''
				  teks += '\n'
				  for (let mem of groupMembers) {
				  teks += `├ @${mem.jid.split('@')[0]}\n`
				  members_id.push(mem.jid)
				  }
				  mentions(`╭${fx}「 TAG ALL 」`+ teks +`└${fx}「 XIE BOT 」`, members_id, true)
				  break
         case 'hidetag':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              var value = body.slice(9)
              var group = await xiedev.groupMetadata(from)
              var member = group['participants']
              var mem = []
              member.map( async adm => {
              mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
              })
              var options = {
              text: value,
              contextInfo: {"mentionedJid": mem},
              quoted: team
              }
              xiedev.sendMessage(from, options, text)
              break
         case 'kontag':
         case 'kontaktagall':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              argzi = arg.split('|')
              if (!argzi) return reply(`Contoh : ${prefix + command} @tag|nama`)
              if (team.message.extendedTextMessage != undefined){
              mentioned = team.message.extendedTextMessage.contextInfo.mentionedJid
              kontagall(from, mentioned[0].split('@')[0], argzi[1])
              } else {
              kontagall(from, argzi[0], argzi[1])
              }
              break
         case 'linkgroup':
         case 'linkgrup':
         case 'linkgc':
         case 'gruplink':
         case 'grouplink':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              linkgc = await xiedev.groupInviteCode (from)
              linknya = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
              xiedev.sendMessage(from, linknya, text, {quoted: team})
              break
         case 'resetlinkgc':
         case 'risetlink':
         case 'resetlinkgroup':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              json = ['action', 'inviteReset', from]
              xiedev.query({json, expect200: true})
              reply(mess.sukses)
              break
         case 'add':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			     if (team.message.extendedTextMessage === undefined || team.message.extendedTextMessage === null) return reply('Reply Targetnya!')
			     add = team.message.extendedTextMessage.contextInfo.participant
		        xiedev.groupAdd(from, [add])
				  reply(mess.sukses)
              break
         case 'kick':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (team.message.extendedTextMessage === undefined || team.message.extendedTextMessage === null) return reply('Reply Targetnya!')
              kick = team.message.extendedTextMessage.contextInfo.participant
              xiedev.groupRemove(from, [kick])
              reply(mess.sukses)
              break
         case 'listadmins':
         case 'listadmin':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
              no = 0
              for (let admon of groupAdmins) {
              no += 1
              teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
              }
              mentions(teks, groupAdmins, true)
              break
         case 'ownergrup':
         case 'pemilikgrup':
         case 'pemilikgc': // Error
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              team.updatePresence(from, Presence.composing) 
              options = {
              text: `Pemilik Group : wa.me/${from.split("-")[0]}`,
              contextInfo: {"mentionedJid": [from] }
              }
              xiedev.sendMessage(from, options, text, {quoted: team})
              break
         case 'infogc':
			case 'groupinfo':
		   case 'infogrup':
			case 'grupinfo':
			     if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              try {
				  ppGc = await xiedev.getProfilePicture(from)
			     } catch {
				  ppGc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				  }
			     buffer = await getBuffer(ppGc)
		        captionnya = `╭${fx}「 INFO GRUP 」\n├ Name: ${groupName}\n├ Admin: ${groupAdmins.length}\n├ Member: ${groupMembers.length}\n└ Desk: ${groupDesc}`
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, caption: captionnya})
              break
         case 'grup':
         case 'gc':
         case 'group':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args[0] === 'buka') {
              reply(mess.sukses)
              xiedev.groupSettingChange(from, GroupSettingChange.messageSend, false)
              } else if (args[0] === 'tutup') {
              reply(mess.sukses)
              xiedev.groupSettingChange(from, GroupSettingChange.messageSend, true)
              }
              break
         case 'welcome':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (args.length < 1) return reply('On Mengaktifkan\nOff Menonaktifkan')
              if ((args[0]) === 'on') {
              if (isWelkom) return reply('Welcome Sudah On')
              welkom.push(from)
              fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (isWelkom) return reply('Welcome Sudah Off')
              welkom.splice(from, 1)
              fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
              reply(mess.sukses)
              } else {
              reply('On Mengaktifkan\nOff Menonaktifkan')
              }
              break
         case 'autosticker':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isGroup) return replyyy(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (args.length < 1) return reply('On Mengaktifkan\nOff Menonaktifkan')
              if ((args[0]) === 'on') {
              if (isAuto) return reply('Auto Sticker Sudah On')
              autosticker.push(from)
              fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (isAuto) return reply('Auto Sticker Sudah Off')
              autosticker.splice(from, 1)
              fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
              reply(mess.sukses)
              } else {
              reply('On Mengaktifkan\nOff Menonaktifkan')
              }
              break
//>>>>>>>>>[ END GROUP ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS DOWNLOAD ]<<<<<<<<<<\\
         case 'play':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length === 1) return reply(`Contoh : ${prefix + command} Masukan Judulnya`)
              try {
              yts(q)
              .then(async (res) =>{
              let qqppp = [{
                  "buttonId": `${prefix}play3 ${res.videos[0].url}`,
                  "buttonText": {
                  "displayText": "AUDIO"
              },
                  "type": "RESPONSE"
              },{
                  "buttonId": `${prefix}play4 ${res.videos[0].url}`,
                  "buttonText": {
                  "displayText": "VIDEO"
              },
                  "type": "RESPONSE"
              }]
              xiedev.sendButtonsLoc(from, `╭「 PLAY YOUTUBE 」\n├ Judul : ${res.videos[0].title}\n├ ID Video : ${res.videos[0].videoId}\n├ Diupload Pada : ${res.videos[0].ago}\n├ Views : ${res.videos[0].views}\n├ Durasi : ${res.videos[0].timestamp}\n├ Channel : ${res.videos[0].author.name}\n├ Link Channel : ${res.videos[0].author.url}\n└ Deskripsi : ${res.videos[0].description}`, `Kak @${sender.split('@')[0]}\nSilahkan Pilih Dibawah`, qqppp, await getBuffer('https://img.youtube.com/vi/' + res.videos[0].videoId + '/sddefault.jpg'), [sender])
              })
              .catch((err) => reply(`${err}`))
              } catch (err) {
              xiedev.sendMess(ownerNumber[0], `${command} Error : ` + err)
              console.log(color('[Error]', 'red'), err)
              reply(mess.error.eror)
              }
              break
         case 'play4':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length === 0) return reply(`Contoh : ${prefix + command} Judulnya`)
              var srch = args.join(' ')
              yahahk = await yts(srch);
              xieecaaa = yahahk.all 
              var anukah = xieecaaa[0].url                            
              try {
              ythdx(anukah)
              .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
              if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `╭${fx}「 YTB MP4 」\n├ Title : ${title}\n├ Ext : Mp3\n├ Filesize : ${filesizeF}\n└ Link : ${a.data}\n\n*Maaf Durasi Melebihi Batas Bot\nSilahkan Download Sendiri:v*`)
              const captions = `╭${fx}「 YTB MP4 」\n├ Title : ${title}\n├ Ext : MP4\n├ Size : ${filesizeF}\n└ Link : ${a.data}`
              sendMediaURL(from, thumb, captions)
              await sendMediaURL(from, dl_link).catch(() => reply(mess.error.eror))
              })                
              })
              } catch (err) {
              reply(mess.error.eror)
              }
              break
         case 'play3':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Masukan Judulnya')
              teks = args.join(' ')
              if (!teks.endsWith("-doc")){
              res = await yts(`${teks}`).catch(e => {
              reply(mess.error.eror)
              })
              let thumbInfo = `╭${fx}「 YTB MP3 」\n├ Judul : ${res.all[0].title}\n├ ID Video : ${res.all[0].videoId}\n├ Diupload Pada : ${res.all[0].ago}\n├ Views : ${res.all[0].views}\n├ Durasi : ${res.all[0].timestamp}\n├ Channel : ${res.all[0].author.name}\n└ Link Channel : ${res.all[0].author.url}`
              res = await y2mateA(res.all[0].url).catch(e => {
              reply(mess.error.eror)
              })
              sendFileFromUrl(res[0].link, audio, {quoted: team, mimetype: 'audio/mp4', filename: res[0].output})
              }
              if (teks.endsWith("-doc")){
              const tec = teks.split("-doc")
              res = await yts(`${tec}`).catch(e => {
              reply(mess.error.eror)
              })
              let thumbInfo = `╭${fx}「 YTB MP3 」\n├ Judul : ${res.all[0].title}\n├ ID Video : ${res.all[0].videoId}\n├ Diupload Pada : ${res.all[0].ago}\n├ Views : ${res.all[0].views}\n├ Durasi : ${res.all[0].timestamp}\n├ Channel : ${res.all[0].author.name}\n└ Link Channel :* ${res.all[0].author.url}`
              sendFileFromUrl(res.all[0].image, image, {quoted: team, caption: thumbInfo})
              res = await y2mateA(res.all[0].url).catch(e => {
              reply(mess.error.eror)
              })
              sendFileFromUrl(res[0].link, document, {quoted: team, mimetype: 'audio/mp3', filename: res[0].output})
              }
              break
         case 'ytmp3':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Linknya Mana?')
              if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.link)
              teks = args.join(' ')
              reply(mess.wait)
              res = await y2mateA(teks).catch(e => {
              reply(mess.error.eror)
              })
              result = `╭${fx}「 YTB MP3 」\n├ Title : ${res[0].judul}\n├ Ext : Mp3\n└ Size : ${res[0].size}`
              sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: team}).then((lalu) => {
              sendFileFromUrl(res[0].link, audio, {quoted: team, mimetype: 'audio/mp3', filename: res[0].output})
              })
              break
         case 'ytmp4':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Linknya Mana?')
              if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.link)
              teks = args.join(' ')
              reply(mess.wait)
              res = await y2mateV(teks).catch(e => {
              reply(mess.error.eror)
              })
              result = `╭${fx}「 YTB MP4 」\n├Title : ${res[0].judul}\n├ Ext : Mp4\n└ Size : ${res[0].size}`
              sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: team}).then((lalu) => {
              sendFileFromUrl(res[0].link, video, {quoted: team, mimetype: 'video/mp4', filename: res[0].output})
              })
              break
         case 'ytmp4hd':
         case 'ythd':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length === 0) return reply(`Contoh : ${prefix + command} Link YouTubenya!`)
              let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
              if (!isLinkks2) return reply(mess.error.link)
              reply(mess.wait)
              try {
              ythdx(args[0])
              .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
              if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `╭${fx}「 YTHD MP4 」\n├ Title : ${title}\n├ Kualitas : 720p\n├ Size : ${filesizeF}\n├ Link : ${a.data}\n└ Maaf Durasi Terlalu Besar`)
              const captionsYtmp4 = `╭${fx}「 YTB MP4 」\n├ Title : ${title}\n├ Kualitas : 720p\n└ Size : ${filesizeF}`
              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`Nih Kak`).catch(() => reply(mess.error.eror))
              })		
              })
              } catch (err) {
              reply(mess.error.eror)
              }
              break
         case 'ytsearch':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Masukan Judulnya')
              reply(mess.wait)
              var search = args.join('')
              try {
              var find = await yts(search)
              } catch {
              return await reply(mess.error.eror)
              }
              result = find.all
              var tbuff = await getBuffer(result[0].image)
              var ytres = `*[ YT SEARCH ]*\n*————————————————————*\n\n`
              find.all.map((video) => {
              ytres += `${fx} Title:` + video.title + '\n'
              ytres += `${fx} Link:` + video.url + '\n'
              ytres += `${fx} Durasi:` + video.timestamp + '\n'
              ytres += `${fx} Upload:` + video.ago +`\n*————————————————————*\n\n`
              })
              await xiedev.sendMessage(from, tbuff, image, {thumbnail: tbuff, quoted: team, caption: ytres})
              break
         case 'ig':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isUrl(args[0]) && !args[0].includes('instagram.com') && args.length < 1) return reply("Linknya Mana")
              reply(mess.wait)
              hx.igdl(args[0])
              .then(async (res) => {
              for (let i of res.medias) {
              if (i.url.includes("mp4")){
              let bufff = await getBuffer(i.url)
              xiedev.sendMessage(from, bufff, video, {quoted: team, caption: `Type : ${i.type}`})
              } else {
              let buffer = await getBuffer(i.url)
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, quoted: team, caption: `Type : ${i.type}`})
              }
              }
              })
              break
         case 'igstalk':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply("Masukan Nama IG Nya")
              reply(mess.wait)
              ig.fetchUser(args[0])
              .then(user => {
              thum = `${user.profile_pic_url_hd}`
              desc = `*ID* : ${user.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${user.full_name}\n*Bio* : ${user.biography}\n*Followers* : ${user.followers}\n*Following* : ${user.following}\n*Private* : ${user.is_private}\n*Verified* : ${user.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
              sendMediaURL(thum, desc)
              })
              break
         case 'igstory':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!q) return reply('Masukan Nama IG Nya')
              reply(mess.wait)
              hx.igstory(q)
              .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let bufff = await getBuffer(i.url)
              xiedev.sendMessage(from, bufff, video, {quoted: team, caption: `Type : ${i.type}`})
              } else {
              let buffer = await getBuffer(i.url)
              xiedev.sendMessage(from, buffer, image, {thumbnail: buffer, quoted: team, caption: `Type : ${i.type}`})                  
              }
              }
              });
              break
         case 'tiktok':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isUrl(args[0]) && !args[0].includes('tiktok.com') && !q) return reply("Linknya Mana")
              reply(mess.wait)
              hx.ttdownloader(args[0])
              .then(res => {
              const { nowm } = res;
              axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
              .then(async (a) => {
              me = `Link: ${a.data}`
              tokvid = await xiedev.prepareMessage(from, {url:`${nowm}`}, video)
              const buutt = [
                    {buttonId:`${prefix}tiktokmusic ${q}`,buttonText:{displayText:'TIKTOK MP3'},type:1}
              ]
              const buttonMessaages = {
              videoMessage: tokvid.message.videoMessage,
              contentText: `${me}`,
              footerText: `Video Yang Di Atas Sudah NoWm\nJika Ingin Audionya Bisa Click Dibawah!`,
              buttons: buutt,
              headerType: 5
              }
              await xiedev.sendMessage(from, buttonMessaages, MessageType.buttonsMessage, {mimetype: 'video/mp4', contextInfo: {"mentionedJid": [sender]}, quoted: team})
              })
              })
              .catch( e => console.log(e))
              break
         case 'tiktokmusic':  
         case 'tiktokaudio':  
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isUrl(args[0]) && !args[0].includes('tiktok.com') && !q) return reply("Linknya Mana")
              reply(mess.wait)
              hx.ttdownloader(`${args[0]}`)
              .then(res => {
              const { wm, nowm, audio } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
              .then(async (a) => {
              me = `Link: ${a.data}`
              xiedev.sendMessage(from, {url:`${audio}`}, audio, {mimetype:'audio/mp4', quoted: team, caption: me})
              })
              })
              break
         case 'fb':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!q) return reply('Linknya?')
              if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.error.eror)
              reply(mess.wait)
              te = args.join(' ')
              Fb.getInfo(`${te}`)
              .then(G => {
              ten = `${G.download.sd}`
              tek = `${G.title}`
              sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
              })
              break
         case 'mediafire':
         case 'mdf':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Link Nya Mana')
              if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.eror)
              if (Number(filesize) >= 30000) return reply(`╭${fx}「 MEDIAFIRE EROR 」\n├ Nama: ${res[0].nama}\n├ Ukuran: ${res[0].size}\n└ Link: ${res[0].link}`)
              reply(mess.wait)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `╭${fx}「 MEDIAFIRE 」\n├ Nama : ${res[0].nama}\n├ Ukuran : ${res[0].size}\n└ Link: ${res[0].link}`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli})
              break
         case 'image':
         case 'gimage':
         case 'googleimage':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error) return reply(mess.error.eror)
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: team, caption: `*Hasil Pencarian Dari :* ${teks}`})
              }
              }
              break
         case 'penyegar':
         case 'asupan':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
              if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              xiedev.updatePresence(from, Presence.composing)
              reply(mess.wait)
              data = fs.readFileSync('./lib/asupan.js')
              jsonData = JSON.parse(data)
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              asupan = await getBuffer(randKey.result)
              vidnya = await xiedev.prepareMessage(from, asupan, video)
              const butt = [
                    {buttonId:`${prefix + command}`,buttonText:{displayText:'MORE'},type:1}
              ]
              const buttonMessages = {
              videoMessage: vidnya.message.videoMessage,
              contentText: `Video Asupan Done Kak\nSilahkan Klik Dibawah`,
              footerText: `${authorbot}`,
              buttons: butt,
              headerType: 5
              }
              await xiedev.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {mimetype: 'video/mp4', contextInfo: {"mentionedJid": [sender]}})
              break
//>>>>>>>>>[ END DOWNLOAD ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS STORAGE ]<<<<<<<<<<\\
         case 'addsticker':
         case 'addstick':
         case 'addstik':
         case 'adds':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedSticker) return reply('Reply stiker')
              nm = body.slice(12)
              if (!nm) return reply('Nama sticker nya apa?')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              sticker.push(`${nm}`)
              fs.writeFileSync(`./media/sticker/${nm}.webp`, media)
              fs.writeFileSync('./media/sticker.json', JSON.stringify(sticker))
              buttonse = [{buttonId: `${prefix}liststicker`,buttonText:{displayText: 'LIST STICKER'},type:1}]
              buttonsMessage = {
              contentText: `Jika Ingin Melihat Sticker\nYang Baru Saja Di Add\nSilahkan Klik Di Bawah`,
              footerText: `${authorbot}`,
              buttons: buttonse,
              headerType: 1
              }
              prepp = await xiedev.prepareMessageFromContent(from,{buttonsMessage},{})
              xiedev.relayWAMessage(prepp)
              break
         case 'delsticker':
         case 'delstick':
         case 'delstik':
         case 'dels':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              try {
               nmm = body.slice(12)
               wanu = sticker.indexOf(nmm)
               sticker.splice(wanu, 1)
               fs.unlinkSync(`./media/sticker/${nmm}.webp`)
               reply(`Sukses menghapus sticker ${body.slice(12)}`)
              } catch (err){
              	console.log(err)
              	reply(mess.error.eror)
              }
              break
         case 'stickerlist':
         case 'liststicker':
         case 'liststick':
         case 'liststik':
         case 'lists':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teks = `╭${fx}「 LIST STICKER 」\n`
              for (let awokwkwk of sticker) {
              	teks += `├ ${awokwkwk}\n`
              }
              teks += `└ Total : ${sticker.length}\n\n*Untuk Menggambil Sticker\nSilahkan Reply Pesan Ini\nDan Nama Stickernya*`
              xiedev.sendMessage(from, teks.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": sticker}})
              break
         case 'addvn':
         case 'addaudio':
         case 'addmusik':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedAudio) return reply('Reply audio')
              nm = body.slice(7)
              if (!nm) return reply('Nama vn nya apa?')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              audio.push(`${nm}`)
              fs.writeFileSync(`./media/audio/${nm}.mp3`, media)
              fs.writeFileSync('./media/audio.json', JSON.stringify(audio))
              buttonse = [{buttonId: `${prefix}listaudio`,buttonText:{displayText: 'LIST AUDIO'},type:1}]
              buttonsMessage = {
              contentText: `Jika Ingin Melihat Audio\nYang Baru Saja Di Add\nSilahkan Klik Di Bawah`,
              footerText: `${authorbot}`,
              buttons: buttonse,
              headerType: 1
              }
              preepp = await xiedev.prepareMessageFromContent(from,{buttonsMessage},{})
              xiedev.relayWAMessage(preepp)
              break
         case 'delvn':
         case 'delaudio':
         case 'delmusik':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              try {
               nmm = body.slice(7)
               wanu = audio.indexOf(nmm)
               audio.splice(wanu, 1)
               fs.unlinkSync(`./media/audio/${nmm}.mp3`)
              reply(`Sukses menghapus vn ${body.slice(7)}`)
              } catch (err){
              	console.log(err)
              	reply(mess.error.eror)
              }
              break
         case 'vnlist':
         case 'listvn':
         case 'listaudio':
         case 'listmusik':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teks = `╭${fx}「 LIST AUDIO 」\n`
              for (let awokwkwk of audio) {
              	teks += `├ ${awokwkwk}\n`
              }
              teks += `└ Total : ${audio.length}\n\n*Untuk Menggambil Audio\nSilahkan Reply Pesan Ini\nDan Nama Audionya*`
              xiedev.sendMessage(from, teks.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": audio}})
              break
         case 'addimage':
         case 'addimeg':
         case 'addimg':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedImage) return reply('Reply image')
              nm = body.slice(10)
              if (!nm) return reply('Nama image nya apa?')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              image.push(`${nm}`)
              fs.writeFileSync(`./media/image/${nm}.jpg`, media)
              fs.writeFileSync('./media/image.json', JSON.stringify(image))
              buttonse = [{buttonId: `${prefix}listimage`,buttonText:{displayText: 'LIST IMAGE'},type:1}]
              buttonsMessage = {
              contentText: `Jika Ingin Melihat Image\nYang Baru Saja Di Add\nSilahkan Klik Di Bawah`,
              footerText: `${authorbot}`,
              buttons: buttonse,
              headerType: 1
              }
              preppp = await xiedev.prepareMessageFromContent(from,{buttonsMessage},{})
              xiedev.relayWAMessage(preppp)
              break
         case 'delimage':
         case 'delimeg':
         case 'delimg':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              try {
               nmm = body.slice(10)
               wanu = image.indexOf(nmm)
               image.splice(wanu, 1)
               fs.unlinkSync(`./media/image/${nmm}.jpg`)
               reply(`Sukses menghapus image ${body.slice(10)}`)
              } catch (err){
              	console.log(err)
              	reply(mess.error.eror)
              }
              break
         case 'imagelist':
         case 'listimage':
         case 'listimeg':
         case 'listimg':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teks = `╭${fx}「 LIST IMAGE 」\n`
              for (let awokwkwk of image) {
              	teks += `├ ${awokwkwk}\n`
              }
              teks += `└ Total : ${image.length}\n\n*Untuk Menggambil Image\nSilahkan Reply Pesan Ini\nDan Nama Imagenya*`
              xiedev.sendMessage(from, teks.trim(), extendedText, { quoted: team, contextInfo: {"mentionedJid": image}})
              break
         case 'addvideo':
         case 'addvid':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              if (!isQuotedVideo) return reply('Reply Video')
              nm = body.slice(10)
              if (!nm) return reply('Nama Video nya apa?')
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              video.push(`${nm}`)
              fs.writeFileSync(`./media/video/${nm}.jpg`, media)
              fs.writeFileSync('./media/video.json', JSON.stringify(video))
              buttonse = [{buttonId: `${prefix}listvideo`,buttonText:{displayText: 'LIST VIDEO'},type:1}]
              buttonsMessage = {
              contentText: `Jika Ingin Melihat Video\nYang Baru Saja Di Add\nSilahkan Klik Di Bawah`,
              footerText: `${authorbot}`,
              buttons: buttonse,
              headerType: 1
              }
              preeppp = await xiedev.prepareMessageFromContent(from,{buttonsMessage},{})
              xiedev.relayWAMessage(preeppp)
              break
         case 'delvideo':
         case 'delvid':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              try {
               nmm = body.slice(10)
               wanu = video.indexOf(nmm)
               video.splice(wanu, 1)
               fs.unlinkSync(`./media/video/${nmm}.jpg`)
               reply(`Sukses menghapus video ${body.slice(10)}`)
              } catch (err){
              	console.log(err)
              	reply(mess.error.eror)
              }
              break
         case 'videolist':
         case 'listvideo':
         case 'listvid':
         case 'vidlist':
              if (!isUser) return replyy(from, dev1, dev2, dev3, {quoted: ftroli})
				  if (isBanned) return replyy(from, team1, team2, team3, {quoted: ftroli})
              teks = `╭${fx}「 LIST VIDEO 」\n`
              for (let awokwkwk of video) {
              	teks += `├ ${awokwkwk}\n`
              }
              teks += `└ Total : ${video.length}\n\n*Untuk Menggambil Video\nSilahkan Reply Pesan Ini\nDan Nama Videonya*`
              xiedev.sendMessage(from, teks.trim(), extendedText, {quoted: team, contextInfo: {"mentionedJid": video}})
              break
//>>>>>>>>>[ END STORAGE ]<<<<<<<<<<\\

//>>>>>>>>>[ KHUSUS OWNER ]<<<<<<<<<<\\
         case 'self':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              public = false
              return reply('*MODE : SELF*')
              break
			case 'public':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              public = true
              return reply('*MODE : PUBLIC*')
              break
         case 'banchat':
         case 'mute':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (isBanchat) return reply(`Sudah Mute Grup`)
              bancht.push(from)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
              reply(mess.sukses)
              break
         case 'unbanchat':
         case 'unmute':
              if (isBanchat){
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!isBanchat) return reply(`Sudah Unmute Grup`)
              let anu = bancht.indexOf(from)
              bancht.splice(anu, 1)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
              reply(mess.sukses)
              }
              break
         case 'setprefix':
              if (!isOwner) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Textnya Mana')
              prefix = args[0]
              reply(`Menjadi : ${prefix}`)
              break
         case 'setthumb':
         case 'setffoto':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              fs.writeFileSync('./src/fotobot.jpg', media)
              reply(mess.sukses)
              break
         case 'setthumb2':
         case 'setffoto2':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              fs.writeFileSync('./src/fotobot2.jpg', media)
              reply(mess.sukses)
              break
         case 'setvnwelcome':
         case 'setvncome':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              encmedia = JSON.parse(JSON.stringify(team).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await xiedev.downloadMediaMessage(encmedia)
              fs.writeFileSync('./mp3/halo.mp3', media)
              reply(mess.sukses)
              break
         case 'buggc':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              sendBug(from)
              break
         case 'buggc2':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!q) return reply('Masukan ID Grupnya')
              sendBug(args[0])
              break
         case 'join':
              if (!isOwner) return reply(mess.only.ownerB)
              setTimeout( () => {
              xiedev.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
              reply(mess.sukses)
              }, 20000)
              break
         case 'leave':
         case 'outgc':
              if (!isGroup) return replyyy(mess.only.group)
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              anu = await xiedev.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
              break
         case 'clearall':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              anu = await xiedev.chats.all()
              xiedev.setMaxListeners(25)
              for (let _ of anu) {
              xiedev.deleteChat(_.jid)
              }
              reply(mess.sukses)
              break
         case 'delchat':
         case 'deletechat':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              reply('Sukses Menghapus Chat' + from)
              setTimeout( () => {
              xiedev.modifyChat(from, ChatModification.delete)
              }, 50000)
              break
         case 'revoke':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (!isGroup) return replyyy(mess.only.group)
              xiedev.revokeInvite(from)
              reply(mess.sukses)
              break
         case 'clone':
              if (!isOwner) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Tag target yang ingin di clone')
              if (team.message.extendedTextMessage === undefined || team.message.extendedTextMessage === null) return reply('Tag Orangnya')
              mentioned = team.message.extendedTextMessage.contextInfo.mentionedJid[0]
              let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
              try {
              pp = await xiedev.getProfilePicture(id)
              buffer = await getBuffer(pp)
              xiedev.updateProfilePicture(botNumber, buffer)
              mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
              } catch (e) {
              reply(mess.error.eror)
              }
              break
         case 'ban': // Error
				  xiedev.updatePresence(from, Presence.composing) 
				  if (args.length < 1) return
				  if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
				  mentioned = team.message.extendedTextMessage.contextInfo.mentionedJid
			     ban = mentioned
			     reply(`Berhasil Banned : ${ban}`)
				  break
         case 'unban': // Error
				  if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
				  bnnd = body.slice(8)
				  ban.splice(`${bnnd}@s.whatsapp.net`, 1)
			     reply(`Nomor wa.me/${bnnd} telah di unban!`)
				  break
         case 'block':
				  xiedev.updatePresence(from, Presence.composing) 
				  if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
				  xiedev.blocked (`${body.slice(7)}@c.us`, "add")
				  reply(`Perintah Diterima, Memblokir ${body.slice(7)}@c.us`)
				  break
         case 'unblock':
				  if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
				  xiedev.blocked (`${body.slice(9)}@c.us`, "remove")
				  reply(`perintah Diterima, Membuka Blokir ${body.slice(9)}@c.us`)
				  break 
         case 'scmd':
         case 'stickscmd':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${prefix + command} cmdnya dan tag stickernya`)
              var kodenya = team.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              sCmd(kodenya, q)
              reply(mess.sukses)
              } else {
              reply('Reply Stickernya')
              }
              break
         case 'delcmd':
         case 'delscmd':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!isQuotedSticker) return reply(`Penggunaan : ${prefix + command} tagsticker`)
              var kodenya = team.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _stikcmd.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scmd.json', JSON.stringify(_stikcmd))
              reply(mess.sukses)
              break
         case 'colong': 
         case 'ambil':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!isQuotedSticker) return reply(`Contoh : Reply Sticker Caption ${prefix + command}`)
              const encmedia = JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              const media = await xiedev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
              if (error) return reply(mess.error.eror)
              xiedev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: team})
              fs.unlinkSync(media)
              fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
              })
              break
         case 'bc': // Broadcast Product And ButtonLocation
              if (!isOwner) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Textnya Mana')
              anu = await xiedev.chats.all()
              if (isMedia && !team.message.videoMessage || isQuotedImage) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo : team
              buff = await xiedev.downloadMediaMessage(encmedia)
              for (let _ of anu) {
              const fduc2 = {
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Ajg3ecTNueOfqjoOyrhNVA55G5mkFhpHpJ6nVSJDFhzm.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "IbjWwVUqtW+EtoEAeTehNXkOz3bhHWK6RYbdXTGuY74=",
								"fileLength": "10",
								"height": 1280,
								"width": 1280,
								"mediaKey": "9lVtyM7Kh0NH4NezhafGDQ3ZZxO/Ne0YLVN0CDDwIak=",
								"fileEncSha256": "ji3iaVZDwnXXmYSvf7n1YgMEMCxXfzNTshJ4mzfHalg=",
								"directPath": "/v/t62.7118-24/34672683_609302397094916_3258909973311458154_n.enc?ccb=11-4&oh=5a7d62fc70fa846543f5e3cbd35be2a5&oe=61899559",
								"mediaKeyTimestamp": "1633875454",
								"jpegThumbnail": buff
							},
							"productId": "6259333764138856",
							"title": "BROADCAST",
							"description": `${body.slice(4)}`,
							"currencyCode": "IDR",
							"priceAmount1000": "30000",
							"productImageCount": 1,
							"salePriceAmount1000": "0"
						  },
						 "businessOwnerJid": "6283818221226@s.whatsapp.net"
					  }
				  },
			  	  ress = await xiedev.prepareMessageFromContent(_.jid, fduc2, {quoted: ftroli, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWAMessage(ress)
              }
              reply(mess.sukses)
              } else {
              for (let _ of anu) {
              sendButtLocation(_.jid, `「BROADCAST」\n\n${body.slice(4)}`, `${authorbot}`, {jpegThumbnail: fs.readFileSync('./src/fotobot.jpg')}, 
              [
                {buttonId:`${prefix}menu`,buttonText:{displayText:'ALL CMD'},type:1},
                {buttonId:`${prefix}daftar`,buttonText:{displayText:'DAFTAR USER'},type:1}
              ], {quoted: team, contextInfo: {"mentionedJid": [sender]}})
              }
              reply(mess.sukses)
              }
              break
         case 'bc2': // Broadcast Catalog
              if (!isOwner) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Textnya Mana')
              anu = await xiedev.chats.all()
              if (isMedia && !team.message.videoMessage || isQuotedImage) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo : team
              buff = await xiedev.downloadMediaMessage(encmedia)
              for (let _ of anu) {
              const tesbamg = {
					"orderMessage": {
						"orderId": "1884484931731125",
						"thumbnail": buff,
						"itemCount": 29,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `「 BROADCAST 」\n\n${body.slice(4)}`,
						"orderTitle": `${namabot}`,
						"sellerJid": "6283873517269@s.whatsapp.net",
						"token": "AR4tl+AFSAa9r3b8sS583fjGDGFLBv+CFRIk/LR/lXthzg==",
						"totalAmount1000": "30000",
						"totalCurrencyCode": "IDR"
					  }
				  },
				  ress5 = await xiedev.prepareMessageFromContent(from, tesbamg, {quoted: ftroli, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWAMessage(ress5)
              }
              reply(mess.sukses)
              }
              break
         case 'bc3': // Broadcast Original
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('Textnya Mana?')
              anu = await xiedev.chats.all()
              if (isMedia && !team.message.videoMessage || isQuotedImage) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo : team
              media = await xiedev.downloadMediaMessage(encmedia)
              for (let _ of anu) {
              xiedev.sendMessage(_.jid, media, image, {caption: `「 BROADCAST 」\n\n${body.slice(4)}`})
              }
              reply(mess.sukses)
              } else {
              for (let _ of anu) {
              sendMess(_.jid, `${body.slice(4)}`)
              }
              reply(mess.sukes)
              }
              break
         case 'autoread':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (args.length < 1) return reply(`Contoh : ${prefix}autoread gc on`)
              if ((args[0]) === 'gc') {
              if (args.length < 2) return reply(`Contoh : ${prefix}autoread gc on`)
              if ((args[0]) === 'on') {
              if (readGc === true) return
              readGc = true
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (readGc === false) return
              readGc = false
              reply(mess.sukses)
              } else {
              reply(`Pilih on atau off`)
              }
              } else if ((args[0]) === 'pc') {
              if (args.length < 2) return reply(`Contoh : ${prefix}autoread pc on`)
              if ((args[0]) === 'on') {
              if (readPc === true) return
              readPc = true
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (readPc === false) return
              readPc = false
              reply(mess.sukses)
              } else {
              reply(`Pilih on atau off`)
              }
              } else {
              reply(`*List Auto Read*\n• gc\n• pc`)
              }
              break
         case 'autojoin':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (args.length < 1) return reply('On Mengaktifkan\nOff Menonaktifkan')
              if ((args[0]) === 'on') {
              if (autojoin == true) return reply('Auto-Join Sudah On')
              autojoin = true
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (autojoin == false) return reply('Auto-Join Sudah Off')
              autojoin = false
              reply(mess.sukses)
              } else {
              reply('On Mengaktifkan\nOff Menonaktifkan')
              }
              break
         case 'welcomeow':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              if (!isGroup) return replyyy(mess.only.group)
              if (args.length < 1) return reply('On Mengaktifkan\nOff Menonaktifkan')
              if ((args[0]) === 'on') {
              if (isWelkom) return reply('Welcome Sudah On')
              welkom.push(from)
              fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
              reply(mess.sukses)
              } else if ((args[0]) === 'off') {
              if (isWelkom) return reply('Welcome Sudah Off')
              welkom.splice(from, 1)
              fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
              reply(mess.sukses)
              } else {
              reply('On Mengaktifkan\nOff Menonaktifkan')
              }
              break
         case 'product':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              const fduc3 = {"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Ahn1QvxbhABRggFOJXoaohrfnXE5MGvQbg9--aFolZ_Y.enc","mimetype": "image/jpeg","fileSha256": "ViRNzid9QeEsJCaZcseZCjzx+DMZo2tD+fGWKjuSNyg=","fileLength": "1000000000000","height": 450,"width": 845,"mediaKey": "UAG49T+qficzxxf1mw0S2Q6HXgbNpwVOaon5Gf3W2nM=","fileEncSha256": "PQ3NUWG1y8b9qVmrnel1iA2Ca5G145QxtAJnveLr7Cc=","directPath": "/v/t62.7118-24/40999194_223465573147244_6081626207846738390_n.enc?ccb=11-4&oh=1343f6895dcc4e6b28a8e35e2aefe599&oe=617BF69C","mediaKeyTimestamp": "1632884125","jpegThumbnail": fs.readFileSync('./src/fotobot.jpg')},"productId": "4559966904061216","title": `${xiecaa1(prefix)}`,"description": `${xiecaa1(prefix)}`,"currencyCode": "IDR","priceAmount1000": "30000","productImageCount": 1,"salePriceAmount1000": "0"},"businessOwnerJid": "6283818221226@s.whatsapp.net"}},
			  	  anubangg = await xiedev.prepareMessageFromContent(from, fduc3, {quoted: ftroli, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWAMessage(anubangg)
              break
         case 'product2':
              if (!isOwner && !team.key.ftomMe) return reply(mess.only.ownerB)
              const ducttf = {"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/AmWZB0Nkymeq-1MzEa_VwIXAvJXAALAeyy77MP1qiKGs.enc","mimetype": "image/jpeg","fileSha256": "8VGBDfdT3EabYSE8sOThjzgqm//tl24UkfdyM4auc6Y=","fileLength": "1000000","height": 1280,"width": 1280,"mediaKey": "5LBi2hkauXK9QHkBH9XYESNGw6+Vdw2O+GziQ6zhzNw=","fileEncSha256": "w3qctpL3C3Wo2QRGFVfm9IjuPl7SntdIOrYKGY4vGUA=","directPath": "/v/t62.7118-24/41192615_1034886787345179_645352838239032037_n.enc?ccb=11-4&oh=1ef61b4638b668cf95ebb147462789b8&oe=61A0257F","mediaKeyTimestamp": "1635386881","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAyAAACAwEBAAAAAAAAAAAAAAAABAIDBQYBAQADAQEBAQAAAAAAAAAAAAACAwQAAQUG/9oADAMBAAIQAxAAAABoCP54buXbWwZxzPJzd73NJi462c3MZX09nN9MTqFW1EyFlZxWgSDq52trSf6PL7mfpivVSg6uahXTRFTpA2wb5e9cvqqyY+c0NoUQtoUEfSAiJekDq9qBr/NMFSgCpwDb/8QAJxAAAgIBAwQBBAMAAAAAAAAAAQIAAwQREiEQEyIxFCBBUWEFMnH/2gAIAQEAAT8A6AEnQSvFJ5YztUL7m3HP4jYqnlDHRkOhHUcyqtal3N7luQz8LwISeiXOh4MBTISWIUYg9MZQX1MybdTtB4Exql27jMpArAjrU5RwZkqGQOJkXdsaD3DbcSfMyjJcMA51ExLAU2zKZi+h9fQnljywdyyz9CYih+6W4EtBrcrMO47EaMqZCT49m/bpLMVl5Xnovjj8/iVafLZW9MJXjV0livoz+RVVyRKVRXUAeBTWJayMSsTKQ/24j5CbTt5MqQ2PMpwqhBMmsmxGEqsy1ADNxDS2VcxI4EqrFdSgnWMvlO0NDzEq1HiNITXjp+47l2JMu02RsjYi+A1PEUgLoeNYL0rHlzDnk2poPDWd+gCPl/ZRGZmOpPTIOij/AGXNvUEfbmJYX51lVgZX3H0ZWO46Aeh9P//EACURAAICAAUEAgMAAAAAAAAAAAECABEDEiExMhBBUXEiI1KBkf/aAAgBAgEBPwCUFFt/JnH4iUr7aHphoTTHaV9ny/UfkYDUxBZBHcRSMq+o4LAES0ffQx1XMAsxDRAHYRGJUCI63vpGw0BJzCjDiIvHUy4vEHwYqAlh6mNzrx1//8QAKBEAAgIBAwIEBwAAAAAAAAAAAQIAAxIEETFBURQhMkIQEyMzU3Gx/9oACAEDAQE/AIKq6VDW+bHhZ4lfwptMKbwcBg/aEFSQeRNNQSyueIqnxW9nX0zUY/OfaKSpBHImpXJkce5ZQu9Ve3aaiosBjyrTKi8jM4t/ZfVXmq1dZqW2ZUHtUCUWvgAG26CV2rv5tuCOY1FQZiXUAxrqqx9PzbvCSSSZV6FPYwVru4/U1P3MegHx/9k="},"productId": "4039103992862415","title": "Xie Pinky Manca","description": `${xiecaa1(prefix)}`,"productImageCount": 3},"businessOwnerJid": "6283818221226@s.whatsapp.net"}},
              hemyy = await xiedev.prepareMessageFromContent(from, ducttf, {quoted: team, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWaMessage(hemyy)
              break
         case 'catalog':
         case 'katalog':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              data = fs.readFileSync('./lib/image.js');
              jsonData = JSON.parse(data);
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              buffer = await getBuffer(randKey.image)
              const tesbang = {
					"orderMessage": {
						"orderId": "1884484931731125",
						"thumbnail": buffer,
						"itemCount": 29,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${xiecaa1(prefix)}`,
						"orderTitle": `${xiecaa1(prefix)}`,
						"sellerJid": "6283873517269@s.whatsapp.net",
						"token": "AR4tl+AFSAa9r3b8sS583fjGDGFLBv+CFRIk/LR/lXthzg==",
						"totalAmount1000": "30000",
						"totalCurrencyCode": "IDR"
					  }
				  }
				  ress4 = await xiedev.prepareMessageFromContent(from, tesbang, {quoted: ftroli, contextInfo: {"mentionedJid": [sender]}})
              xiedev.relayWAMessage(ress4)
              break
         case 'viewonce':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              data = fs.readFileSync('./lib/image.js');
              jsonData = JSON.parse(data);
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              buffer = await getBuffer(randKey.image)
              res = await xiedev.prepareMessageFromContent(from,{
              "viewOnceMessage": {
              "message": {
              "imageMessage": {
              "mimetype": 'image/jpeg',
              "caption": `${namabot}`,
              "jpegThumbnail": buffer,
              "viewOnce": true
              }
              }
              }
              }, {quoted: ftroli})
              xiedev.relayWAMessage(res)
              break
         case 'fduct':
              if (!isOwner && !team.key.fromMe) return reply(mess.only.ownerB)
              data = fs.readFileSync('./lib/image.js');
              jsonData = JSON.parse(data);
              randXiedev = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randXiedev];
              buffer = await getBuffer(randKey.image)
        	     fdoct = xiedev.prepareMessageFromContent(from, {
        	     "documentMessage": {
        	     "title": `Done Owner ${namabot}`,
        	     "jpegThumbnail": buffer
              }
              }, {quoted: ftroli})
              xiedev.relayWAMessage(fdoct)
              break
//>>>>>>>>>[ END OWNER ]<<<<<<<<<<\\
         default:
              if (isMedia && isAuto && !team.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringfy(team).replace('quotedM','m')).message.extendedTextMessage.contextInfo : team
						const media = await xiedev.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.eror)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								xiedev.sendMessage(from, buff, sticker, {quoted: team})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
              if ((isMedia & isAuto && !team.message.videoMessage || isQuotedVideo)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringfy(team).replace('quotedM','m')).message.extended.TextMesaage.contextInfo : team
						const media = await xiedev.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`Maaf Sizenya Terlalu Besar!`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.eror)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								xiedev.sendMessage(from, buff, sticker, {quoted: team})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
                 }
              }
              if (isGroup && budy != undefined) {
              } else {
              console.log(color('[XDT]','red'), 'Tidak Ada Perintah', color(sender.split('@')[0]))
              }
              }
		        } catch (e) {
			     console.log('Error : %s', color(e, 'red'))
         }
	 })
}
starts()
