import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/ProductCard";


const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL || "https://localhost:7041";


const ProductInfo = ({
    product,
    relatedProducts = []
}) => {


    const navigate = useNavigate();


    const [toast, setToast] = useState(false);




    const getImage = (item) => {


        const img =
            item?.imageUrl ||
            item?.image ||
            item?.images ||
            item?.productImage;



        if (!img)

            return "/no-image.png";



        return img.startsWith("http")

            ?

            img

            :

            `${IMAGE_BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;


    };






    const addToCart = () => {


        let cart =
            JSON.parse(
                localStorage.getItem("cart")
            )
            ||
            [];



        const exist =
            cart.find(
                x =>
                    x.id === product.id
            );




        // Kiểm tra tồn kho trước khi thêm vào giỏ
        const currentQty = exist ? exist.quantity : 0;
        if (product.stockQuantity !== undefined && currentQty + 1 > product.stockQuantity) {
            alert("Số lượng sản phẩm trong kho không đủ!");
            return;
        }

        if (exist) {


            exist.quantity++;

        }
        else {


            cart.push({

                id: product.id,

                name: product.name,

                price: product.price,

                image: getImage(product),

                stockQuantity: product.stockQuantity,

                quantity: 1

            });


        }





        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );



        setToast(true);



        setTimeout(() => {

            setToast(false);

        }, 2000);



    };






    const buyNow = () => {


        addToCart();


        setTimeout(() => {

            navigate("/cart");

        }, 300);


    };









    const getTag = (item) => {


        if (item?.tag === "sale") {

            return {

                text: `-${item.salePercent}%`,

                className: "sale"

            };

        }




        if (item?.tag === "hot") {

            return {

                text: "🔥 HOT",

                className: "hot"

            };

        }



        if (item?.tag === "new") {

            return {

                text: "NEW",

                className: "new"

            };

        }


        return null;

    };





    const tag = getTag(product);




    const finalPrice =

        product?.tag === "sale"

            ?

            product.price -
            (
                product.price *
                product.salePercent /
                100
            )

            :

            product.price;







    return (

        <div className="product-wrapper">


            <style>{`

.product-main{

display:grid;

grid-template-columns:1fr 1fr;

gap:50px;

}



.product-image-box{

height:520px;

border-radius:30px;

overflow:hidden;

background:#f3f4f6;

position:relative;

}



.product-image-box img{

width:100%;

height:100%;

object-fit:cover;

}



.product-tag{

position:absolute;

top:20px;

left:20px;

padding:8px 18px;

border-radius:30px;

color:white;

font-weight:800;

z-index:5;

}



.new{

background:#10b981;

}



.hot{

background:#f59e0b;

}



.sale{

background:#ef4444;

}



.product-info h1{

font-size:42px;

font-weight:900;

}



.rating{

color:#fbbf24;

font-size:24px;

}



.price{

font-size:34px;

font-weight:900;

color:#ef4444;

}



.old-price{

text-decoration:line-through;

color:#9ca3af;

}

.stock-info{
margin: 15px 0;
font-size: 16px;
color: #4b5563;
}

.stock-info strong{
color: #0066cc;
}



.description{

margin:25px 0;

line-height:1.8;

}



.buy-area{

display:flex;

gap:15px;

}



.buy-btn,
.cart-btn{

flex:1;

padding:15px;

border:none;

border-radius:18px;

color:white;

font-weight:800;

cursor:pointer;

transition:.3s;

}



.cart-btn{

background:
linear-gradient(
135deg,
#8b5cf6,
#6366f1
);

}



.cart-btn:hover{

transform:translateY(-3px);

background:#7c3aed;

}




.buy-btn{

background:
linear-gradient(
135deg,
#ef4444,
#f97316
);

}



.buy-btn:hover{

transform:translateY(-3px);

background:#dc2626;

}





.toast{

position:fixed;

right:30px;

bottom:30px;

background:#111827;

color:white;

padding:15px 25px;

border-radius:40px;

z-index:9999;

font-weight:800;

box-shadow:
0 15px 35px rgba(0,0,0,.25);

animation:
show .3s;

}




@keyframes show{

from{

opacity:0;

transform:translateY(30px);

}


to{

opacity:1;

transform:translateY(0);

}

}




.related-title{

margin-top:70px;

font-size:32px;

font-weight:900;

}




.related-grid{

display:grid;

grid-template-columns:repeat(4,260px);

gap:25px;

justify-content:center;

}



@media(max-width:900px){

.product-main{

grid-template-columns:1fr;

}

}



`}</style>







            <div className="product-main">





                <div className="product-image-box">


                    {
                        tag &&

                        <div className={`product-tag ${tag.className}`}>

                            {tag.text}

                        </div>

                    }



                    <img

                        src={getImage(product)}

                        alt={product.name}

                    />


                </div>








                <div className="product-info">



                    <h1>

                        {product.name}

                    </h1>




                    <div className="rating">

                        ⭐⭐⭐⭐⭐

                    </div>





                    <div className="price">


                        {
                            finalPrice?.toLocaleString("vi-VN")
                        }

                        ₫


                    </div>





                    {
                        product.tag === "sale" &&


                        <div className="old-price">

                            {
                                product.price?.toLocaleString("vi-VN")
                            }

                            ₫

                        </div>


                    }

                    <div className="stock-info">
                        Tình trạng: {product.stockQuantity > 0 ? (
                            <span>Còn hàng (Tồn kho: <strong>{product.stockQuantity}</strong>)</span>
                        ) : (
                            <span style={{ color: "#ef4444", fontWeight: "bold" }}>Hết hàng</span>
                        )}
                    </div>






                    <div

                        className="description"

                        dangerouslySetInnerHTML={{

                            __html:

                                product.description ||

                                "Sản phẩm chất lượng cao"

                        }}


                    />








                    <div className="buy-area">



                        <button

                            className="cart-btn"

                            onClick={addToCart}

                        >

                            🛒 Thêm vào giỏ

                        </button>






                        <button

                            className="buy-btn"

                            onClick={buyNow}

                        >

                            ⚡ Mua ngay

                        </button>



                    </div>





                </div>





            </div>








            {
                relatedProducts.length > 0 &&

                <>


                    <h2 className="related-title">

                        Sản phẩm liên quan

                    </h2>




                    <div className="related-grid">


                        {
                            relatedProducts.map(item => (

                                <div

                                    key={item.id}

                                    onClick={() => {

                                        navigate(
                                            `/product-detail/index/${item.id}`
                                        );

                                        window.scrollTo(0, 0);

                                    }}

                                >


                                    <ProductCard

                                        product={item}

                                    />


                                </div>


                            ))

                        }



                    </div>



                </>


            }







            {
                toast &&


                <div className="toast">

                    ✅ Thêm vào giỏ hàng thành công

                </div>


            }





        </div>


    );


};


export default ProductInfo;