import { MenuItem } from "@/components/app-navbar";
import { NavItem } from "@/types";
import { LayoutGrid, Megaphone, PhoneCall , BinocularsIcon, CalendarCheckIcon, ActivityIcon, Mails, SmartphoneNfc, UserCircle, User2, LayoutDashboard } from "lucide-react";

export const appName: string = "iLeadsPro User";

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

export const topNavItems: MenuItem[] = [
    {
        name: "Users",
        url: "/users",
        icon: UserCircle,
        is_active: true,
        children: [
            {
                name: "Profile",
                url: "/settings/profile",
                icon: User2,
            },
            {
                name: "Dashboard",
                url: "/user/dashboard",
                icon: LayoutDashboard,
            }
        ]
    }
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Activity',
        url: '/user/activity',
        icon: ActivityIcon
    }
];
