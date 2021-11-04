import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import api from './api';
// import createFakeData from 'createFakeData';
import jwtMiddleware from 'lib/jwtMiddleware';
import mongoose from 'mongoose';

dotenv.config();

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('connected to MongoDB');
    // createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to my port %d', port);
});
