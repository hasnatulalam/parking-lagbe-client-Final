import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {

  // const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    isUser: {}, token: "",
  })

  async function getData() {
    await setState(JSON.parse(window.localStorage.getItem("auth")));
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider }