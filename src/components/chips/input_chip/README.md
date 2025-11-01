# InputChip

Input chips represent discrete pieces of information entered by a user, such as
Gmail contacts or filter options within a search field.

## Example

```tsx
import { InputChip } from "@miyauci/material-react";

<InputChip>
  Label
</InputChip>;
```

## Props

| Name       | Type         |
| ---------- | ------------ |
| `selected` | `boolean`    |
| `state`    | `"disabled"` |
| `leading`  | `ReactNode`  |
| `trailing` | `ReactNode`  |
| `children` | `ReactNode`  |

And `HTMLSpanElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-on-secondary-container
- --md-sys-color-on-surface
- --md-sys-color-on-surface-variant
- --md-sys-color-outline-variant
- --md-sys-color-primary
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-elevation-level0
- --md-sys-shape-corner-small
- --md-sys-state-focus-indicator-outer-offset
- --md-sys-state-focus-indicator-thickness
- --md-sys-state-focus-state-layer-opacity
- --md-sys-state-hover-state-layer-opacity
- --md-sys-state-pressed-state-layer-opacity
- --md-sys-typescale-label-large-font
- --md-sys-typescale-label-large-line-height
- --md-sys-typescale-label-large-size
- --md-sys-typescale-label-large-tracking
- --md-sys-typescale-label-large-weight
<!-- deno-fmt-ignore-end -->
