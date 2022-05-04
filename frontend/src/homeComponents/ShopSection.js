import React from "react";
import {Link} from "react-router-dom";
import products from "../data/Products";


const ShopSection = () => {
    return (
        <>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {products.map((product) => (
                             <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
                                 <div className="border-product">
                                     <Link to={"/login"}>
                                         <div className="shopBack">
                                             <img src={product.image} alt={product.name}></img>
                                         </div>
                                     </Link>
                                     <div className="shopText">
                                        <p>
                                            <Link to={`/products/${product._id}`}>
                                                {product.name}
                                            </Link>
                                        </p>
                                        {/* Rating */}
                                        <h3>${product.price}</h3>
                                     </div>
                                 </div>
                             </div>   
                            ))};
                            {/* pagination */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ShopSection;