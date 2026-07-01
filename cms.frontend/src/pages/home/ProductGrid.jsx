import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import ProductCard from "../../components/ProductCard";


const ProductGrid = () => {


    const [newProducts, setNewProducts] = useState([]);

    const [featuredProducts, setFeaturedProducts] = useState([]);

    const [saleProducts, setSaleProducts] = useState([]);




    useEffect(() => {


        productService
            .getAllProducts()

            .then((res) => {


                const data = Array.isArray(res)

                    ? res

                    : Array.isArray(res.data)

                        ? res.data

                        : [];






                // =====================
                // SẢN PHẨM MỚI NHẤT
                // =====================

                const newest = [...data]

                    .sort((a, b) => b.id - a.id)

                    .slice(0, 4)

                    .map(product => ({

                        ...product,

                        tag: "new"

                    }));








                // =====================
                // SẢN PHẨM NỔI BẬT
                // =====================


                const featured = [...data]

                    .sort((a, b) => b.price - a.price)

                    .slice(0, 4)

                    .map(product => ({


                        ...product,


                        tag: "hot"


                    }));








                // =====================
                // SẢN PHẨM KHUYẾN MÃI
                // =====================


                const sale = [...data]

                    .sort((a, b) => a.price - b.price)

                    .slice(0, 8)

                    .map(product => ({


                        ...product,


                        tag: "sale",

                        salePercent: 20


                    }));









                setNewProducts(newest);

                setFeaturedProducts(featured);

                setSaleProducts(sale);



            })

            .catch(error => {

                console.log(error);

            });



    }, []);









    return (

        <>


            <style>{`

.product-section{

padding:60px 5%;

background:#f8fafc;

}





.section-title{

text-align:center;

margin-bottom:40px;

}




.section-title h2{

font-size:34px;

font-weight:800;

color:#111827;

}





.product-grid{

display:grid;

grid-template-columns:
repeat(4,260px);

justify-content:center;

gap:30px;

}





@media(max-width:1000px){


.product-grid{

grid-template-columns:
repeat(2,260px);

}


}





@media(max-width:600px){


.product-grid{

grid-template-columns:
1fr;

}


}



`}</style>








            {/* SẢN PHẨM MỚI */}



            <section className="product-section">


                <div className="section-title">


                    <h2>

                        Sản phẩm mới nhất

                    </h2>


                    <p>

                        Những sản phẩm vừa cập nhật

                    </p>


                </div>






                <div className="product-grid">


                    {

                        newProducts.map(product => (


                            <ProductCard


                                key={product.id}


                                product={product}


                            />


                        ))

                    }



                </div>



            </section>









            {/* SẢN PHẨM NỔI BẬT */}



            <section className="product-section">



                <div className="section-title">


                    <h2>

                        Sản phẩm nổi bật

                    </h2>


                    <p>

                        Các sản phẩm được yêu thích

                    </p>


                </div>








                <div className="product-grid">



                    {

                        featuredProducts.map(product => (


                            <ProductCard


                                key={product.id}


                                product={product}



                            />


                        ))

                    }



                </div>




            </section>











            {/* SẢN PHẨM KHUYẾN MÃI */}



            <section className="product-section">



                <div className="section-title">



                    <h2>

                        Sản phẩm khuyến mãi

                    </h2>



                    <p>

                        Ưu đãi hấp dẫn dành cho bạn

                    </p>




                </div>








                <div className="product-grid">



                    {


                        saleProducts.map(product => (



                            <ProductCard


                                key={product.id}


                                product={product}



                            />



                        ))


                    }



                </div>





            </section>



        </>


    );


};



export default ProductGrid;