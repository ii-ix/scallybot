import { validateFunctionModule } from "./validation-helpers.mjs";

export async function loadCommandOrEvent(client, file, type) {
  const commands = []
  try {
    const { default: module } = await import(file);
    const isValidModule = await validateFunctionModule(module, file);
    if (isValidModule) {
      client[type].set(module.data.name, module);
      return module.data
    }
    return {}
  } catch (error) {
    console.error(error.message);
  }
}