const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 's',
    description: 'Ruk jao!',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('Join the voice channel to play :slight_smile::slightly_smiling_face:');
        await voiceChannel.leave();
        await message.channel.send('Acha chalta hoon, duwawo me yaad rakhna :smiling_face_with_tear:');
    }
}