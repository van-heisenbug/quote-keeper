import { Form } from "../view/form.js";
import { FormDom } from "../view/form-dom.js";

export function FormController() {
  const formDom = FormDom();
  const form = Form(formDom);

  const init = () => {
    formDom.quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const entry = form.getFormEntry();
      if (entry === null) return;

      // TODO - this is where I can add new quotes calling model.
      // call model that adds quote and wait for api return success.
      // if successful, clear the inputs
      /* ex: const result = model.addQuote(entry);
          if (result.success) {
            form.clearFormEntry();
          } 
      */
      //  Since saving quotes take time as I have to call Google Sheet API, I have to make sure this is Async here and make a flag like
      // isSaving = false;
      // if isSaving is true, I disable the submit button

      /* ex from Claude:
      
      let isSaving = false;

formDom.quoteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (isSaving) return;              // ignore clicks while a save is running

  const entry = form.getFormEntry();
  if (entry === null) return;

  isSaving = true;
  formDom.addQuoteBtn.disabled = true;

  try {
    const result = await model.addQuote(entry);
    if (result.success) form.clearFormEntry();
  } finally {
    isSaving = false;                // runs whether it succeeded or threw
    formDom.addQuoteBtn.disabled = false;
  }
});

Will do this next time. I am really really tired.
      */
    });

    formDom.clearQuoteBtn.addEventListener("click", form.clearFormEntry);
  };

  return {
    init,
  };
}
