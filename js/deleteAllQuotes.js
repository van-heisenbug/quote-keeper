//
import { QuoteDB } from "./quote.js";
import { DOM } from "./dom.js";

export function deleteAllQuotes() {
  QuoteDB.deleteAllQuotes();
  DOM.allQuotes.innerHTML = "";
}
