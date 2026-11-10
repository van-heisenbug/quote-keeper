// # DEPENDENCIES

// Talks to the DB
// TODO - currently dependent on its localQuoteRecord state
// Because of this, I have to create another instance to get updated local storage data.
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
