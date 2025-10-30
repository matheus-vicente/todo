import { BrowserRouter, Route, Routes } from "react-router";

import { PageHome } from "./pages/page-home";
import { PageComponents } from "./pages/page-components";
import { LayoutMain } from "./pages/layout-main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
