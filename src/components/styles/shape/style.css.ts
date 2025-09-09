import { css } from "@/utils/css.ts";

interface Shape {
  none: string;
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  full: string;
}

export default css<Shape>`
  :root {
    --md-sys-shape-corner-none: var(${({ none }) => none});
    --md-sys-shape-corner-extra-small: var(${({ extraSmall }) => extraSmall});
    --md-sys-shape-corner-small: var(${({ small }) => small});
    --md-sys-shape-corner-medium: var(${({ medium }) => medium});
    --md-sys-shape-corner-large: var(${({ large }) => large});
    --md-sys-shape-corner-extra-large: var(${({ extraLarge }) => extraLarge});
    --md-sys-shape-corner-full: var(${({ full }) => full});
  }
`;
