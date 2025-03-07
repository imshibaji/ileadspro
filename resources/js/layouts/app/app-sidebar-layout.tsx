import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { NavItem, type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [], title, mainNav, footerNav }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[], title?: string, mainNav?: NavItem[], footerNav?: NavItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar title={title} mainNav={mainNav} footerNav={footerNav} />
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
