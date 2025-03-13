import AppCard from '@/components/app-card';
import { DataTable } from '@/components/app-datatable';
import ButtonLink from '@/components/button-link';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { PlusCircleIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/user/dashboard',
    },
    {
        title: 'Campaigns',
        href: '/user/campaigns',
    },
];

type CampaignType = { id: number; name: string; status: string; date: string; };

const columns: ColumnDef<CampaignType>[] = [
    {accessorKey: 'id', header: 'ID'},
    {accessorKey: 'name', header: 'Name', },
    {accessorKey: 'status', header: 'Status'},
    {accessorKey: 'date', header: 'Date'},
    {
        accessorKey: 'actions',
        header:'Actions',
        cell: ({row}) => (
            <div className='flex gap-2 w-0'>
                <ButtonLink className='px-4' href={`/admin/campaigns/${row.original.id}/edit`}>Edit</ButtonLink>
                <ButtonLink className='px-4' href={`/admin/campaigns/${row.original.id}/delete`}>Delete</ButtonLink>
            </div>
        ),
    },
];

interface CampaignProps {
    budgets?: number;
    views?: number;
    clicks?: number;
    leads?: number;
    campaigns?: CampaignType[];
}

export default function Campaigns({budgets, views, clicks, leads, campaigns}:CampaignProps) {
    const data: CampaignType[] = campaigns || [];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Google Campaigns" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Campaigns Budgets">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Balance Amounts</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">₹{budgets || 0}/-</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">Amount in INR</h4>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Total Impressions">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Ads Views</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">{views || 0}</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">Ads Displayeds</h4>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Total Clicks">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Ads Clicks</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">{clicks || 0}</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">User clicks on Ads</h4>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-auto overflow-hidden rounded-xl border">
                        <AppCard title="Coverts Leads">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Generate Leads</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">{leads || 0}</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">Genuene Leads</h4>
                            </div>
                        </AppCard>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-visible rounded-xl border md:min-h-min">
                    <AppCard title="Campaigns" header={
                        <ButtonLink href='/user/campaigns/create' className='pr-3'>
                            <PlusCircleIcon />Create Campaign
                        </ButtonLink>
                    }>
                        <DataTable columns={columns} data={data} />
                    </AppCard>
                </div>
            </div>
        </AppLayout>
    );
}
