import React, {
    useEffect,
    useState
} from "react";

import {
    Link
} from "react-router-dom";


import blogService from "../../services/blogService";

import BlogSidebar from "./BlogSidebar";

import PostCard from "../../components/PostCard";


import Header from "../../components/Header";
import Footer from "../../components/Footer";





const Blog = () => {


    const [posts, setPosts] = useState([]);

    const [filterPosts, setFilterPosts] = useState([]);

    const [category, setCategory] = useState("");

    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;







    useEffect(() => {


        const loadPosts = async () => {


            try {


                const res =
                    await blogService.getAllPosts();



                const data =
                    Array.isArray(res)
                        ?
                        res
                        :
                        res.data || [];





                console.log(
                    "POST DATA:",
                    data
                );



                setPosts(data);

                setFilterPosts(data);



            }
            catch (err) {


                console.log(err);


            }


        };



        loadPosts();


    }, []);











    useEffect(() => {


        if (category === "") {


            setFilterPosts(posts);

            return;

        }






        const result =
            posts.filter(post => {



                const postCategory =

                    post.category?.name

                    ||

                    post.categoryName

                    ||

                    "";




                return (

                    postCategory.trim()

                    ===

                    category.trim()

                );



            });




        setFilterPosts(result);
        setCurrentPage(1);



    }, [
        category,
        posts
    ]);













    return (

        <>


            <Header />





            <div className="container mt-5">



                <h2 className="fw-bold mb-4" style={{ color: '#0066cc' }}>

                    📰 Tin tức mới nhất

                </h2>






                <div className="row g-4">





                    {/* SIDEBAR */}

                    <div className="col-lg-3">


                        <div className="card border-0 shadow-sm rounded-4 p-3">


                            <BlogSidebar

                                category={category}

                                setCategory={setCategory}

                            />


                        </div>


                    </div>









                    {/* POST LIST */}

                    <div className="col-lg-9">


                        <div className="row g-4">



                            {
                                filterPosts.length > 0

                                    ?

                                    <>
                                        {filterPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map(post => (



                                            <div

                                                className="col-md-6"

                                                key={post.id}

                                            >



                                                <PostCard

                                                    post={post}

                                                />



                                            </div>


                                        ))}

                                        {/* Thanh phân trang */}
                                        {filterPosts.length > postsPerPage && (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '8px',
                                                marginTop: '25px',
                                                flexWrap: 'wrap'
                                            }}>
                                                <button
                                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                    disabled={currentPage === 1}
                                                    style={{
                                                        padding: '8px 16px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        background: currentPage === 1 ? '#f3f4f6' : 'white',
                                                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    ❮ Trang trước
                                                </button>

                                                {Array.from({ length: Math.ceil(filterPosts.length / postsPerPage) }, (_, i) => (
                                                    <button
                                                        key={i + 1}
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        style={{
                                                            padding: '8px 14px',
                                                            border: currentPage === i + 1 ? '2px solid #0066cc' : '1px solid #ddd',
                                                            borderRadius: '6px',
                                                            background: currentPage === i + 1 ? '#0066cc' : 'white',
                                                            color: currentPage === i + 1 ? 'white' : '#333',
                                                            cursor: 'pointer',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                ))}

                                                <button
                                                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(filterPosts.length / postsPerPage), p + 1))}
                                                    disabled={currentPage === Math.ceil(filterPosts.length / postsPerPage)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        background: currentPage === Math.ceil(filterPosts.length / postsPerPage) ? '#f3f4f6' : 'white',
                                                        cursor: currentPage === Math.ceil(filterPosts.length / postsPerPage) ? 'not-allowed' : 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Trang sau ❯
                                                </button>
                                            </div>
                                        )}
                                    </>


                                    :



                                    <div className="text-center">

                                        Không có bài viết

                                    </div>


                            }



                        </div>


                    </div>







                </div>





            </div>





            <Footer />


        </>

    );


};


export default Blog;