import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useParallax } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("eyebrow block", className)}>{children}</span>;
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[92rem] px-6 md:px-12", className)}>{children}</div>;
}

type ActionProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "light";
  className?: string;
  disabled?: boolean;
};

const actionBase =
  "inline-flex items-center justify-center gap-3 rounded-[2px] px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] transition-all duration-500 disabled:opacity-60";

const actionVariants = {
  solid: "bg-terracotta text-sand hover:bg-ink",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-sand",
  light: "border border-sand/50 text-sand hover:bg-sand hover:text-ink",
};

export function Action({ children, to, href, type = "button", variant = "solid", className, disabled }: ActionProps) {
  const classes = cn(actionBase, actionVariants[variant], className);
  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button type={type} className={classes} disabled={disabled}>{children}</button>;
}

export function TextLink({ children, to, className }: { children: ReactNode; to: string; className?: string }) {
  return (
    <Link to={to} className={cn("link-underline inline-block py-2 text-[0.7rem] uppercase tracking-[0.24em] text-terracotta", className)}>
      {children}
    </Link>
  );
}

export function ParallaxImage({ src, alt, className, imgClassName, strength = 0.1, width, height, eager }: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
  width?: number;
  height?: number;
  eager?: boolean;
}) {
  const { ref, offset } = useParallax(strength);
  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-sand-deep", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
