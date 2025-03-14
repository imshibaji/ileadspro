import { MenuItem } from "@/components/app-navbar";
import { NavItem } from "@/types";
import { LayoutGrid, Megaphone, PhoneCall , BinocularsIcon, CalendarCheckIcon, ActivityIcon, Mails, SmartphoneNfc, Users2Icon, UserCircle, User2, LayoutDashboard } from "lucide-react";

export const appName: string = "iLeadsPro Admin";

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/admin/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Campaigns',
        url: '/user/campaigns',
        icon: Megaphone
    },
    {
        title: 'Leads',
        url: '/admin/leads',
        icon: BinocularsIcon
    },
    {
        title: 'Dialer',
        url: '/admin/dialer',
        icon: PhoneCall
    },
    {
        title: 'Emails',
        url: '/admin/emails',
        icon: Mails
    },
    {
        title: 'SMS',
        url: '/admin/sms',
        icon: SmartphoneNfc
    },
    {
        title: 'Clients',
        url: '/admin/clients',
        icon: CalendarCheckIcon
    },
    {
        title: 'Users',
        url: '/admin/users',
        icon: Users2Icon
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
        url: '/admin/activity',
        icon: ActivityIcon
    }
];
