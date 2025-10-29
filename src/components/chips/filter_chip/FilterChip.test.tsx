import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import FilterChip from "./FilterChip.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("FilterChip", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(FilterChip, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
