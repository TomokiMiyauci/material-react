# FilterChip

Filter chips use tags or descriptive words to filter content. They can be a good
alternative to toggle buttons or checkboxes.

## Example

```tsx
import { FilterChip } from "@miyauci/material-react";

<FilterChip label="Assist chip" />;
```

## Props

| Name           | Type        |
| -------------- | ----------- |
| `selected`     | `boolean`   |
| `elevated`     | `boolean`   |
| `disabled`     | `boolean`   |
| `label`        | `ReactNode` |
| `leadingIcon`  | `ReactNode` |
| `trailingIcon` | `ReactNode` |

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
- --md-sys-color-shadow
- --md-sys-color-surface-container-low
- --md-sys-elevation-level0
- --md-sys-elevation-level1
- --md-sys-elevation-level2
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
