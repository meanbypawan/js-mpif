import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Protfolio from "./components/Portfolio";
import Product from "./components/Product";
import RecentProduct from "./components/RecentProduct";
import FeatureProduct from "./components/FeatureProduct";
import PageNotFound from "./components/PageNotFound";

function App(){
  return <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="portfolio" element={<Protfolio/>}/>
      <Route path="products" element={<Product/>}>
        {/* <Route path="recent-product" element={<RecentProduct/>}/> */}
        <Route index element={<RecentProduct/>}/>
        <Route path="feature-product" element={<FeatureProduct/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
  </>
}

export default App;