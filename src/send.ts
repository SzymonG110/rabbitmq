import { spawn } from "child_process";

const evenProcess = spawn("bun", ["./src/worker.ts", "even"], {
  stdio: "inherit",
});
const oddProcess = spawn("bun", ["./src/worker.ts", "odd"], {
  stdio: "inherit",
});

evenProcess.on("exit", (code) => {
  console.log(`Even process exited with code ${code}`);
});

oddProcess.on("exit", (code) => {
  console.log(`Odd process exited with code ${code}`);
});
