import dotenv from "dotenv";
import { REST, Routes } from "discord.js";

export async function deployCommands(clientId, guildId, commands) {
    dotenv.config()
    // Construct and prepare an instance of the REST module
    const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);

    // and deploy your commands!
    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );

            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();
}