import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UsersList: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  return (
    <div>
      {userContext.users.map(user => (
        <div key={user.id} className="flex items-center justify-between p-4 mb-2 bg-white shadow">
          <div>
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => userContext.deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;