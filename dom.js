//
export const DOM = (() => {
  const addNewQuoteBtn = document.getElementById("add-new-quote");
  const randomQuoteBTN = document.getElementById("random-quote-btn");
  const deleteAllBtn = document.getElementById("delete-all");
  const editQuoteBtn = document.getElementById("edit-new-quote");

  const randomQuoteDisplay = document.getElementById("random-quote");

  const quoteInput = document.getElementById("quote");
  const authorInput = document.getElementById("author");
  const sourceInput = document.getElementById("source");

  const editQuoteInput = document.getElementById("edit-quote");
  const editAuthorInput = document.getElementById("edit-author");
  const editSourceInput = document.getElementById("edit-source");
  const quoteIdInput = document.getElementById("quote-id");

  const allQuotes = document.getElementById("all-quotes");
  const quoteList = document.getElementById("quote-list");
  const editQuoteForm = document.getElementById("edit-quote-form");

  return {
    addNewQuoteBtn,
    allQuotes,
    randomQuoteDisplay,
    randomQuoteBTN,
    quoteList,
    quoteInput,
    authorInput,
    sourceInput,
    deleteAllBtn,
    editQuoteForm,
    editQuoteBtn,
    quoteIdInput,
    editQuoteInput,
    editAuthorInput,
    editSourceInput,
  };
})();
