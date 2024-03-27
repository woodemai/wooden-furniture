import { cn } from "@/shared/lib/utils";

const PageTemplate = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <main {...props} className={cn("mx-auto w-full max-w-5xl py-8 flex flex-col gap-8 flex-grow", props.className)}>
            {props.children}
        </main>
    )
}

export default PageTemplate;