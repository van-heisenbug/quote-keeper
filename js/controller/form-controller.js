import { Form } from "../view/form.js";
import { FormDom } from "../view/form-dom.js";
import { Quote } from "../model/quote.js";
import { QuoteDb } from "../model/quote-db.js";
import { Table } from "../view/table.js";

export function FormController() {
  const formDom = FormDom();
  const form = Form(formDom);
  const table = Table();

  const init = () => {
    formDom.quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formEntry = form.getFormEntry();
      if (formEntry === null) return;

      // Calling Model
      const quoteEntry = Quote(formEntry);
      const serializedQuote = quoteEntry.getSerializedQuote();
      const db = QuoteDb();

      db.insertNewQuote(serializedQuote);
      db.updateLocalStorage();
      form.clearFormEntry();

      table.renderTable(db.fetchFromLocalStorage());
    });

    formDom.clearQuoteBtn.addEventListener("click", form.clearFormEntry);
  };

  return {
    init,
  };
}
