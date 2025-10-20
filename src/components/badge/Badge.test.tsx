import { renderToStaticMarkup } from "react-dom/server";
import Badge from "./Badge.tsx";
import { describe, it } from "@std/testing/bdd";
import { assertSnapshot } from "@std/testing/snapshot";
import { getFirstNode } from "@testing";

describe("Badge", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Badge, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
