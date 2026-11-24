/**
 * Run this test only in the browser :D
 * Or copy paste it to main.js, then check in the browser.
 */

import quoteLocalStorage from "../database/quote-local-storage.js";

const testKey = "testing";

const testQuotes = [
  {
    id: "etasfasfs",
    author: "asfa",
    quote: "asfa",
  },
  {
    id: "e242ts",
    author: "tesafs23y",
    quote: "asfa",
  },
  {
    id: "ets",
    author: "teasfasy",
    quote: "asfa",
  },
];

quoteLocalStorage.update(testKey, testQuotes); // Initial saving to local storage

const quotes = quoteLocalStorage.retrieve(testKey); // Retrieve

console.log(quotes);

console.log("AFTER MUTATION");

// Insert
testQuotes.push({
  id: "ets",
  author: "teasfasy",
  quote: "asfa",
});

quoteLocalStorage.update(testKey, testQuotes); // Save changes

const newquotes = quoteLocalStorage.retrieve(testKey); // retrieve new record after recent changes

console.log(newquotes); // Should log 4 items

testQuotes.pop(); // Remove previously inserted quote
quoteLocalStorage.update(testKey, testQuotes); // Save to local storage again
const anotherQuotes = quoteLocalStorage.retrieve(testKey); // refetch
console.log(anotherQuotes); // Should log 3 again

quoteLocalStorage.clear(testKey); // Clear the entire record
console.log(quoteLocalStorage.retrieve(testKey)); // Should log an empty []
