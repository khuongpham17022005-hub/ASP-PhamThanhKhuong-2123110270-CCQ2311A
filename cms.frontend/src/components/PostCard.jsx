import React from "react";

import {
    useNavigate
} from "react-router-dom";



const API_URL =
    process.env.REACT_APP_IMAGE_BASE_URL || "https://localhost:7041";





const PostCard = ({
    post
}) => {



    const navigate =
        useNavigate();







    const getImage = () => {



        const img =

            post.imageUrl
            ||
            post.image
            ||
            post.postImage
            ||
            post.thumbnail
            ||
            post.imagePath;




        if (!img)

            return "/no-image.png";





        if (img.startsWith("http"))

            return img;





        return (

            `${API_URL}/${img.replace(/^\/+/, "")
            }`

        );


    };







    const title =

        post.title

        ||

        post.postTitle

        ||

        "Không có tiêu đề";








    const handleDetail = () => {



        const id =

            post.id

            ||

            post.postId;





        console.log(
            "BLOG ID:",
            id
        );





        navigate(
            `/blog-detail/${id}`
        );


    };









    return (



        <div className="blog-card">





            <div className="blog-image">



                <img

                    src={getImage()}

                    alt={title}


                    onError={(e) => {

                        e.target.src =
                            "/no-image.png";

                    }}

                />


            </div>









            <div className="blog-content">





                <h3 className="blog-title">


                    {title}


                </h3>







                <button


                    className="detail-link"


                    onClick={handleDetail}


                >

                    Xem chi tiết ➔


                </button>





            </div>








            <style>{`

                .blog-card{
                    background:white;
                    border-radius:12px;
                    overflow:hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,.05);
                    transition:.3s;
                    height:100%;
                    border: 1px solid #eaeaea;
                    display: flex;
                    flex-direction: column;
                }

                .blog-card:hover{
                    transform:translateY(-6px);
                    box-shadow: 0 10px 25px rgba(0,0,0,.1);
                }

                .blog-image{
                    height:200px;
                    overflow:hidden;
                }

                .blog-image img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    transition:.5s;
                }
                
                .blog-card:hover .blog-image img{
                    transform: scale(1.05);
                }

                .blog-content{
                    padding:20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .blog-title{
                    font-size:18px;
                    font-weight:700;
                    color:#1f2937;
                    margin-bottom:15px;
                    line-height: 1.4;
                    flex: 1;
                }

                .detail-link{
                    border:none;
                    background:none;
                    color:#0066cc;
                    font-weight:700;
                    cursor:pointer;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: auto;
                    transition: .3s;
                }
                .detail-link:hover{
                    color:#004c99;
                }



            `}</style>




        </div>


    );


};



export default PostCard;