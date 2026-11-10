// # IMPORTS
import { FormController } from "./controller/form-controller.js";
import { TableController } from "./controller/table-controller.js";

const formController = FormController();
const tableController = TableController();

formController.init();
tableController.init();
