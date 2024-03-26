import { cn } from "@/shared/lib/utils";
import { ReactNode, memo } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    to: string,
    children: ReactNode
}

const HeaderLink = memo(({ to, children }: Props) => {

    return (
        <NavLink 
            to={to} className={({ isActive }) => cn('px-2 py-3 m-2 underline-offset-4 hover:underline text-foreground/70 hover:text-accent transition-all duration-200 rounded-lg', isActive && 'bg-background/80 text-accent')}>
            {children}
        </NavLink>
    )
})

export default HeaderLink;