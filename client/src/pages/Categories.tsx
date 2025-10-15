import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Categories() {
  const categories = [
    { id: 1, name: 'Pain Relief', icon: 'Heart', count: 45, color: 'primary' },
    { id: 2, name: 'Antibiotics', icon: 'Shield', count: 32, color: 'secondary' },
    { id: 3, name: 'Vitamins', icon: 'Sun', count: 28, color: 'accent' },
    { id: 4, name: 'Diabetes Care', icon: 'Activity', count: 24, color: 'primary' },
    { id: 5, name: 'Heart Care', icon: 'Heart', count: 18, color: 'secondary' },
    { id: 6, name: 'Skin Care', icon: 'Paintbrush', count: 15, color: 'accent' },
    { id: 7, name: 'Respiratory', icon: 'Wind', count: 22, color: 'primary' },
    { id: 8, name: 'Digestive Health', icon: 'Zap', count: 19, color: 'secondary' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto p-4 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Categories</h1>
          <GlassIcons.Filter variant="primary" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const IconComponent = GlassIcons[category.icon as keyof typeof GlassIcons] || GlassIcons.Package;
            
            return (
              <Card 
                key={category.id} 
                className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <CardContent className="p-4 text-center">
                  <div className="mb-3">
                    <IconComponent 
                      variant={category.color as any} 
                      size="lg" 
                      className="mx-auto" 
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {category.count} items
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card className="mt-6 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GlassIcons.Star variant="accent" />
              Popular This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Paracetamol', 'Vitamin D3', 'Amoxicillin'].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                  <span className="font-medium">{item}</span>
                  <GlassIcons.TrendingUp variant="secondary" size="sm" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
}