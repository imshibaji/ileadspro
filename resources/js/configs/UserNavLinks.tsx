import { MenuItem } from "@/components/app-navbar";
import { NavItem } from "@/types";
import { LayoutGrid, Megaphone, PhoneCall , BinocularsIcon, ActivityIcon, Mails, SmartphoneNfc, UserCircle, User2, MessageCircle, LucideBriefcaseBusiness, UsersIcon, Package, HelpCircle, ShieldEllipsisIcon, TentTree } from "lucide-react";

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
        title: 'Emails',
        url: '/user/emails',
        icon: Mails
    },
    {
        title: 'Dialer',
        url: '/user/dialer',
        icon: PhoneCall
    },
    {
        title: 'SMS',
        url: '/user/sms',
        icon: SmartphoneNfc
    },
    {
        title: 'WhatsApp',
        url: '/user/whatsapp',
        icon: MessageCircle
    },
];

export const topNavItems: MenuItem[] = [
    {
        name: "Support",
        href: "tel:+918981009499",
        icon: HelpCircle
    },
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
                name: "Password",
                url: "/settings/password",
                icon: ShieldEllipsisIcon,
            },
            {
                name: "Appearance",
                url: "/settings/appearance",
                icon: TentTree,
            }
        ]
    }
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Activity',
        url: '/user/activity',
        icon: ActivityIcon
    },
    {
        title: 'Purchase',
        url: '/user/purchase',
        icon: Package
    },
    {
        title: 'Users',
        url: '/user/users',
        icon: UsersIcon
    },
    {
        title: 'Business',
        url: '/user/business',
        icon: LucideBriefcaseBusiness
    },
];
