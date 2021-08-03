const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Loops through all files in the folder and finds the right file
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Shows in terminal that bot is online
client.once('ready', () => {
    console.log('ChaCha in the house!');
});

client.on('message', message =>{
    // It will return if provided command is without '!' or bot is the author
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Ping Command
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    // Embed Command
    if(command === 'i'){
        client.commands.get('instructions').execute(message, args, Discord);
    }


    // if(command === 'clear'){
    //     client.commands.get('clear').execute(message, args);
    // }
    
    // Play Command
    if(command === 'p'){
        client.commands.get('p').execute(message, args);
    }
    else if(command === 's'){
        client.commands.get('s').execute(message, args);
    }
});

client.login('Auth Token');
// ODIzNDI1NDYxMzM4MTEyMDAw.YFgouA.Xlej5C0VMTrRPHx63oDogKwm8qg