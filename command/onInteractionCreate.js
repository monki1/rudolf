
const onInteractionCreate =  async interaction => {
    // console.log(interaction);
    // console.log(interaction.options);

    if (!interaction.isChatInputCommand()){
        // interaction.reply("This is not a command");
        return;
    }

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
}

export default onInteractionCreate;