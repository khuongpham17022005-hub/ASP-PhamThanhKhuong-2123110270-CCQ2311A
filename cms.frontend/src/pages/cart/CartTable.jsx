import React from "react";



const CartTable = ({
    cart,
    removeItem,
    changeQty
}) => {


    if (cart.length === 0)

        return (

            <div className="text-center p-5">


                <h4>

                    Giỏ hàng trống

                </h4>


            </div>

        );






    return (



        <div className="card border-0 shadow rounded-4 overflow-hidden">





            <table className="table align-middle mb-0">


                <thead className="table-primary">


                    <tr>

                        <th>
                            Sản phẩm
                        </th>


                        <th>
                            Giá
                        </th>


                        <th>
                            Số lượng
                        </th>


                        <th>
                            Thành tiền
                        </th>


                        <th>

                        </th>


                    </tr>


                </thead>






                <tbody>



                    {
                        cart.map(item => (


                            <tr key={item.id}>


                                <td>


                                    <div className="d-flex align-items-center gap-3">



                                        <img

                                            src={
                                                item.image
                                            }

                                            width="80"

                                            height="80"

                                            style={{

                                                objectFit: "cover",

                                                borderRadius: "10px"

                                            }}

                                        />



                                        <b>

                                            {item.name}

                                        </b>


                                    </div>


                                </td>







                                <td>


                                    {

                                        item.price.toLocaleString("vi-VN")

                                    } đ


                                </td>







                                <td>


                                    <button

                                        className="btn btn-sm btn-outline-primary"

                                        onClick={() => changeQty(
                                            item.id,
                                            "minus"
                                        )}

                                    >

                                        -

                                    </button>




                                    <span className="mx-3">

                                        {
                                            item.quantity || 1
                                        }

                                    </span>





                                    <button

                                        className="btn btn-sm btn-outline-primary"

                                        onClick={() => changeQty(
                                            item.id,
                                            "plus"
                                        )}

                                    >

                                        +

                                    </button>


                                </td>







                                <td className="text-danger fw-bold">


                                    {

                                        (

                                            item.price *

                                            (item.quantity || 1)

                                        )

                                            .toLocaleString("vi-VN")

                                    } đ



                                </td>







                                <td>


                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={() => removeItem(item.id)}

                                    >

                                        Xóa

                                    </button>


                                </td>




                            </tr>



                        ))
                    }



                </tbody>




            </table>




        </div>



    );


};



export default CartTable;