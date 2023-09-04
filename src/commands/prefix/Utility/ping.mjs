import { Message } from 'discord.js';
import ExtendedClient from '../../../class/ExtendedClient.mjs';

export default {
    data: {
        name: 'ping',
        description: "Replies with 'Pong!' and server response time.",
        aliases: ['p'],
        permissions: 'Administrator',
        cooldown: 5000
    },
    async run (client, message, args) {
        await message.reply({
            content: `Pong! ${client.ws.ping}`
        })
    }
}