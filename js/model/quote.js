// # DEPENDENCIES

/**
 *
 * @param with fallback values are for old data preservation.
 * @returns Quote Object
 */
export function Quote({
  id = crypto.randomUUID(),
  quote,
  author,
  source,
  dateAdded = new Date().toISOString(),
  isTrashed = false,
  dateTrashed = null,
} = {}) {
  // On Call
  _validateEntry();

  // # INTERNAL

  // _isTrashed is the internal state that can change over time.
  // isTrashed is the constructor parameter used to initialize that state.
  let _isTrashed = isTrashed;
  let _dateTrashed = dateTrashed;

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

  // For JSON stringifying.
  const getSerializedQuote = () => {
    return {
      id,
      quote,
      author,
      source,
      dateAdded,
      dateTrashed: _dateTrashed, // dateTrashed is my new object prop that holds the final mutated state of private _dateTrashed
      isTrashed: _isTrashed,
    };
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
    getSerializedQuote,
    setQuote,
    setAuthor,
    setSource,
    trashQuote,
    unTrashQuote,
  };
}
