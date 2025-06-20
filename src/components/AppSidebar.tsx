
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
    <Sidebar className="border-r-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SidebarHeader className="p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Avatar className="h-12 w-12 border-2 border-slate-600 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/25">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors duration-200">
              John Doe
            </h3>
            <p className="text-sm text-slate-400 truncate">
              Premium Member
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/10 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-blue-500/20 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
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

      <SidebarFooter className="p-4 border-t border-slate-700/50">
        <Button
          onClick={handleLogout}
          className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/20 group-hover:bg-red-400/30 transition-all duration-300">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Logout</span>
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
