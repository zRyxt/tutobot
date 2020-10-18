const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = process.env.Prefix;

client.on('ready', () => {
   console.log(`'Estoy listo!`);
});


client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'ping')) {
    message.channel.send(`pong 🏓!!`);
  }else 
    
  
if(message.content.startsWith(prefix + 'comandos')) { 
     message.channel.send(`**Comandos:** \n ?ping`);
} else
 if (message.content.startsWith(prefix + 'embed')) {
const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
    .setImage(message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://www.google.es/")
    .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea",  true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
message.channel.send({ embed: embedDatos });
   


}

  //embeds ^^
  
});

client.login(process.env.Token);