# Token

## Type Scale

Each of the 30 styles has a single token that captures all the default
properties. Tokens are separated into the **baseline** and **emphasized** sets.
Each axis and property, such as font, line height, size, tracking, and weight,
also has an individual token for greater customization.

| Name                        | Token                                          | Syntax                                                                                |
| --------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Display Large font name     | `--md-sys-typescale-display-large-font`        | `*`                                                                                   |
| Display Large font weight   | `--md-sys-typescale-display-large-weight`      | (`<integer>`)[https://developer.mozilla.org/docs/Web/CSS/integer]                     |
| Display Large font size     | `--md-sys-typescale-display-large-size`        | (`<length-percentage>`)[https://developer.mozilla.org/docs/Web/CSS/length-percentage] |
| Display Large font tracking | `--md-sys-typescale-display-large-tracking`    | (`<length>`)[https://developer.mozilla.org/docs/Web/CSS/length]                       |
| Display Large line height   | `--md-sys-typescale-display-large-line-height` | (`<length-percentage>`)[https://developer.mozilla.org/docs/Web/CSS/length-percentage] |

## Shape

Material has shape corner tokens to define all corners, and corner-value tokens
for individual corners.

Syntax:
(`<length-percentage>`)[https://developer.mozilla.org/docs/Web/CSS/length-percentage]

| Name                 | Token                               |
| -------------------- | ----------------------------------- |
| Fully rounded        | `--md-sys-shape-corner-full`        |
| Extra large rounding | `--md-sys-shape-corner-extra-large` |
| Large rounding       | `--md-sys-shape-corner-large`       |
| Medium rounding      | `--md-sys-shape-corner-medium`      |
| Small rounding       | `--md-sys-shape-corner-small`       |
| Extra small rounding | `--md-sys-shape-corner-extra-small` |
| No rounding          | `--md-sys-shape-corner-none`        |

## Color

## Example

- [Material Design3 Default Token](/examples/material_design/style.css)
