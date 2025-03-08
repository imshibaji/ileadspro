import { LucideIcon } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Link } from "@inertiajs/react";

export interface MenuItem {
    name: string;
    url: string;
    icon?: LucideIcon | null;
    is_active?: boolean;
    children?: MenuItem[];
}

export default function AppNavbar({ menus }: { menus: MenuItem[] }) {
    return (
        <Menubar className="border-0">
            {menus.map((menu, i) => (
                <MenubarMenu key={i}>
                    {!menu.children && (
                        <Link href={menu.url}>
                            <MenubarTrigger className="flex items-center">
                                {menu.icon && <menu.icon className="mr-2 h-4 w-4" />}
                                {menu.name}
                            </MenubarTrigger>
                        </Link>
                    )}
                    {menu.children && (
                        <>
                            <MenubarTrigger>
                                {menu.icon && <menu.icon className="mr-2 h-4 w-4" />}
                                {menu.name}
                            </MenubarTrigger>
                            <MenubarContent>
                                {menu.children.map((child, index) => (
                                    <Link key={index} href={child.url}>
                                        <MenubarItem className="flex items-center">
                                            {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                                            {child.name}
                                        </MenubarItem>
                                    </Link>
                                ))}
                            </MenubarContent>
                        </>
                    )}
                </MenubarMenu>
            ))}
        </Menubar>
    );
}
