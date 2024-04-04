import { Route, Routes } from "react-router-dom";

import Header from "../header";
import Main from "../../pages/main";
import Form from "../../pages/form";

const Layout = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forms" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Layout;
