# 0x06. Unittests in JS Project

# Resources
Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://medium.com/@_josueperalta/how-to-test-node-js-apps-using-mocha-chai-and-sinonjs-4b7885f77e1d)

# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

# Requirements
- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- When running every test with npm run test *.test.js, everything should pass correctly without any warning or error

# Tasks
## 0. Basic test with Mocha and Node assertion library
Install Mocha using npm:
```sh
npm install --save-dev mocha

