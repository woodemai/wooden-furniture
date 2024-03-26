import { cn } from "@/shared/lib/utils";

const PageTemplate = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div {...props} className={cn("mx-auto w-full max-w-5xl my-8", props.className)}>
            {props.children}
        </div>
    )
}

export default PageTemplate;