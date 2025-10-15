import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function IconShowcase() {
  const iconGroups = [
    {
      title: 'Navigation & UI',
      icons: ['Home', 'Upload', 'Package', 'User', 'ShoppingCart', 'Search', 'Menu', 'Settings']
    },
    {
      title: 'Actions',
      icons: ['Plus', 'Minus', 'Check', 'X', 'Edit', 'Trash', 'Save', 'Download']
    },
    {
      title: 'Status & Feedback',
      icons: ['Heart', 'Star', 'Bell', 'AlertCircle', 'CheckCircle', 'XCircle', 'Info', 'HelpCircle']
    },
    {
      title: 'E-commerce & Business',
      icons: ['CreditCard', 'DollarSign', 'Tag', 'Gift', 'Truck', 'TrendingUp', 'BarChart', 'Activity']
    },
    {
      title: 'Media & Content',
      icons: ['Eye', 'Camera', 'Video', 'Image', 'File', 'FileText', 'Folder', 'Share']
    },
    {
      title: 'Communication',
      icons: ['Phone', 'Mail', 'MessageCircle', 'Calendar', 'Clock', 'Map', 'MapPin', 'Globe']
    }
  ];

  const variants = ['primary', 'secondary', 'accent', 'neutral'] as const;
  const sizes = ['sm', 'md', 'lg', 'xl'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20">
      <Header />
      
      <main className="max-w-4xl mx-auto p-4 mt-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Glass Icon Showcase</h1>
          <p className="text-gray-600">Beautiful glassmorphism icons for your application</p>
        </div>

        {/* Size Variations */}
        <Card className="mb-8 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle>Size Variations</CardTitle>
            <CardDescription>Different sizes available for glass icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              {sizes.map((size) => (
                <div key={size} className="text-center">
                  <GlassIcons.Heart variant="primary" size={size} glow />
                  <p className="text-sm mt-2 text-gray-600">{size}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Color Variants */}
        <Card className="mb-8 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle>Color Variants</CardTitle>
            <CardDescription>Different color themes for glass icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              {variants.map((variant) => (
                <div key={variant} className="text-center">
                  <GlassIcons.Star variant={variant} size="lg" glow />
                  <p className="text-sm mt-2 text-gray-600 capitalize">{variant}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Icon Groups */}
        {iconGroups.map((group, groupIndex) => (
          <Card key={groupIndex} className="mb-6 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>Glass icons for {group.title.toLowerCase()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {group.icons.map((iconName) => {
                  const IconComponent = GlassIcons[iconName as keyof typeof GlassIcons];
                  const variant = variants[groupIndex % variants.length];
                  
                  return (
                    <div key={iconName} className="text-center p-2">
                      <div className="mb-2">
                        <IconComponent 
                          variant={variant} 
                          size="md" 
                          glow={groupIndex === 0} 
                        />
                      </div>
                      <p className="text-xs text-gray-600 truncate">{iconName}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Interactive Demo */}
        <Card className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>Hover effects and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Home', 'Heart', 'Star', 'Gift', 'Shield', 'Zap', 'Sun', 'Moon'].map((iconName, index) => {
                const IconComponent = GlassIcons[iconName as keyof typeof GlassIcons];
                const variant = variants[index % variants.length];
                
                return (
                  <div 
                    key={iconName} 
                    className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <IconComponent 
                      variant={variant} 
                      size="lg" 
                      glow 
                    />
                    <p className="text-sm mt-2 text-gray-700 font-medium">{iconName}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
}