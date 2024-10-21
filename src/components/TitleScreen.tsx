import React, { useState } from 'react';
import { Volume2, VolumeX, Globe } from 'lucide-react';

interface TitleScreenProps {
  onLogin: () => void;
  onRegister: () => void;
  language: 'ja' | 'en';
  onToggleLanguage: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onLogin, onRegister, language, onToggleLanguage }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // TODO: Implement actual sound toggling logic
  };

  const text = {
    title: language === 'ja' ? 'ゲームタイトル' : 'Game Title',
    story: language === 'ja' 
      ? 'ここに魅力的なストーリーが表示されます...'
      : 'An captivating story will be displayed here...',
    login: language === 'ja' ? 'ログイン' : 'Login',
    register: language === 'ja' ? '新規登録' : 'Register',
  };

  return (
    <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
      <h1 className="text-4xl font-bold mb-4 text-white">{text.title}</h1>
      <p className="mb-6 text-gray-200">{text.story}</p>
      <div className="space-y-4">
        <button
          onClick={onLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          {text.login}
        </button>
        <button
          onClick={onRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          {text.register}
        </button>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={toggleSound} className="text-white hover:text-gray-300 transition duration-300">
          {isSoundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
        <button onClick={onToggleLanguage} className="text-white hover:text-gray-300 transition duration-300">
          <Globe size={24} />
        </button>
      </div>
    </div>
  );
};

export default TitleScreen;