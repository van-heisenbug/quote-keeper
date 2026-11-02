// # IMPORTS
import { clearFormEntry, getFormEntry } from "./view/formEntry.js";
import { formDom } from "./view/dom.js";

const form = formDom();

form.quoteForm.addEventListener("submit", (e) => {
  const b = getFormEntry(e);

  console.log(b);
});

form.clearQuoteBtn.addEventListener("click", clearFormEntry);
