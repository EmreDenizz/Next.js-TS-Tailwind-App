'use client'; // Mark this as a client component

import { useState, ChangeEvent, FormEvent } from 'react';
import UserCard from './components/UserCard'; // Import the new component

const Home = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData({ name, email, isSubscribed, gender });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <main className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Login Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-black">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-black font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-black">Subscribe to newsletter</label>
          </div>

          <div>
            <p className="text-sm font-bold text-black">Gender:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-sm">Male</span>
              </label>
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-sm">Female</span>
              </label>
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-sm">Other</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-bold"
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="mt-6">
            <UserCard
              name={submittedData.name}
              email={submittedData.email}
              isSubscribed={submittedData.isSubscribed}
              gender={submittedData.gender}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
