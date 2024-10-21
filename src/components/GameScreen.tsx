import React from 'react';

interface GameScreenProps {
  onBackToTitle: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onBackToTitle }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">ゲーム画面</h2>
      <p className="text-gray-200 mb-4">ここにゲームコンテンツが表示されます。</p>
      <button
        onClick={onBackToTitle}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        タイトルに戻る
      </button>
    </div>
  );
};

export default GameScreen;