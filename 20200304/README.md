### [TypeScript, o início, de forma prática | MasterClass #07](https://www.youtube.com/watch?v=0mYq5LrQN1s&t=2243s)
Mar 4, 2020  

TypeScript é uma linguagem? Mas por que não usar simplesmente JavaScript pra tudo? Será que não estamos matando as vantagens do JavaScript em ser tão dinâmico e o transformando em um Java?  

Nesse vídeo eu quero desmistificar algumas opiniões sobre o TypeScript e mostrar como essa linguagem de programação tem ganhado tanto espaço no coração dos devs e também no mercado.  

## Article

[TypeScript: Vantagens, mitos, dicas e conceitos fundamentais](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)  

## Other Static Typing tools for JavaScript

- [flow](https://flow.org/)  
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)  

## TypeScript

- https://www.typescriptlang.org/

### Install - Back End

```
mkdir backend
cd backend
yarn init -y
```

```
yarn add -D typescript
```

```
yarn add express
```

```
yarn add @types/express -D
```

### Run

_To generate the ``index.js`` file_  
```
yarn tsc src/index.ts
```

_Run_  
```
node src/index.js
```

_On browser_
```
http://localhost:3333/
```

### Configurations

_To generate the ``tsconfig.json`` file_  
```
yarn tsc --init
```

_To generate the ``index.js`` file again with ``tsconfig.json`` file added_  
```
yarn tsc
```

_In the file ``tsconfig.json`` (opcional)_  
```
...
"outDir": "./dist",
...
```

_Run_  
```
node dist/index.js
```

_Compilation real-time (opcional)_  
```

```
yarn add ts-node-dev -D
```
```

_Add a script to ``package.json`` to run **ts-node-dev**:_  
```
...
  "scripts": {
    "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
  },
...
```

_Run using **ts-node-dev**:_  
```
yarn dev:server
```

_On Web Browser:_  

http://localhost:3333/  
http://localhost:3333/users/  
http://localhost:3333/users/create  

### Install - Front End

```
yarn create react-app frontend --template=typescript
```

### Install - cors on Back End

```
yarn add cors
yarn add @types/cors
```

_To recreate de ``dist`` folder if the new configurations:_
```
yarn tsc
```

### Install - Front End

```

```