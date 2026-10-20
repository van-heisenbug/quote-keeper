import { DOM } from "./dom.js";
import renderAllQuotes from "./renderAllQuotes.js";
import showRandomQuote from "./showRandomQuote.js";
import addNewQuote from "./addNewQuote.js";
import { deleteAllQuotes } from "./deleteAllQuotes.js";
import editQuote from "./editQuote.js";
import { deleteQuote } from "./deleteQuote.js";

// # On load
DOM.allQuotes.appendChild(renderAllQuotes());

DOM.randomQuoteBTN.addEventListener("click", showRandomQuote);
DOM.addNewQuoteBtn.addEventListener("click", addNewQuote);
DOM.deleteAllBtn.addEventListener("click", deleteAllQuotes);

DOM.allQuotes.addEventListener("click", (e) => {
  const btnClicked = e.target.closest("button");
  if (!btnClicked) {
    return;
  }

  if (btnClicked.id === "edit") {
    const card = e.target.closest(".quote-card");
    const quoteLine = card.querySelector(".quote-line");

    DOM.quoteIdInput.value = quoteLine.id;
    DOM.editQuoteInput.value = quoteLine.textContent;

    DOM.editQuoteForm.style.display = "flex";
  } else if (btnClicked.id === "delete") {
    const card = e.target.closest(".quote-card");
    const quoteLine = card.querySelector(".quote-line");

    deleteQuote(quoteLine.id);
  }
});

DOM.editQuoteForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-quote-form")) {
    DOM.editQuoteForm.style.display = "none";
    return;
  }

  const id = DOM.quoteIdInput.value;
  const newQuote = DOM.editQuoteInput.value;
  const author = DOM.editAuthorInput.value;
  const source = DOM.editSourceInput.value;

  if (e.target.closest("button") && e.target.id === "edit-new-quote") {
    editQuote(id, newQuote, author, source);
  }
});
