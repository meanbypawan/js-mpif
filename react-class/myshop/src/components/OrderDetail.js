import { useNavigate } from "react-router-dom";

function OrderDetail() {
    const navigate = useNavigate();
    return <>
        <div className="form-group">
            <input type="text" placeholder="Enter name" className="form-control" />
        </div>
        <div className="form-group">
            <input type="text" placeholder="Enter contact number" />
        </div>
        <div className="form-group">
            <input type="text" placeholder="Enter delivery address" className="form-control" />
        </div>
        <div className="form-group">
            <button onClick={()=>navigate(-1)}  className="btn btn-outline-danger">Cancel</button>
            <button className="btn btn-success ml-2">Confirm</button>
        </div>
    </>
}

export default OrderDetail;