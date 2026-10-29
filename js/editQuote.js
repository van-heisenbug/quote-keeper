import { DOM } from "./dom.js";
import { QuoteDB } from "./quote.js";
import renderAllQuotes from "./renderAllQuotes.js";

//
export default function editQuote(id, newQuote, author, source) {
  QuoteDB.editQuote(id, newQuote, author, source);
  DOM.editQuoteForm.style.display = "none";
  DOM.allQuotes.appendChild(renderAllQuotes());
}
