# Terminal, shell, bash

## GUI (Graphical User Interface)

## CLI (Command-Line Interface)

### Shell

#### Bash (Bourn-again shell)

**command + option(s) + argument(s)**  
```
ls -lh /usr/bin
```

**tab completion e.g.**  
```
l + <tab key>
```

**short cuts**  
arrow up  
arrow down  
ctrl arrow right
ctrl arrow left
ctrl + a  
ctrl + e  
ctrl + u  
ctrl + k  
ctrl + l  

**hyper**  

https://hyper.is/  
https://github.com/getomni/omni  
https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/  

**help**  

```
man ls
```

```
apropos "list"
```

**commands**

pwd  
cd ~  
cd "directory's name"  
cd directory\ with\ spaces/
cd "directory with spaces/"
cd .  
cd ..  
cd ../../  
cd -  
man cd  
cd --help  

ls  
ls -l  
ls -a  
ls -h  
ls -R  
ls -S  
ls -lh  
ls -lha  
man ls  
ls --help  

file \<file_name>  

stat \<file_name>  

mkdir \<directory_name>  
mkdir -p \<directory_name>/\<directory_name> \<directory_name>/\<directory_name>  
mkdir -p \<directory_name> \<directory_name> \<directory_name>  

create folder/file or change their date/time  
touch \<file_name>  
touch \<folder_name>  
touch \<file_name> \<file_name>  
touch \<file_name> \<file_name> \<folder_name>  

copy folder/file to other folder/file (the last argument is the destination)  
cp  
cp \<file_name> \<file_name>  
cp \<file_name> \<file_name> \<file_name> \<file_name>  
pc \<folder_name> \<folder_name>  
pc -r \<folder_name> \<folder_name> \<folder_name> \<folder_name> \<folder_name>  

move or rename (the last argument is the destination)  
mv  
mv \<file_name> \<new_file_name>  
mv \<folder_name> \<new_folder_name>  
mv \<file_name> \<folder_name>  
mv \<folder_name> \<folder_name> \<folder_name> \<folder_name>  

remove  
rm  
rm -r  
rm -f  
rm \<file_name>  
rm \<file_name> \<file_name>  
rm -r \<folder_name>  
rm -rf \<folder_name>  

wildcards  
\*  
mv \<folder_name>/<f*> \<folder_name>  
?  
mv \<folder_name>/<folder_name?> \<folder_name>  

find  
find \<path> arg[expression]  
-type \<d|f>  
find . -type f -name "*.mp3"  
find . -type f -name "\*d\*"  
find . -type d -name "\*da\*"  

see files content  
less  
less \<file_name>  
cat  
cat \<file_name>  

nano  
nano \<file_name>  
_exit:_  
ctrl + x  

vim  
vim \<file_name>  
_edit_  
press "a"  
press "o"  
_exit:_  
:q  
:q!  
:wq  