import { Route, Routes } from "react-router-dom";

import Main from "../../pages/main";
import Form from "../../pages/form";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forms" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Layout;
