import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import ListItemAvatar from "./ListItemAvatar.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("ListItemAvatar", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(ListItemAvatar, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
