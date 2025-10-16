"use client";
import { useSyncExternalStore } from "react";

export type RenderMode = "ssr" | "hydrate" | "csr";

export function useRenderMode(): RenderMode {
  return useSyncExternalStore(noop, getSnapshot, getServerSnapshot);
}

function noop(): () => void {
  return () => {};
}

function getSnapshot(): "csr" {
  return "csr";
}

function getServerSnapshot(): "hydrate" | "ssr" {
  return "window" in globalThis ? "hydrate" : "ssr";
}
