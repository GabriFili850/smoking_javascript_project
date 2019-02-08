# Quit It

A full stack Javascript app using MongoDb which allows a user to track their efforts to cut down smoking with the aim to eventually quit! The user can see how much money they have saved from reducing their smoking based on previous information entered about their previous habit. The app also shows some motivational quotes to put people off taking that first puff. There is also a timer function which resets when you smoke a cigarette. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

Install dependencies

```
npm install
```

Run database in new terminal tab (keep running)

```
mongod
```

Set up bundle file in new terminal tab (keep running)

```
npm run build
```

In new terminal tab run the server (keep running)

```
npm run server:dev
```

Seed database

```
mongo < server/db/seeds.js
```

## Built With

* [Javascript](https://www.javascript.com/)
* [MongoDb](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
