import { Events } from 'discord.js';
import { log } from '../../functions/utils.mjs';

export default {
  event: Events.ClientReady,
  once: true,
  async execute(client) {
    log(`Logged in as '${client.user.tag}'`, 'done');
  },
};
