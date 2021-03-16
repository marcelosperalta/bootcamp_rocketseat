# GIT  

[Version control systems (VCS)](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)  

[SHA-1 (Secure Hash Algorithm 1)](https://en.wikipedia.org/wiki/SHA-1)  

## Using **Git Bash**  

![git bash](./screenshot_git_bash.png)

### Configuration:  
```
git config --global user.name "Your full name"
git config --global user.email "Your email"
```

### Change Git standar editor:  
```
git config --global core.editor "code -w"
```

### See configurations:  
```
git config --list`
```
```
cat ~/.gitconfig
```

### Git config file path on Windows:  
```
C:/Users/<user>/.gitconfig
```

### Create a folder:  
```
mkdir git
```
```
cd git
```

### Start a repository:  
```
git init
```
```
ls -a
```
```
cd .git
```
```
ls
```
```
cat config
```
```
git config --list
```

### Git Help:  
```
git help
```

### Git Log:  
```
git log
```
```
git log -n 5
```
```
git log -n 20
```
```
git log --since=2021-01-01
```
```
git log --until=2021-01-01
```
```
git log --author=Marcelo
```
```
git log --grep="init"
```
```
git log --grep="bug fix"
```

### VIM:  
```
vim file.txt
```
- Write something  
- Press "Esc"  
```
:wq
```
_wq = write and quit_

### Commit:  
```
git add .
```
```
git commit -m "initial commit"
```

### Recap:  
```
mkdir git-test
```
```
cd git-test
```
```
git init
```
```
touch file1.txt
```
```
git status
```
```
touch file2.txt
```
```
git status
```
```
git add file1.txt
```
```
git status
```
```
git add .
```
```
git status
```
```
git rm --cached file2.txt
```
```
git status
```
```
git commit -m "initial commit"
```
```
clear
```
```
git log
```
```
git add file2.txt
```
```
git commit -m "second commit"
```
```
git log
```
```
vim file1.txt
```
```
git status
```
```
git add file1.txt
```
```
git commit -m "file1.txt changed"
```
```
git log
```

### Changing files  

**add:**  
```
touch README.md
```
```
git status
```
```
vim README.md
```
```
vim file1.txt
```
```
git add README.md
```
```
git status
```
```
git commit -m "added README.md"
```
```
clear
```
```
git log
```
```
git status
```
```
git add *.md
```

**edit:**  
```

```
```

```
```

```
```

```
```

```