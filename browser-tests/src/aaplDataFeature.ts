import { Selector } from "testcafe";

import { url } from "./settings";

fixture`AAPL chart`.page(url());

test("As a user I can see a graph", async (t) => {
  await t.expect(Selector("text").withExactText("AAPL").exists).ok();
});
