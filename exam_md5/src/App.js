
import { Route, Routes } from "react-router-dom";
import Product from "./component/product";
import Create from "./component/createProduct";
import Edit from "./component/edit";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/tao-moi" element={<Create />} />
        <Route path="/sua-doi/:id" element={<Edit />} />
      </Routes>s
    </>
  );
}

export default App;
