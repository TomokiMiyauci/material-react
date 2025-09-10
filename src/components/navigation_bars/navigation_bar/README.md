# Navigation Bar

Navigation bars let people switch between UI views on smaller devices.

## Example

```tsx
import { NavigationBar } from "@miyauci/rmd";

<NavigationBar variant="horizontal" />;
```

## Props

| Name      | Type                     | Default    |
| --------- | ------------------------ | ---------- |
| `variant` | `vertical`, `horizontal` | `vertical` |

And `HTMLDivElement` attributes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-surface-container
- --md-sys-shape-corner-none
<!-- deno-fmt-ignore-end -->
