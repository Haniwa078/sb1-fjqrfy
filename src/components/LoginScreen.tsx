import React, { useState } from 'react';

interface LoginScreenProps {
  onBackToTitle: () => void;
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onBackToTitle, onLoginSuccess }) => {
  const [playerName, setPlayerName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic with MongoDB
    if (playerName === 'test' && password === 'password') {
      onLoginSuccess();
    } else {
      setError('Invalid player name or password');
    }
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">ログイン</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="プレイヤー名"
            className="w-full p-2 rounded border border-gray-300"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            className="w-full p-2 rounded border border-gray-300"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          ログイン
        </button>
      </form>
      <button onClick={onBackToTitle} className="mt-4 text-white hover:underline">
        タイトルに戻る
      </button>
    </div>
  );
};

export default LoginScreen;