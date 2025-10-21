import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import ExtendedFab from "./ExtendedFab.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("ExtendedFab", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(ExtendedFab, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
