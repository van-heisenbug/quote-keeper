export function Form() {
  const quoteForm = document.getElementById("quote-form");
  const quoteFormControl = document.getElementById("quote-form__control");

  const quoteInput = document.getElementById("quote");
  const authorInput = document.getElementById("author");
  const sourceInput = document.getElementById("source");

  const addQuoteBtn = document.getElementById("quote-form__add-quote");
  const clearQuoteBtn = document.getElementById("quote-form__clear");

  return {
    quoteForm,
    quoteFormControl,
    quoteInput,
    authorInput,
    sourceInput,
    addQuoteBtn,
    clearQuoteBtn,
  };
}
