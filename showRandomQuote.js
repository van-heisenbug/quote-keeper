//
import { QuoteDB } from "./quote.js";
import { DOM } from "./dom.js";

export default function showRandomQuote() {
  DOM.randomQuoteDisplay.textContent = QuoteDB.getRandomQuote().quote;
}
