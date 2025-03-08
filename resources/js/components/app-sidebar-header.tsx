import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import AppTitle from './app-title';
import AppNavbar, { MenuItem } from './app-navbar';

export function AppSidebarHeader({ breadcrumbs = [], menus= [] }: { breadcrumbs?: BreadcrumbItemType[], menus?: MenuItem[] }) {
    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2 w-full">
                <SidebarTrigger className="-ml-1" />
                <div className="flex items-center gap-2 w-full">
                    <AppTitle title="iLeadsPro" />
                    <div className="flex items-center justify-between w-full gap-2">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        <AppNavbar menus={menus} />
                    </div>
                </div>
            </div>
        </header>
    );
}
