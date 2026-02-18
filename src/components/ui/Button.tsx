import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // I'll check if lib/utils exists or create it for clsx/tailwind-merge

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'outline';
    className?: string;
    children: React.ReactNode;
    external?: boolean;
}

export function Button({
    href,
    variant = 'primary',
    className,
    children,
    external,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-[#0a0a0a] text-white hover:bg-zinc-900 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
        outline: "border border-white/10 text-white hover:bg-white/5 hover:border-white/20"
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedClassName}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
