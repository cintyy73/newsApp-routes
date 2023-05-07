import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Titles from "./pages/titles";
import Layout from "./pages/Layout";
import ListNews from "./components/ListNews/ListNews";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<ListNews />} />
        {/* //ver hook */}
        <Route path="/:id" element={<New />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
