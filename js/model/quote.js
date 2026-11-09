// # DEPENDENCIES

// Quote Model
export function Quote({
  id = crypto.randomUUID(),
  quote,
  author,
  source,
  dateAdded = new Date().toISOString(),
} = {}) {
  // On Call
  _validateEntry();

  // # INTERNAL

  let _isTrashed = false;
  let _dateTrashed = null;

  // # READER

  const getId = () => {
    return id;
  };
  const getQuote = () => {
    return quote;
  };
  const getAuthor = () => {
    return author;
  };
  const getSource = () => {
    return source;
  };
  const getDateAdded = () => {
    return dateAdded;
  };
  const getStatus = () => {
    return _isTrashed;
  };
  const getDateTrashed = () => {
    return _dateTrashed;
  };

  // # MUTATOR

  const setQuote = (newQuote) => {
    quote = newQuote;
  };
  const setAuthor = (newAuthor) => {
    author = newAuthor;
  };
  const setSource = (newSource) => {
    source = newSource;
  };

  const trashQuote = () => {
    _isTrashed = true;
    _dateTrashed = new Date().toISOString();
  };
  const unTrashQuote = () => {
    _isTrashed = false;
    _dateTrashed = null;
  };

  // # HELPER
  function _validateEntry() {
    if (!quote || !author || !source) {
      throw new Error("NULL, MISSING or UNDEFINEAD argument detected.");
    }
  }

  return {
    getId,
    getQuote,
    getAuthor,
    getSource,
    getDateAdded,
    getStatus,
    getDateTrashed,
    setQuote,
    setAuthor,
    setSource,
    trashQuote,
    unTrashQuote,
  };
}
