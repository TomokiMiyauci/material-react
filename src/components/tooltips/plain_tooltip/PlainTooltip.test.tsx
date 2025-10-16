import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import PlainTooltip from "./PlainTooltip.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("PlainTooltip", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(PlainTooltip, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
