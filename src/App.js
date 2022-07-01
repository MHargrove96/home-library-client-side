import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import HeaderNavBar from "./components/HeaderNavBarComponent/HeaderNavBar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderNavBar />
        </header>
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
