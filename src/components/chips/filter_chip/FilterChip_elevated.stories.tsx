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
  title: "Example/FilterChip/Elevated",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    elevated: true,
    label: "Filter chip",
  },
} satisfies Meta<typeof FilterChip>;

export default meta;
