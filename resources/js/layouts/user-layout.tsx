import { Toaster } from '@/components/ui/sonner';
import { appName, footerNavItems, mainNavItems, topNavItems } from '@/configs/UserNavLinks';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { toast } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function UserLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const {error} = usePage().props;
    if (error) {
        toast.error(error as string);
    }
    return (
        <AppLayoutTemplate title={appName} topNav={topNavItems} mainNav={mainNavItems} footerNav={footerNavItems} breadcrumbs={breadcrumbs} {...props}>
            {children}
            <Toaster position='bottom-center' toastOptions={{ duration: 5000  }} />
        </AppLayoutTemplate>
    )
};
