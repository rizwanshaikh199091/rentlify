import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import IndexRoutes from '../routes/common.routes';

class ExpressConfig {
  app: express.Application;
  PORT: string | number;

  constructor(app: express.Application, PORT: string | number) {
    this.app = app;
    this.PORT = PORT;
  }

  start() {
    this.addGlobalMiddlewares();
    this.staticServe();
    const routes = [
      new IndexRoutes(this.app),
    ];
    if (process.env.NODE_ENV !== 'test') this.configureRoutes(routes);
    return this.app;
  }

  private configureRoutes(routes: any[]) {
    return this.app.listen(this.PORT, () => {
      console.log(`server listening @ port : ${this.PORT}`);
      routes.forEach((route) => {
        console.log('listening for route: ', route.name);
      });
    });
  }

  private addGlobalMiddlewares() {
    this.app.use(cors({ credentials: true, origin: true }));
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    console.log('global middlewares configured');
  }

  private staticServe() {
    this.app.use('/uploads', express.static('/uploads'));
    console.log('static content serve successfull');
  }
}

export default ExpressConfig;
