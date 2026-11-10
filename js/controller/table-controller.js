// # IMPORTS
import { QuoteDb } from "../model/quote-db.js";
import { TableDom } from "../view/table-dom.js";
import { Table } from "../view/table.js";

export function TableController() {
  const db = QuoteDb(); // Model
  const tableDom = TableDom(); // View
  const table = Table(); // View

  const init = () => {
    const localQuotes = db.getLocalQuoteRecord(); // Fetch fresh record
    table.renderTable(localQuotes); // On load render

    // # TABLE Action Column Listener
    tableDom.tableBody.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.closest("button")) return;

      const actionBtn = target.closest("button");
      const tableRow = actionBtn.closest("tr");
      const quoteId = tableRow.firstElementChild.textContent;

      if (actionBtn.classList.contains("quote-manager__table-edit")) {
        // Open Modal
        console.log(quoteId);
      } else if (actionBtn.classList.contains("quote-manager__table-trash")) {
        // Open Modal
        console.log(quoteId);
      }
    });
  };

  return { init };
}
