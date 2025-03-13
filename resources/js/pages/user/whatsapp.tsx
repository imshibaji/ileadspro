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
        title: 'WhatsApp',
        href: '/user/whatsapp',
    },
];

type CampaignType = { id: number; name: string; status: string; date: string; };

const columns: ColumnDef<CampaignType>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'date', header: 'Date' },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className='flex gap-2 w-0'>
                <ButtonLink className='px-4' href={`/admin/leads/${row.original.id}/edit`}>Edit</ButtonLink>
                <ButtonLink className='px-4' href={`/admin/leads/${row.original.id}/delete`}>Delete</ButtonLink>
            </div>
        ),
    },
];

export default function WhatsApp() {
    const data: CampaignType[] = [
        { id: 1, name: "1st Campaign", status: 'active', date: '21th Feb' },
        { id: 2, name: "2nd Campaign", status: 'active', date: '21th Feb' },
        { id: 3, name: "3rd Campaign", status: 'active', date: '21th Feb' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="WhatsApp Messaging" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <AppCard title="WhatsApp Campaigns">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Active Campaigns</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">50</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">WhatsApp SMS Campaigns</h4>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <AppCard title="WhatsApp Campaigns">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">WhatsApp Messaging</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">2000</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">WhatsApp SMS Sent</h4>
                            </div>
                        </AppCard>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <AppCard title="WhatsApp Balance">
                            <div className="flex flex-col items-center align-middle gap-2">
                                <h3 className="text-lg font-bold text-accent-foreground">Balance</h3>
                                <h1 className="text-6xl font-bold text-accent-foreground">2000</h1>
                                <h4 className="text-lg font-bold text-accent-foreground">WhatsApp SMS Balance</h4>
                            </div>
                        </AppCard>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <AppCard title="WhatsApp Campaigns" header={
                        <ButtonLink href='#' className='pr-3'>
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
