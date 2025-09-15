# material-react

[Material Design](https://m3.material.io/) implementation for React.

The current target is
[Material 3 Expressive](https://m3.material.io/blog/building-with-m3-expressive#what-rsquo-s-material-3-expressive).

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

Components are imported either as the default entry or from
`@miyauci/material-react/<component-name>`.

```tsx
import { Badge } from "@miyauci/material-react";

const node = <Badge>;
```

Additionally, each component relies on [tokens](./docs/token.md).

Please prepare your own token for your project, referencing the
[Material Theme](./examples/material_design/style.css).

<!-- ## Contributing -->

## License

[MIT](./LICENSE) © Tomoki Miyauchi
