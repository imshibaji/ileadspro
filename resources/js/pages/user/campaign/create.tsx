import AppCard from "@/components/app-card";
import AppLayout from "@/layouts/user-layout";
import { Head } from "@inertiajs/react";
// import RealTimeFormBuilder from './form-builder4';
import RealTimeFormBuilder from "./form-builder";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/user/dashboard',
    },
    {
        title: 'Create Campaign Form',
        href: '/user/create',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Campaign" />
            <AppCard title="Form Builder">
                <RealTimeFormBuilder />
            </AppCard>
        </AppLayout>
    );
}
