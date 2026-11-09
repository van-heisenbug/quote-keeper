import { TableDom } from "./table-dom.js";

export function Table() {
  const tableDom = TableDom();

  function renderTable(quoteRecord = []) {
    if (quoteRecord.length <= 0) {
      throw new TypeError("quoteRecord cannot be empty.");
    }

    const fragment = document.createDocumentFragment();

    quoteRecord.forEach((quote) => {
      const quoteRow = createTableRow(quote); // DOM fragment

      fragment.appendChild(quoteRow);
    });

    tableDom.tableBody.appendChild(fragment);
  }

  function createActionButtons() {
    const fragment = document.createDocumentFragment();

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("quote-manager__table-edit");
    editBtn.ariaLabel = "Edit Quote";

    const trashBtn = document.createElement("button");
    trashBtn.type = "button";
    trashBtn.classList.add("quote-manager__table-trash");
    trashBtn.ariaLabel = "Delete Quote";

    const svgNamespace = "http://www.w3.org/2000/svg";

    const editSvg = document.createElementNS(svgNamespace, "svg");
    editSvg.setAttribute("viewbox", "0 0 24 24");
    editSvg.setAttribute("height", "24");
    editSvg.setAttribute("width", "24");
    editSvg.setAttribute("fill", "#2563eb");

    const editSvgPath = document.createElementNS(svgNamespace, "path");
    editSvgPath.setAttribute(
      "d",
      "M5,19H6.43L16.2,9.23L14.78,7.8L5,17.58V19ZM3,21V16.75L16.2,3.57q0.3-0.28 0.66-0.43T17.63,3q0.4,0 0.78,0.15T19.05,3.6L20.43,5q0.3,0.27 0.44,0.65T21,6.4q0,0.4-0.14,0.76T20.43,7.82L7.25,21H3ZM19,6.4L17.6,5L19,6.4ZM15.48,8.52L14.78,7.8L16.2,9.23l-0.72-0.7Z",
    );

    editSvg.appendChild(editSvgPath);
    editBtn.appendChild(editSvg);

    const trashSvg = document.createElementNS(svgNamespace, "svg");
    trashSvg.setAttribute("viewbox", "0 0 24 24");
    trashSvg.setAttribute("height", "24");
    trashSvg.setAttribute("width", "24");
    trashSvg.setAttribute("fill", "#ef4444");

    const trashSvgPath = document.createElementNS(svgNamespace, "path");
    trashSvgPath.setAttribute(
      "d",
      "M5,19H6.43L16.2,9.23L14.78,7.8L5,17.58V19ZM3,21V16.75L16.2,3.57q0.3-0.28 0.66-0.43T17.63,3q0.4,0 0.78,0.15T19.05,3.6L20.43,5q0.3,0.27 0.44,0.65T21,6.4q0,0.4-0.14,0.76T20.43,7.82L7.25,21H3ZM19,6.4L17.6,5L19,6.4ZM15.48,8.52L14.78,7.8L16.2,9.23l-0.72-0.7Z",
    );

    trashSvg.appendChild(trashSvgPath);
    trashBtn.appendChild(trashSvg);

    fragment.append(editBtn, trashBtn);

    return fragment;
  }

  function createTableRow({ id, quote, author, source, dateAdded } = {}) {
    const fragment = document.createDocumentFragment();

    const actionButtons = createActionButtons(); // DOM fragment.

    const columns = [id, quote, author, source, dateAdded, actionButtons];

    const tr = document.createElement("tr");
    tr.role = "row";

    for (let i = 0; i < columns.length; i++) {
      const td = document.createElement("td");
      td.role = "cell";

      // TOFUCKING DOOOO - because of my dumb code here, it's overwriting my button fragment
      // if (i !== columns.length - 1) {
      //   td.dataset.label = columns[i];
      // } else {
      //   td.classList.add("quote-manager__table-action");
      //   td.appendChild(actionButtons);
      // }

      // if (i !== columns.length - 2) {
      //   td.textContent = columns[i];
      // } else {
      //   td.textContent = new Date(columns[i]).toLocaleDateString();
      // }

      tr.appendChild(td);
    }

    fragment.appendChild(tr);

    return fragment;
  }

  return {
    renderTable,
  };
}
