import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

export default function Settings() {
  const { theme, actualTheme } = useTheme();

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: 'User', label: 'Profile Settings', description: 'Manage your personal information' },
        { icon: 'Bell', label: 'Notifications', description: 'Control notification preferences' },
        { icon: 'Shield', label: 'Privacy & Security', description: 'Manage your privacy settings' },
      ]
    },
    {
      title: 'App Preferences',
      items: [
        { icon: 'Palette', label: 'Theme', description: `Currently using ${theme} mode` },
        { icon: 'Globe', label: 'Language', description: 'English (US)' },
        { icon: 'MapPin', label: 'Location', description: 'Delivery address settings' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: 'HelpCircle', label: 'Help Center', description: 'Get help and support' },
        { icon: 'MessageCircle', label: 'Contact Us', description: 'Reach out to our team' },
        { icon: 'Star', label: 'Rate App', description: 'Share your feedback' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto p-4 mt-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">Customize your app experience</p>
        </div>

        {/* Theme Status Card */}
        <Card className="mb-6 glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <GlassIcons.Sun 
                    variant="accent" 
                    size="lg" 
                    className={`transition-all duration-500 ${actualTheme === 'light' ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}
                  />
                  <GlassIcons.Moon 
                    variant="primary" 
                    size="lg" 
                    className={`absolute inset-0 transition-all duration-500 ${actualTheme === 'dark' ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">Current Theme</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                    {actualTheme} mode {theme === 'system' && '(Auto)'}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="capitalize">
                {theme}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="mb-6 glass-card">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-100">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const IconComponent = GlassIcons[item.icon as keyof typeof GlassIcons];
                
                return (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 p-3 bg-white/60 dark:bg-black/20 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/80 dark:hover:bg-black/30 transition-colors"
                  >
                    <IconComponent variant="primary" size="md" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 dark:text-gray-100">{item.label}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    <GlassIcons.ChevronRight variant="neutral" size="sm" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}

        {/* Quick Actions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Quick Actions</CardTitle>
            <CardDescription className="dark:text-gray-300">
              Frequently used features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 glass-button h-auto py-4 flex-col"
              >
                <GlassIcons.Download variant="secondary" size="md" />
                <span className="text-sm">Export Data</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 glass-button h-auto py-4 flex-col"
              >
                <GlassIcons.Trash variant="accent" size="md" />
                <span className="text-sm">Clear Cache</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
}