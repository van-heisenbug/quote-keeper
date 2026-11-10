import { TableDom } from "./table-dom.js";

export function Table() {
  const tableDom = TableDom();

  /**
   *
   * @param [Array] quoteRecord
   * @return the entire table with quotes.
   */
  function renderTable(quoteRecord = []) {
    const fragment = document.createDocumentFragment();

    quoteRecord.forEach((quote) => {
      const quoteRow = _createTableRow(quote); // DOM fragment

      fragment.appendChild(quoteRow);
    });

    tableDom.tableBody.replaceChildren(fragment);
  }

  function _createActionButtons() {
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
    editSvg.setAttribute("viewBox", "0 0 24 24");
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
    trashSvg.setAttribute("viewBox", "0 0 24 24");
    trashSvg.setAttribute("height", "24");
    trashSvg.setAttribute("width", "24");
    trashSvg.setAttribute("fill", "#ef4444");

    const trashSvgPath = document.createElementNS(svgNamespace, "path");
    trashSvgPath.setAttribute(
      "d",
      "M7,21q-0.82,0-1.41-0.59T5,19V6H4V4H9V3h6V4h5V6H19V19q0,0.82-0.59,1.41T17,21H7ZM17,6H7V19H17V6ZM9,17h2V8H9v9Zm4,0h2V8H13v9ZM7,6V19V6Z",
    );

    trashSvg.appendChild(trashSvgPath);
    trashBtn.appendChild(trashSvg);

    fragment.append(editBtn, trashBtn);

    return fragment;
  }

  function _createTableRow(quote = {}) {
    const fragment = document.createDocumentFragment();

    const actionButtons = _createActionButtons(); // DOM fragment.

    const columns = {
      id: quote.id,
      quote: quote.quote,
      author: quote.author,
      source: quote.source,
      dataAdded: new Date(quote.dateAdded).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      action: actionButtons,
    };

    const tr = document.createElement("tr");
    tr.role = "row";

    for (const item of Object.values(columns)) {
      const td = document.createElement("td");
      td.role = "cell";

      if (item instanceof Node) {
        td.classList.add("quote-manager__table-action");
        td.appendChild(item);
      } else {
        td.textContent = item;
      }

      tr.appendChild(td);
    }

    fragment.appendChild(tr);

    return fragment;
  }

  function insertTableRow(quote = {}) {
    const quoteRow = _createTableRow(quote);
    tableDom.tableBody.appendChild(quoteRow);
  }

  // function deleteTableRow() {}
  // Will use something I found in Google parent.replaceChildren() -> accepts one or more new child to replace or child.replaceWith(newChild)
  // also parent.replaceChild(newChild, oldChild)

  return {
    renderTable,
    insertTableRow,
  };
}
