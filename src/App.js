import React from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router-dom";

import mainStyles from "./styles/mainStyles.module.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainComponent />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
