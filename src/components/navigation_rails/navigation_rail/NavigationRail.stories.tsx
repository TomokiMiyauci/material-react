import NavigationRail, {
  type NavigationRailExtendedLayout,
  type NavigationRailProps,
  type NavigationRailVariant,
} from "./NavigationRail.tsx";
import NavigationRailItem from "../navigation_rail_item/NavigationRailItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fab } from "@/components/fab/mod.ts";
import { IconButton } from "@/components/icon_button/mod.ts";
import { type AxisNode, renderGallary } from "~/resources/gallary/mod.ts";

const meta = {
  title: "Component/NavigationRail",
  component: NavigationRail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationRail>;

export default meta;

type Story = StoryObj<typeof meta>;

const homeIcon = <span className="material-symbols-outlined">home</span>;
const editIcon = <span className="material-symbols-outlined">edit</span>;
const children = (
  <>
    <NavigationRailItem
      icon={homeIcon}
      active
    >
      Home
    </NavigationRailItem>
    <NavigationRailItem
      icon={homeIcon}
    >
      Home
    </NavigationRailItem>
    <NavigationRailItem
      icon={homeIcon}
    >
      Home
    </NavigationRailItem>
  </>
);
const fab = (
  <Fab>
    {editIcon}
  </Fab>
);
const menu = (
  <IconButton
    color="standard"
    icon={<span className="material-symbols-outlined">menu_open</span>}
  >
  </IconButton>
);

export const Default = {
  args: {
    children,
  },
} satisfies Story;

export const WithMenu = {
  args: {
    menu: (
      <IconButton
        color="standard"
        icon={<span className="material-symbols-outlined">menu_open</span>}
      >
      </IconButton>
    ),
    children,
  },
} satisfies Story;

export const WithFab = {
  args: {
    fab,
    children,
  },
} satisfies Story;

export const WithMenuAndFab = {
  args: {
    fab,
    menu,
    children,
  },
} satisfies Story;

const xAxis = [] satisfies AxisNode[];

const layoutNodes = [
  { label: "Standard" },
  { label: "Modal" },
] satisfies AxisNode[];
const variantNodes = [
  { label: "Collapsed" },
  { label: "Expanded", children: layoutNodes },
] satisfies AxisNode[];
const yAxis = [
  { label: "Label", children: variantNodes },
  { label: "With Menu", children: variantNodes },
  { label: "With Fab", children: variantNodes },
  { label: "With Menu Fab", children: variantNodes },
] satisfies AxisNode[];

type Kind = "label" | "fab" | "menu" | "fab-menu";
const kinds = ["label", "fab", "menu", "fab-menu"] as const;
const variant = ["collapsed", "standard", "modal"] as const;
const rows = kinds.flatMap((kind) => {
  return variant.flatMap((variant) => {
    switch (variant) {
      case "collapsed":
        return {
          variant: "collapsed",
          kind,
        };

      default: {
        return {
          variant: "expanded",
          layout: variant,
          kind,
        };
      }
    }
  });
}) satisfies Item[];

const matrix = rows.map((data) => [data]);

interface Item {
  layout?: NavigationRailExtendedLayout;
  variant?: NavigationRailVariant;
  kind: Kind;
}

function getProps(item: Item): NavigationRailProps {
  const base = {
    children,
    layout: item.layout,
    variant: item.variant,
  } satisfies NavigationRailProps;

  switch (item.kind) {
    case "label":
      return { ...base };

    case "fab":
      return { ...base, fab };

    case "menu":
      return { ...base, menu };
    case "fab-menu":
      return { ...base, fab, menu };
  }

  return base;
}

export const Gallary = {
  render: () =>
    renderGallary({ matrix, xAxis, yAxis }, {
      renderData: (item) => {
        if (item) {
          const props = getProps(item);

          return <NavigationRail {...props} />;
        }

        return;
      },
    }),
  tags: ["!autodocs"],
  parameters: {
    pseudo: {
      hover: "[data-hover]",
      focusVisible: "[data-focus-visible]",
      active: "[data-press]",
    },
    chromatic: { disableSnapshot: false },
  },
} satisfies Story;
