'use client';

import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  isSubscribed: boolean;
  gender: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, isSubscribed, gender }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md text-black">
      <h2 className="text-lg font-bold mb-2 ">User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subscribed:</strong> {isSubscribed ? 'Yes' : 'No'}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
};

export default UserCard;
