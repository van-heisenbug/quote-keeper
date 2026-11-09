import { Form } from "../view/form.js";
import { FormDom } from "../view/form-dom.js";
import { Quote } from "../model/quote.js";
import { QuoteDb } from "../model/quote-db.js";
import { Table } from "../view/table.js";
import { TableDom } from "../view/table-dom.js";

export function FormController() {
  const formDom = FormDom(); // View
  const form = Form(formDom); // View
  const tableDom = TableDom(); // View
  const table = Table(); // View
  const db = QuoteDb(); // Model

  const init = () => {
    const localQuotes = db.getLocalQuoteRecord(); // Fetch fresh record
    table.renderTable(localQuotes); // On load render

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

    // # TABLE Action Column Listener
    tableDom.tableBody.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.closest("button")) return;

      const button = target.closest("button");
      const row = button.closest("tr");
      const quoteId = row.firstElementChild.textContent;

      if (button.classList.contains("quote-manager__table-edit")) {
        console.log(quoteId); // TODO
      } else if (button.classList.contains("quote-manager__table-trash")) {
        console.log(quoteId); // TODO
      }
    });
  };

  return {
    init,
  };
}
