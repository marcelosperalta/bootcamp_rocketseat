### [TypeScript, o início, de forma prática | MasterClass #07](https://www.youtube.com/watch?v=0mYq5LrQN1s&t=2243s)
Mar 4, 2020  

TypeScript é uma linguagem? Mas por que não usar simplesmente JavaScript pra tudo? Será que não estamos matando as vantagens do JavaScript em ser tão dinâmico e o transformando em um Java?  

Nesse vídeo eu quero desmistificar algumas opiniões sobre o TypeScript e mostrar como essa linguagem de programação tem ganhado tanto espaço no coração dos devs e também no mercado.  

## Other Static Typing tools for JavaScript

- [flow](https://flow.org/)  
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)  

## TypeScript

- https://www.typescriptlang.org/

- 

### Install - Backend

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

```
```

```
```
