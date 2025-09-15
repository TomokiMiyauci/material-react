# Navigation Bar Item

## Example

```tsx
import { NavigationBarItem } from "@miyauci/material-react";

<NavigationBarItem label="Icon" active icon={<span className="my-icon" />} />;
```

## Props

| Name     | Type        |
| -------- | ----------- |
| `label`  | `ReactNode` |
| `active` | `boolean`   |
| `icon`   | `ReactNode` |

And `HTMLDivElement` attributes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-ref-typeface-plain
- --md-ref-typeface-weight-medium
- --md-sys-color-on-secondary-container
- --md-sys-color-on-surface-variant
- --md-sys-color-secondary
- --md-sys-color-secondary-container
- --md-sys-shape-corner-full
- --md-sys-state-hover-state-layer-opacity
<!-- deno-fmt-ignore-end -->
