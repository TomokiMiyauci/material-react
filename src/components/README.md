# Component

## Usage

Components are imported either as the default entry or from
`@miyauci/material-react/<component-name>`.

```tsx
import { Badge } from "@miyauci/material-react";

const node = <Badge>;
```

Additionally, each component relies on [tokens](/docs/token.md).

Please prepare your own token for your project, referencing the
[Material Theme](/examples/material_design/style.css).

## Lists of Component

- [Badge](./badge/README.md)
- [IconButton](./icon_button/README.md)
- [NavigationBar](./navigation_bars/navigation_bar/README.md)
- [NavigationBarItem](./navigation_bars/navigation_bar_item/README.md)

## Style

Each component contains pre-built styles.

Each component renders minimized CSS as inline style tags without runtime. Like
`<style>{css}</style>`.

Styles are optimized by the duplicate removal process introduced in React 19,
ensuring that only one set of styles is rendered even if the same component is
rendered multiple times.

For details, see
[Special rendering behavior](https://react.dev/reference/react-dom/components/style#special-rendering-behavior).
