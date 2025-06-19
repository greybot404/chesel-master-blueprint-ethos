
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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

  const renderFaceContent = () => {
    if (!faceImage) {
      return (
        <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <ScanFace className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Facial Scan Analysis</h3>
              <p className="text-slate-300 mb-6">
                Upload a clear, front-facing photo for comprehensive facial analysis. 
                Ensure good lighting and neutral expression.
              </p>
            </div>
            <div className="space-y-4">
              <label className="block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Face Photo
                </Button>
              </label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Camera className="w-4 h-4 mr-2" />
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
      );
    }

    if (isScanning) {
      return (
        <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
              <ScanFace className="w-8 h-8 text-blue-400 animate-spin" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Analyzing Your Face...</h3>
              <p className="text-slate-300">
                Processing facial features and measurements
              </p>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <img src={faceImage} alt="Uploaded face" className="w-full h-64 object-cover rounded-lg mb-4" />
          <Button 
            onClick={() => {
              setFaceImage(null);
              setScanComplete(false);
            }}
            variant="outline" 
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Upload New Photo
          </Button>
        </Card>
        
        <div className="space-y-4">
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <h3 className="font-semibold text-white mb-3">Deep Facial Analysis</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Facial Symmetry</span>
                <span className="text-blue-400">8.2/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Golden Ratio</span>
                <span className="text-blue-400">7.8/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Jawline Definition</span>
                <span className="text-blue-400">8.5/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Canthal Tilt</span>
                <span className="text-blue-400">7.9/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Cheekbone Prominence</span>
                <span className="text-green-400">8.7/10</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <h3 className="font-semibold text-white mb-3">Enhancement Protocol</h3>
            <div className="space-y-2">
              <div className="text-slate-300 text-sm">• Consider mewing exercises for jawline enhancement</div>
              <div className="text-slate-300 text-sm">• Maintain current skincare routine</div>
              <div className="text-slate-300 text-sm">• Eyebrow grooming for better symmetry</div>
              <div className="text-slate-300 text-sm">• Facial massage to improve circulation</div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">The UMAX Upgrade</h1>
          <p className="text-slate-300">Comprehensive aesthetic analysis</p>
        </div>

        <div className="flex justify-center">
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
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
              <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-white">{getScoreLabel()}</h3>
                  <div className="text-6xl font-bold text-blue-400">82</div>
                  <div className="text-sm text-slate-400">Above Average</div>
                </div>
              </Card>
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
