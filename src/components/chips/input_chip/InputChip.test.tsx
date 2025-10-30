import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import InputChip from "./InputChip.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("InputChip", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(InputChip, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
