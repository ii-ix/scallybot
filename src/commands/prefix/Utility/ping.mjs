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
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {*} message 
     * @param {*} args 
     */
    async execute (client, message, args) {
        await message.reply({
            content: `Pong! ${client.ws.ping}`
        })
    }
}