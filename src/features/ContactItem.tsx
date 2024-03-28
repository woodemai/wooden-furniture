import { ReactNode } from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label: ReactNode,
}
const ContactItem = (props: Props) => {

    return (
        <div className="flex gap-2 sm:flex-row flex-col">
            <div className="flex gap-2">
                {props.label}
            </div>
            <a className="text-accent text-lg" href={props.href} target="_blank" {...props}>{props.children}</a>
        </div>
    )
}

export default ContactItem;