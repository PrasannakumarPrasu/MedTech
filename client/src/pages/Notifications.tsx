import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #12345 has been delivered successfully.',
      time: '2 minutes ago',
      icon: 'CheckCircle',
      variant: 'secondary',
      unread: true
    },
    {
      id: 2,
      type: 'prescription',
      title: 'Prescription Approved',
      message: 'Your uploaded prescription has been verified by our pharmacist.',
      time: '1 hour ago',
      icon: 'Shield',
      variant: 'primary',
      unread: true
    },
    {
      id: 3,
      type: 'offer',
      title: 'Special Offer',
      message: '20% off on all generic medicines. Valid till tomorrow!',
      time: '3 hours ago',
      icon: 'Gift',
      variant: 'accent',
      unread: false
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Medicine Reminder',
      message: 'Time to take your evening medication.',
      time: '1 day ago',
      icon: 'Bell',
      variant: 'primary',
      unread: false
    },
    {
      id: 5,
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #12344 is on the way. Track your order.',
      time: '2 days ago',
      icon: 'Truck',
      variant: 'secondary',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto p-4 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <Button variant="ghost" size="sm" className="text-blue-600">
            Mark all read
          </Button>
        </div>
        
        <div className="space-y-3">
          {notifications.map((notification) => {
            const IconComponent = GlassIcons[notification.icon as keyof typeof GlassIcons] || GlassIcons.Bell;
            
            return (
              <Card 
                key={notification.id}
                className={`backdrop-blur-lg border-white/20 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  notification.unread 
                    ? 'bg-white/90 border-l-4 border-l-blue-500' 
                    : 'bg-white/70'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <IconComponent 
                      variant={notification.variant as any}
                      size="md"
                      className="mt-1"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 truncate">
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                        
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-white/60 backdrop-blur-sm"
                        >
                          {notification.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quick Actions */}
        <Card className="mt-6 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GlassIcons.Settings variant="primary" size="sm" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <GlassIcons.Package variant="secondary" size="sm" />
                  <span className="text-sm">Order Updates</span>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <GlassIcons.Gift variant="accent" size="sm" />
                  <span className="text-sm">Promotional Offers</span>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <GlassIcons.Bell variant="primary" size="sm" />
                  <span className="text-sm">Medicine Reminders</span>
                </div>
                <div className="w-10 h-6 bg-blue-500 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
}