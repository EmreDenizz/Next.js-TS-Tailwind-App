'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getUsers() {
  return [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Lee', email: 'charlie@example.com' },
  ];
}

async function getServerTime() {
  return new Date().toLocaleString();
}

export default function Dashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<Array<{ id: number; name: string; email: string }>>([]);
  const [serverTime, setServerTime] = useState<string>('');

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      const time = await getServerTime();
      setUsers(usersData);
      setServerTime(time);
    };

    fetchData();
  }, []);

  const goToChat = () => {
    router.push('/chat');
  };

  const goToMui = () => {
    router.push('/mui');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-6 text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Dashboard</h1>
          <p className="text-lg">Manage your application with ease.</p>
        </header>

        {/* Server Time */}
        <div className="bg-blue-50 p-4 rounded-md mb-6 shadow-sm">
          <p className="text-sm font-medium text-gray-700">
            <strong>Server Time:</strong> {serverTime}
          </p>
        </div>

        {/* User List */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">User List</h2>
        <table className="w-full table-auto border-collapse border border-gray-200 rounded-md shadow-sm">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-gray-100 transition-all`}
              >
                <td className="border px-4 py-2 text-center">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          <button
            onClick={goToChat}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-offset-1 transition-all"
          >
            Go to Chat
          </button>

          <button
            onClick={goToMui}
            className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:ring focus:ring-orange-300 focus:ring-offset-1 transition-all"
          >
            Go to Material UI Page
          </button>

          <a
            href="/"
            className="w-full block text-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:ring focus:ring-gray-400 focus:ring-offset-1 transition-all"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
