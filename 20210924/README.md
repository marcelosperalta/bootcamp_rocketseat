# https://www.youtube.com/watch?v=oWKuJnrceS8

Rcentemente começamos a aplicar em todos projetos da Rocketseat uma nova ferramenta para interagir com o banco de dados, o [Prisma](https://www.prisma.io/).  

Essa biblioteca permite nos comunicarmos com o banco de dados com um ORM extremamente integrado ao TypeScript com uma API simples e intuitiva, migrações automáticas e muito mais.  

Nesse vídeo mostro os principais benefícios por trás do uso dessa ferramenta e todos pontos de destaque dela.  

## Other ORMs

- [Sequelize](https://sequelize.org/)  
- [TypeORM](https://typeorm.io/#/)  
- [Objection.js](https://vincit.github.io/objection.js/)  

## Prisma

https://www.prisma.io/  

- TypeScript integration;
- Automatic migration;
- Prisma Studio (SGBD);
- 

### Install

```
yarn init -y
```

```
npx prisma init
```

```
yarn add prisma -D
```

```
yarn add @prisma/client

```
```
yarn add typescript -D
```

```
yarn add ts-node -D
```

```
yarn tsc --init
```

open ``tsconfig.json``` and edit:  

```
...
"target": "es2017",
...
```

### Run

```
yarn prisma migrate dev
```

```
yarn ts-node src/index.ts
```

### [Prisma Studio](https://www.prisma.io/studio)

_explore and manipulate your data_  

```
yarn prisma studio
```

## Other Tools

[Prisma extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)  

[Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js#serverless-nextjs-component)  

[MySQL Workbench](https://dev.mysql.com/downloads/workbench/)  

[Beekeeper Studio](https://www.beekeeperstudio.io/)  