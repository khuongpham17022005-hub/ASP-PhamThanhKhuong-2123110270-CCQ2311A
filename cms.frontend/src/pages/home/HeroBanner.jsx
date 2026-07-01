import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";


const HeroBanner = () => {


    const [banners, setBanners] = useState([]);

    const [index, setIndex] = useState(0);



    useEffect(() => {


        const loadProducts = async () => {


            try {


                const res =
                    await axiosClient.get("/Products");



                console.log("Products:", res);



                const data =
                    res
                        .filter(
                            item =>
                                item.imageUrl
                        )
                        .slice(0, 5)
                        .map(item => ({


                            id: item.id,


                            img:
                                item.imageUrl.startsWith("http")
                                    ?
                                    item.imageUrl
                                    :
                                    (process.env.REACT_APP_IMAGE_BASE_URL || "https://localhost:7041")
                                    +
                                    item.imageUrl,



                            title:
                                item.name,



                            desc:
                                item.description
                                    ?
                                    item.description.replace(/<[^>]*>/g, "")
                                    :
                                    "Sản phẩm nổi bật"


                        }));



                console.log(
                    "Banner:",
                    data
                );


                setBanners(data);



            }
            catch (err) {


                console.log(
                    "Lỗi lấy product:",
                    err
                );


            }


        };



        loadProducts();


    }, []);






    useEffect(() => {


        if (banners.length === 0)
            return;



        const timer =
            setInterval(() => {


                setIndex(
                    prev =>
                        (prev + 1)
                        %
                        banners.length
                );


            }, 5000);



        return () => clearInterval(timer);



    }, [banners]);






    const next = () => {


        setIndex(
            prev =>
                (prev + 1)
                %
                banners.length
        );

    };





    const prev = () => {


        setIndex(
            prev =>
                prev === 0
                    ?
                    banners.length - 1
                    :
                    prev - 1
        );


    };






    if (!banners.length)
        return null;







    return (

        <>


            <style>{`

    .hero{

        width:100%;

        height:520px;

        position:relative;

        overflow:hidden;

        border-radius:12px;
        margin:20px 0;
        box-shadow: 0 10px 30px rgba(0,0,0,.1);
    }



    .hero img{

        width:100%;

        height:100%;

        object-fit:cover;

    }





    .overlay{

        position:absolute;

        inset:0;

        padding-left:80px;

        display:flex;

        flex-direction:column;

        justify-content:center;

        color:white;

        background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
    }





    .overlay h1{
        font-size:56px;
        font-weight:800;
        margin:0;
        text-shadow: 0 2px 10px rgba(0,0,0,.3);
        line-height: 1.2;
    }
    .badge {
        background: #0066cc;
        color: white;
        padding: 5px 15px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        margin-bottom: 15px;
        width: fit-content;
    }
    .desc{
        margin-top:20px;
        font-size:18px;
        max-width: 500px;
        line-height: 1.6;
        color: #f3f4f6;
    }
    .cta-btn {
        margin-top: 30px;
        background: #0066cc;
        color: white;
        border: none;
        padding: 15px 35px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
        width: fit-content;
        transition: .3s;
    }
    .cta-btn:hover {
        background: #004c99;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,102,204,.4);
    }





    .nav{

        position:absolute;

        top:50%;

        transform:translateY(-50%);

        width:45px;

        height:45px;

        border-radius:50%;

        border:none;

        background:rgba(255,255,255,0.9);
        color:#333;
        font-size:24px;
        box-shadow: 0 4px 12px rgba(0,0,0,.15);
        transition: .3s;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        cursor: pointer;
    }
    .nav:hover {
        background: white;
        transform: translateY(-50%) scale(1.1);
    }




    .prev{

        left:20px;

    }



    .next{

        right:20px;

    }





    .dots{

        position:absolute;

        bottom:20px;

        width:100%;

        display:flex;

        justify-content:center;

        gap:10px;

    }





    .dot{

        width:10px;

        height:10px;

        border-radius:50%;

        background:#fff8;

    }





    .active{

        background:white;

    }


    `}</style>





            <section className="hero">





                <img

                    src={
                        banners[index].img
                    }

                    alt="product"



                    onError={(e) => {

                        e.target.src =
                            "/no-image.png";

                    }}

                />





                <div className="overlay">


                    <div className="badge">
                        🔥 SẢN PHẨM MỚI
                    </div>

                    <h1>
                        {banners[index].title}
                    </h1>

                    <div className="desc">
                        {banners[index].desc}
                    </div>

                    <button 
                        className="cta-btn"
                        onClick={() => window.location.href = `/product-detail/index/${banners[index].id}`}
                    >
                        Khám phá ngay ➔
                    </button>
                </div>






                <button
                    className="nav prev"
                    onClick={prev}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>





                <button
                    className="nav next"
                    onClick={next}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>






                <div className="dots">


                    {
                        banners.map((item, i) => (

                            <div

                                key={item.id}

                                className={
                                    i === index
                                        ?
                                        "dot active"
                                        :
                                        "dot"
                                }

                                onClick={() =>
                                    setIndex(i)
                                }

                            />


                        ))
                    }


                </div>




            </section>




        </>

    );

};


export default HeroBanner;