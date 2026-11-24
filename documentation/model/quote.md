# /quote.js

- Quote constructor expects object to be passed as it relies on object destructuring.
- id, dateAdded, dateTrashed and isTrashed are initialized with default values.
- This way, I can use the same Quote Factory to either build a new quote object or rebuild a parsed JSON quotes from local storage or Google Sheets.
- Quote.getState() - Read the current Quote states and return them as a new object. I also use this method for serialization.
- Quote.edit() - Relies on object destructuring to identify which quote information requires editing.
- Currently, Quote.edit() only checks strictly if the object properties passed are undefined or not.
