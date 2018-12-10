exports.run = async (client, msg, args) => {
  let kufur=[
    "amına kodumun jedayı seni (şaka amaçlıdır!)",
    "babanın annesinin amına koyayım orul orul orospu evladı (şaka amaçlıdır!)",
    "ebenin amı gibi kaşları da kara (şaka amaçlıdır!)",
    "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu (şaka amaçlıdır!) ",
    "senin ananın amına mancınıkla patates atayım (şaka amaçlıdır!)",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın (şaka amaçlıdır!)",
    "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü (şaka amaçlıdır!)",
    "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben (şaka amaçlıdır!)",
    "ananın amını keserim cebime koyarım sıkıldıkça sikerim (şaka amaçlıdır!)",
    "ananın amına sınav yapar 2 milyon kişiyi sokarım (şaka amaçlıdır!)",
    "amına barut döker sürtünmeyle yakarım orospu evladı (şaka amaçlıdır!)",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler. (şaka amaçlıdır!)",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin (şaka amaçlıdır!)",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi (şaka amaçlıdır!)",
    "küfür ederdim ama anan çok yordu (şaka amaçlıdır!)",
    "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim (şaka amaçlıdır!)",
    "senin götünü keser çorap lastiği yaparım. (şaka amaçlıdır!)",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "358674744817614848")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Yapımcıma Sövemezsin!!!`)
}})
   if(member.id === "407236454616530946")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Quartiy Sövemezsin!!!`)
}})
  if(member.id === "358674744817614848")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop Yapımcıma Sövemezsin!!!`)
}})

  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Bana Sövemezsin!!!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'NSFW bir resim gösterir.',
  usage: 'söv'
 }
