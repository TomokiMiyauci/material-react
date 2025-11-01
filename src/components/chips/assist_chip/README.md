# AssistChip

Assist chips represent smart or automated actions that can span multiple apps,
such as opening a calendar event from the home screen.

## Example

```tsx
import { AssistChip } from "@miyauci/material-react";

<AssistChip>
  Label
</AssistChip>;
```

### With Icon

```tsx
import { AssistChip } from "@miyauci/material-react";

<AssistChip icon={<span className="my-icon" />}>
  Label
</AssistChip>;
```

## Props

| Name       | Type         |
| ---------- | ------------ |
| `elevated` | `boolean`    |
| `state`    | `"disabled"` |
| `icon`     | `ReactNode`  |
| `children` | `ReactNode`  |

And `HTMLSpanElement` arrtibutes.

## Tokens

Depends on the following CSS variables.

<!-- deno-fmt-ignore-start -->
- --md-sys-color-on-surface
- --md-sys-color-outline-variant
- --md-sys-color-primary
- --md-sys-color-secondary
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
