//
import { QuoteDB } from "./quote.js";
import { DOM } from "./dom.js";

export default function renderAllQuotes() {
  DOM.allQuotes.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const ol = document.createElement("ol");
  ol.id = "quote-list";

  const allQuotes = QuoteDB.getAllQuotes();

  if (!Array.isArray(allQuotes)) {
    return;
  }

  allQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.classList.add("quote-card");

    const p = document.createElement("p");
    p.classList.add("quote-line");
    p.id = quote.id;
    p.textContent = quote.quote;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.id = "edit";
    editBtn.classList.add("btn-sm");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("btn-sm");
    deleteBtn.id = "delete";
    deleteBtn.textContent = "Delete";

    li.append(p, editBtn, deleteBtn);
    ol.appendChild(li);
  });

  fragment.appendChild(ol);

  return fragment;
}
