import React from "react";

type TypographyProps = {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote";
  className?: string;
};
const Typography = ({ children, variant, className }: TypographyProps) => {
  const Element = variant as keyof JSX.IntrinsicElements;

  const defaultStyles: Record<string, string> = {
    h1: "scroll-m-20 font-extrabold tracking-tight text-3xl  md:text-4xl lg:text-5xl",
    h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight",
    h6: "scroll-m-20 text-lg font-semibold tracking-tight text-md",
    p: "leading-7 text-lg  [&:not(:first-child)]:mb-2",
    blockquote: "mt-6 border-l-2 pl-6 italic",
  };

  const defaultClassNames = defaultStyles[variant];

  const combinedStyles = className
    ? `${defaultClassNames} ${className}`
    : defaultClassNames;

  return React.createElement(Element, { className: combinedStyles }, children);
};

export default Typography;
