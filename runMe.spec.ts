import axios from "axios";
import { readdirSync, existsSync } from "fs";

describe("run me", () => {
  let jsFile: string;

  beforeEach(async () => {
    try {
      await axios.get("http://localhost:3000");
    } catch (e) {
      throw new Error("Please start the server in production mode, port 3000");
    }

    const jsDir = __dirname + "/.next/static/chunks/pages/details/[id]";
    if (!existsSync(jsDir)) {
      throw new Error("Please compile the next app beforehand!");
    }
    jsFile = readdirSync(jsDir).pop();
  })

  it("should be able to access url encoded chunks", async () => {
    await axios.get(`http://localhost:3000/_next/static/chunks/pages/details/%5Bid%5D/${jsFile}`)
  })

  it("should be able to access non url encoded chunks", async () => {
    await axios.get(`http://localhost:3000/_next/static/chunks/pages/details/[id]/${jsFile}`)
  })
})
