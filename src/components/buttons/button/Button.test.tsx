import { describe, it } from "@std/testing/bdd";
import { getFirstNode } from "@testing";
import { assertSnapshot } from "@std/testing/snapshot";
import Button from "./Button.tsx";
import { renderToStaticMarkup } from "react-dom/server";

describe("Button", () => {
  describe("snapshot", () => {
    it("default", async (t) => {
      const node = getFirstNode(Button, {});

      await assertSnapshot(t, renderToStaticMarkup(node));
    });
  });
});
