// # IMPORTS

export function Quote({
  id = crypto.randomUUID(),
  quote,
  author,
  source,
  dateAdded = new Date().toLocaleDateString(),
}) {}
