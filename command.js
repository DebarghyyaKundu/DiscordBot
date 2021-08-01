module.exports = {
    name : 'instructions',
    description : 'Instructions',
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0f0f3e')
        .setTitle('Hello There')
        .setURL('https://www.google.com')
        .setImage('https://www.licensingmagazine.com/wp-content/uploads/2020/09/Chacha-Chaudhary.jpg')
        .addFields(
            {name: 'Welcome', value: '!ping'},
            {name: 'To play songs', value: '!p'},
            {name: 'To stop songs', value: '!s'}
        )
        
        message.channel.send(newEmbed);
    }
}