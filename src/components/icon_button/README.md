# IconButton

Icon buttons help people take minor actions with one tap.

## Example

```tsx
import { IconButton } from "@miyauci/material-react";

<IconButton icon={<span>Your icon</span>}>
```

## Props

| Name    | Type                                      |  Default  |
| ------- | ----------------------------------------- | :-------: |
| `size`  | `xs`, `sm`, `md`, `lg`, `xl`              |   `sm`    |
| `shape` | `round`, `square`                         |  `round`  |
| `color` | `filled`, `tonal`, `outlined`, `standard` | `filled`  |
| `width` | `default`, `narrow`, `wide`               | `default` |
| `icon`  | `ReactNode`                               |     -     |

And `HTMLButtonElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-on-primary
- --md-sys-color-on-secondary-container
- --md-sys-color-on-surface
- --md-sys-color-on-surface-variant
- --md-sys-color-outline-variant
- --md-sys-color-primary
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-shape-corner-extra-large
- --md-sys-shape-corner-full
- --md-sys-shape-corner-large
- --md-sys-shape-corner-medium
- --md-sys-state-focus-indicator-outer-offset
- --md-sys-state-focus-indicator-thickness
- --md-sys-state-focus-state-layer-opacity
- --md-sys-state-hover-state-layer-opacity
- --md-sys-state-pressed-state-layer-opacity
<!-- deno-fmt-ignore-end -->
