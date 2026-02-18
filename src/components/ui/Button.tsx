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
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-95 overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#7a0000] hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] md:font-semibold",
        outline: "border border-white/10 text-white hover:bg-white/5 hover:border-white/20"
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);

    const sheenEffect = (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-sheen pointer-events-none" />
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedClassName}
                >
                    {sheenEffect}
                    <span className="relative z-10 flex items-center gap-2">{children}</span>
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {sheenEffect}
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {sheenEffect}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
}
