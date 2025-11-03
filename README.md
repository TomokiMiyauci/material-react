# material-react

[Material Design](https://m3.material.io/) implementation for React.

The current target is
[Material 3 Expressive](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-material-3-expressive).

[View Storybook](https://beta--68c81fa50dc88ae16247371c.chromatic.com)

## Install

Deno:

```bash
deno add jsr:@miyauci/material-react
```

Node.js

```bash
npx jsr add @miyauci/material-react
```

## Usage

Each component includes its own style (optimized, no runtime). This allows
immediate use in any environment (SSR, RSC, CSR, etc) without additional builds.

```tsx
import { Badge } from "@miyauci/material-react";

<Badge />;
```

See [Component](/src/components/README.md).

### Design Tokens

Each component relies on design tokens.

Due to [current JSR constraints](https://github.com/jsr-io/jsr/issues/293), CSS
is not provided. Therefore, please either use the design tokens component or add
CSS to your project by referencing [styles](./src/styles/style_light.css).

```tsx
import type { JSX } from "react";
import { DesignTokens } from "@miyauci/material-react";
declare function Page(): JSX.Element;

<DesignTokens />
<Page />;
```

<!-- ## Contributing -->

## License

[MIT](./LICENSE) © Tomoki Miyauchi
