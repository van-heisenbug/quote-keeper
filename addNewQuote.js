import { QuoteDB } from "./quote.js";
import { DOM } from "./dom.js";
import renderAllQuotes from "./renderAllQuotes.js";

export default function addNewQuote() {
  if (DOM.quoteInput.value === "") {
    return;
  }
  const newQuote = DOM.quoteInput.value.trim();
  const author = DOM.authorInput.value.trim();
  const source = DOM.sourceInput.value.trim();

  QuoteDB.addNewQuote(newQuote, author, source);
  DOM.allQuotes.appendChild(renderAllQuotes());
  DOM.authorInput.value = "";
  DOM.quoteInput.value = "";
  DOM.sourceInput.value = "";
}
