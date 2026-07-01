import React from "react";


const ShopHeader = ({
    keyword,
    setKeyword,
    count
}) => {


    return (

        <div className="mb-4">


            <input

                className="form-control"

                placeholder="Tìm sản phẩm..."

                value={keyword}

                onChange={
                    e => setKeyword(e.target.value)
                }

            />



            <h5 className="mt-3">

                Tìm thấy {count} sản phẩm

            </h5>



        </div>


    );


};


export default ShopHeader;