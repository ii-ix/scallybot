// module.exports = async (client) => {
//   console.log(`[API] Logged in as ${client.user.username}`);
//   await client.user.setActivity("Music", {
//     // types: LISTENING, WATCHING, PLAYING, STREAMING
//     type: "LISTENING",
//   });
// };
export default async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`)
  await client.user.setActivity("Music", {
    type: "LISTENING"
  })
}