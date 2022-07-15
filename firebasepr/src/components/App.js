import React, {useEffect, useState} from "react";
import AppRouter from "./router";
import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "...initializing!"}
    <footer> &copy; Practice {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
