import React from "react";


const LoadingOrEmpty = ({
    loading,
    products
}) => {


    if (loading)

        return (

            <div className="text-center mt-5">

                <div className="spinner-border text-danger">

                </div>

            </div>

        );





    if (products.length === 0)

        return (

            <div className="text-center mt-5">


                <img

                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"

                    width="120"

                />



                <h5>

                    Không tìm thấy sản phẩm nào phù hợp với tiêu chí của bạn

                </h5>



            </div>

        );



    return null;


};


export default LoadingOrEmpty;