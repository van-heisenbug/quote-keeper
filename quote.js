import { fetchSheetData, writeDataToSheet } from "./googleSheetAPI.js";

// # IIFE
export const QuoteDB = (() => {
  let quoteRecord = JSON.parse(localStorage.getItem("QUOTES")) || [];

  const getAllQuotes = () => {
    return structuredClone(quoteRecord);
  };

  // # Returns the randomized quote selected.
  const getRandomQuote = () => {
    const index = randomizeIndex(quoteRecord);

    return quoteRecord[index]; // String
  };

  const addNewQuote = (newQuote, author = "NA", source = "NA") => {
    if (typeof newQuote !== "string") {
      throw new TypeError(`${newQuote} is not a string.`);
    }

    let uniqueId = enforceUniqueId();

    const quoteEntry = {
      id: uniqueId,
      quote: newQuote,
      author: author,
      dateAdded: new Date().toISOString(),
      source: source,
    };

    quoteRecord.push(quoteEntry); // # In Memory
    saveQuoteRecord(); // # local storage
    writeDataToSheet(quoteEntry); // # To Google Sheet
    // TODO - need to fix edit and delete.
  };

  const editQuote = (quoteId, newQuote, author = "NA", source = "NA") => {
    if (typeof newQuote !== "string" || typeof quoteId !== "string") {
      throw new TypeError(`quoteId and newQuote should be strings.`);
    }

    const quoteEntry = quoteRecord.find((quote) => quote.id === quoteId);
    const quoteIndex = quoteRecord.findIndex((quote) => quote.id === quoteId);

    if (!quoteEntry) {
      throw new Error(`Quote not found`);
    }

    quoteEntry.id = quoteId;
    quoteEntry.quote = newQuote;
    quoteEntry.author = author;
    quoteEntry.source = source;

    quoteRecord.splice(quoteIndex, 1, quoteEntry); // # Alter in memory.
    saveQuoteRecord(); // # Save to local storage.
  };

  // # Saves to localStorage first
  // then back up to Google Sheet.
  const saveQuoteRecord = () => {
    const serializedQuote = JSON.stringify(quoteRecord);

    localStorage.setItem("QUOTES", serializedQuote);
  };

  const deleteQuote = (quoteId) => {
    if (typeof quoteId !== "string") {
      throw new TypeError(`${quoteId} is not a string.`);
    }

    const quoteIndex = quoteRecord.findIndex((quote) => quote.id === quoteId);

    if (quoteIndex === -1) {
      throw new Error(`Quote not found`);
    }

    quoteRecord.splice(quoteIndex, 1); // # Alter in memory.
    saveQuoteRecord(); // Save new state to local storage and Google Sheet.
  };

  const deleteAllQuotes = () => {
    quoteRecord.length = 0;
    localStorage.removeItem("QUOTES");
  };

  // # Private Helpers

  // async function checkSheet() {
  //   const record = [];

  //   const fromSheet = await fetchSheetData();

  //   if (fromSheet.length === 0) {
  //     return [];
  //   }

  //   for (let i = 1; i < fromSheet.length; i++) {
  //     record.push({
  //       id: fromSheet[i][0],
  //       quote: fromSheet[i][1],
  //       author: fromSheet[i][2],
  //       dateAdded: fromSheet[i][3],
  //       source: fromSheet[i][4],
  //     });
  //   }

  //   return record;
  // }

  // # Basic quote index randomizer.
  const randomizeIndex = (record) => {
    if (!Array.isArray(record)) {
      throw new TypeError(`${record}: is not valid array.`);
    }

    if (record.length === 0) {
      throw new Error(`${record}: There is no record to randomize.`);
    }

    return Math.floor(Math.random() * record.length);
  };

  // # Random ID generator. <GOOGLED>
  const createRandomId = (length = 8) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let id = "";
    const bytes = new Uint8Array(length);

    crypto.getRandomValues(bytes);

    for (const byte of bytes) {
      // # To avoid modulo bias (248 is divisible by 62).
      if (byte >= 248) {
        return createRandomId(length);
      }
      id += characters[byte % 62];
    }

    return id;
  };

  // # Checks for collision.
  const enforceUniqueId = () => {
    let id = null; // # Not sure if null is better than undefined.

    do {
      id = createRandomId(); // # Creates the id once.
    } while (quoteRecord.some((quote) => quote.id === id)); // # If it exists, execute the do block again.

    return id; // # ID that has no match on our record.
  };

  return {
    getAllQuotes,
    getRandomQuote,
    addNewQuote,
    editQuote,
    deleteQuote,
    deleteAllQuotes,
  };
})();
