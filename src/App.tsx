import React, { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import GameScreen from './components/GameScreen';

type Screen = 'title' | 'login' | 'register' | 'game';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('title');
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ja' ? 'en' : 'ja');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      {currentScreen === 'title' && (
        <TitleScreen
          onLogin={() => navigateTo('login')}
          onRegister={() => navigateTo('register')}
          language={language}
          onToggleLanguage={toggleLanguage}
        />
      )}
      {currentScreen === 'login' && (
        <LoginScreen onBackToTitle={() => navigateTo('title')} onLoginSuccess={() => navigateTo('game')} />
      )}
      {currentScreen === 'register' && (
        <RegisterScreen onBackToTitle={() => navigateTo('title')} onRegisterSuccess={() => navigateTo('game')} />
      )}
      {currentScreen === 'game' && (
        <GameScreen onBackToTitle={() => navigateTo('title')} />
      )}
    </div>
  );
}

export default App;