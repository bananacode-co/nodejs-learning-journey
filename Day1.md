# Explanation and history

## What is nodejs ?

Nodejs is a runtime enviroment for Javascript that runs on the serverside.

## How is the engine build?
It's build  mostly on c++ and runs the v8 javascript engine the core of Google Chrome

## What are the adventages of using Nodejs 

* Nodejs runs on a single process, wihout creating a new thread for every  request
* Node provides a set of asynchronous I/O primitives in its standard library that will prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making a blocking behavior an exception rather than the normal.
* Is fast and easy to get started.
* Easy to setup developent eviroment.
* Small learning curve from the JS experience.
* When Node.js needs to perform an I/O operation, like reading from the network, access a database or the filesystem, instead of blocking the thread Node.js will resume the operations when the response comes back, instead of wasting CPU cycles waiting.
* This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing threads concurrency, which would be a major source of bugs.

 
