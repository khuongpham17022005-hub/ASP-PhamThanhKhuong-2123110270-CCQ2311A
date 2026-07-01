import React from "react";
import ProductCard from "../../components/ProductCard";


const ProductList = ({
    products
}) => {


    return (

        <div className="row g-4">


            {
                products.map(product => (

                    <div
                        className="col-md-4"
                        key={product.id}
                    >

                        <ProductCard
                            product={product}
                        />

                    </div>

                ))
            }


        </div>

    );

};


export default ProductList;