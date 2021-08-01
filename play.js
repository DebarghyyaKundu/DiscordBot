const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'p',
    description: 'Yaar tera kar lega handle!',
    async execute(message, args){
        // The bot joins the channel user is in to play something
        const voiceChannel = message.member.voice.channel;

        // To check if user is in the voice channel
        if(!voiceChannel) return message.channel.send('Voice channel pe ayo! :slightly_smiling_face:');
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if(!permissions.has('CONNECT')) return message.channel.send('Permission required');
            if(!permissions.has('SPEAK')) return message.channel.send('Permission required');

            // If name of song not specified
            if(!args.length) return message.channel.send('Naam to batao gaane ka :face_with_rolling_eyes:');

            const connection = await voiceChannel.join();
            
            // Looks for videos on youtube based on keywords with yt-search
            const videoFinder = async(query) => {
                const videoResult = await ytSearch(query);
                
                // If multiple videos on same keyword is found first video of that lot is played
                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            }
            
            // If multiple keywords is present it is being merged here
            const video = await videoFinder(args.join(' '));

            if(video){
                // Filters the audio of the video
                const stream = ytdl(video.url, {filter: 'audioonly'});

                // Plays the filtered audio
                connection.play(stream, {seek: 0, volume: 1})

                // Bot leaves after song is played
                .on('finish', () =>{
                    voiceChannel.leave();
                });

                await message.reply(`:muscle: Now playing --> ${video.title}`);
            }
            else{
                message.channel.send('Ganna nhi mila :slightly_smiling_face:')
            }
    }
}