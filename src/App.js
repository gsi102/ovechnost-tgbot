import React from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Form from "./components/Form/Form";
import Checkout from "./components/Checkout/Checkout";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import { Routes, Route } from "react-router-dom";

import mainStyles from "./styles/mainStyles.module.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainComponent />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/form"} element={<Form />} />
        <Route path={"/success-page"} element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
