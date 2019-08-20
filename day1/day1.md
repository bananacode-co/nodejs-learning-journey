# Explanation and history

## What is nodejs ?

Nodejs is a runtime enviroment for Javascript that runs on the serverside.

## How is the engine build?
It's build  mostly on c++ and runs the v8 javascript engine, the core of Google Chrome

## What are the adventages of using Nodejs 

* Nodejs runs on a single process, wihout creating a new thread for every  request
* Node provides a set of asynchronous I/O primitives in its standard library that will prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making a blocking behavior an exception rather than the normal.
* Is fast and easy to get started.
* Easy to setup developent eviroment.
* Small learning curve from the JS experience.
* When Node.js needs to perform an I/O operation, like reading from the network, access a database or the filesystem, instead of blocking the thread Node.js will resume the operations when the response comes back, instead of wasting CPU cycles waiting.
* This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing threads concurrency, which would be a major source of bugs.
* Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to run the server-side code and frontend-side code without the need to learn a completely different language.
* Uses npm as a package manager wich is  used by over 11,000,000 JavaScript developers around the world and around 1055196 modules (2019).
  

## When does nodejs was born ?
March 27, 2009

## What made nodejs so popular ?
The creation of the first biggest frameworks on 2010 with the creation of [Express.js](https://expressjs.com/es/) and [Socket.io](https://socket.io/) and the adoption of nodejs on big companies like **Google, Uber, and LinkedIn**.

The integration of npm package manager.


## **References**
* https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/
* https://www.npmjs.com/
* https://nodejs.org/es/
* https://itnext.io/a-quick-practical-use-case-for-es6-generators-building-an-infinitely-repeating-array-49d74f555666

 
