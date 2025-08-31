// src/components/ui/card.jsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`rounded-lg border p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={`${className}`}>{children}</div>;
}
