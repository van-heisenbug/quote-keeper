/**
 * To run this test in the terminal using node:  node scripts/model/tests/quote-test.js
 */

import Quote from "../quote.js";

const quote = Quote({
  quote: "testQuote",
  author: "testAuth",
  source: "testScr",
});

console.log(quote.getState()); // read and return the current quote state
quote.trash(); // mutates private states
console.log(quote.getState()); // read and return the current quote state (mutated)
quote.untrash(); // mutates again
console.log(quote.getState()); // read and return updated state again

console.log(quote.getState());
quote.edit({ newQuote: 'testQuote has been updated to "updated quote"' });
quote.edit({ newSource: 'testSrc has been updated to "updated source now!"' });
console.log(quote.getState());

const quoteToRebuild = Quote({
  id: "e8cade90-5544-4ad7-8fb2-7a26c202bb30",
  quote: "oldQuoteFromDatabase",
  author: "oldAuthFromDatabase",
  source: "OldSrcFromDB",
  dateAdded: "2026-11-24T04:28:21.001Z",
  dateTrashed: null,
  isTrashed: false,
});

console.log(quoteToRebuild.getState());
quoteToRebuild.trash();
console.log(quoteToRebuild.getState());
quoteToRebuild.untrash();
console.log(quoteToRebuild.getState());
