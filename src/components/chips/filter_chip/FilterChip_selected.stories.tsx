import FilterChip from "./FilterChip.tsx";
import type { Meta } from "@storybook/react-vite";
export {
  Disabled,
  Enabled,
  Focused,
  Hovered,
  Pressed,
} from "./FilterChip.stories.tsx";

const meta = {
  title: "Example/FilterChip/Selected",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    selected: true,
    label: "Filter chip",
    leadingIcon: <span className="material-symbols-outlined">check</span>,
  },
} satisfies Meta<typeof FilterChip>;

export default meta;
