import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type User } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutDashboard, LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();
    const currentRoute = window.location.pathname;
    const paths = currentRoute.split('/');

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('profile.edit')} as="button" prefetch onClick={cleanup}>
                        <Settings className="mr-2" />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {user.role === 'admin' && (
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link className="block w-full" href={ paths[1] === 'admin' ? route('user.dashboard') : route('admin.dashboard')} as="button" prefetch onClick={cleanup}>
                            <LayoutDashboard className="mr-2" />
                            Goto {paths[1] === 'admin' ? 'User' : 'Admin'}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuGroup>
            )}
            <DropdownMenuItem asChild>
                <Link className="block w-full" method="post" href={route('logout')} as="button" onClick={cleanup}>
                    <LogOut className="mr-2" />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
