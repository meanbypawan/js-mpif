import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const navigate = useNavigate();
    return <>
        <div className="col-md-4 p-3">
            <div className="d-flex flex-column align-items-center p-2" style={{ boxShadow: "0 0 5px grey", height: "400px" }}>
                <img src={product.thumbnail} width="200px" height="200px" style={{ borderRadius: "50%" }} />
                <h3 className="mt-3">{product.title}</h3>
                <p className="">Price : <label className="text-success" style={{ fontSize: "20px" }}>{product.price} Rs.</label></p>
                <span onClick={()=>navigate(`/product-detail/${product.id}`)} className="text-primary" style={{cursor: "pointer"}}>View more</span>
                <button style={{ width: "90%", margin: "auto" }} className="btn btn-secondary">Add To Cart</button>
            </div>
        </div>
    </>
}

export default Product;