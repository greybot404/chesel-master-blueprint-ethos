
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
    <Sidebar className="border-r-0 glass-sidebar">
      <SidebarHeader className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-chesel-primary/50 glass-card">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="glass-card text-chesel-light">
              <img src="/images/icons/profile-user.svg" alt="Profile" className="h-6 w-6 filter brightness-0 invert" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-chesel-light truncate">
              John Doe
            </h3>
            <p className="text-sm text-blue-300/70 truncate">
              Premium Member
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Profile & My Space */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('Profile clicked')}
                  className="w-full h-14 px-4 glass-card hover:glass-card-strong rounded-2xl transition-all duration-300 group text-chesel-light hover:text-chesel-primary hover:glow-primary"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="p-3 rounded-xl glass-button-primary transition-all duration-300">
                      <img src="/images/icons/profile-user.svg" alt="Profile" className="h-5 w-5 filter brightness-0 invert" />
                    </div>
                    <span className="font-medium text-base">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => console.log('My Space clicked')}
                  className="w-full h-14 px-4 glass-card hover:glass-card-strong rounded-2xl transition-all duration-300 group text-chesel-light hover:text-chesel-primary hover:glow-primary"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="p-3 rounded-xl glass-button-primary transition-all duration-300">
                      <img src="/images/icons/my-space.svg" alt="My Space" className="h-5 w-5 filter brightness-0 invert" />
                    </div>
                    <span className="font-medium text-base">My Space</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Default Menu Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {defaultMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-14 px-4 glass-card hover:glass-card-strong rounded-2xl transition-all duration-300 group text-chesel-light hover:text-chesel-primary hover:glow-primary"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="p-3 rounded-xl glass-button-primary transition-all duration-300">
                        <item.icon className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-base">{item.title}</span>
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
            <SidebarGroupLabel className="text-blue-300/60 text-xs uppercase tracking-wider px-3 mb-3 font-semibold">
              My Shortcuts
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                {shortcuts.map((shortcut) => (
                  <SidebarMenuItem key={shortcut.id}>
                    <SidebarMenuButton
                      onClick={() => console.log(`${shortcut.title} shortcut clicked`)}
                      className="w-full h-14 px-4 glass-card hover:glass-card-strong rounded-2xl transition-all duration-300 group text-chesel-light hover:text-chesel-secondary hover:glow-secondary relative"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all duration-300">
                          <img src={shortcut.icon} alt={shortcut.title} className="h-5 w-5 filter brightness-0 invert" />
                        </div>
                        <span className="font-medium text-base">{shortcut.title}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeShortcut(shortcut.id);
                        }}
                        className="absolute right-4 top-4 text-red-400/60 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all text-lg font-bold"
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
                  className="w-full h-14 glass-button hover:glass-card border-2 border-dashed border-chesel-primary/40 hover:border-chesel-primary text-blue-300 hover:text-chesel-primary transition-all duration-300 rounded-2xl font-medium"
                >
                  <Plus className="h-5 w-5 mr-3" />
                  Add Shortcut
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card-strong border-white/20 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-chesel-light text-xl font-semibold">Add Custom Shortcut</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <Input
                    placeholder="Shortcut name (e.g., Personal Stylist)"
                    value={shortcutName}
                    onChange={(e) => setShortcutName(e.target.value)}
                    className="glass-input text-chesel-light placeholder:text-blue-300/50 h-12 rounded-xl text-base"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={addShortcut}
                      className="flex-1 h-12 bg-chesel-primary hover:bg-chesel-primary/80 text-white rounded-xl font-medium glow-primary"
                    >
                      Add Shortcut
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingShortcut(false)}
                      className="flex-1 h-12 glass-button text-blue-300 hover:text-white border-white/20 rounded-xl font-medium"
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
            <SidebarMenu className="space-y-3">
              {bottomMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    className="w-full h-14 px-4 glass-card hover:glass-card-strong rounded-2xl transition-all duration-300 group text-chesel-light hover:text-chesel-primary hover:glow-primary"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="p-3 rounded-xl glass-button-primary transition-all duration-300">
                        <item.icon className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-base">{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/10">
        <Button
          onClick={handleLogout}
          className="w-full h-14 glass-card hover:glass-card-strong text-chesel-light hover:text-red-400 rounded-2xl border border-red-400/20 hover:border-red-400/50 transition-all duration-300 group font-medium"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-500/20 group-hover:bg-red-500/30 transition-all duration-300">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="text-base">Logout</span>
          </div>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
