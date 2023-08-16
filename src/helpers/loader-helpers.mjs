import { validateFunctionModule } from "./validation-helpers.mjs";

export async function loadCommandOrEvent(client, file, type) {
  try {
    const { default: module } = await import(file);
    const isValidModule = await validateFunctionModule(module, file);

    if (isValidModule) {
      client[type].set(module.data.name, module);
      return module.data;
    }

    throw new Error(`Invalid module in ${file}`);
  } catch (error) {
    console.error(`Error loading module from ${file}: ${error.message}`);
    throw error;
  }
}