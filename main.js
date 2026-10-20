//
const QuoteDB = (() => {
  const quoteRecord = [];

  const readQuote = () => {};

  const addQuoute = (newQuote) => {};

  const editQuote = (newQuote) => {};

  const saveQuoteRecord = () => {};

  const deleteQuote = () => {};

  const randomizer = (record) => {
    if (!Array.isArray(record)) {
      throw new TypeError(`${record}: is not valid array.`);
    }

    if (record.length === 0) {
      throw new Error(`${record}: There is no record to randomize.`);
    }

    return Math.floor(Math.random() * record.length);
  };

  return {
    readQuote,
    editQuote,
    saveQuoteRecord,
    deleteQuote,
    randomizer,
  };
})();

const t = ["asf", "asfasa", "tw2"];

console.log(QuoteDB.randomizer(t));
