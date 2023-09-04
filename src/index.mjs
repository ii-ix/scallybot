import 'dotenv/config';
import ExtendedClient from './class/ExtendedClient.mjs';

const client = new ExtendedClient();

client.start();

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);