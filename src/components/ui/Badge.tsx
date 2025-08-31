// components/ui/Badge.tsx
import React, { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "destructive" | "accent" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-input text-foreground",
};

const Badge: React.FC<BadgeProps> = ({ variant = "primary", children }) => {
  const classes = `inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
    VARIANT_CLASSES[variant]
  }`;

  return <span className={classes}>{children}</span>;
};

export default Badge;
