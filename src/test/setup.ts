import "@testing-library/jest-dom/vitest";
import {
  createElement,
  type AnchorHTMLAttributes,
  type ImgHTMLAttributes,
} from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (
    props: ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean;
      priority?: boolean;
    },
  ) => {
    const { fill: _fill, priority: _priority, ...imageProps } = props;
    void _fill;
    void _priority;
    return createElement("img", { ...imageProps, alt: props.alt ?? "" });
  },
}));
vi.mock("next/link", () => ({
  default: (props: AnchorHTMLAttributes<HTMLAnchorElement>) =>
    createElement("a", props),
}));
