# :rocket: Rocketseat Bootcamp

## Pré-processador SASS | Cleiton Souza

https://www.youtube.com/watch?v=MW7hrQe6aYo

### tools

[Git](https://git-scm.com/)  

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.  

### install

https://git-scm.com/download/

### check version

```
git --version
```

### create a global configuration

```
git config --global user.name "Marcelo Soares Peralta"
```

```
git config --global user.email "marcelosperalta@gmail.com"
```

### create a project using Linux/macOS

```
mkdir project
```

```
cd project
```

```
git init
```

```
touch file.txt
```

```
vim file.txt
```

_write some text in the file_:

```
Learning Git with Rocketseat
```

```
git add file.txt
```

```
git status
```

```
touch other-file.txt
```

```
vim other-file.txt
```

_write some text in the file_:

```
Other txt file
```

```
git status
```

```
git add other-file.txt
```

```
git status
```

```
git commit -m "my first commit"
```

```
git status
```

```
vim file.txt
```

_edit the original text in the file_:

```
Learning Git with Rocketseat with Diego
```

```
git diff
```

```
git status
```

```
git add .
```

```
git commit -m "my second commit"
```

```
git log
```