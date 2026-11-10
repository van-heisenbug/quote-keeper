// # IMPORTS
import { FormController } from "./controller/form-controller.js";
import { TableController } from "./controller/table-controller.js";
import { ModalController } from "./controller/modal-controller.js";

const formController = FormController();
const tableController = TableController();
const modalController = ModalController();

formController.init();
tableController.init();
modalController.init();
