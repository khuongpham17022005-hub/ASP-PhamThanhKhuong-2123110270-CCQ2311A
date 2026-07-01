import React, {
    useEffect,
    useState
} from "react";


import { useNavigate } from "react-router-dom";


import Header from "../../components/Header";
import Footer from "../../components/Footer";


import CartTable from "./CartTable";




const Cart = () => {



    const navigate = useNavigate();



    const [cart, setCart] = useState([]);






    useEffect(() => {



        const data =

            JSON.parse(
                localStorage.getItem("cart")
            )
            ||
            [];



        setCart(data);



    }, []);









    const updateCart = (newCart) => {



        setCart(newCart);



        localStorage.setItem(

            "cart",

            JSON.stringify(newCart)

        );



    };









    const removeItem = (id) => {



        const newCart =

            cart.filter(

                item =>

                    item.id !== id

            );



        updateCart(newCart);



    };









    const changeQty = (

        id,

        type

    ) => {



        const newCart =

            cart.map(item => {



                if (item.id === id) {



                    let qty =

                        item.quantity || 1;






                    if (type === "plus")

                        qty++;







                    if (

                        type === "minus"

                        &&

                        qty > 1

                    )

                        qty--;







                    return {

                        ...item,

                        quantity: qty

                    };


                }






                return item;



            });





        updateCart(newCart);



    };












    const total =



        cart.reduce(


            (sum, item) =>


                sum +

                item.price *

                (item.quantity || 1)


            , 0

        );













    // =========================
    // CHUYỂN QUA CHECKOUT
    // =========================

    const handleCheckout = () => {



        if (cart.length === 0) {


            alert(
                "Giỏ hàng đang trống!"
            );


            return;


        }




        navigate("/checkout");



    };














    return (

        <>


            <Header />






            <style>{`

.cart-page{

min-height:80vh;

background:#f8fafc;

padding:50px 8%;

}




.cart-box{

background:white;

padding:35px;

border-radius:12px;

box-shadow:
0 4px 15px rgba(0,0,0,.05);
border: 1px solid #eaeaea;

}





.cart-title{

font-size:36px;

font-weight:900;

margin-bottom:30px;

}




.cart-title span{

color:#0066cc;

}







.summary-box{

margin-top:35px;

padding:30px;

border-radius:12px;


background:

linear-gradient(
135deg,
#ffffff,
#f1f5f9
);


display:flex;

align-items:center;

justify-content:space-between;

}








.total-text{

font-size:22px;

font-weight:800;

}






.total-price{

font-size:32px;

font-weight:900;

color:#d93025;

}







.checkout-btn{


border:none;


padding:15px 45px;


border-radius:8px;


cursor:pointer;


color:white;


font-size:17px;


font-weight:900;



background:#0066cc;



transition:.3s;


}







.checkout-btn:hover{


transform:
translateY(-5px);



box-shadow: 0 5px 15px rgba(0,102,204,.4);


}







.empty{


text-align:center;


padding:80px;


font-size:22px;


color:#6b7280;


}








@media(max-width:768px){


.summary-box{


flex-direction:column;


gap:20px;


}


}


`}</style>












            <div className="cart-page">





                <div className="cart-box">







                    <div className="cart-title">


                        <span>
                            Giỏ hàng
                        </span> của bạn



                    </div>









                    {

                        cart.length > 0


                            ?



                            <CartTable


                                cart={cart}


                                removeItem={removeItem}


                                changeQty={changeQty}


                            />



                            :



                            <div className="empty">


                                Chưa có sản phẩm trong giỏ


                            </div>


                    }















                    {


                        cart.length > 0 &&



                        <div className="summary-box">








                            <div>




                                <div className="total-text">


                                    Tổng thanh toán


                                </div>






                                <div className="total-price">




                                    {

                                        new Intl.NumberFormat(

                                            "vi-VN"

                                        )

                                            .format(total)

                                    }



                                    đ




                                </div>




                            </div>












                            <button


                                className="checkout-btn"


                                onClick={handleCheckout}


                            >



                                Thanh toán ➔



                            </button>







                        </div>


                    }







                </div>





            </div>









            <Footer />


        </>


    );


};





export default Cart;