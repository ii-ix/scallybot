import { readdirSync } from "fs";
import { join } from "path";
import { getDirectoryName } from "./directory-helpers.mjs";
import { validateFunctionModule } from "./validation-helpers.mjs";
import { deployCommands } from "./command-helpers.mjs"
import config from "../../meta/config.json" assert { type: "json" };

export async function loadCommandOrEvent(client, folderName) {
  const commands = []
  const __dirname = getDirectoryName(import.meta.url);
  const folderPath = join(__dirname, `../../src/${folderName}`);
  const files = readdirSync(folderPath, { recursive: true }).filter(file => file.endsWith(".mjs"));

  for (const file of files) {
    try {
      const filePath = join(folderPath, file);
      const { default: module } = await import(filePath);
      await validateFunctionModule(module, file);
      client[folderName].set(module.data.name, module);
      if (updateCommands) commands.push(module.data.toJSON())
    } catch (error) {
      console.error(error.message);
    }
  }
  if (config.updateCommand) {
    const { clientId, guildId } = config
    const token = process.env.DISCORD_BOT_TOKEN
    await deployCommands(clientId, guildId, token, commands) 
  }

}