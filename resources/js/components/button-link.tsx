import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ComponentProps } from "react";


type LinkProps = ComponentProps<typeof Link>;

export default function ButtonLink({ className = '', children, ...props }: LinkProps) {
    return (
        <Link className={
            cn(
                'flex gap-2 border border-gray-900 dark:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900 font-bold rounded-2xl p-1',
                className
            )
        } {...props}>
            {children}
        </Link>
    );
}

