import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function AppTitle({href, title, className}: {href?: string, title?: string, className?: string}) {
    return (
        <Link className="flex items-center gap-2" href={href || '#'}>
            <h1 className={cn("font-bold text-accent-foreground", className)}>
                {title || 'App Logo'}
            </h1>
        </Link>
    )
}
