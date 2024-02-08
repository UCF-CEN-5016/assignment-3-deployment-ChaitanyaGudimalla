const express = require('express');
const app = express();

// Define cities and populations
const cities = ["Orlando", "Winter Park", "Oviedo", "Maitland"];
const populations = [309154, 29131, 39559, 18959];

// Define jokes and punchlines
const jokes = [
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
  { setup: "What did one plate say to the other plate?", punchline: "Dinner is on me!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "Did you hear about the mathematician who's afraid of negative numbers?", punchline: "He'll stop at nothing to avoid them!" },
  { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" }
];

// City endpoints
app.get('/cities', (req, res) => {
  return res.json(cities);
});

// Population endpoints
app.get('/populations', (req, res) => {
  return res.json(populations);
});

// Joke endpoints
app.get('/joke1', (req, res) => {
  res.send(jokes[0].setup);
});

app.get('/joke2', (req, res) => {
  res.send(jokes[1].setup);
});

app.get('/joke3', (req, res) => {
  res.send(jokes[2].setup);
});

app.get('/joke4', (req, res) => {
  res.send(jokes[3].setup);
});

app.get('/joke5', (req, res) => {
  res.send(jokes[4].setup);
});

// Punchline endpoints
app.get('/punchline1', (req, res) => {
  res.send(`${jokes[0].setup} ${jokes[0].punchline}`);
});

app.get('/punchline2', (req, res) => {
  res.send(`${jokes[1].setup} ${jokes[1].punchline}`);
});

app.get('/punchline3', (req, res) => {
  res.send(`${jokes[2].setup} ${jokes[2].punchline}`);
});

app.get('/punchline4', (req, res) => {
  res.send(`${jokes[3].setup} ${jokes[3].punchline}`);
});

app.get('/punchline5', (req, res) => {
  res.send(`${jokes[4].setup} ${jokes[4].punchline}`);
});

// Random joke endpoint
app.get('/joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.send(`${randomJoke.setup} ${randomJoke.punchline}`);
});

module.exports = app;
