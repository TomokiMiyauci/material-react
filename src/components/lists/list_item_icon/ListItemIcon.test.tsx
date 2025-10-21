import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import ListItemIcon from "./ListItemIcon.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("ListItemIcon", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(ListItemIcon, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
