
import React, { useState } from 'react';
import { User, HelpCircle, LogOut, Plus, Star, Home, Grid3X3 } from 'lucide-react';
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
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface ShortcutItem {
  id: string;
  title: string;
  icon: React.ElementType;
  path: string;
}

const defaultMenuItems = [
  {
    title: 'Categories',
    icon: Grid3X3,
    onClick: () => console.log('Categories clicked'),
  },
];

const bottomMenuItems = [
  {
    title: 'Help & Support',
    icon: HelpCircle,
    onClick: () => console.log('Help & Support clicked'),
  },
];

export function AppSidebar() {
  const [shortcuts, setShortcuts] = useState<ShortcutItem[]>([]);
  const [isAddingShortcut, setIsAddingShortcut] = useState(false);
  const [shortcutName, setShortcutName] = useState('');

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const addShortcut = () => {
    if (shortcutName.trim()) {
      const newShortcut: ShortcutItem = {
        id: Date.now().toString(),
        title: shortcutName,
        icon: Star,
        path: `/${shortcutName.toLowerCase().replace(/\s+/g, '-')}`
      };
      setShortcuts([...shortcuts, newShortcut]);
      setShortcutName('');
      setIsAddingShortcut(false);
    }
  };

  const removeShortcut = (id: string) => {
    setShortcuts(shortcuts.filter(s => s.id !== id));
  };

  return (
    <Sidebar className="border-r-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SidebarHeader className="p-6 border-b border-slate-700/50">
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

      <SidebarContent className="px-4 py-6">
        {/* Profile & My Space */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('Profile clicked')}
                  className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                      <User className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('My Space clicked')}
                  className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                      <Home className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium">My Space</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Default Menu Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {defaultMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Custom Shortcuts */}
        {shortcuts.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider px-2">
              My Shortcuts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <SidebarMenuItem key={shortcut.id}>
                    <SidebarMenuButton
                      onClick={() => console.log(`${shortcut.title} shortcut clicked`)}
                      className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white relative"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                          <shortcut.icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="font-medium">{shortcut.title}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeShortcut(shortcut.id);
                        }}
                        className="absolute right-3 top-3 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        ×
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Add Shortcut Button */}
        <SidebarGroup>
          <SidebarGroupContent>
            <Dialog open={isAddingShortcut} onOpenChange={setIsAddingShortcut}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 bg-slate-800/30 hover:bg-slate-700/50 border border-dashed border-slate-600 hover:border-slate-500 text-slate-400 hover:text-white transition-all duration-300 rounded-xl"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Shortcut
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-800 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-white">Add Custom Shortcut</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Shortcut name (e.g., Personal Stylist)"
                    value={shortcutName}
                    onChange={(e) => setShortcutName(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={addShortcut}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      Add
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingShortcut(false)}
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Menu Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {bottomMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group text-slate-200 hover:text-white"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium">{item.title}</span>
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
