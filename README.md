## Node NASA Project
Using Kepler telescope csv data to find habitable planets.

## Architectural Map
<p align="center"><img src="https://user-images.githubusercontent.com/19915910/116652000-4405a380-a9bf-11eb-88bc-123183b12503.jpg" alt="nasa project architectural map" height="100%"/></p>

Created by Juan Perez Jr with Figma.

## Technologies & Libraries Utilized:

Express, Nodemon, Cors, CSV-Parse, Morgan, Jest, Supertest, PM2, and Concurrently.

## Available Scripts

In the server directory, you can run:

#### `yarn`

Installs all dependencies.

#### `yarn dev`

Runs 🏃🏻‍♀️ 🏃🏻‍♂️ the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs 🏃🏻‍♀️ 🏃🏻‍♂️ server at [http://localhost:8000](http://localhost:8000)

The server will reload if you make edits.<br>

#### `yarn test or yarn test-watch`

Runs all tests with Jest or will also watch for test changes with test-watch.

#### `yarn deploy`

Builds React project and starts Express server.

Runs 🏃🏻‍♀️ 🏃🏻‍♂️ app at [http://localhost:8000](http://localhost:8000)

#### `yarn deploy-cluster`

Builds React project and starts an Express cluster with PM2.

### `yarn stop`

Stops the Express cluster.

### `yarn delete`

Deletes the Express cluster.

### `yarn reload`

Reloads the cluster one at a time.