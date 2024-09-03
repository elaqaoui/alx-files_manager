import express from 'express';
import startingServer from './libs/boot';
import injectionRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

const server = express();

injectMiddlewares(server);
injectionRoutes(server);
startingServer(server);

export default server;
