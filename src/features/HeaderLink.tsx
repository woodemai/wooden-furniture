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
            to={to} className={({ isActive }) => cn('p-3 underline-offset-4 hover:underline text-foreground/70 hover:text-accent transition-all duration-200 rounded-lg flex gap-2', isActive && 'bg-background/50 text-accent')}>
            {children}
        </NavLink>
    )
})

export default HeaderLink;