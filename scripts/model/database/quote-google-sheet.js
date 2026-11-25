import Quote from "../quote.js";

const GSheet =
  "https://docs.google.com/spreadsheets/d/1buSetPLTZSwixxHVEp045HDLJYcKWhtjyk8gbdcwqWI/edit?gid=0#gid=0";
/**
 *
 */
function QuoteGoogleSheet() {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzZlFJJuHLvrrki0oRahXhlcwM7YsNLO4CcxFvSCYGeXkS-yrBHtOyRkG7l97pBQ-hY/exec";

  /**
   *
   * @param {*Array} quotes expects an array of objects.
   */
  const insertQuotes = async (quotes) => {
    if (!Array.isArray(quotes)) {
      throw new Error("Array of quotes is required.");
    }

    if (quotes.length === 0) {
      return;
    }

    const response = await usePostRequest(quotes, "INSERT");
    return response;
  };

  const updateQuote = () => {};
  const removeQuote = () => {};

  const retrieveAllQuotes = async () => {
    return await useGetRequest();
  };

  const removeAllQuotes = () => {};

  // Returns a Promise
  async function useGetRequest() {
    try {
      const response = await fetch(WEB_APP_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data: ", error);
    }
  }

  // Returns a Promise
  async function usePostRequest(payload, actionType) {
    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          payload,
          action: actionType,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  return {
    insertQuotes,
    retrieveAllQuotes,
  };
}
