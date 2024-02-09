[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-eATnZhD)
# CEN 5016 Simple Web Application


## Project Overview

This repo contains a barebones Node.js app using [Express 4](http://expressjs.com/). You will use this as the subject for Assignment #3. You will sign up for this assignment through GitHub classroom, and when you accept the assignment, it will create a fork of this repository for you to work on.

## Homework Assignment #3 Detailed Instructions

You can find the deatiled instructions for HW Assignment #3 on the [course webpage](https://cs-ucf.github.io/CEN-5016-S24/assignments/index). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/).

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm start
```

After executing these commands, your app should now be running on [localhost:3000](http://localhost:3000/).

You can then access the api endpoints in the project by visiting the following urls in your browser: [localhost:3000/cities](http://localhost:3000/cities) [localhost:3000/populations](http://localhost:3000/populations) 

## Testing this Project Locally

To test this project locally, you can run the following command to run the Jest test(s):

```sh
$ npm test
```

This will run all jest tests contained within the `app.test.js` file. If you are just cloning this project, you should see output that resembles the following:

```sh
 PASS  ./app.test.js (5.253 s)
  GET / 
    ✓ It should respond with an array of cities (5015 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.276 s
Ran all test suites.
```

You can learn more about the Jest Javascript testing framework here: [https://jestjs.io](https://jestjs.io) Feel free to read up on how these tests work to implement your own for this assignment!

## Testing with Continuous Integration

Currently, this repo is set up to run the Jest tests in the `app.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed. We don't anticpate you needing to change this configuration, as it is fine to keep all of your tests in the `app.test.js` for this assignment. 

We expect that all tests of this repo, including the one that you write, should pass to get full credit for this assignment.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Deploying to Render

Check out [our instructions](https://cs-ucf.github.io/CEN-5016-S24/assignments/render-tutorial) for deploying your application to Render.


