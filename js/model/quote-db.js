// # DEPENDENCIES

// Talks to the DB
export function QuoteDb() {
  let localQuoteRecord = fetchFromLocalStorage() || [];

  const getLocalQuoteRecord = () => {
    return structuredClone(localQuoteRecord);
  };

  function fetchFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("QUOTES"));
    } catch (error) {
      throw new Error(`Fetching from local storage failed! ${error.message}`);
    }
  }

  const insertNewQuote = (newQuote = {}) => {
    if (typeof newQuote !== "object" && Object.keys(newQuote).length === 0) {
      throw new TypeError("newQuote must be a valid object.");
    }

    localQuoteRecord.push(newQuote);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("QUOTES", JSON.stringify(localQuoteRecord));
  };

  return {
    getLocalQuoteRecord,
    updateLocalStorage,
    insertNewQuote,
  };
}
