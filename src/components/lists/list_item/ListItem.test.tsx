import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import ListItem from "./ListItem.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("ListItem", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(ListItem, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
