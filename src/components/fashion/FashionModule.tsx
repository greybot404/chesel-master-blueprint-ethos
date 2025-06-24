
import React, { useState } from 'react';
import { Shirt, Camera, Palette, Star } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

const FashionModule = () => {
  const [activeCategory, setActiveCategory] = useState('style');

  const fashionMetrics = [
    { id: 'style', name: 'Style Score', score: 88, icon: Shirt },
    { id: 'color', name: 'Color Match', score: 92, icon: Palette },
    { id: 'fit', name: 'Fit Quality', score: 76, icon: Star },
  ];

  const outfitSuggestions = [
    {
      occasion: 'Business Meeting',
      items: ['Navy Blazer', 'White Shirt', 'Gray Trousers'],
      confidence: 95
    },
    {
      occasion: 'Casual Weekend',
      items: ['Denim Jacket', 'White T-Shirt', 'Dark Jeans'],
      confidence: 87
    },
    {
      occasion: 'Evening Dinner',
      items: ['Black Suit', 'Crisp Shirt', 'Leather Shoes'],
      confidence: 93
    },
  ];

  return (
    <div className="blueprint-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="blueprint-h1 mb-2">Fashion</h1>
        <p className="blueprint-body-sm text-gray-600">Elevate your personal style</p>
      </div>

      {/* Style Score */}
      <div className="blueprint-card-standard text-center mb-6">
        <h2 className="blueprint-h3 mb-4">Style Score</h2>
        <div className="flex justify-center mb-4">
          <ProgressMeter 
            value={85} 
            size={120} 
            color="#000000"
            showValue={true}
          />
        </div>
        <p className="blueprint-body-sm text-gray-600">Your style is on point!</p>
      </div>

      {/* Photo Upload */}
      <div className="blueprint-card-upload mb-6">
        <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h3 className="blueprint-h4 mb-2">Upload Outfit Photo</h3>
        <p className="blueprint-body-sm text-gray-600 mb-4">
          Get instant style feedback and recommendations
        </p>
        <button className="blueprint-btn-primary">
          Choose Photo
        </button>
      </div>

      {/* Fashion Metrics */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Style Analysis</h3>
        <div className="space-y-4">
          {fashionMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className="blueprint-flex-between">
                <div className="blueprint-flex-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="blueprint-body font-medium">{metric.name}</span>
                </div>
                <div className="blueprint-flex-center gap-3">
                  <ProgressMeter 
                    value={metric.score} 
                    size={40} 
                    color="#000000"
                    showValue={false}
                  />
                  <span className="blueprint-caption font-medium">{metric.score}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outfit Suggestions */}
      <div className="blueprint-card-standard">
        <h3 className="blueprint-h4 mb-4">Recommended Outfits</h3>
        <div className="space-y-4">
          {outfitSuggestions.map((outfit, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl">
              <div className="blueprint-flex-between mb-3">
                <h4 className="blueprint-body font-medium">{outfit.occasion}</h4>
                <span className="blueprint-caption bg-black text-white px-2 py-1 rounded">
                  {outfit.confidence}% match
                </span>
              </div>
              <div className="space-y-1">
                {outfit.items.map((item, idx) => (
                  <p key={idx} className="blueprint-body-sm text-gray-600">• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionModule;
