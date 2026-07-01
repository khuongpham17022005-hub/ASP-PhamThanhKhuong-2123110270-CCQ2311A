import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";


const BlogSidebar = ({

    category,
    setCategory

}) => {


    const [categories, setCategories] = useState([]);




    useEffect(() => {


        const fetchCategories = async () => {


            try {


                const res =
                    await blogService.getBlogCategories();


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







    return (

        <div>


            <style>{`

.blog-sidebar{
background:white;
padding:25px;
border-radius:12px;
box-shadow: 0 4px 15px rgba(0,0,0,.05);
border: 1px solid #eaeaea;
}

.blog-title{
font-size:20px;
font-weight:800;
margin-bottom:20px;
color: #1f2937;
border-bottom: 2px solid #f3f4f6;
padding-bottom: 15px;
}

.blog-category{
width:100%;
border:none;
padding:12px 15px;
border-radius:8px;
margin-bottom:10px;
text-align:left;
font-weight:600;
background:transparent;
color:#4b5563;
transition:.3s;
border-left: 3px solid transparent;
}

.blog-category:hover{
background:#f0f8ff;
color:#0066cc;
border-left: 3px solid #0066cc;
}

.blog-category.active{
background:#f0f8ff;
color:#0066cc;
border-left: 3px solid #0066cc;
font-weight: 700;
}



            `}</style>









            <div className="blog-sidebar">







                <div className="blog-title">
                    Danh mục bài viết
                </div>








                <button


                    className={

                        category === ""

                            ? "blog-category active"

                            : "blog-category"

                    }


                    onClick={() => setCategory("")}


                >

                    Tất cả bài viết

                </button>









                {

                    categories.map(c => (



                        <button


                            key={c.id}


                            className={

                                category ===
                                    (c.name || c.categoryName)

                                    ? "blog-category active"

                                    : "blog-category"

                            }


                            onClick={() =>
                                setCategory(
                                    c.name ||
                                    c.categoryName
                                )
                            }


                        >


                            {
                                c.name ||
                                c.categoryName
                            }


                        </button>



                    ))

                }







            </div>





        </div>


    );


};



export default BlogSidebar;