// components/ui/Button.tsx
import React, { ReactNode, ButtonHTMLAttributes, act } from "react";
import clsx from "clsx"; // Para mesclar classes de forma segura

type ButtonVariant = "default" | "outline" | "destructive" | "dark" | "primary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border text-foreground hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  dark: "bg-black text-white hover:bg-accent !bg-black",
  primary: "bg-blue-600 text-white hover:bg-accent !bg-blue-600",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  href,
  ...props
}) => {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  return (
    <>  
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
         <button className={classes} {...props}>
          {children}
        </button>
      </a>
    ) : (
      <button className={classes} {...props}>
        {children}
      </button>
    )}
   
    </>
  );
};

export default Button;
