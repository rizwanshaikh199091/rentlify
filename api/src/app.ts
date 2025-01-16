import { config } from 'dotenv';
import express from 'express';

import Config from './config/ServerConfig';
import ExpressConfig from './config/ExpressConfig';

if (process.env.NODE_ENV === 'test') config({ path: '.env.test' });

const PORT = process.env.PORT ?? 4000;
const app = express();

const serverConfig = new Config();
const experssApp = new ExpressConfig(app, PORT);

serverConfig.start();
const serverApp = experssApp.start();
export default serverApp;
