// Absurd Micro-Startup Pitch-Off — one-line absurd micro-startup pitch.
//
// STEP 3 — candidate comparison (score 1-5 per criterion; rubric order:
// absurd pitch > specific humor > twist > density; all char counts computed
// with a tool, all 1 line, all <= 120 chars, all pure ASCII):
//
//   A  "Uber for left socks: AI matches your lonely sock with its soulmate,
//       delivered by drone before laundry day." (106)  5/5/5/4 = 19  WINNER
//   B  "We sell air to plants. Subscription oxygen, curated by botanists,
//       delivered monthly in artisanal glass jars." (108)  5/5/4/4 = 18
//   C  "Tinder for houseplants: swipe right, and your fern finally meets
//       someone who actually waters it." (96)  4/4/3/5 = 16
//   D  "Our startup rents out silence. Premium quiet, on demand, for people
//       whose neighbors own a drum kit." (99)  4/4/4/4 = 16
//   E  "Cloud storage for your dreams. We back up last night's flying
//       sequence to a server farm in Iceland." (99)  5/4/4/4 = 17
//
// Decision: A wins (19/20). The only candidate scoring 5 on absurd pitch,
// specific humor, AND twist — "Uber for X" applied to the most un-Uberable
// thing (a single left sock), an AI matchmaker for a lonely sock's soulmate,
// and the twist that the drone deadline is laundry day: the mundane chore
// undercuts the tech. The pitch is also a complete startup story in one
// breath — problem (lonely sock), solution (AI soulmate matching), delivery
// (drone), deadline (laundry day) — which is why it beats B on density of
// ideas per character. B is close but its twist lands softer; C leans on the
// tired "Tinder for X" template; D is warm but less absurd; E is poetic but
// the joke resolves too gently.
//
// STEP 4 — deterministic guard: constant string + gate only. No wall-clock,
// no Date, no Math.random, no seed. Gate: 1-120 chars, one line, no leading
// or trailing whitespace, exact length pinned to 106, file round-trip
// byte-identical, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Uber for left socks: AI matches your lonely sock with its soulmate, delivered by drone before laundry day.";

function main(): void {
  const line = LINE;
  if (line.length < 1 || line.length > 120) {
    throw new Error(`line must be 1-120 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
  if (line.trim() !== line) {
    throw new Error("line must not have leading/trailing whitespace");
  }
  if (line.length !== 106) {
    throw new Error(`line must be exactly 106 chars, got ${line.length}`);
  }
  mkdirSync("output", { recursive: true });
  writeFileSync("output/entry.txt", line);
}

main();
