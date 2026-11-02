import { Form } from "../form.js";
import { FormDom } from "../formDom.js";

const formDom = FormDom();
const form = Form({
  quoteInput: formDom.quoteInput,
  authorInput: formDom.authorInput,
  sourceInput: formDom.sourceInput,
});
