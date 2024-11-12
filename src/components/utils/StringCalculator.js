export function add(numbers) {
  if (numbers === "") return 0;

  const delimiters = [",", "\n"];
  let customDelimiter = null;

  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    customDelimiter = numbers.substring(2, endIndex);
    numbers = numbers.substring(endIndex + 1);

    if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
      customDelimiter = customDelimiter.slice(1, -1).split("][");
    } else {
      customDelimiter = [customDelimiter];
    }
    delimiters.push(...customDelimiter);
  }

  const numArray = numbers.match(/-?\d+/g)?.map(Number) || [];

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length)
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);

  return numArray.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}
