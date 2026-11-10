// # IMPORTS
import { QuoteDb } from "../model/quote-db.js";

import { modal } from "../view/modal.js"; // Singleton
import { TableDom } from "../view/table-dom.js";
import { Table } from "../view/table.js";

export function TableController() {
  const db = QuoteDb(); // Model
  const tableDom = TableDom(); // View
  const table = Table(); // View

  const init = () => {
    const localQuotes = db.getLocalQuoteRecord(); // Fetch fresh record
    table.renderTable(localQuotes); // On load render
    // localQuotes should be GC'd here because it's no longer closured below,
    // unless I will use it. But this is not the updated quote record anymore after init.

    // # TABLE Action Column Listener
    tableDom.tableBody.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.closest("button")) return;

      const actionBtn = target.closest("button");
      const tableRow = actionBtn.closest("tr");
      const quoteId = tableRow.firstElementChild.textContent;

      if (actionBtn.classList.contains("quote-manager__table-edit")) {
        // Open Modal TODO
        console.log(quoteId);
        //  TODO - pass the entire quote to be edited.
      } else if (actionBtn.classList.contains("quote-manager__table-trash")) {
        // TableController init() finishes but FormController may have already added new quotes.
        const updatedDb = QuoteDb(); // TODO - will make the db talker a singleton
        const selectedQuote = updatedDb
          .getLocalQuoteRecord()
          .find((quote) => quote.id === quoteId); // So, I am fetching a new updated record.
        const modalRequest = {
          purpose: "toTrash",
          payload: selectedQuote,
        };
        // Open Modal
        modal.open(modalRequest);
      }
    });
  };

  return { init };
}
