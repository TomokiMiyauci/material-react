import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import IconButton from "./IconButton.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("IconButton", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(IconButton, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
