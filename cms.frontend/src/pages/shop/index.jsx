import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import productService from "../../services/productService";

import ShopSidebar from "./ShopSidebar";
import ShopHeader from "./ShopHeader";
import ProductList from "./ProductList";
import LoadingOrEmpty from "./LoadingOrEmpty";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Shop = () => {


    const [searchParams] = useSearchParams();


    const [products, setProducts] = useState([]);

    const [filterProducts, setFilterProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    const [keyword, setKeyword] = useState(
        searchParams.get("keyword") || ""
    );


    const [category, setCategory] = useState(
        searchParams.get("category") || ""
    );


    const [minPrice, setMinPrice] = useState("");

    const [maxPrice, setMaxPrice] = useState("");

    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;





    useEffect(() => {

        setCategory(
            searchParams.get("category") || ""
        );
        const kw = searchParams.get("keyword") || "";
        if (kw) setKeyword(kw);
        setCurrentPage(1);

    }, [searchParams]);






    useEffect(() => {


        const fetchProducts = async () => {


            try {


                const res =
                    await productService.getAllProducts();



                const data =
                    Array.isArray(res)
                        ? res
                        : res.data || [];





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






                const productsTag =
                    data.map(item => {


                        let tag = "";

                        let salePercent = 0;



                        if (newestIds.includes(item.id)) {

                            tag = "new";

                        }
                        else if (hotIds.includes(item.id)) {

                            tag = "hot";

                        }
                        else if (saleIds.includes(item.id)) {

                            tag = "sale";

                            salePercent = 20;
                        }






                        return {

                            ...item,

                            tag,

                            salePercent

                        };


                    });





                setProducts(productsTag);

                setFilterProducts(productsTag);



            }
            catch (err) {

                console.log(err);

            }
            finally {

                setLoading(false);

            }


        };



        fetchProducts();



    }, []);









    useEffect(() => {


        let result = [...products];




        if (keyword) {


            result =
                result.filter(item =>

                    item.name
                        ?.toLowerCase()
                        .includes(
                            keyword.toLowerCase()
                        )

                );


        }






        if (category) {


            result =
                result.filter(item =>


                    item.categoryName === category
                    ||
                    item.category?.name === category


                );


        }







        if (minPrice) {


            result =
                result.filter(item =>

                    Number(item.price)
                    >=
                    Number(minPrice)

                );


        }






        if (maxPrice) {


            result =
                result.filter(item =>

                    Number(item.price)
                    <=
                    Number(maxPrice)

                );


        }






        setFilterProducts(result);
        setCurrentPage(1); // Reset về trang 1 khi lọc



    },
        [
            keyword,
            category,
            minPrice,
            maxPrice,
            products
        ]);









    return (

        <>


            <Header />



            <style>{`

.shop-page{

    padding:25px 5%;
    background:#f8fafc;

}


.shop-container{

    max-width:1200px;
    margin:auto;

}


.shop-box{

    background:white;
    padding:25px;
    border-radius:25px;

    box-shadow:
    0 10px 30px rgba(0,0,0,.08);

}



.shop-title{

    text-align:center;
    margin-bottom:25px;

    font-size:32px;
    font-weight:900;

}



.shop-row{

    display:flex;
    gap:20px;

}



.shop-sidebar-col{

    width:260px;
}



.shop-product-col{

    flex:1;

}



`}</style>





            <div className="shop-page">


                <div className="shop-container">


                    <div className="shop-box">





                        <h1 className="shop-title">

                            🛍️ Cửa hàng sản phẩm

                        </h1>





                        <div className="shop-row">







                            <div className="shop-sidebar-col">


                                <ShopSidebar

                                    category={category}

                                    setCategory={setCategory}

                                    minPrice={minPrice}

                                    setMinPrice={setMinPrice}

                                    maxPrice={maxPrice}

                                    setMaxPrice={setMaxPrice}

                                />


                            </div>










                            <div className="shop-product-col">



                                <ShopHeader

                                    keyword={keyword}

                                    setKeyword={setKeyword}

                                    count={filterProducts.length}

                                />







                                <LoadingOrEmpty

                                    loading={loading}

                                    products={filterProducts}

                                />







                                {

                                    !loading
                                    &&
                                    filterProducts.length > 0
                                    &&


                                    <>
                                        <ProductList
                                            products={filterProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                                        />

                                        {/* Thanh phân trang */}
                                        {filterProducts.length > itemsPerPage && (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '8px',
                                                marginTop: '30px',
                                                flexWrap: 'wrap'
                                            }}>
                                                <button
                                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                    disabled={currentPage === 1}
                                                    style={{
                                                        padding: '8px 16px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        background: currentPage === 1 ? '#f3f4f6' : 'white',
                                                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    ❮ Trang trước
                                                </button>

                                                {Array.from({ length: Math.ceil(filterProducts.length / itemsPerPage) }, (_, i) => (
                                                    <button
                                                        key={i + 1}
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        style={{
                                                            padding: '8px 14px',
                                                            border: currentPage === i + 1 ? '2px solid #0066cc' : '1px solid #ddd',
                                                            borderRadius: '6px',
                                                            background: currentPage === i + 1 ? '#0066cc' : 'white',
                                                            color: currentPage === i + 1 ? 'white' : '#333',
                                                            cursor: 'pointer',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                ))}

                                                <button
                                                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(filterProducts.length / itemsPerPage), p + 1))}
                                                    disabled={currentPage === Math.ceil(filterProducts.length / itemsPerPage)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        background: currentPage === Math.ceil(filterProducts.length / itemsPerPage) ? '#f3f4f6' : 'white',
                                                        cursor: currentPage === Math.ceil(filterProducts.length / itemsPerPage) ? 'not-allowed' : 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Trang sau ❯
                                                </button>
                                            </div>
                                        )}
                                    </>

                                }






                            </div>





                        </div>







                    </div>


                </div>


            </div>





            <Footer />


        </>


    );


};


export default Shop;