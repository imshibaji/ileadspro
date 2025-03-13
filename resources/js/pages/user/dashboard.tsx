import AppCard from '@/components/app-card';
import { DashboardChart } from '@/components/app-chart';
import { AppTable } from '@/components/app-table';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/user/dashboard',
    },
];

type TableData = { name: string; creadited: number; leads: number };

const data: TableData[] = [
    { name: 'January', creadited: 4000, leads: 2400 },
    { name: 'February', creadited: 3000, leads: 1398 },
    { name: 'March', creadited: 2000, leads: 9800 },
    { name: 'April', creadited: 2780, leads: 3908 },
    { name: 'May', creadited: 1890, leads: 4800 },
    { name: 'June', creadited: 2390, leads: 3800 },
    { name: 'July', creadited: 3490, leads: 4300 },
    { name: 'August', creadited: 3490, leads: 4300 },
    { name: 'September', creadited: 3490, leads: 4300 },
    { name: 'October', creadited: 3490, leads: 4300 },
    { name: 'November', creadited: 3490, leads: 4300 },
    { name: 'December', creadited: 3490, leads: 4300 },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Total Views" footer={
                            <div className='w-full text-center'>Total Views from last 30 days</div>
                        }>
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Views</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">5000000</h1>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Total Leads" footer={
                            <div className="w-full">
                                <h1 className='text-md font-bold text-accent-foreground text-center'>Leads Collections Trends</h1>
                                <h2 className='text-sm text-muted-foreground text-center'>Leads Captures from last 30 days</h2>
                            </div>
                        }>
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Leads Captures</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">500</h1>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Converted Clients"
                            footer={
                                <div className="w-full">
                                    <h1 className='text-md font-bold text-accent-foreground text-center'>Clients Converted Trends</h1>
                                    <h2 className='text-sm text-muted-foreground text-center'>Clients Captures from last 30 days</h2>
                                </div>
                            }
                        >
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Clients Converted</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">100</h1>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                        <AppCard title="Your Balance">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h4 className="text-lg font-bold text-accent-foreground">Balance Amount</h4>
                                <h1 className="text-6xl font-bold text-accent-foreground">1000</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">Amount in INR</h4>
                            </div>
                        </AppCard>
                    </div>
                </div>
                <div className="flex flex-row flex-1 gap-4">
                    <div className="w-2/3 border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] overflow-hidden rounded-xl border md:min-h-min">
                        <AppCard title="Marketing Trends">
                            <DashboardChart data={data} />
                            <div className="w-full">
                                <h1 className='text-md font-bold text-accent-foreground text-center'>Clients Converted Trends</h1>
                                <h2 className='text-sm text-muted-foreground text-center'>Clients Captures from last 30 days</h2>
                            </div>
                        </AppCard>
                    </div>
                    <div className="w-1/3 flex flex-col flex-1 gap-4">
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                            <AppCard title="Return Of Investment(ROI)">
                                <AppTable data={data} />
                            </AppCard>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
