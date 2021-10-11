import React, { createContext, useState, useContext } from 'react';

//share value with children without sending props around in intire application

// const DataContext = createContext<string | null>(null)

// export const DataProvider = ({children}) => {
//   const [data, setData] = useState({});

//   const setValues = (values) => {
//     setData(prevData => ({
//       ...prevData,
//       ...values
//     }))
//   }

//   return <DataContext.Provider value={{data, setValues}}>
//     {children}
//   </DataContext.Provider>
// }

// export const useData = () => useContext(DataContext)

const UserContext = createContext<string | null>(null);

export const UserData: React.FC = () => {
  const context = useContext(UserContext);
  return <div>{context}</div>;
};

export const DataProvider = () => {
  const handleClick = () => {
    setUser('hello from button');
  };
  const [user, setUser] = useState('inital value');
  return (
    <UserContext.Provider value={user}>
      <button onClick={handleClick}> Change value </button>
      <UserData />
    </UserContext.Provider>
  );
};
