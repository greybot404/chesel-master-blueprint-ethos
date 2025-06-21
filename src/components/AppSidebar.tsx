
import React, { useState } from 'react';
import { HelpCircle, LogOut, Plus, Grid3X3 } from 'lucide-react';
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
  icon: string;
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
        icon: '/images/icons/shortcut-star.svg',
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
    <Sidebar className="border-r-0 bg-chesel-dark">
      <SidebarHeader className="p-6 border-b border-chesel-gray/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-chesel-green">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-chesel-gray text-chesel-light">
              <img src="/images/icons/profile-user.svg" alt="Profile" className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-chesel-light truncate">
              John Doe
            </h3>
            <p className="text-sm text-gray-400 truncate">
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
                  className="w-full h-12 px-4 rounded-xl bg-chesel-gray/50 hover:bg-chesel-green/20 border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group text-chesel-light hover:text-chesel-green"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
                      <img src="/images/icons/profile-user.svg" alt="Profile" className="h-5 w-5 text-gray-300 group-hover:text-chesel-green transition-colors duration-300" />
                    </div>
                    <span className="font-medium">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('My Space clicked')}
                  className="w-full h-12 px-4 rounded-xl bg-chesel-gray/50 hover:bg-chesel-green/20 border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group text-chesel-light hover:text-chesel-green"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
                      <img src="/images/icons/my-space.svg" alt="My Space" className="h-5 w-5 text-gray-300 group-hover:text-chesel-green transition-colors duration-300" />
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
                    className="w-full h-12 px-4 rounded-xl bg-chesel-gray/50 hover:bg-chesel-green/20 border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group text-chesel-light hover:text-chesel-green"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-gray-300 group-hover:text-chesel-green transition-colors duration-300" />
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
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider px-2">
              My Shortcuts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <SidebarMenuItem key={shortcut.id}>
                    <SidebarMenuButton
                      onClick={() => console.log(`${shortcut.title} shortcut clicked`)}
                      className="w-full h-12 px-4 rounded-xl bg-chesel-gray/50 hover:bg-chesel-green/20 border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group text-chesel-light hover:text-chesel-green relative"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
                          <img src={shortcut.icon} alt={shortcut.title} className="h-5 w-5 text-gray-300 group-hover:text-chesel-green transition-colors duration-300" />
                        </div>
                        <span className="font-medium">{shortcut.title}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeShortcut(shortcut.id);
                        }}
                        className="absolute right-3 top-3 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
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
                  className="w-full h-12 bg-chesel-gray/30 hover:bg-chesel-green/20 border border-dashed border-chesel-green/50 hover:border-chesel-green text-gray-400 hover:text-chesel-green transition-all duration-300 rounded-xl"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Shortcut
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-chesel-dark border-chesel-gray">
                <DialogHeader>
                  <DialogTitle className="text-chesel-light">Add Custom Shortcut</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Shortcut name (e.g., Personal Stylist)"
                    value={shortcutName}
                    onChange={(e) => setShortcutName(e.target.value)}
                    className="bg-chesel-gray border-chesel-gray text-chesel-light"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={addShortcut}
                      className="flex-1 bg-chesel-green hover:bg-chesel-green/80 text-chesel-light"
                    >
                      Add
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingShortcut(false)}
                      className="flex-1 border-chesel-gray text-gray-300 hover:bg-chesel-gray"
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
                    className="w-full h-12 px-4 rounded-xl bg-chesel-gray/50 hover:bg-chesel-green/20 border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group text-chesel-light hover:text-chesel-green"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
                        <item.icon className="h-5 w-5 text-gray-300 group-hover:text-chesel-green transition-colors duration-300" />
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

      <SidebarFooter className="p-4 border-t border-chesel-gray/30">
        <Button
          onClick={handleLogout}
          className="w-full h-12 bg-chesel-gray hover:bg-chesel-green/20 text-chesel-light hover:text-chesel-green rounded-xl border border-chesel-gray/50 hover:border-chesel-green/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chesel-gray/50 group-hover:bg-chesel-green/20 transition-all duration-300">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Logout</span>
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
