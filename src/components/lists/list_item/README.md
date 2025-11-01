# ListItem

List Item are continuous, vertical indexes of text and images.

## Example

```tsx
import { ListItem } from "@miyauci/material-react";

<ListItem headline="Headline" supportingText="Text" />;
```

## Props

| Name             | Type                                         |
| ---------------- | -------------------------------------------- |
| `leading`        | `ReactNode`                                  |
| `headline`       | `ReactNode`                                  |
| `supportingText` | `ReactNode`                                  |
| `trailing`       | `ReactNode`                                  |
| `size`           | `"one-line"`, `"two-lines"`, `"three-lines"` |
| `selected`       | `boolean`                                    |
| `state`          | `"disabled"`                                 |
| `divider`        | `boolean`                                    |

And `HTMLDivElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-on-secondary-container
- --md-sys-color-on-surface
- --md-sys-color-on-surface-variant
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-color-surface
- --md-sys-shape-corner-none
- --md-sys-state-focus-indicator-inner-offset
- --md-sys-state-focus-indicator-thickness
- --md-sys-state-focus-state-layer-opacity
- --md-sys-state-hover-state-layer-opacity
- --md-sys-state-pressed-state-layer-opacity
- --md-sys-typescale-body-large-font
- --md-sys-typescale-body-large-line-height
- --md-sys-typescale-body-large-size
- --md-sys-typescale-body-large-tracking
- --md-sys-typescale-body-large-weight
- --md-sys-typescale-body-medium-font
- --md-sys-typescale-body-medium-line-height
- --md-sys-typescale-body-medium-size
- --md-sys-typescale-body-medium-tracking
- --md-sys-typescale-body-medium-weight
<!-- deno-fmt-ignore-end -->
