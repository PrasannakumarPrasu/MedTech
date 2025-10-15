import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Upload() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto p-4 mt-6">
        <Card className="glass-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <GlassIcons.Upload variant="primary" size="xl" glow />
            </div>
            <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">Upload Prescription</CardTitle>
            <CardDescription className="dark:text-gray-300">
              Upload your prescription to get medicine recommendations
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center bg-blue-50/50">
              <GlassIcons.Camera variant="primary" size="lg" className="mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Click to take a photo or drag and drop your prescription</p>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                Choose File
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                <GlassIcons.FileText variant="secondary" className="mx-auto mb-2" />
                <p className="text-sm text-gray-600">PDF/Image</p>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                <GlassIcons.Shield variant="accent" className="mx-auto mb-2" />
                <p className="text-sm text-gray-600">Secure Upload</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              size="lg"
            >
              Upload & Analyze
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
}