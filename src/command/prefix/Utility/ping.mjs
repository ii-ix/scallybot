export default {
  data: {
    name: 'ping',
    // eslint-disable-next-line quotes
    description: "Replies with 'Pong!' and server response time.",
    aliases: ['p'],
    permissions: 'Administrator',
    cooldown: 5000,
  },
  /**
   *
   * @param {ExtendedClient} client
   * @param {*} message
   * @param {*} args
   */
  // eslint-disable-next-line no-unused-vars
  async execute(client, message, args) {
    await message.reply({
      content: `Pong! ${client.ws.ping}`,
    });
  },
};
