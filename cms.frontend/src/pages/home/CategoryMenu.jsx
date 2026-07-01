import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import categoryProductService from "../../services/categoryProductService";


// Ảnh đại diện tương ứng với các ngành hàng
const categoryIcons = {
    "Son môi": "💄",
    "Phấn nền": "🪞",
    "Kem chống nắng": "☀️",
    "Sữa rửa mặt": "🧴",
    "Nước hoa": "🌸",
    "Mascara": "👁️",
    "Serum": "💧",
    "Toner": "🫧",
};

const defaultIcon = "🛍️";


const CategoryMenu = () => {


    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();




    useEffect(() => {


        categoryProductService
            .getAllCategoryProducts()

            .then((res) => {

                const data =
                    Array.isArray(res)
                        ? res
                        : res.data || [];


                setCategories(data);

            })

            .catch(console.error);


    }, []);






    const handleClick = (category) => {


        const name =
            category.name ||
            category.categoryName;



        navigate(
            `/shop?category=${encodeURIComponent(name)}`
        );


    };


    return (

        <>


            <style>

                {`

.category-wrapper{
    width:100%;
    padding:40px 40px;
    background:#fff;
}

.category-title{
    text-align:center;
    font-size:28px;
    font-weight:700;
    color:#0066cc;
    margin-bottom:30px;
}

.category-menu{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:25px;
}

.category-block{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    cursor:pointer;
    transition:.35s;
    text-decoration:none;
}

.category-block:hover{
    transform:translateY(-8px);
}

.category-icon-circle{
    width:90px;
    height:90px;
    border-radius:50%;
    background:linear-gradient(135deg, #e6f7ff, #f0f8ff);
    border:3px solid #b3e0ff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:36px;
    transition:.35s;
    box-shadow: 0 4px 15px rgba(0,102,204,.1);
}

.category-block:hover .category-icon-circle{
    background:linear-gradient(135deg, #0066cc, #0088ff);
    border-color:#0066cc;
    box-shadow: 0 8px 25px rgba(0,102,204,.3);
    transform:scale(1.08);
}

.category-label{
    font-size:14px;
    font-weight:700;
    color:#333;
    text-align:center;
    max-width:100px;
    line-height:1.3;
}

.category-block:hover .category-label{
    color:#0066cc;
}

@media(max-width:768px){

.category-wrapper{
    padding:20px;
}

.category-title{
    font-size:22px;
}

.category-icon-circle{
    width:70px;
    height:70px;
    font-size:28px;
}

}

                `}

            </style>



            <div className="category-wrapper">

                <h2 className="category-title">
                    ✨ Danh Mục Sản Phẩm
                </h2>

                <div className="category-menu">

                    {
                        categories.map(category => {
                            const name = category.name || category.categoryName;
                            const icon = categoryIcons[name] || defaultIcon;

                            return (
                                <div
                                    key={category.id || category.categoryId}
                                    className="category-block"
                                    onClick={() => handleClick(category)}
                                >
                                    <div className="category-icon-circle">
                                        {icon}
                                    </div>
                                    <span className="category-label">
                                        {name}
                                    </span>
                                </div>
                            );
                        })
                    }

                </div>

            </div>

        </>

    );

};



export default CategoryMenu;