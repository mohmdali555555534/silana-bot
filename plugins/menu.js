import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *بوت - الرعب الملكي* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *مرحبا, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



『بـوت⤜الرعب الملكي』
المطور الاساسي الرعب الملكي(https://wa.me/967700244383)
استخدم البوت فيما يرضي الله ولا تنسو ان تدعو اخواننا في غزه😔💖
◈🕊╎(اهلا بكم ف بوت الرعب الملكي قبل استخدام اي امر اكتب (.) وملاحضه (بقية الاوامر لم اضيفها في قائمة الاوامر╎🕊◈
❋ ─━─⊰🍷⊱─━─ ❋
⌬⚔»┊اوامـر الـجـروبات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔ضـيـف〕↠
↞〔الاشباح〕↠
↞〔طـرد〕↠
↞〔مـنـشـني〕↠
↞〔تـرقـية〕↠
↞〔اعـفـاء〕↠
↞〔انـذار〕↠
↞〔حـذف - انـذار〕↠
↞〔حـذف〕↠
↞〔مـنـشـن〕↠
↞〔عـمـلات〕↠
↞〔مـخـفـي〕↠
↞〔المـشـرفـيـن〕↠
↞〔المـنـشـن〕↠
↞〔الـبـروفايـل〕↠
↞〔الـقـروب〕↠
↞〔دعـوة〕↠
↞〔رستر〕↠
↞〔لـفـل〕↠
↞〔التـرحـيـب〕↠
↞〔الـمـغادرة〕↠
↞〔فتـح القـروب〕↠
↞〔اغـلاق القـروب〕↠
↞〔خـط〕↠
↞〔تـوب〕↠
↞〔ليـنـك〕↠
↞〔يـومـي〕↠
↞〔الـمـاس〕↠
↞〔تـرتـيـب_البـنـك〕↠
↞〔شـراء〕↠
↞〔هـجـوم〕↠
↞〔فزوره〕↠
↞〔ابلاغ〕↠
↞〔سمسم〕↠
↞〔الملكي〕↠
❋ ─━─⊰🍷⊱─━─ ❋
ء⌬🕋»┊القـسـم الاسلامـي』↯*
↞〔سـورة〕↠
↞〔حـديـث〕↠
↞〔قـرآن〕↠
↞〔الله〕↠
↞〔آيـات〕↠
↞〔تلاوة〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬🕹»┊قـسـم التـرفـيه』↯
↞〔اكـس او〕↠
↞〔كـت〕↠
↞〔صـراحـة〕↠
↞〔تحدي〕↠
↞〔ذكـاء〕↠
↞〔غـبـاء〕↠
↞〔جـمـال〕↠
↞〔سـيـارات〕↠
↞〔عين〕↠
↞〔الـحـب〕↠
↞〔لـو〕↠
↞〔هـل〕↠
↞〔رونـالـدو〕↠
↞〔مـيـسـي〕↠
↞〔احـرز〕↠
↞〔تـفـكيـك〕↠
↞〔ميـمـز〕↠
↞〔دمـج〕↠
↞〔زواج〕↠
↞〔طلاق〕↠
↞〔عرس〕↠
↞〔زوجني〕↠
↞〔طلقني〕↠
↞〔عيد〕↠
↞〔كيوت〕↠
↞〔اقتباس〕↠
↞〔عـلـم〕↠
↞〔تـاج〕↠
↞〔حـكـمة〕↠
↞〔ميـمـز〕↠
↞〔سـؤال〕↠
↞〔قط〕↠
↞〔بين〕↠
↞〔بجد〕↠
↞〔نسخ〕↠
↞〔انصح〕↠
↞〔شخصيه〕↠
↞〔كورة〕↠
↞〔اختصار〕↠
↞〔متفجرات〕↠
↞〔خروف〕↠
↞〔فحل〕↠
↞〔مخنوث〕↠
↞〔ملعون〕↠
↞〔لوطي〕↠
↞〔قتل〕↠
↞〔جريمة〕↠
↞〔اكتب-ملصق_باسمك-attp〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬⏏»┊قـسـم التـنـزيـلات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔انـسـتغـرام〕↠
↞〔جوجـل〕↠
↞〔ويكيـبـديا〕↠
↞〔انـسـتا〕↠
↞〔اسـم_اغنـية〕↠
↞〔فـيـس〕↠
↞〔بـيـن〕↠
↞〔مـيـديافايـر〕↠
↞〔شـغـل〕↠
"↞〔تـيكـتـوك〕↠*
" ↞〔تويـتـر〕↠*
↞〔بحـث〕↠
↞〔اغنـية〕↠
↞〔فيـديـو〕↠
↞〔تطبـيـق〕↠
↞〔صـورة〕↠
↞〔صـورة²〕↠
↞〔تحميل〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬♻»┊قـسـم التـحـويـلات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔مـلـصـق〕↠
↞〔سـرقة〕↠
↞〔لفيـديو〕↠
↞〔لصـورة〕↠
↞〔دائـري〕↠
↞〔تـخـيل〕↠
↞〔مكـس〕↠
↞〔لرابط〕↠
↞〔جـواهـر〕↠
↞〔سـتـك〕↠
↞〔تيـلجـراف〕↠
↞〔لكـرتـون〕↠
↞〔باركـود〕↠
↞〔لريك〕↠
↞〔جوده hd〕↠
↞〔اكتب〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬♠»┊قـسـم المـطـور』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔ضـيـف_بريـمـيام〕↠
↞〔حـذف_بريـمـيام〕↠
↞〔الحـالة〕↠
↞〔ريـستـارت〕↠
↞〔بـان〕↠
↞〔الـغاء_البـان〕↠
#↞〔اطـفاء〕↠*
↞〔الحـالة〕↠
↞〔تفـعيـل〕↠
↞〔المـبنـديـن〕↠
↞〔إعـادة〕↠
↞〔ادخـل〕↠
↞〔ضـيف_اكـس بي〕↠
↞〔ضيـف_جـواهـر〕↠
↞〔بريم2〕↠
↞〔تعطيل〕↠
↞〔تفعيل〕↠
↞〔حظر〕↠
↞〔فك_الحظر〕↠
↞〔ادخل〕↠
↞〔انشر〕↠
↞〔الجروبات〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬🔊»┊قـسـم الصـوتـيات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔عمـيق〕↠
↞〔منـفـوخ〕↠
↞〔تخـيـن〕↠
↞〔صـاخـب〕↠
↞〔سـريـع〕↠
↞〔تخـييـن²〕↠
↞〔روبـوت〕↠
↞〔بـطيـئ〕↠
↞〔نـاعـم〕↠
↞〔سـنـجـاب〕↠
❋ ─━─⊰🍷⊱─━─ ❋
『تـوقـيـع ┊ ˼‏📜˹』↶
「🍷 بوت┊الرعب الملكي」
المطور https://wa.me/967700244383
اي مشكله تواجهك تعال للمطور يحلها لك
❋ ─━─⊰🍷⊱─━─ ❋
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(اوامر|الاوامر|أوامر|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
