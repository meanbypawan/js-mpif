import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";

function ProductDetail(){
    const params = useParams();
    console.log(params.productId);
    return <>
      <Header/>
      <h1>Product Details Component..</h1>
    </>
}

export default ProductDetail;