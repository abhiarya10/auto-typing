import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const infoArray = ["Hello I'm Abhigyan Arya", "I'm a full Stack developer"];
  const [infoArrayIndex, setInfoArrayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfoArrayIndex((prevIndex) => (prevIndex + 1) % infoArray.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-body">
      <div className="app-main-page">
        <p className="my-name">{infoArray[infoArrayIndex]}.</p>
      </div>
    </div>
  );
}

export default App;
