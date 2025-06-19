
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, BarChart3 } from 'lucide-react';

const PresenceModule: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isUser: true }]);
      setCurrentMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I understand you're looking to improve your presence. Could you tell me more about the specific situation or context where you'd like to project more authority?", 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  const analyzePresence = () => {
    setShowAnalysis(true);
  };

  const AnalysisModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <Card className="max-w-2xl w-full p-8 bg-slate-800 border-slate-700">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Presence Analysis</h2>
            <div className="text-5xl font-bold text-blue-400">72</div>
            <p className="text-slate-300">Presence Score</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Summary</h3>
            <p className="text-slate-300 text-sm">
              Your communication patterns show strong analytical thinking and attention to detail. 
              To enhance executive presence, focus on more decisive language and reducing qualifier words. 
              Your vocal patterns suggest room for improvement in projecting confidence through tone modulation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">8.2</div>
              <div className="text-xs text-slate-400">Clarity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">6.8</div>
              <div className="text-xs text-slate-400">Authority</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">7.5</div>
              <div className="text-xs text-slate-400">Confidence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">7.1</div>
              <div className="text-xs text-slate-400">Persuasion</div>
            </div>
          </div>
          
          <Button 
            onClick={() => setShowAnalysis(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Presence Intelligence</h1>
          <p className="text-slate-300">Develop executive presence through AI coaching</p>
        </div>
        
        <Card className="h-96 bg-slate-800/50 backdrop-blur-sm border-slate-700 flex flex-col">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-slate-400 py-8">
                Start a conversation to analyze your presence...
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask your question..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
              <Button onClick={sendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
        
        <Button
          onClick={analyzePresence}
          disabled={messages.filter(m => m.isUser).length < 2}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed py-3"
        >
          <BarChart3 className="w-5 h-5 mr-2" />
          Analyze My Presence
        </Button>
      </div>
      
      {showAnalysis && <AnalysisModal />}
    </div>
  );
};

export default PresenceModule;
