import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    to: string,
    children: ReactNode
}

const FooterLink = ({ to, children }: Props) => {

    return (
        <NavLink
            to={to} className='p-1 text-center underline-offset-4 hover:underline text-foreground/70 hover:text-accent transition-all duration-200 rounded-lg'>
            {children}
        </NavLink>
    )
}

export default FooterLink;