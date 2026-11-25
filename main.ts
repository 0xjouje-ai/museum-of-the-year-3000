// Museum of the Year 3000 — make.fun bounty entry.
// Writes exactly one line: the museum label a museum in the year 3000
// places next to an ordinary object from today.
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "Parking meter. Each morning, citizens fed coins to this iron god so their cars would not be taken away. The god kept the coins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label + "\n", "utf8");
