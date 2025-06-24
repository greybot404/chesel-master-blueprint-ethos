
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
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-gray-200">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-gray-100 text-gray-600">
              <img src="/images/icons/profile-user.svg" alt="Profile" className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="flat-h4 truncate">
              John Doe
            </h3>
            <p className="flat-caption truncate">
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
                  className="w-full h-12 px-4 flat-card-solid hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <img src="/images/icons/profile-user.svg" alt="Profile" className="h-5 w-5" />
                    </div>
                    <span className="flat-body font-medium">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('My Space clicked')}
                  className="w-full h-12 px-4 flat-card-solid hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <img src="/images/icons/my-space.svg" alt="My Space" className="h-5 w-5" />
                    </div>
                    <span className="flat-body font-medium">My Space</span>
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
                    className="w-full h-12 px-4 flat-card-solid hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <item.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="flat-body font-medium">{item.title}</span>
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
            <SidebarGroupLabel className="flat-caption uppercase tracking-wider px-3 mb-3 font-semibold">
              My Shortcuts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <SidebarMenuItem key={shortcut.id}>
                    <SidebarMenuButton
                      onClick={() => console.log(`${shortcut.title} shortcut clicked`)}
                      className="w-full h-12 px-4 flat-card-solid hover:bg-gray-50 transition-all duration-200 group relative"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <img src={shortcut.icon} alt={shortcut.title} className="h-5 w-5" />
                        </div>
                        <span className="flat-body font-medium">{shortcut.title}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeShortcut(shortcut.id);
                        }}
                        className="absolute right-4 top-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all text-lg font-bold"
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
                  className="w-full h-12 flat-upload-card text-gray-600 hover:text-black transition-all duration-200 font-medium"
                >
                  <Plus className="h-5 w-5 mr-3" />
                  Add Shortcut
                </Button>
              </DialogTrigger>
              <DialogContent className="flat-card-solid border-gray-200">
                <DialogHeader>
                  <DialogTitle className="flat-h3">Add Custom Shortcut</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <Input
                    placeholder="Shortcut name (e.g., Personal Stylist)"
                    value={shortcutName}
                    onChange={(e) => setShortcutName(e.target.value)}
                    className="flat-input"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={addShortcut}
                      className="flex-1 flat-btn-primary"
                    >
                      Add Shortcut
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingShortcut(false)}
                      className="flex-1 flat-btn-secondary"
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
                    className="w-full h-12 px-4 flat-card-solid hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <item.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="flat-body font-medium">{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <Button
          onClick={handleLogout}
          className="w-full h-12 flat-card-solid hover:bg-red-50 text-gray-700 hover:text-red-600 border border-red-200 hover:border-red-300 transition-all duration-200 group font-medium"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="flat-body font-medium">Logout</span>
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
