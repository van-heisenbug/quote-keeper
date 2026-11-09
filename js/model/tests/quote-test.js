import { Quote } from "../quote.js";

const t = Quote({
  quote: "this is a test quote",
  author: "test author",
  source: "test source",
});

console.log(t.getId());
console.log(t.getStatus());
console.log(t.getAuthor());

console.log(t.getDateTrashed());
console.log(t.getQuote());
console.log(t.getSource());

console.log(new Date(t.getDateAdded()).toLocaleDateString()); // IOString to localeDateString

t.trashQuote(); // Flipping status
t.setQuote("mutating closured quote!");

console.log(t.getStatus());
console.log(t.getDateTrashed());
console.log(t.getQuote());
