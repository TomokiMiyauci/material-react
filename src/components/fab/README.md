# Fab

Floating action buttons (FABs) help people take primary actions.

## Example

```tsx
import { Fab } from "@miyauci/material-react";

<Fab>
  <span>Icon</span>
</Fab>;
```

## Props

| Name       | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `size`     | `"baseline"`, `"medium"`, `"large"`                                                                              |
| `color`    | `"primary"`, `"primary-container"`, `"secondary"`, `"secondary-container"`, `"tertiary"`, `"tertiary-container"` |
| `children` | `ReactNode`                                                                                                      |

And `HTMLButtonElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
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
<!-- deno-fmt-ignore-end -->
