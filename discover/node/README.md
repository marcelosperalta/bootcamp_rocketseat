# NodeJS

- Backend
- Front End
- [Microservice](https://en.wikipedia.org/wiki/Microservices)
- API
- Scripts
- Automation

[Node.JS Use Case: When & How Node.JS Should be Used](http://www.simform.com/nodejs-use-case/)  

NodeJS is a JS Runtime Enviroment  

[Google V8](https://v8.dev/)  

[libuv](https://en.wikipedia.org/wiki/Libuv)  

[npm](https://www.npmjs.com/)  

[OpenJS Foundation](https://openjsf.org/)  

[Node GitHub](https://github.com/nodejs/node)  

## Install

[Download](https://nodejs.org/en/)  

```
node -v
```

```
npm -v
```

## [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)

Read-Eval-Print Loop  

```
node
```

```
console.log("Hello")
```

```
.exit
```

## NPM

Node Package Manager  

- Dependencies, Packages, Modules  

```
npm -v
```

```
npm init
```

or  

```
npm init -y
```

```
npm install cfonts
```

or  

```
npm i cfonts
```

or  

```
npm i cfonts -D
```

or multiple installation

```
npm i cfonts inquirer opn
```

**_update the package-lock.json:_**  

```
npm update
```

**_install node modules based on package.json:_**  

```
npm install
```

**_scripts on package.json:_**  

```
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "tests",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "learning",
    "nodejs"
  ],
  "author": "Marcelo",
  "license": "ISC",
  "dependencies": {
    "cfonts": "^2.9.1"
  }
}
```

```
npm run test
```

```
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "tests",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [
    "learning",
    "nodejs"
  ],
  "author": "Marcelo",
  "license": "ISC",
  "dependencies": {
    "cfonts": "^2.9.1"
  }
}
```

```
npm run start
```

or  

```
npm start
```

**_install and unistall globally:_**  


```
npm i opn -g
```

```
npm root -g
```

```
npm unistall opn -g
```

**_change node modules verions:_**  

```
npm i moment@1.5.1
```

```
npm outdated
```

```
npm upgrade
```

```
npm i moment@latest
```

**_unistall_**  

```
npm unistall moment
```

## BestMe App

> index.js  

process.stdout.write
process.stdin.on
process.on

## Timers

setTimeout
clearTimeout
setInterval
clearInterval

## Event

EventEmitter
inherits