export type User = {
    id: number;
    name: string;
    email: string;
  };
  
  export type UserContextType = {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (user: User) => void;
    deleteUser: (id: number) => void;
  };