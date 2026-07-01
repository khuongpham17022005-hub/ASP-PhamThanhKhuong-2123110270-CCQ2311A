import React, {
    useEffect,
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import blogService from "../../services/blogService";


import PostCard from "../../components/PostCard";




const LatestBlog = () => {



    const [blogs, setBlogs] = useState([]);


    const navigate = useNavigate();






    useEffect(() => {


        const loadBlog = async () => {


            try {


                const res =
                    await blogService.getAllPosts();



                const data =

                    Array.isArray(res)

                        ?

                        res

                        :

                        res.data || [];





                setBlogs(

                    data.slice(0, 4)

                );



            }
            catch (err) {


                console.log(
                    err
                );


            }


        };



        loadBlog();



    }, []);








    return (

        <section className="blog-section">





            <div className="blog-header">


                <h2>

                    Tin Tức Thời Trang

                </h2>


                <p>

                    Cập nhật xu hướng mới nhất

                </p>



            </div>








            <div className="blog-grid">



                {

                    blogs.map(blog => (



                        <div

                            key={
                                blog.id ||
                                blog.postId
                            }

                            className="blog-item"

                        >



                            <PostCard


                                post={blog}



                                onDetail={() => {


                                    navigate(

                                        `/blog-detail/${blog.id ||
                                        blog.postId

                                        }`

                                    );


                                }}



                            />



                        </div>



                    ))

                }



            </div>









            <style>{`

                .blog-section{

                    padding:50px 5%;

                    background:#f8fafc;

                }




                .blog-header{

                    text-align:center;

                    margin-bottom:30px;

                }




                .blog-header h2{

                    font-size:36px;

                    font-weight:700;

                    color:#1e293b;

                }




                .blog-header p{

                    color:#64748b;

                }





                .blog-grid{

                    display:grid;

                    grid-template-columns:

                    repeat(auto-fill,minmax(300px,1fr));

                    gap:25px;

                }



                .blog-item{

                    height:100%;

                }



            `}</style>






        </section>

    );


};


export default LatestBlog;