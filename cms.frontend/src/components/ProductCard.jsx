import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL || "https://localhost:7041";


const ProductCard = ({
    product,
    sale = false,
    featured = false
}) => {


    const navigate = useNavigate();

    const [toast, setToast] = useState(false);





    const getImage = () => {


        const img =
            product?.imageUrl ||
            product?.image ||
            product?.images ||
            product?.productImage;



        if (!img)

            return "/no-image.png";



        return img.startsWith("http")
            ?
            img
            :
            `${IMAGE_BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;


    };








    const showToast = () => {


        setToast(true);


        setTimeout(() => {

            setToast(false);

        }, 2000);


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
                x => x.id === product.id
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

                image: getImage(),

                stockQuantity: product.stockQuantity,

                quantity: 1

            });


        }



        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );



        showToast();



    };







    const buyNow = () => {


        addToCart();


        setTimeout(() => {

            navigate("/cart");

        }, 300);


    };







    const getTag = () => {


        if (sale)

            return {
                text: `-${product.salePercent || 20}%`,
                className: "sale"
            };



        if (featured)

            return {
                text: "🔥 HOT",
                className: "hot"
            };



        if (product?.tag === "new")

            return {
                text: "NEW",
                className: "new"
            };



        return {
            text: "",
            className: ""
        };


    };



    const tag = getTag();









    return (

        <>

            <style>{`

.product-card{
width:280px;
background:#fff;
border-radius:12px;
overflow:hidden;
cursor:pointer;
position:relative;
box-shadow: 0 4px 15px rgba(0,0,0,.05);
transition:.35s;
border:1px solid #eaeaea;
}



.product-card:hover{

transform:translateY(-12px);

box-shadow:
0 20px 45px rgba(0,0,0,.15);

}






.product-tag{
position:absolute;
top:15px;
left:15px;
z-index:5;
padding:5px 12px;
border-radius:4px;
color:white;
font-size:11px;
font-weight:700;
box-shadow: 0 2px 8px rgba(0,0,0,.15);
}




.new{

background:
linear-gradient(
135deg,
#22c55e,
#16a34a
);

}



.hot{

background:
linear-gradient(
135deg,
#f59e0b,
#ea580c
);

}




.sale{

background:
linear-gradient(
135deg,
#ef4444,
#ec4899
);

}






.product-image{
height:240px;
overflow:hidden;
background: #fff;
border-bottom: 1px solid #f5f5f5;
display: flex;
align-items: center;
justify-content: center;
}




.product-image img{
width:100%;
height:100%;
object-fit:cover;
transition:.5s;
}




.product-card:hover 
.product-image img{

transform:scale(1.08);

}







.product-body{

padding:20px;

}






.product-name{

font-size:18px;

font-weight:800;

height:50px;

overflow:hidden;

line-height:1.4;

color:#1f2937;

}






.stars{

color:#fbbf24;

font-size:15px;

margin:12px 0;

}






.price{
font-size:20px;
font-weight:700;
color:#d93025;
margin-bottom:15px;
}

.stock-quantity{
font-size:13px;
color:#6b7280;
margin-bottom:10px;
}






.action-group{

display:flex;

gap:12px;

}






.action-btn{
flex:1;
padding:10px 4px;
border-radius:6px;
font-size:13px;
font-weight:600;
cursor:pointer;
transition:.3s;
display:flex;
align-items:center;
justify-content:center;
gap:6px;
}






.action-btn:hover{

transform:
translateY(-4px);

}







.cart-btn{
background: transparent;
color: #0066cc;
border: 1px solid #0066cc;
}
.cart-btn:hover {
background: #f0f8ff;
}





.buy-btn{
background: #0066cc;
color: white;
border: 1px solid #0066cc;
}
.buy-btn:hover {
background: #004c99;
}







.toast{


position:fixed;


right:30px;


bottom:30px;


background:
linear-gradient(
135deg,
#111827,
#374151
);



color:white;


padding:16px 28px;


border-radius:50px;


z-index:9999;


font-weight:800;


box-shadow:
0 15px 40px rgba(0,0,0,.25);



animation:
toastShow .3s ease;

}





@keyframes toastShow{


from{

opacity:0;

transform:
translateY(30px);

}


to{

opacity:1;

transform:
translateY(0);

}


}



`}</style>            <div


                className="product-card"


                onClick={() => {


                    navigate(
                        `/product-detail/index/${product.id}`
                    );


                }}

            >







                {
                    tag.text &&


                    <div

                        className={
                            `product-tag ${tag.className}`
                        }

                    >

                        {tag.text}


                    </div>


                }







                <div className="product-image">


                    <img

                        src={getImage()}

                        alt={product.name}


                        onError={(e) => {

                            e.currentTarget.src = "/no-image.png";

                        }}


                    />


                </div>









                <div className="product-body">





                    <div className="product-name">


                        {product.name}


                    </div>






                    <div className="stars">

                        ⭐⭐⭐⭐⭐

                    </div>

                    <div className="stock-quantity">
                        Tồn kho: {product.stockQuantity ?? 0} sản phẩm
                    </div>

                    <div className="price">


                        {
                            product.price?.toLocaleString("vi-VN")
                        }

                        ₫


                    </div>








                    <div className="action-group">







                        <button
                            className="action-btn cart-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart();
                            }}
                        >
                            Thêm giỏ hàng 
                        </button>







                        <button
                            className="action-btn buy-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                buyNow();
                            }}
                        >
                            Mua ngay
                        </button>






                    </div>





                </div>







            </div>









            {
                toast &&

                <div className="toast">


                    ✅ Thêm vào giỏ hàng thành công


                </div>

            }






        </>


    );


};



export default ProductCard;