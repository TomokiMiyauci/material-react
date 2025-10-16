import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import Radio from "./Radio.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("Radio", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Radio, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
