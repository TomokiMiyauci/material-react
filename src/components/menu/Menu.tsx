import type { DetailedHTMLProps, JSX, MenuHTMLAttributes } from "react";
import style from "./_generated/style.ts";
import Style from "@internal/Style.tsx";

export interface MenuProps
  extends DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement> {
}

export default function Menu(props: MenuProps): JSX.Element {
  const { ...rest } = props;
  return (
    <>
      <menu data-md="menu" {...rest} />
      <Style href="menu">{style}</Style>
    </>
  );
}
