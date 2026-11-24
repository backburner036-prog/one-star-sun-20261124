// One-Star Review of Something Essential — make.fun entry
// Line (96 bytes): deadpan one-star review of the sun — the sharpest true
// grievance (no snooze button), sting in the last few words, no winking.
// Criteria order: one-star review of an essential, sharpest grievance,
// deadpan, turn at the end, tight and specific.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. The sun rises every day without asking, and it has never once offered a snooze button.";

// Gate: entry must be 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
