# [Next Level Week 07](https://nextlevelweek.com/)

## NLW Heat - _Mission:_ Impulse

**_tech stack:_**  

- **Node.js**
  - Typescript
  - ts-node-dev
  - Socket.IO
  - Express
  - Prisma
  - GitHub OAuth
- **React**
- **React Native**
- **Elixir**
- **SQLite**

**_app name:_**  

- DoWhile2021  

**_app version:_**  

- desktop

**_app description:_**  

- People can share their expectations about the _[DoWhile2021](https://dowhile.io/)_ event.

**_app features:_** 

- authentication using GitHub

**_app screenshot:_**  

_desktop version:_

- ![DoWhile2021desktop](./.github/...)  

## [Environment](https://efficient-sloth-d85.notion.site/NLW-Heat-daaa092e1eeb42ff929151d2807c8231)

- Visual Studio Code
- Node + NPM
- Yarn
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Omni Theme](https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### update [Node.js](https://nodejs.org/en/)

https://nodejs.org/en/  

```
node -v
```

### update [NPM](https://www.npmjs.com/package/npm)

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

## App Layout

https://www.figma.com/community/file/1031699316177416916  

## Font Ligatures

![fontes](./.github/fontLigatures.png)  

## Visual Studio Code configuration

``Ctrl + Shift + P``  

``Open Settings (JSON)``  

É preciso tomar alguns cuidados ao realizar essas alterações. Verifique se a configuração adicionada já não existe no arquivo. Se sim, apenas atualize o valor.   

Verifique também se a todas as linhas de configuração exceto a última terminam com vírgula, para não gerar erro.  

Por fim, caso queira substituir completamente a sua configuração pela abaixo, envolva com chaves ``{}`` todo o código disponibilizado.  

_JSON_  
```
  // Configurações da fonte JetBrains Mono
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,

  // Demais configurações
  "workbench.colorTheme": "Omni",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "never",

  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
	"editor.formatOnSave": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },

  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
```

<hr />

## Stage 1 - 18.10.2021 - Backend - Node.js _(Instructor: [Daniele Evangelista](https://github.com/danileao))_

### **topics**

- Create project;
- _Express_, _Prisma (ORM)_, _TypeScript_ installation;
- _GitHub OAuth_ configuration;
- GitHub login route creation;
- Callback route creation;
- User authentication;
- Message registration;
- WebSocket configuration;
- Returning the last three messages;
- User profile creation.

### :file_folder: **folder**

`backend`

**install**  

```
yarn init -y
```

```
yarn add express
```

```
yarn add -D @types/express typescript ts-node-dev
```

```
yarn tsc --init
```

``tsconfig.json`` configuration:  

````
{
  "compilerOptions": {
    "target": "es2017",                         // <=====
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": false,                            // <=====
    "skipLibCheck": true
  }
}
````

`package.json` configuration:  

````
....
  "scripts": {
    "dev": "ts-node-dev src/app.ts"
  },
....
````

````
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "ts-node-dev src/app.ts"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.4.4"
  }
}
````

**start**  

```
cd backend
```

```
yarn dev
```

**install Prisma**  

_[relational databases](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)_  

```
yarn add prisma -D
```

```
yarn prisma init
```

folder `backend/prisma/schema.prisma`  

````
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
````

**_GitHub OAuth_ configuration**  

https://github.com/settings/developers  

https://github.com/settings/applications/new  

_Homepage URL:_  

http://localhost:4000  

_Authorization callback URL:_  

http://localhost:4000/signin/callback  

_Client secrets:_

_Press_ "Generate a new client secret"  

:rotating_light: Make sure to copy your new client secret now. You won’t be able to see it again. :rotating_light:

folder `backend/.env` for [SQLite](https://www.prisma.io/docs/concepts/database-connectors/sqlite)  

````
GITHUB_CLIENT_ID=<GitHub_OAuth_Client_ID>
GITHUB_CLIENT_SECRET=<GitHub_OAuth_Client_secrets>
````

**Simulating Front End and Mobile for tests**  

folder `src/app.ts`  

````
...
app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});
...
````

**Install [dotenv](https://github.com/motdotla/dotenv)**  

``Dotenv`` is a zero-dependency module that loads environment variables from a ``.env`` file into ``process.env``. Storing configuration in the environment separate from code is based on **The Twelve-Factor App** methodology.  

```
yarn add dotenv
```

**start**  

```
cd backend
```

```
yarn dev
```

http://localhost:4000/github  

**Creating callback URL**  

folder ``app.ts``  

```
...
app.get("/signin/callback", (request, response) => {
    const { code } = request.query;
    return response.json(code);
});
...
```
http://localhost:4000/github  

<hr />

## Aula 2 - 19.10.2021 - 

### :file_folder: **folder**

`...`

**install**  

```

```

## Aula 3 - 20.10.2021 - 

### :file_folder: **folder**

**run**

`...`

**install**  

```

```

## Aula 4 - 21.10.2021 - 

### :file_folder: **folder**

`...`

**install**  

```

```

## Aula 5 - 22.10.2021 - 

### :file_folder: **folder**

`...`

**install**  

```

```