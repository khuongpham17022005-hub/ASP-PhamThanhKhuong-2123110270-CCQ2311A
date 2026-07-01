import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";


const MIN_PRICE = 0;



const ShopSidebar = ({

    category,
    setCategory,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice

}) => {



    const [categories, setCategories] = useState([]);





    useEffect(() => {


        const fetchCategories = async () => {


            try {


                const res =
                    await axiosClient.get(
                        "/CategoriesProducts"
                    );


                const data =
                    Array.isArray(res)
                        ? res
                        : res.data || [];



                setCategories(data);


            }
            catch (err) {

                console.log(err);

            }


        };



        fetchCategories();


    }, []);








    const changePrice = (type, value) => {


        let current =
            Number(

                type === "min"

                    ? (
                        minPrice === ""
                            ? 100000
                            : minPrice
                    )

                    :

                    (
                        maxPrice === ""
                            ? 0
                            : maxPrice
                    )

            );



        current += value;



        if (current < MIN_PRICE)

            current = MIN_PRICE;




        type === "min"

            ? setMinPrice(current)

            : setMaxPrice(current);



    };









    const handleCategoryChange = (e) => {


        const value = e.target.value;



        setCategory(value);



        if (value === "") {


            setMinPrice(100000);

            setMaxPrice(0);


        }


    };








    const handleSelectClick = () => {


        // bấm lại tất cả sản phẩm vẫn reset
        if (category === "") {


            setMinPrice(100000);

            setMaxPrice(0);


        }


    };











    return (

        <div>



            <style>{`

.sidebar-box{

background:white;

padding:25px;

border-radius:12px;

box-shadow:0 4px 15px rgba(0,0,0,.05);
border: 1px solid #eaeaea;

}



.sidebar-title{

font-size:22px;

font-weight:900;

margin-bottom:20px;

}



.category-select{

height:45px;

border-radius:8px;
border: 1px solid #e5e7eb;

}




.price-row{

display:flex;

align-items:center;

gap:10px;

margin-bottom:15px;

}



.price-btn{

width:38px;

height:38px;

border:none;

border-radius:8px;

background:#f0f8ff;

color:#0066cc;


font-size:22px;

font-weight:bold;

cursor:pointer;

}



.price-input{

height:42px;

border-radius:8px;

text-align:center;

font-weight:700;

color:#0066cc;
border: 1px solid #e5e7eb;

}




.price-input::-webkit-inner-spin-button,
.price-input::-webkit-outer-spin-button{

-webkit-appearance:none;

margin:0;

}



.price-input{

-moz-appearance:textfield;

}

            `}</style>









            <div className="sidebar-box">









                <div className="sidebar-title">

                    Danh mục

                </div>









                <select


                    className="form-control category-select mb-4"


                    value={category}


                    onChange={handleCategoryChange}


                    onClick={handleSelectClick}


                >



                    <option value="">


                        Tất cả sản phẩm


                    </option>





                    {

                        categories.map(c => (


                            <option


                                key={c.id}


                                value={
                                    c.name ||
                                    c.categoryName
                                }


                            >

                                {
                                    c.name ||
                                    c.categoryName
                                }


                            </option>


                        ))

                    }



                </select>












                <div className="sidebar-title">

                    Khoảng giá

                </div>









                <div className="price-row">



                    <button

                        className="price-btn"

                        onClick={() =>
                            changePrice(
                                "min",
                                -10000
                            )
                        }

                    >

                        −

                    </button>









                    <input


                        type="number"


                        className="form-control price-input"


                        value={
                            minPrice === ""
                                ? 100000
                                : minPrice
                        }


                        onChange={
                            e =>
                                setMinPrice(
                                    e.target.value
                                )
                        }


                    />










                    <button

                        className="price-btn"

                        onClick={() =>
                            changePrice(
                                "min",
                                10000
                            )
                        }

                    >

                        +

                    </button>



                </div>














                <div className="price-row">



                    <button

                        className="price-btn"

                        onClick={() =>
                            changePrice(
                                "max",
                                -10000
                            )
                        }

                    >

                        −

                    </button>









                    <input


                        type="number"


                        className="form-control price-input"


                        value={
                            maxPrice === ""
                                ? 0
                                : maxPrice
                        }


                        onChange={
                            e =>
                                setMaxPrice(
                                    e.target.value
                                )
                        }


                    />









                    <button

                        className="price-btn"

                        onClick={() =>
                            changePrice(
                                "max",
                                100000
                            )
                        }

                    >

                        +

                    </button>



                </div>








            </div>







        </div>

    );


};



export default ShopSidebar;