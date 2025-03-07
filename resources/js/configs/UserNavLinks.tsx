import { NavItem } from "@/types";
import { LayoutGrid, Megaphone, PhoneCall , BinocularsIcon, CalendarCheckIcon, ActivityIcon, Mails, SmartphoneNfc } from "lucide-react";

export const appName: string = "IleadsPro";

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/user/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Campaigns',
        url: '/user/campaigns',
        icon: Megaphone
    },
    {
        title: 'Leads',
        url: '/user/leads',
        icon: BinocularsIcon
    },
    {
        title: 'Dialer',
        url: '/user/dialer',
        icon: PhoneCall
    },
    {
        title: 'Emails',
        url: '/user/emails',
        icon: Mails
    },
    {
        title: 'SMS',
        url: '/user/sms',
        icon: SmartphoneNfc
    },
    {
        title: 'Clients',
        url: '/user/clients',
        icon: CalendarCheckIcon
    },
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Activity',
        url: '/user/activity',
        icon: ActivityIcon
    }
];
