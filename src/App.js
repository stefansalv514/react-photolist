import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import PhotoBlock from "./Components/PhotoBlock/PhotoBlock";
import PopUp from "./Components/PopUp/PopUp";


const App = () => {
  return (
      <main className="main">
        <Header />
        <PhotoBlock />
        <PopUp />
      </main>
  );
}

export default App;
