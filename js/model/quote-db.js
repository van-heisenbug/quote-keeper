// # DEPENDENCIES

// Talks to the DB
export function QuoteDb() {
  let localQuoteRecord = [];

  function buildLocalData() {
    const localQuoteData = fetchFromLocalStorage();
    const googleSheetData = fetchFromGoogleSheet();

    if (localQuoteData.length === 0) {
    }
  }

  const fetchFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("QUOTES")) || [];
    } catch (error) {
      throw new Error(`Fetching from local storage failed! ${error.message}`);
    }
  };

  const fetchFromGoogleSheet = () => {
    // Call sheet API / web app url
  };

  const saveToLocal = () => {};
  const saveToSheet = () => {};

  const saveQuoteEntry = () => {};

  const editQuote = () => {};
}
