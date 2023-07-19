/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UseContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem('blogData'));
    return storedData || [{}];
  });


  useEffect(() => {
    sessionStorage.setItem('blogData', JSON.stringify(userData));
  }, [userData]);

  const addUserData = (name, email, address, phone ,post, file) => {
    setUserData([...userData, { id: uuidv4(), name, email, address, phone ,post, file}]);
  };

  const deleteUserData = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const updateUserData = (id, updatedUserData) => {
    setUserData(
      userData.map((data) => (data.id === id ? updatedUserData : data))
    );
  };

  return (
    <UseContext.Provider
      value={{ userData, addUserData, updateUserData, deleteUserData }}
    >
      {children}
    </UseContext.Provider>
  );
};
