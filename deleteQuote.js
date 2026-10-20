import { DOM } from "./dom.js";
import { QuoteDB } from "./quote.js";
import renderAllQuotes from "./renderAllQuotes.js";

export function deleteQuote(id) {
  QuoteDB.deleteQuote(id);
  DOM.allQuotes.appendChild(renderAllQuotes());
}
