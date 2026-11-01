// # IMPORTS
import { Form } from "./dom.js";

export function checkForm() {
  const form = Form();

  form.addQuoteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const quoteEntry = [form.quoteInput, form.authorInput, form.sourceInput];

    quoteEntry.forEach((element) => {
      const inputParent = element.parentElement;
      inputParent.classList.remove("error");
      inputParent.classList.add("success");
    });

    const emptyFields = quoteEntry.filter(
      (inputValue) => inputValue.value.trim() === "",
    );

    if (emptyFields.length > 0) {
      for (let i = 0; i < emptyFields.length; i++) {
        const formControl = emptyFields[i].parentElement;

        formControl.classList.add("error");

        const errorMessageDisplay = formControl.querySelector(
          "#quote-form__control-check",
        );

        const titledInput =
          emptyFields[i].id.charAt(0).toUpperCase() +
          emptyFields[i].id
            .split("")
            .splice(1, emptyFields[i].id.length)
            .join("");

        errorMessageDisplay.textContent = `${titledInput} cannot be empty.`;
      }

      return;
    }

    return {
      quote: form.quoteInput.value,
      author: form.authorInput.value,
      source: form.sourceInput.value,
    };
  });
}
