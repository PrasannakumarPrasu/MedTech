import React, { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { GlassIcons } from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const recentSearches = ['Paracetamol', 'Vitamin D3', 'Blood pressure medicine', 'Diabetes tablets'];
  const popularSearches = ['Antibiotics', 'Pain relief', 'Cold medicine', 'Skin care', 'Heart medication'];
  
  const searchResults = [
    { id: 1, name: 'Paracetamol 500mg', price: '₹45', manufacturer: 'Generic Labs', inStock: true },
    { id: 2, name: 'Paracetamol 650mg', price: '₹52', manufacturer: 'PharmaCorp', inStock: true },
    { id: 3, name: 'Paracetamol Syrup', price: '₹38', manufacturer: 'MediGen', inStock: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto p-4 mt-6">
        {/* Search Bar */}
        <Card className="mb-6 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
          <CardContent className="p-4">
            <div className="relative">
              <GlassIcons.Search 
                variant="primary" 
                size="sm" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
              <Input
                placeholder="Search medicines, brands, or conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 bg-white/80 backdrop-blur-sm border-white/30"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
                  onClick={() => setSearchQuery('')}
                >
                  <GlassIcons.X size="sm" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Search Results or Suggestions */}
        {searchQuery ? (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GlassIcons.List variant="primary" size="sm" />
              Search Results
            </h2>
            
            <div className="space-y-3">
              {searchResults.map((result) => (
                <Card key={result.id} className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{result.name}</h3>
                        <p className="text-sm text-gray-600">{result.manufacturer}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-green-600">{result.price}</span>
                          <Badge variant={result.inStock ? "default" : "destructive"}>
                            {result.inStock ? 'In Stock' : 'Out of Stock'}
                          </Badge>
                        </div>
                      </div>
                      <GlassIcons.ChevronRight variant="neutral" size="sm" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Recent Searches */}
            <Card className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlassIcons.Clock variant="primary" size="sm" />
                  Recent Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/60 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/80 transition-colors"
                    >
                      <span className="text-gray-700">{search}</span>
                      <div className="flex gap-2">
                        <GlassIcons.ArrowUp variant="neutral" size="sm" className="rotate-45" />
                        <GlassIcons.X variant="neutral" size="sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Searches */}
            <Card className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlassIcons.TrendingUp variant="secondary" size="sm" />
                  Popular Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200 transition-colors px-3 py-1"
                    >
                      {search}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="backdrop-blur-lg bg-white/80 border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlassIcons.Zap variant="accent" size="sm" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex items-center gap-2 bg-white/60 backdrop-blur-sm">
                    <GlassIcons.Camera variant="primary" size="sm" />
                    Scan Prescription
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-white/60 backdrop-blur-sm">
                    <GlassIcons.Mic variant="secondary" size="sm" />
                    Voice Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}