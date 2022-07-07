import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import HeaderNavBar from "./components/HeaderNavBarComponent/HeaderNavBar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="App-header">
          <HeaderNavBar />
        </nav>
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
