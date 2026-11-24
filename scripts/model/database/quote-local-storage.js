/**
 * Factory Function
 * Singleton
 * Manages Local Storage
 */

function QuoteLocalStorage() {
  const retrieve = (key) => {
    try {
      // Fetch
      const rawQuotes = localStorage.getItem(key);

      // Null check
      if (rawQuotes === null) {
        return [];
      }

      // Parse to JS
      const parsedQuotes = JSON.parse(rawQuotes);

      // Array check
      if (!Array.isArray(parsedQuotes)) {
        throw new TypeError("Stored quotes must be an array.");
      }

      // return
      return parsedQuotes;
    } catch (error) {
      throw new Error("Unable to retrieve from Local Storage.", {
        cause: error, // To preserve the original error object when propagated
      });
    }
  };

  const update = (key, value) => {
    // Serialize to JSON strings
    const serializedQuotes = JSON.stringify(value);

    localStorage.setItem(key, serializedQuotes);
  };

  const removeAllQuotes = (key) => localStorage.removeItem(key);

  return {
    retrieve,
    update,
    removeAllQuotes,
  };
}

// The Singleton
const quoteLocalStorage = QuoteLocalStorage();

export default quoteLocalStorage;
