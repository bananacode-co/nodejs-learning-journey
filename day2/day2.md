#Explaning the basic Enviroment of Nodejs IO tasks

## POSIX
Portable operating system interface  is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems. POSIX defines the application programming interface (API), along with command line shells and utility interfaces, for software compatibility with variants of Unix and other operating systems.

* Standard I/O subsystem : Is a set of three streams that model input and output for a program.

## Difference between Console.log and stdout

If you use

    process.stdout.write("Hellow World") 

It is going to use the POSIX standard wich isn't the most efficient way to print something on the shell on the nodejs ecosystem.

But if you use 

    console.log("Hellow World")

It wrap on a developer convenience to write the characters on the shell using a stream buffer on the most efficient way.

See the difference here [console](./log.js) and [stdout](./stdout.js)

You can run it using these commands on the day2 folder.
    
    #node log.js
    #node stdout.js

With simple example i can undertand why i use some syntaxis instead of the other to get the permformace that nodejs was built for on some processes .