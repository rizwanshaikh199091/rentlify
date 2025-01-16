import express from 'express';
import { CommonRoutesConfig } from '../lib/CommonRoutesConfig';
import { login, signup, verify } from '../controllers/auth.controller';


export default class IndexRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'Base Path Routes');
    this.app.use('/', this.router);
  }

  configureRoutes(router: express.Router): express.Application {
    router.post('/signup', signup);
    router.post('/login', login);
    router.post('/verify', verify);

    return this.app;
  }
}
