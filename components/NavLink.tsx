import React, { AnchorHTMLAttributes, ReactNode, RefAttributes, memo, MouseEvent, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> , LinkProps , RefAttributes<HTMLAnchorElement> {
    exact?: boolean;
    children: ReactNode;
    isActive?: boolean;
}

function NavLink({ href, exact, children, isActive, className, ...props }:NavLinkProps) {
    const pathname = usePathname()
    const isMyActive = exact ? pathname === href : (typeof href === 'string' && pathname.startsWith(href));

    const handleClick = useCallback((e:MouseEvent<HTMLAnchorElement>) => {
        // Functionality for smooth scrolling
        if (
            ((href as string).startsWith('#') || (href as string).startsWith('/#')) &&
            typeof href === 'string' &&
            pathname === (href as string).split('#')[0]
        ) {
            e.preventDefault();
            const destination = document.querySelector((href as string).replace('/',''));
            if (destination) {
                destination.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        } else return;
    },[href]);

    return (
        <Link {...props} href={href} className={(isMyActive || isActive) ? `${className} active` : className} passHref onClick={handleClick}>
            {children}
        </Link>
    );
}

export default memo(NavLink);