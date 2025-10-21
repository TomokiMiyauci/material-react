import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import Fab from "./Fab.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("Fab", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Fab, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
