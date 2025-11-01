import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import SuggestionChip from "./SuggestionChip.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("SuggestionChip", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(SuggestionChip, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
