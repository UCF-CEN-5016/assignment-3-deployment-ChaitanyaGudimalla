const express = require('express');
const app = express();

// Define jokes and punchlines
const jokes = [
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
  { setup: "What did one plate say to the other plate?", punchline: "Dinner is on me!" }
];

// Joke endpoints
app.get('/joke1', (req, res) => {
  res.send(jokes[0].setup);
});

app.get('/joke2', (req, res) => {
  res.send(jokes[1].setup);
});

// Punchline endpoints
app.get('/punchline1', (req, res) => {
  res.send(`${jokes[0].setup} ${jokes[0].punchline}`);
});

app.get('/punchline2', (req, res) => {
  res.send(`${jokes[1].setup} ${jokes[1].punchline}`);
});

// Random joke endpoint
app.get('/joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.send(`${randomJoke.setup} ${randomJoke.punchline}`);
});

module.exports = app;
