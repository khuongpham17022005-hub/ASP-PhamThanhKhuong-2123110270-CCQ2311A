import React, {
    useEffect,
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import Header from "../../components/Header";
import Footer from "../../components/Footer";


import axiosClient from "../../api/axiosClient";




const Checkout = () => {


    const navigate = useNavigate();



    const [cartItems, setCartItems] = useState([]);



    const [message, setMessage] = useState("");



    const [customerInfo, setCustomerInfo] = useState({

        fullName: "",
        phoneNumber: "",
        address: "",
        notes: ""

    });








    useEffect(() => {


        const savedCart =

            JSON.parse(
                localStorage.getItem("cart")
            )
            ||
            [];



        if (savedCart.length === 0) {


            setMessage(
                "🛒 Giỏ hàng đang trống!"
            );


            setTimeout(() => {

                navigate("/cart");

            }, 1500);


            return;

        }



        setCartItems(savedCart);



    }, [navigate]);









    const totalAmount =


        cartItems.reduce(


            (sum, item) =>

                sum +

                item.price *

                (item.quantity || 1)


            , 0

        );









    const formatMoney = (money) => {


        return new Intl.NumberFormat(
            "vi-VN"
        )
            .format(money)
            + " đ";


    };









    const handleInputChange = (e) => {


        setCustomerInfo({

            ...customerInfo,

            [e.target.name]:

                e.target.value

        });


    };












    const handlePlaceOrder = async (e) => {


        e.preventDefault();




        if (
            !customerInfo.fullName ||
            !customerInfo.phoneNumber ||
            !customerInfo.address
        ) {


            setMessage(
                "⚠️ Vui lòng nhập đầy đủ thông tin!"
            );


            setTimeout(() => {

                setMessage("");

            }, 3000);


            return;

        }







        try {



            // tạo customer mới

            const customerRes =

                await axiosClient.post(

                    "/Customers/register",

                    {


                        fullName:

                            customerInfo.fullName,



                        email:

                            customerInfo.phoneNumber
                            +
                            "@gmail.com",



                        phone:

                            customerInfo.phoneNumber,



                        address:

                            customerInfo.address,



                        password:

                            "123456"

                    }

                );







            const customerId =

                customerRes.id;







            // tạo order


            const orderData = {


                customerId:


                    customerId,



                notes:


                    `
Khách hàng:
${customerInfo.fullName}


SĐT:
${customerInfo.phoneNumber}


Địa chỉ:
${customerInfo.address}


Ghi chú:
${customerInfo.notes}


Tổng tiền:
${totalAmount}
`,

                // Gửi danh sách sản phẩm trong giỏ hàng xuống Backend
                items: cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity || 1,
                    unitPrice: item.price
                }))

            };







            await axiosClient.post(

                "/Orders",

                orderData

            );







            setMessage(

                "🎉 Đặt hàng thành công!"

            );





            setTimeout(() => {


                setMessage("");


            }, 3000);








            localStorage.removeItem(
                "cart"
            );





            setTimeout(() => {


                navigate("/");


            }, 3000);






        }
        catch (error) {


            console.log(error.response);



            setMessage(

                "❌ Đặt hàng thất bại!"

            );



            setTimeout(() => {

                setMessage("");

            }, 3000);



        }


    };













    return (

        <>


            <Header />





            {

                message &&

                <div className="success-message">


                    {message}


                </div>

            }








            <style>{`

.checkout-page{

min-height:90vh;

background:#f8fafc;

padding:50px 8%;

}



.checkout-box{

max-width:900px;

margin:auto;

background:white;

padding:40px;

border-radius:30px;

box-shadow:
0 20px 50px rgba(0,0,0,.1);

}



.checkout-title{

font-size:38px;

font-weight:900;

margin-bottom:30px;

}



.form-control{

width:100%;

padding:15px;

margin-bottom:15px;

border-radius:15px;

border:1px solid #ddd;

font-size:16px;

}



.order-list{

margin-top:25px;

background:#f9fafb;

padding:20px;

border-radius:20px;

}



.item{

display:flex;

justify-content:space-between;

padding:12px 0;

border-bottom:1px dashed #ddd;

}



.total{

font-size:28px;

font-weight:900;

color:#ef4444;

margin-top:25px;

}



.order-btn{

width:100%;

margin-top:25px;

padding:16px;

border:none;

border-radius:40px;

font-size:18px;

font-weight:900;

color:white;

cursor:pointer;


background:

linear-gradient(
135deg,
#ef4444,
#f97316
);

}



.back-btn{

width:100%;

margin-top:15px;

padding:14px;

border:none;

border-radius:40px;

background:#111827;

color:white;

font-weight:800;

}
.success-message{


position:fixed;



/* góc phải phía dưới */

bottom:30px;

right:30px;



background:#22c55e;



color:white;



padding:16px 30px;



border-radius:30px;



font-size:18px;



font-weight:900;



z-index:9999;



box-shadow:
0 10px 30px rgba(0,0,0,.25);



animation:
showMessage .3s ease;


}



@keyframes showMessage{


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
to{

opacity:1;

transform:translateY(0);

}


}



`}</style>









            <div className="checkout-page">



                <div className="checkout-box">





                    <div className="checkout-title">

                        💳 Thanh toán

                    </div>







                    <form
                        onSubmit={handlePlaceOrder}
                    >




                        <input

                            className="form-control"

                            name="fullName"

                            value={customerInfo.fullName}

                            onChange={handleInputChange}

                            placeholder="Họ và tên"

                        />





                        <input

                            className="form-control"

                            name="phoneNumber"

                            value={customerInfo.phoneNumber}

                            onChange={handleInputChange}

                            placeholder="Số điện thoại"

                        />





                        <input

                            className="form-control"

                            name="address"

                            value={customerInfo.address}

                            onChange={handleInputChange}

                            placeholder="Địa chỉ giao hàng"

                        />







                        <textarea

                            className="form-control"

                            name="notes"

                            value={customerInfo.notes}

                            onChange={handleInputChange}

                            placeholder="Ghi chú"

                        />








                        <div className="order-list">


                            <h4>

                                🛒 Đơn hàng

                            </h4>





                            {

                                cartItems.map(item => (


                                    <div

                                        className="item"

                                        key={item.id}

                                    >


                                        <span>

                                            {item.name}

                                            x

                                            {item.quantity || 1}


                                        </span>




                                        <b>

                                            {
                                                formatMoney(

                                                    item.price *

                                                    (item.quantity || 1)

                                                )
                                            }

                                        </b>


                                    </div>


                                ))

                            }



                        </div>







                        <div className="total">


                            Tổng:

                            {
                                formatMoney(totalAmount)
                            }


                        </div>







                        <button

                            className="order-btn"

                        >

                            ✅ Xác nhận đặt hàng


                        </button>






                        <button

                            type="button"

                            className="back-btn"

                            onClick={() => navigate("/cart")}

                        >

                            ⬅ Quay lại giỏ hàng


                        </button>





                    </form>





                </div>


            </div>









            <Footer />


        </>


    );


};




export default Checkout;