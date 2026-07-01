import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductInfo from "./ProductInfo";

import productService from "../../services/productService";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const ProductDetail = () => {


    const { id } = useParams();


    const [product, setProduct] = useState(null);

    const [products, setProducts] = useState([]);





    useEffect(() => {


        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });




        productService
            .getAllProducts()

            .then(res => {


                const data =
                    Array.isArray(res)
                        ?
                        res
                        :
                        res.data || [];





                // =========================
                // TẠO TAG NEW HOT SALE
                // =========================


                const newestIds =
                    [...data]
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 4)
                        .map(x => x.id);



                const hotIds =
                    [...data]
                        .sort((a, b) => b.price - a.price)
                        .slice(0, 4)
                        .map(x => x.id);



                const saleIds =
                    [...data]
                        .sort((a, b) => a.price - b.price)
                        .slice(0, 8)
                        .map(x => x.id);







                const dataWithTag =
                    data.map(item => {


                        let tag = "";

                        let salePercent = 0;




                        if (saleIds.includes(item.id)) {


                            tag = "sale";

                            salePercent = 20;


                        }


                        else if (hotIds.includes(item.id)) {


                            tag = "hot";


                        }


                        else if (newestIds.includes(item.id)) {


                            tag = "new";


                        }






                        return {

                            ...item,

                            tag,

                            salePercent

                        };


                    });







                setProducts(dataWithTag);







                const current =
                    dataWithTag.find(
                        x =>
                            x.id === Number(id)
                    );



                setProduct(current);



            })

            .catch(err => {

                console.log(err);

            });



    }, [id]);












    if (!product) {


        return (

            <>

                <Header />


                <h2

                    style={{
                        textAlign: "center",
                        padding: "100px"
                    }}

                >

                    Đang tải sản phẩm...

                </h2>


                <Footer />


            </>

        );

    }











    // ===============================
    // SẢN PHẨM LIÊN QUAN CÙNG DANH MỤC
    // ===============================


    const relatedProducts =

        products

            .filter(item => {


                const productCategoryId =

                    product.categoryId

                    ??

                    product.category?.id

                    ??

                    product.category?.categoryId;





                const itemCategoryId =


                    item.categoryId

                    ??

                    item.category?.id

                    ??

                    item.category?.categoryId;





                const sameId =


                    Number(itemCategoryId)

                    ===

                    Number(productCategoryId);







                const sameName =


                    item.categoryName &&

                    product.categoryName &&

                    item.categoryName === product.categoryName;







                return (

                    item.id !== product.id

                    &&

                    (

                        sameId

                        ||

                        sameName

                    )

                );



            })

            .slice(0, 4);












    return (

        <>


            <Header />



            <style>{`

.detail-page{

padding:50px 8%;

background:#f8fafc;

min-height:80vh;

}



.detail-container{

background:white;

padding:40px;

border-radius:30px;

box-shadow:
0 15px 40px rgba(0,0,0,.08);

}

`}</style>






            <div className="detail-page">


                <div className="detail-container">



                    <ProductInfo


                        product={product}


                        relatedProducts={relatedProducts}


                    />



                </div>


            </div>








            <Footer />


        </>


    );


};


export default ProductDetail;