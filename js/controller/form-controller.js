import { Form } from "../view/form.js";
import { Table } from "../view/table.js";
import { FormDom } from "../view/form-dom.js";

import { Quote } from "../model/quote.js";
import { QuoteDb } from "../model/quote-db.js";

export function FormController() {
  const formDom = FormDom(); // View
  const form = Form(formDom); // View
  const table = Table(); // View
  const db = QuoteDb(); // Model

  const init = () => {
    // # FORM Submit Listener
    formDom.quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formEntry = form.getFormEntry();
      if (formEntry === null) return;

      const quoteEntry = Quote(formEntry); // Model
      const serializedQuote = quoteEntry.getSerializedQuote();

      db.insertNewQuote(serializedQuote);
      db.updateLocalStorage();

      table.insertTableRow(serializedQuote);
      form.clearFormEntry();
    });

    // # FORM Clear Entry Listener
    formDom.clearQuoteBtn.addEventListener("click", form.clearFormEntry);
  };

  return {
    init,
  };
}
