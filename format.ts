const filename = "myanimelist.tsv";
const ratings = await Deno.readTextFile(filename);

const [header, ...records] = ratings
  .split("\n")
  .filter((line) => line !== "")
  .map((line) => line.split("\t").map((field) => field.trim()));

// Sort by name
records.sort((a, b) => a[1].toLowerCase() < b[1].toLowerCase() ? -1 : 1);

const tsv = [header, ...records].map((fields) => fields.join("\t")).join("\n");

await Deno.writeTextFile(filename, tsv);
