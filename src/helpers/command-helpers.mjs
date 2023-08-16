import { REST, Routes } from "discord.js";

export async function deployCommands(clientId, guildId, token, commands) {
    const rest = new REST().setToken(token);
    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            
            const data = await rest.put( // The put method is used to fully refresh all commands in the guild with the current set
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })();
}