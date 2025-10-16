import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import NavigationBar from "./NavigationBar.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("NavigationBar", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(NavigationBar, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
