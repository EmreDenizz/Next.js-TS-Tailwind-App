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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg mb-2">Welcome to your dashboard!</p>
        <p className="text-sm text-gray-600 mb-6">
          <strong>Server Time:</strong> {serverTime}
        </p>

        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2 text-center">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 space-y-4">
          <button
            onClick={goToChat}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Go to Chat
          </button>

          <button
            onClick={goToMui}
            className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Go to Mui
          </button>

          <a
            href="/"
            className="w-full block text-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
