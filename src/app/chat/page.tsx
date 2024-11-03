'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const fetchChatGPTResponse = async () => {
    setLoading(true); // Start loading

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const data = await response.json();
      setChatResponse(data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setChatResponse('Error fetching response. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Chat with GPT-4</h1>

        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          className="w-full p-2 border rounded-md mb-4"
        />

        <button
          onClick={fetchChatGPTResponse}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Send'}
        </button>

        {chatResponse && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md text-black">
            <h2 className="font-bold">Response:</h2>
            <p>{chatResponse}</p>
          </div>
        )}

          <button
            type="button"
            onClick={goToDashboard}
            className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-bold"
          >
            Go to Dashboard
          </button>
      </div>
    </div>
  );
}
