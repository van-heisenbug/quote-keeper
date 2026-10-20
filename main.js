//
const QuoteDB = (() => {
  const quoteRecord = [];

  const getAllQuotes = () => {
    return structuredClone(quoteRecord);
  };

  // Returns the randomized quote selected.
  const readQuote = () => {
    const index = randomizeIndex(quoteRecord);

    return quoteRecord[index]; // String
  };

  const addQuoute = (newQuote) => {
    if (typeof newQuote !== "string") {
      throw new TypeError(`${newQuote} is not a string.`);
    }

    quoteRecord.push(newQuote);
  };

  const editQuote = (qouteIndex, newQuote) => {
    if (typeof newQuote !== "string") {
      throw new TypeError(`${newQuote} is not a string.`);
    }

    if (!Number.isInteger(qouteIndex) || qouteIndex < 0) {
      throw new TypeError(`${qouteIndex} is not a positive whole number.`);
    }

    if (qouteIndex >= quoteRecord.length) {
      throw new Error(
        `${qouteIndex} cannot be more than or equal to the array length.`,
      );
    }

    quoteRecord.splice(qouteIndex, 1, newQuote);
  };

  // # Saves to Google Sheet.
  const saveQuoteRecord = () => {};

  const deleteQuote = (qouteIndex) => {
    if (!Number.isInteger(qouteIndex) || qouteIndex < 0) {
      throw new TypeError(`${qouteIndex} is not a positive whole number.`);
    }

    if (qouteIndex >= quoteRecord.length) {
      throw new Error(
        `${qouteIndex} cannot be more than or equal to the array length.`,
      );
    }

    quoteRecord.splice(qouteIndex, 1);
  };

  // Private Helper
  const randomizeIndex = (record) => {
    if (!Array.isArray(record)) {
      throw new TypeError(`${record}: is not valid array.`);
    }

    if (record.length === 0) {
      throw new Error(`${record}: There is no record to randomize.`);
    }

    return Math.floor(Math.random() * record.length);
  };

  return {
    getAllQuotes,
    addQuoute,
    readQuote,
    editQuote,
    deleteQuote,
    saveQuoteRecord,
  };
})();

QuoteDB.addQuoute(
  `“It always seems impossible until it’s done.” — Nelson Mandela`,
);
QuoteDB.addQuoute(
  `“Great things are done by a series of small things brought together.” — Vincent van Gogh`,
);
QuoteDB.addQuoute(
  `“The secret of getting ahead is getting started.” — Mark Twain (attributed)`,
);
QuoteDB.addQuoute(
  `“In the middle of difficulty lies opportunity.” — Albert Einstein (attributed)`,
);
console.log(QuoteDB.getAllQuotes());
QuoteDB.deleteQuote(0);
console.log(QuoteDB.getAllQuotes());
QuoteDB.addQuoute("Pain is weakness, body the leaving.");
console.log(QuoteDB.getAllQuotes());
QuoteDB.editQuote(3, "Pain is weakness leaving the body!");
console.log(QuoteDB.getAllQuotes());
console.log(QuoteDB.readQuote());
