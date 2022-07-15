import React, {useState} from "react";
import AppRouter from "./router";
import { authService } from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser)
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer> &copy; Practice {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
