import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import Switch from "./Switch.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("Switch", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Switch, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
