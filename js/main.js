// # IMPORTS
import { Form } from "./view/form.js";
import { FormDom } from "./view/formDom.js";

const form = FormDom();
const b = Form(form);

form.quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(b.getFormEntry());
});

form.clearQuoteBtn.addEventListener("click", b.clearFormEntry);
