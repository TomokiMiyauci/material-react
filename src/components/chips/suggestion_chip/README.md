# SuggestionChip

Suggestion chips help narrow a user’s intent by presenting dynamically generated
suggestions, such as suggested responses or search filters.

## Example

```tsx
import { SuggestionChip } from "@miyauci/material-react";

<SuggestionChip>
  Label
</SuggestionChip>;
```

### With Icon

```tsx
import { SuggestionChip } from "@miyauci/material-react";

<SuggestionChip icon={<span className="my-icon" />}>
  Label
</SuggestionChip>;
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
- --md-sys-color-on-surface-variant
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
