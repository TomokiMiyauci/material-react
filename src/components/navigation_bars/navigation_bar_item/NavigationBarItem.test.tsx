import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import NavigationBarItem from "./NavigationBarItem.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("NavigationBarItem", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(NavigationBarItem, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
