/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
quotes = [
  {
    quote:
      "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
  },
  {
    quote: "Your secret is safe with my indifference",
    source: "Lord Percival Fredrickstein von Musel Klossowski de Rolo III",
    citation: "Critical Role, C1 Episode 45",
    year: 2016,
  },
  {
    quote: "Your secret is safe with my indifference",
    source: "Lord Percival Fredrickstein von Musel Klossowski de Rolo III",
    citation: "Critical Role, C1 Episode 45",
    year: 2016,
  },
  {
    quote: "I told you I was ill.",
    source: "Spike Milligan",
    citation: "Spike Milligan's gravestone",
    year: 2002,
  },
  {
    quote: "One small step for a man, one giant leap for mankind",
    source: "Neil Armstrong",
    citation: "Moon landing",
    year: 1992,
  },
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
