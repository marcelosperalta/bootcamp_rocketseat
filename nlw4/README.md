# [Next Level Week 04](https://nextlevelweek.com/)

Trilha **React**

### Environment

- Visual Studio Code;
- Node + NPM;
- Yarn;
- TypeScript;
- React;
- Next.js.

## Aula 1 - 22.02.2021 - Rumo ao próximo nível 

**folder**

moveit

**install**  

```
yarn create react-app moveit --template=typescript
```

**start**  

```
cd moveit
```

```
yarn start
```

## Aula 2 - 23.02.2021 - Desvendando o Next.js

- [SPA - Single-page application](https://en.wikipedia.org/wiki/Single-page_application)  
- [SSR - Server-side rendering](https://en.wikipedia.org/wiki/Server-side_scripting)  
- [SSG - Static site generators](https://www.netguru.com/blog/what-are-static-site-generators)  

The three most popular ways to start a React project are:  

- SPA > [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app);  
- SSG > [Gatsby](https://www.gatsbyjs.com/);  
- SPA+SSR+SSG > [Next.js](https://nextjs.org/);  

Migrate the project to Next.js:  

**folder**

moveit-next

**install**  

```
yarn create next-app moveit-next
```

rename from ```_app.js``` and ```index.js``` to ```_app.tsx``` and ```index.tsx```  

```
yarn add typescript @types/react @types/react-dom @types/node -D
```

**start**  

```
yarn dev
```

```
http://localhost:3000/
```