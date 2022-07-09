import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import cookie from 'cookie'

import HeaderNavBar from "./components/HeaderNavBarComponent/HeaderNavBar";



function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const cookies = cookie.parse(document.cookie)
    if(cookies.token ){
      setUser(true)
    }
    else{
      setUser(false)
    }
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="App-header">
          <HeaderNavBar state={user} setState={setUser}/>
        </nav>
        <main>
          <Router state={user} setState={setUser}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
