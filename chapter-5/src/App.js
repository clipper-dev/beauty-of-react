import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Desktop from "./pages/Desktop/Desktop";
import Inbox from "./pages/Inbox/Inbox";
import Today from "./pages/Today/Today";
import Archive from "./pages/Archive/Archive";
import Settings from "./pages/Settings/Settings";

function App() {
  /* handle the state of the application */
  const [currentTab, setCurrentTab] = useState(0);
  const changeTab = (index) => {
    console.log(index);
    setCurrentTab(index);
    console.log(currentTab);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar currentTab={currentTab} changeTab={changeTab} />
        <Routes>
          <Route path="/" element={<Desktop/>} />
          <Route path="/inbox" element={<Inbox/>} />
          <Route path="/today" element={<Today/>} />
          <Route path="/archive" element={<Archive/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
