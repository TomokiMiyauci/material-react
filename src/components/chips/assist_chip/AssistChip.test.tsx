import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import AssistChip from "./AssistChip.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("AssistChip", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(AssistChip, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
