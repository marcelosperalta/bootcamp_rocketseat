# GitHub

_on Git Bash_  

```
ssh-keygen -t rsa -b 4096 -C "marcelosperalta@gmail.com"
```

```
cd ~/.ssh/id_rsa
```

```
cat ~/.ssh/id_rsa.pub
```

- copy the key

_on GitHub_  

Settings > SSH and GPG keys > New SSH key  

continue...  

> [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)  


_Adding files using SSH key_  

- push an existing repository from the command line

```
git remote add origin git@github.com:marcelosperalta/temp.git
```

```
git remote -v
```

```
git branch -M main
```

```
git status
```

```
git push -u origin main
```