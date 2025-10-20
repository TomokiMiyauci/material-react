import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import ListItemText from "./ListItemText.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("ListItemText", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(ListItemText, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
