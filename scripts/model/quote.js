/**
 * Factory Function
 * Create, mutate and and rebuild a quote model.
 */
export default function Quote({
  id = crypto.randomUUID(),
  quote,
  author,
  source,
  dateAdded = new Date().toISOString(),
  dateTrashed = null,
  isTrashed = false,
} = {}) {
  // Read /documenation/model/quote.md
  const getState = () => {
    return {
      id,
      quote,
      author,
      source,
      dateAdded,
      dateTrashed,
      isTrashed,
    };
  };

  const trash = () => {
    isTrashed = true;
    dateTrashed = new Date().toISOString();
  };

  const untrash = () => {
    isTrashed = false;
    dateTrashed = null;
  };

  // Read /documenation/model/quote.md
  const edit = ({ newQuote, newAuthor, newSource } = {}) => {
    if (newQuote !== undefined) quote = newQuote;
    if (newAuthor !== undefined) author = newAuthor;
    if (newSource !== undefined) source = newSource;
  };

  return {
    getState,
    trash,
    untrash,
    edit,
  };
}
