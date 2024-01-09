import React from 'react';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App min-h-screen bg-gray-200 p-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Desafío StreetDevs CRUD APP</h1>
          <UserForm />
          <UsersList />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;