import React, {
    useEffect,
    useState
} from "react";


import {
    useParams,
    useNavigate
} from "react-router-dom";


import blogService from "../../services/blogService";


import Header from "../../components/Header";

import Footer from "../../components/Footer";



const API_URL = process.env.REACT_APP_IMAGE_BASE_URL || "https://localhost:7041";





const BlogDetail = () => {



    const {
        id
    } = useParams();



    const navigate = useNavigate();



    const [post, setPost] = useState(null);






    useEffect(() => {


        const loadPost = async () => {


            try {


                const res =
                    await blogService.getPostById(id);



                const data =
                    res.data || res;



                setPost(data);



            }
            catch (err) {


                console.log(err);


            }


        };



        loadPost();



    }, [id]);









    if (!post)

        return (

            <>

                <Header />


                <div className="loading-box">

                    Đang tải bài viết...

                </div>


                <Footer />


            </>

        );









    const getImage = () => {



        const image =
            post.imageUrl;



        if (!image)

            return "https://via.placeholder.com/900";



        if (image.startsWith("http"))

            return image;



        return API_URL + image;


    };









    return (


        <>


            <Header />






            <main className="detail-page">





                <div className="container">






                    {/* BACK BUTTON */}

                    <button

                        className="back-btn"

                        onClick={() => navigate(-1)}

                    >

                        ← Quay lại


                    </button>


                    <article className="detail-card">







                        <h1>


                            {post.title}


                        </h1>







                        <div className="post-info">


                            📰 Tin tức thời trang


                        </div>







                        <img


                            src={getImage()}


                            className="detail-image"


                            alt={post.title}


                            onError={(e) => {


                                e.target.src =
                                    "https://via.placeholder.com/900";


                            }}


                        />








                        <div


                            className="detail-content"


                            dangerouslySetInnerHTML={{


                                __html:
                                    post.content || ""


                            }}


                        />





                    </article>





                </div>





            </main>







            <Footer />







            <style>{`


            .detail-page{


                background:#f8fafc;

                padding:40px 0 70px;

                min-height:80vh;


            }





            .loading-box{


                text-align:center;

                padding:100px;

                font-size:20px;

            }







            .back-btn{


                border:none;

                background:#e63946;

                color:white;

                padding:10px 22px;

                border-radius:30px;

                font-weight:600;

                cursor:pointer;

                margin-bottom:20px;


            }






            .back-btn:hover{


                opacity:.85;


            }








            .breadcrumb{


                color:#64748b;

                margin-bottom:20px;

                font-size:15px;


            }





            .breadcrumb span{


                margin:0 8px;


            }









            .detail-card{


                background:white;

                border-radius:25px;

                padding:40px;

                box-shadow:

                0 10px 35px rgba(0,0,0,.08);


            }







            .detail-card h1{


                font-size:42px;

                line-height:1.2;

                font-weight:800;

                color:#1e293b;

                margin-bottom:15px;


            }







            .post-info{


                display:inline-block;

                background:#ffe4e6;

                color:#e11d48;

                padding:8px 18px;

                border-radius:20px;

                font-weight:600;

                margin-bottom:30px;


            }







            .detail-image{


                width:100%;

                height:520px;

                object-fit:cover;

                border-radius:20px;

                margin-bottom:35px;


            }








            .detail-content{


                color:#334155;

                font-size:18px;

                line-height:1.9;


            }








            .detail-content img{


                max-width:100%;

                border-radius:15px;


            }








            @media(max-width:768px){


                .detail-card{


                    padding:20px;


                }



                .detail-card h1{


                    font-size:28px;


                }




                .detail-image{


                    height:300px;


                }


            }




            `}</style>






        </>


    );


};



export default BlogDetail;