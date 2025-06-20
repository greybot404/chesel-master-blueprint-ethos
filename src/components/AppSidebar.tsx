
import React from 'react';
import { User, Grid3X3, Wallet, HelpCircle, LogOut, Bell, MessageSquare, Heart, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Categories',
    icon: Grid3X3,
    onClick: () => console.log('Categories clicked'),
  },
  {
    title: 'Notifications',
    icon: Bell,
    onClick: () => console.log('Notifications clicked'),
  },
  {
    title: 'Messages',
    icon: MessageSquare,
    onClick: () => console.log('Messages clicked'),
  },
  {
    title: 'Favorites',
    icon: Heart,
    onClick: () => console.log('Favorites clicked'),
  },
  {
    title: 'Wallet',
    icon: Wallet,
    onClick: () => console.log('Wallet clicked'),
  },
  {
    title: 'Settings',
    icon: Settings,
    onClick: () => console.log('Settings clicked'),
  },
  {
    title: 'Help & Support',
    icon: HelpCircle,
    onClick: () => console.log('Help & Support clicked'),
  },
];

export function AppSidebar() {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <Sidebar className="border-r-0 bg-slate-900">
      <SidebarHeader className="p-6 border-b border-slate-700/50 bg-slate-900">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-slate-600">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-slate-700 text-white">
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate">
              John Doe
            </h3>
            <p className="text-sm text-slate-400 truncate">
              Premium Member
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6 bg-slate-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium">
                        {item.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-700/50 bg-slate-900">
        <Button
          onClick={handleLogout}
          className="w-full h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Logout</span>
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
