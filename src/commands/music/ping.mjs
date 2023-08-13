import { SlashCommandBuilder } from "discord.js"

export default {
    data: new SlashCommandBuilder({
        options: {
            name: "Ping",
            description: "Replies with 'Pong'",
            type: String
        }
    }),
    async execute(interaction) {
        await interaction.reply('Pong')
    }
}