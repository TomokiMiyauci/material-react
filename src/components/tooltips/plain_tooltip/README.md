# PlainTooltip

Plain tooltips briefly describe a UI element. They're often used for labelling
UI elements with no text, like icon-only buttons and fields.

## Example

```tsx
import { PlainTooltip } from "@miyauci/material-react";

<PlainTooltip text="Supporting text" />;
```

## Props

`HTMLSpanElement` arrtibutes.

## Slots

| Name        | Description      |
| ----------- | ---------------- |
| `(default)` | Text for tooltip |

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-inverse-on-surface
- --md-sys-color-inverse-surface
- --md-sys-shape-corner-extra-small
- --md-sys-typescale-body-small-font
- --md-sys-typescale-body-small-line-height
- --md-sys-typescale-body-small-size
- --md-sys-typescale-body-small-tracking
- --md-sys-typescale-body-small-weight
<!-- deno-fmt-ignore-end -->
