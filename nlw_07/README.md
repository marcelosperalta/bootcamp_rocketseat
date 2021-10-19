# [Next Level Week 07](https://nextlevelweek.com/)

## NLW Heat - _Mission:_ Impulse

**_tech stack:_**  

- **Node.js**
  - Typescript
  - Socket.IO
- React
- React Native
- Elixir

**_app name:_**  

**DoWhile2021**  

**_app version:_**  

- desktop

**_app description:_**  

- People can share their expectations about the _DoWhile2021_ event.

**_app features:_** 

- authentication using GitHub

**_app screenshot:_**  

_desktop version:_

- ![DoWhile2021desktop](./.github/...)  

## [Environment](https://efficient-sloth-d85.notion.site/NLW-Heat-daaa092e1eeb42ff929151d2807c8231)

- Visual Studio Code
- Node + NPM
- Yarn
- React
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

## Layout da aplicação

https://www.figma.com/community/file/1031699316177416916  

## Usando as Font Ligatures

![fontes](./.github/fontLigatures.png)  

## Configurações do Ambiente Visual Studio Code

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

## Stage 1 - 18.10.2021 - Backend - Node.js _(Instructor: [Daniele Evangelista](https://github.com/danileao))_

### **topics**

- ;
- ;
- ;

### :file_folder: **folder**

...

**install**  

https://create-react-app.dev/  

```
npx create-react-app ...
```

**start**  

```
cd ...
```

```
yarn start
```

### :file_folder: **folder**

...

**install**  

```
npx create-next-app ...
```

**start**  

```
cd ...
```

```
yarn dev
```

http://localhost:3000/  

## Aula 2 - 19.10.2021 - 

### :file_folder: **folder**

...

**install**  

```
yarn add ...
```

```
yarn add ...
```

```
yarn add ...
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

## Aula 3 - 20.10.2021 - 

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

## Aula 4 - 21.10.2021 - 

**install**

```
yarn add ...
```

## Aula 5 - 22.10.2021 - 

...