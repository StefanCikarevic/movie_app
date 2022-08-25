import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Watchlist from "./components/Watchlist";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="watched" element={<Watched />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
