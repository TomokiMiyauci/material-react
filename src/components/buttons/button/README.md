# Button

Buttons prompt most actions in a UI.

## Example

```tsx
import { Button } from "@miyauci/material-react";

<Button>Label</Button>;
```

### With icon

```tsx
import { Button } from "@miyauci/material-react";

<Button icon={<span className="my-icon" />}>
  Label
</Button>;
```

## Props

| Name       | Type                                                  | Default  |
| ---------- | ----------------------------------------------------- | :------: |
| `size`     | `xsmall`, `small`, `medium`, `large`, `xlarge`        | `small`  |
| `shape`    | `round`, `square`                                     | `round`  |
| `color`    | `filled`, `elevated`, `tonal`, `outlined`, `standard` | `filled` |
| `state`    | `disabled`                                            |    -     |
| `icon`     | `ReactNode`                                           |          |
| `children` | `ReactNode`                                           |          |

And `HTMLButtonElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-ref-typeface-brand
- --md-ref-typeface-plain
- --md-ref-typeface-weight-medium
- --md-ref-typeface-weight-regular
- --md-sys-color-on-primary
- --md-sys-color-on-secondary-container
- --md-sys-color-on-surface
- --md-sys-color-on-surface-variant
- --md-sys-color-outline-variant
- --md-sys-color-primary
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-color-shadow
- --md-sys-color-surface-container-low
- --md-sys-elevation-level0
- --md-sys-elevation-level1
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
