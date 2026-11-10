// # IMPORTS
import { QuoteDb } from "../model/quote-db.js";
import { Modal } from "../view/modal.js";
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

      const button = target.closest("button");
      const row = button.closest("tr");
      const quoteId = row.firstElementChild.textContent;
      // Modal Content for Trash
      const trashContent = createTrashModalContent();
      const modal = Modal(trashContent);

      if (button.classList.contains("quote-manager__table-edit")) {
        // Open Modal
      } else if (button.classList.contains("quote-manager__table-trash")) {
        // Open Modal
        modal.openModal();
      }
    });
  };

  function createTrashModalContent() {
    // header
    const headerFragment = document.createDocumentFragment();
    const headerMessage = document.createElement("p");

    headerMessage.textContent = `Are you sure want to move this Quote to your Trash?`;
    headerFragment.appendChild(headerMessage);

    // body
    const bodyFragment = document.createDocumentFragment();
    const trashMessage = document.createElement("p");

    trashMessage.textContent = `You are about to Trash quote_id: ${""}`;
    bodyFragment.appendChild(trashMessage);

    // footer
    const footerFragment = document.createDocumentFragment();
    const trashBtn = document.createElement("button");

    trashBtn.type = "button";
    trashBtn.classList.add("confirm-delete");
    footerFragment.appendChild(trashBtn);

    return { headerFragment, bodyFragment, footerFragment };
  }

  return { init };
}
