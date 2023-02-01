import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInMail, setLoggedInMail] = useState(null);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        /*const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name);*/
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoggedInMail(authUser.email);
        setLoggedInUser(authUser);
      } else {
        setLoggedInMail(null);
        setLoggedInUser(null);
      }
    });

    return () => unsubscribe();
  }, [loggedInMail]);
  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    login,
    logout,
    loggedInMail,
    loggedInUser,
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
