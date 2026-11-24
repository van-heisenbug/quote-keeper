// My first Mini Backend :D

// Get the correct sheet.
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MAIN");

function insertRow(newQuote) {
  // Find the last row index with content
  const lastRow = sheet.getLastRow();
  // Row after the last row. Starting 1st to 7th column
  const newRow = sheet.getRange(lastRow + 1, 1, 1, 7); // (row, cols, numRows, numCols)
  newRow.setValues(newQuote);
}

function editRow(quoteId, newQuote) {
  // Finds the cell that contains the matching ID
  const cellMatch = sheet
    .getDataRange()
    .createTextFinder(quoteId)
    .matchEntireCell(true)
    .findNext();
  // Grab the matching row index
  const cellMatchRow = cellMatch.getRow();
  // Row containing the quote to be updated
  const rowToEdit = sheet.getRange(cellMatchRow, 1, 1, 7); // (row, cols, numRows, numCols)
  // Overwrite the row values with new quote details
  rowToEdit.setValues(newQuote);
}

function deleteRow(quoteId) {
  const cellMatch = sheet
    .getDataRange()
    .createTextFinder(quoteId)
    .matchEntireCell(true)
    .findNext();
  // Row index match
  const cellMatchRow = cellMatch.getRow();
  // Deletes the entire row using the row index
  sheet.deleteRow(cellMatchRow);
}

function deleteAllQuotes() {
  // Find the last row with contents
  const lastRow = sheet.getLastRow();

  // Only delete if there are actually quotes below the header
  if (lastRow > 1) {
    // (row, cols, numRows, numCols)
    sheet.getRange(2, 1, lastRow - 1, 7).clearContent(); // Using lastRow - 1 because I am starting at row 2
  }
}

function getAllQuotes() {
  // Find the last row with contents.
  const lastRow = sheet.getLastRow();

  // Incase there are no quotes below the header
  if (lastRow <= 1) {
    return [];
  }

  // Header Columns
  const rawHeaderColumns = sheet.getRange(1, 1, 1, 7).getValues();
  const [unpackedHeaderColumns] = rawHeaderColumns; // destructuring inner array

  // New array containing camelCased header names
  const camelCaseHeaderColumns = unpackedHeaderColumns.map((column) => {
    return toCamelCase(column);
  });

  // 2D array
  const rawSheetData = sheet.getRange(2, 1, lastRow - 1, 7).getValues();

  // 1D array - now with objects inside
  const rawObjectArray = mapToObject(rawSheetData, camelCaseHeaderColumns);

  // The valid JS object data
  return rawObjectArray;
}

// Helper Functions
function createJSONResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

/**
 * @param flatArray is the inner array e.g, innerRow = ['column1', 'column2', 'column3', 'column4', 'column5', ...]
 * @param innerRow is the actual value of my header columns e.g., 'id', 'quote', ...
 * @param index is the index from 0-6 correspoding to my header columns
 * @variable mappedObject builds a 2D array again mapping innerRow for key and outerArray[index] for value
 * @return Object.fromEntries create an object key:value using the built 2D array
 */
function mapToObject(doubleArray, flatArray) {
  const mappedObject = doubleArray.map((outerArray) => {
    const innerArray = flatArray.map((innerRow, index) => {
      return [innerRow, outerArray[index]];
    });

    return Object.fromEntries(innerArray);
  });

  return mappedObject;
}

function toCamelCase(str) {
  if (str === "") return;

  const camelCasedString = str
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

  return camelCasedString.join("");
}

// POST request

/**
 * @param (e) is the event request object as per Google Docs to use "e"
 */
function doPost(e) {
  try {
    const requestContent = e?.postData?.contents || "{}";
    const requestPayload = JSON.parse(requestContent);

    if (requestPayload.action === "INSERT") {
      insertRow(requestPayload.newEntry);
    } else if (requestPayload.action === "UPDATE") {
      editRow(requestPayload.id, requestPayload.newEntry);
    } else if (requestPayload.action === "DELETE") {
      deleteRow(requestPayload.id);
    } else if (requestPayload.action === "DELETE-ALL") {
      deleteAllQuotes();
    }

    const responseBody = {
      status: "success",
      method: "POST",
      message: "Data successfully received and processed.",
    };

    return createJSONResponse(responseBody);
  } catch (error) {
    const errorResponse = {
      status: "error",
      message: error.toString(),
    };

    return createJSONResponse(errorResponse);
  }
}

// GET Request
function doGet() {
  const data = getAllQuotes();

  const responseData = {
    status: "success",
    method: "GET",
    body: data,
  };

  return createJSONResponse(responseData);
}
