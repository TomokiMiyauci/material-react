/// <reference lib="dom" />

"use client";
import { createPortal } from "react-dom";
import {
  type JSX,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { TemplateProps } from "./types.ts";

export interface ShadowRootProps extends TemplateProps {
  children?: ReactNode;
}

export default function ShadowRoot(
  props: ShadowRootProps & JSX.IntrinsicElements["template"],
): JSX.Element {
  const {
    children,
    shadowrootmode,
    shadowrootclonable,
    shadowrootdelegatesfocus,
    shadowrootserializable,
    ...rest
  } = props;
  const ref = useRef<HTMLTemplateElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useLayoutEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    if (parent.shadowRoot) {
      parent.shadowRoot.replaceChildren();
    }

    const shadowRoot = parent.shadowRoot ?? parent.attachShadow({
      mode: shadowrootmode,
      clonable: shadowrootdelegatesfocus,
      delegatesFocus: shadowrootdelegatesfocus,
      serializable: shadowrootserializable,
    });

    setShadowRoot(shadowRoot);

    return () => setShadowRoot(null);
  }, [
    shadowrootmode,
    shadowrootclonable,
    shadowrootdelegatesfocus,
    shadowrootserializable,
  ]);

  if (shadowRoot) return createPortal(children, shadowRoot);

  return <template ref={ref} {...rest} />;
}
