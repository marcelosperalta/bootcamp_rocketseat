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
- [json-server](https://github.com/typicode/json-server).

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

### update [Yarn](https://yarnpkg.com/)

```
yarn set version latest
```

```
npm -v
```

## Aula 1 - 19.04.2021 - Liftoff (React e Next.js)

**topics**

- SPA;
- API;
- API RESTful;
- JSON;
- SSR;
- SSG;

### **folder**

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

### **folder**

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

**folder**

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

**Build**

```
yarn build
```

**Run in Production**

```
yarn start
```

## Aula 3 - 21.04.2021 - ...

## Aula 4 - 22.04.2021 - ...

## Aula 5 - 26.02.2021 - Próximo nível com React

### Cookies

[js-cookie](https://github.com/js-cookie/js-cookie)  

```
yarn add js-cookie
```

```
yarn add @types/js-cookie -D
```

### Deploy

[netlify](https://www.netlify.com/)  
[Vercel](https://vercel.com/)  

#### Vercel

[Vercel CLI](https://vercel.com/download)  

```
npm i -g vercel
```

```
vercel -h
```

```
vercel login
```

_from your project folder:_  

```
cd moveit-next
```

```
vercel
```

_project updates:_  

stage:  

```
vercel
```

prod:  

```
vercel --prod
```