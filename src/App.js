import "./App.css";

import { HeaderProvider } from "./context/context";
import Layout from "./components/layout";
function App() {
  return (
    <div className="App">
      <HeaderProvider>
        <Layout />
      </HeaderProvider>
    </div>
  );
}

export default App;
