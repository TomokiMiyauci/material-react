# ExtendedFab

Extended FABs help people take primary actions. They're wider than FABs to
accommodate a text label and larger target area.

## Example

```tsx
import { ExtendedFab } from "@miyauci/material-react";

<ExtendedFab>
  Label
</ExtendedFab>;
```

### With Icon

```tsx
import { ExtendedFab } from "@miyauci/material-react";

<ExtendedFab icon={<span className="my-icon" />}>
  Label
</ExtendedFab>;
```

## Props

| Name       | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `size`     | `"small"`, `"medium"`, `"large"`                                                                                 |
| `color`    | `"primary"`, `"primary-container"`, `"secondary"`, `"secondary-container"`, `"tertiary"`, `"tertiary-container"` |
| `icon`     | `ReactNode`                                                                                                      |
| `children` | `ReactNode`                                                                                                      |

And `HTMLButtonElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-ref-typeface-brand
- --md-ref-typeface-plain
- --md-ref-typeface-weight-medium
- --md-ref-typeface-weight-regular
- --md-sys-color-on-primary
- --md-sys-color-on-primary-container
- --md-sys-color-on-secondary
- --md-sys-color-on-secondary-container
- --md-sys-color-on-tertiary
- --md-sys-color-on-tertiary-container
- --md-sys-color-primary
- --md-sys-color-primary-container
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-color-shadow
- --md-sys-color-tertiary
- --md-sys-color-tertiary-container
- --md-sys-elevation-level3
- --md-sys-elevation-level4
- --md-sys-shape-corner-extra-large
- --md-sys-shape-corner-large
- --md-sys-shape-corner-large-increased
- --md-sys-state-focus-state-layer-opacity
- --md-sys-state-hover-state-layer-opacity
- --md-sys-state-pressed-state-layer-opacity
- --md-sys-typescale-label-large-font
- --md-sys-typescale-label-large-line-height
- --md-sys-typescale-label-large-size
- --md-sys-typescale-label-large-tracking
- --md-sys-typescale-label-large-weight
<!-- deno-fmt-ignore-end -->
