import type Lenis from "lenis";

let instance: Lenis | null = null;

export const lenisStore = {
  set(l: Lenis) {
    instance = l;
  },
  get(): Lenis | null {
    return instance;
  },
};
