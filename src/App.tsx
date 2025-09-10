import React from 'react';
import { Music4, Mic2, Headphones, Mail, Clock, MapPin, Phone, Star, AudioWaveform as Waveform } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Harmonia Studios</h1>
          <p className="text-xl mb-8">Where Your Sound Comes to Life</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
            Book Session
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-lg text-center">
            <Mic2 className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-4">Recording</h3>
            <p className="text-gray-400">Professional recording services with state-of-the-art equipment</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg text-center">
            <Waveform className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-4">Mixing</h3>
            <p className="text-gray-400">Expert mixing to perfect your sound</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-lg text-center">
            <Music4 className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-4">Production</h3>
            <p className="text-gray-400">Full music production services</p>
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="bg-zinc-900 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Studio Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80" 
                alt="Studio Equipment"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Professional Grade Equipment</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-red-600 mr-3" />
                    Pro Tools HD System
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-red-600 mr-3" />
                    Neumann Microphones
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-red-600 mr-3" />
                    SSL Console
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-red-600 mr-3" />
                    Custom Acoustic Treatment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-xl">+40 123 456 789</p>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-xl">contact@harmonia.studio</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-xl">București, Romania</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 text-center">
        <p className="text-gray-400">© 2024 Harmonia Studios. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;