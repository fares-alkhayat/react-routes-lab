import { Routes, Route } from "react-router"
import AllProducts from "../components/allProducts";
import CreateProduct from "../components/CreateProduct";
import ProductDetails from "../components/ProductsDetails";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

function App(){

  return(
    <div>
<h1>Product Lab</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/products/create" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>
</div>
  )
}

export default App