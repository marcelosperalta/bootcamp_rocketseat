# [Next Level Week 05](https://nextlevelweek.com/)

_trilha:_  

**React**  

_app:_  

**Podcastr**

_screenshot:_  

![app's name](./.github/...)

### [Environment](https://www.notion.so/Configura-es-do-ambiente-6dd0c69e71e141ef9492b00ba310a2fe)

- Visual Studio Code;
- Node + NPM;
- Yarn;
- React;
- Next.js;
- TypeScript;
- Sass;
- [date-fns](https://date-fns.org/);
- [json-server](https://github.com/typicode/json-server);
- [axios](https://axios-http.com/);
- [rc-slider](https://github.com/react-component/slider/);

#### update [Node.js](https://nodejs.org/en/)

https://nodejs.org/en/  

```
node -v
```

#### update [NPM](https://www.npmjs.com/package/npm)

```
npm install npm@latest -g
```

```
npm -v
```

#### update [Yarn](https://yarnpkg.com/)

```
yarn set version latest
```

```
npm -v
```

## Aula 1 - 19.04.2021 - Liftoff (React e Next.js)

### **topics**

- SPA;
- API;
- API RESTful;
- JSON;
- SSR;
- SSG;
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration);
- [Link prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ);
- [React - Context API](https://reactjs.org/docs/context.html);
- [React - Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html);
- [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring);
- [React - Why Immutability Is Important](https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important).

### :file_folder: **folder**

podcastr

**install**  

https://create-react-app.dev/  

```
npx create-react-app podcastr
```

**start**  

```
cd podcastr
```

```
yarn start
```

### :file_folder: **folder**

podcastrnext

**install**  

```
npx create-next-app podcastrnext
```

**start**  

```
cd podcastrnext
```

```
yarn dev
```

http://localhost:3000/  

## Aula 2 - 20.04.2021 - Maximum Speed (Consumo de API)

### :file_folder: **folder**

podcastrnext

**install**  

```
yarn add typescript @types/react @types/node -D
```

```
yarn add sass
```

```
yarn add date-fns
```

**start**  

```
yarn dev
```

http://localhost:3000/  

**JSON server**

_install_  
```
yarn add json-server -D
```

_add to package.json_  
```
{
  "name": "podcastrnext",
  ...
  "scripts": {
    ...
    "server": "json-server server.json -w -d 750 -p 3333"
  },
  ...
}
```

_run_  
```
yarn server
```

**build**

```
yarn build
```

**run in production**

```
yarn start
```

http://localhost:3000/  

## Aula 3 - 21.04.2021 - In Orbit (Páginas do app)

**run**

_terminal 1_  

```
yarn server
```

_terminal 2_  

```
yarn run dev
```

_web browser_  

http://localhost:3000/  

**install**

```
yarn add axios
```

## Aula 4 - 22.04.2021 - Landing (Contexto de áudio)

layer: client (browser)  
layer: next.js (node.js)  
layer: server (back-end)  

" fallback: 'blocking' " > layer: next.js (node.js)  
" fallback: 'blocking' " > incremental static regeneration  

**install**

```
yarn add rc-slider
```

## Aula 5 - 26.02.2021 - Surface Exploration (Controlando player)

Code refactoring  
Immutability  
[next-pwa](https://github.com/shadowwalker/next-pwa)  