import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import Divider from "./Divider.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("Divider", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Divider, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
