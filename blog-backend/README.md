- Project Setup

  ```bash
  yarn init -y
  yarn add koa koa-router koa-bodyparser mongoose dotenv esm
  yarn add --dev eslint eslint-config-prettier
  yarn add --dev nodemon
  yarn run eslint --init
  ```

- `.prettierrc`

  ```json
  {
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 200
  }
  ```

- `.eslintrc.json`

  ```json
  {
    ...
    "extends": ["eslint:recommended", "prettier"],
    ...
    "rules": {
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  }
  ```

- `package.json`

  ```json
  {
    ...
    "scripts": {
      "start": "node -r esm src",
      "start:dev": "nodemon --watch src/ -r esm src/index.js"
    }
  }
  ```

- `index.js`

  ```js
  import Koa from 'koa';
  import Router from 'koa-router';
  import bodyParser from 'koa-bodyparser';
  import api from './api';

  const app = new Koa();
  const router = new Router();

  router.use('/api', api.routes());

  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());

  app.listen(4000, () => {
    console.log('Listening to my port 4000');
  });
  ```

- `src/index.js`

  ```js
  import Router from 'koa-router';
  import posts from './posts/';

  const api = new Router();

  api.use('/posts', posts.routes());

  export default api;
  ```

- `src/posts/index.js`

  ```js
  import Router from 'koa-router';
  import * as postsCtrl from './posts.ctrl';

  const posts = new Router();

  posts.get('/', postsCtrl.list);

  export default posts;
  ```

- `src/posts/posts.ctrl.js`

  ```js
  let postId = 1;

  const posts = [
    {
      id: 1,
      title: '제목',
      body: '내용',
    },
  ];

  export const list = (ctx) => {
    ctx.body = posts;
  };
  ```
