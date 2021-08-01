module.exports = {
    name: 'ping',
    description: 'This is a ping command!',
    execute(message, args){

        if(message.member.roles.cache.has('869454736112377866')){
            message.channel.send('Welcome welcome!');
        }
        else{
            message.channel.send('I see you are not authorized, let me take care of it :v:')
            message.member.roles.add('869454736112377866').catch(console.error);
        }
    }
}