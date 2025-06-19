import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { ScanFace, Upload, Camera } from 'lucide-react';

interface BodyModuleProps {
  userGender: 'male' | 'female';
}

const BodyModule: React.FC<BodyModuleProps> = ({ userGender }) => {
  const [activeTab, setActiveTab] = useState('face');
  const [faceImage, setFaceImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const tabs = [
    { id: 'face', label: 'Face' },
    { id: 'skin', label: 'Skin' },
    { id: 'hair', label: 'Hair' },
    ...(userGender === 'male' ? [{ id: 'beard', label: 'Beard' }] : []),
  ];

  const getScoreLabel = () => {
    switch (activeTab) {
      case 'face': return 'Face Score';
      case 'skin': return 'Skin Score';
      case 'hair': return 'Hair Score';
      case 'beard': return 'Beard Score';
      default: return 'Score';
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFaceImage(e.target?.result as string);
        handleFacialScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFacialScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  const CircularScoreMeter = ({ score }: { score: number }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;
    
    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-700"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{score}</div>
            <div className="text-xs text-slate-400">Score</div>
          </div>
        </div>
      </div>
    );
  };

  const renderFaceContent = () => {
    if (!faceImage) {
      return (
        <div className="relative">
          {/* Background graphics */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg"></div>
          
          <Card className="relative p-8 bg-slate-800/60 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20">
                <ScanFace className="w-10 h-10 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Facial Analysis Scanner</h3>
                <p className="text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
                  Upload a clear, front-facing photo for comprehensive facial analysis. 
                  Our AI will evaluate facial symmetry, proportions, and aesthetic features.
                </p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Upload className="w-5 h-5 mr-3" />
                    Upload Face Photo
                  </Button>
                </label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-slate-600/50 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm py-3">
                      <Camera className="w-5 h-5 mr-3" />
                      Take Photo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-800 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-white">Camera Access</DialogTitle>
                    </DialogHeader>
                    <div className="text-slate-300 text-center py-8">
                      <Camera className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                      <p>Camera functionality would be implemented here</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    if (isScanning) {
      return (
        <div className="relative">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-ping"></div>
          
          <Card className="relative p-8 bg-slate-800/60 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse border border-blue-400/30">
                <ScanFace className="w-12 h-12 text-blue-400 animate-spin" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Analyzing Your Face...</h3>
                <p className="text-slate-300 mb-6">
                  Processing facial features, symmetry, and aesthetic measurements
                </p>
              </div>
              <div className="max-w-md mx-auto space-y-3">
                <Progress value={60} className="h-3 bg-slate-700" />
                <p className="text-sm text-slate-400">Analyzing facial structure...</p>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          {/* Image background graphics */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur"></div>
          <Card className="relative p-6 bg-slate-800/70 backdrop-blur-sm border-slate-700/50">
            <img src={faceImage} alt="Uploaded face" className="w-full h-64 object-cover rounded-lg mb-4 border border-slate-600/30" />
            <Button 
              onClick={() => {
                setFaceImage(null);
                setScanComplete(false);
              }}
              variant="outline" 
              className="w-full border-slate-600/50 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm"
            >
              Upload New Photo
            </Button>
          </Card>
        </div>
        
        <div className="space-y-4">
          {/* Score display with circular meter */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur"></div>
            <Card className="relative p-6 bg-slate-800/70 backdrop-blur-sm border-slate-700/50 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Overall Face Score</h3>
              <CircularScoreMeter score={82} />
              <div className="mt-4">
                <div className="text-lg font-semibold text-blue-400">Above Average</div>
                <div className="text-sm text-slate-400">Top 25% facial aesthetics</div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-slate-800/70 backdrop-blur-sm border-slate-700/50">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Detailed Analysis
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Facial Symmetry</span>
                <div className="flex items-center space-x-2">
                  <Progress value={82} className="w-16 h-2 bg-slate-700" />
                  <span className="text-blue-400 text-sm font-medium">8.2</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Golden Ratio</span>
                <div className="flex items-center space-x-2">
                  <Progress value={78} className="w-16 h-2 bg-slate-700" />
                  <span className="text-blue-400 text-sm font-medium">7.8</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Jawline Definition</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-16 h-2 bg-slate-700" />
                  <span className="text-green-400 text-sm font-medium">8.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Canthal Tilt</span>
                <div className="flex items-center space-x-2">
                  <Progress value={79} className="w-16 h-2 bg-slate-700" />
                  <span className="text-blue-400 text-sm font-medium">7.9</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 text-sm">Cheekbone Prominence</span>
                <div className="flex items-center space-x-2">
                  <Progress value={87} className="w-16 h-2 bg-slate-700" />
                  <span className="text-green-400 text-sm font-medium">8.7</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-slate-800/70 backdrop-blur-sm border-slate-700/50">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Enhancement Protocol
            </h3>
            <div className="space-y-2">
              <div className="text-slate-300 text-sm flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Consider mewing exercises for enhanced jawline definition
              </div>
              <div className="text-slate-300 text-sm flex items-start">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Maintain current skincare routine for optimal skin health
              </div>
              <div className="text-slate-300 text-sm flex items-start">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Eyebrow grooming can improve facial symmetry
              </div>
              <div className="text-slate-300 text-sm flex items-start">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Regular facial massage improves circulation and definition
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">The UMAX Upgrade</h1>
          <p className="text-slate-300 text-lg">Comprehensive aesthetic analysis & enhancement</p>
        </div>

        <div className="flex justify-center">
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-slate-700/50">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-8 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {activeTab === 'face' ? (
          <div className="space-y-6">
            {scanComplete && (
              <div className="text-center">
                <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <div className="bg-slate-900 rounded-full px-6 py-2">
                    <span className="text-white font-semibold">✨ Analysis Complete</span>
                  </div>
                </div>
              </div>
            )}
            {renderFaceContent()}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-white">{getScoreLabel()}</h3>
                <div className="text-6xl font-bold text-blue-400">82</div>
                <div className="text-sm text-slate-400">Above Average</div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <h3 className="font-semibold text-white mb-3">Deep Analysis</h3>
                <div className="space-y-2">
                  {activeTab === 'skin' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Clarity</span>
                        <span className="text-green-400">9.1/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Texture</span>
                        <span className="text-green-400">8.7/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Tone Evenness</span>
                        <span className="text-yellow-400">7.3/10</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'hair' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Density</span>
                        <span className="text-green-400">8.4/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Health</span>
                        <span className="text-blue-400">8.1/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Style Fit</span>
                        <span className="text-yellow-400">7.5/10</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'beard' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Coverage</span>
                        <span className="text-blue-400">8.6/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Grooming</span>
                        <span className="text-green-400">9.0/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Shape</span>
                        <span className="text-blue-400">8.3/10</span>
                      </div>
                    </>
                  )}
                </div>
              </Card>
              
              <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <h3 className="font-semibold text-white mb-3">Enhancement Protocol</h3>
                <div className="space-y-2">
                  {activeTab === 'skin' && (
                    <>
                      <div className="text-slate-300 text-sm">• Add vitamin C serum for tone improvement</div>
                      <div className="text-slate-300 text-sm">• Increase hydration for texture enhancement</div>
                      <div className="text-slate-300 text-sm">• Weekly exfoliation recommended</div>
                    </>
                  )}
                  {activeTab === 'hair' && (
                    <>
                      <div className="text-slate-300 text-sm">• Consider a more modern cut style</div>
                      <div className="text-slate-300 text-sm">• Use quality styling products</div>
                      <div className="text-slate-300 text-sm">• Regular trims every 4-6 weeks</div>
                    </>
                  )}
                  {activeTab === 'beard' && (
                    <>
                      <div className="text-slate-300 text-sm">• Maintain current grooming routine</div>
                      <div className="text-slate-300 text-sm">• Consider beard oil for health</div>
                      <div className="text-slate-300 text-sm">• Weekly professional shaping</div>
                    </>
                  )}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyModule;
