// # IIFE
const QuoteDB = (() => {
  const quoteRecord = JSON.parse(localStorage.getItem("QUOTE")) || [];

  const getAllQuotes = () => {
    return structuredClone(quoteRecord);
  };

  // # Returns the randomized quote selected.
  const readQuote = () => {
    const index = randomizeIndex(quoteRecord);

    return quoteRecord[index]; // String
  };

  const addQuoute = (newQuote, author = "NA", source = "NA") => {
    if (typeof newQuote !== "string") {
      throw new TypeError(`${newQuote} is not a string.`);
    }

    let uniqueId = createRandomId();

    if (checkCollision(uniqueId)) {
      // If there is a match in the record.
      uniqueId = createRandomId();
    }

    const quoteEntry = {
      id: uniqueId,
      quote: newQuote,
      author: author,
      dateAdded: new Date().toISOString(),
      source: source,
    };

    quoteRecord.push(quoteEntry);
    saveQuoteRecord();
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

    quoteRecord.splice(quoteIndex, 1, quoteEntry);
    saveQuoteRecord();
  };

  // # Saves to localStorage first
  // then back up to Google Sheet.
  const saveQuoteRecord = () => {
    const serializedQuote = JSON.stringify(quoteRecord);
    localStorage.setItem("QUOTES", serializedQuote);
    // Back up to Google Sheet later.
  };

  const deleteQuote = (quoteId) => {
    if (typeof quoteId !== "string") {
      throw new TypeError(`${quoteId} is not a string.`);
    }

    const quoteIndex = quoteRecord.findIndex((quote) => quote.id === quoteId);

    if (quoteIndex === -1) {
      throw new Error(`Quote not found`);
    }

    quoteRecord.splice(quoteIndex, 1);
    saveQuoteRecord();
  };

  // # Private Helpers

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

  // # Random ID generator.
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
  const checkCollision = (quoteId) => {
    return quoteRecord.some((quote) => quote.id === quoteId);
  };

  return {
    getAllQuotes,
    readQuote,
    addQuoute,
    editQuote,
    deleteQuote,
  };
})();

QuoteDB.addQuoute("q1", "auth1", "facebook");
QuoteDB.addQuoute("q2", "auth2", "youtube");
QuoteDB.addQuoute("q3", "instagram");
QuoteDB.addQuoute("q4");

console.log(QuoteDB.getAllQuotes());
