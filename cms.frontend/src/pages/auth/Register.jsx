import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();


        if (
            !formData.fullName ||
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.password
        ) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }


        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(formData.email)) {

            alert("Email không hợp lệ");
            return;
        }


        if (formData.password.length < 6) {

            alert("Mật khẩu phải từ 6 ký tự");
            return;

        }



        try {


            await axiosClient.post(
                "/customers/register",
                formData
            );


            alert("Đăng ký thành công");


            navigate("/login");


        } catch (error) {

            console.log(error);

            alert("Đăng ký thất bại");

        }

    };



    return (

        <div className="register-page">


            <div className="register-card">


                <h1 className="brand-name">
                    ThanhKhuong
                </h1>


                <p className="brand-slogan">
                    Smart Shopping & Tech Store
                </p>



                <h2 className="register-title">
                    Đăng ký tài khoản
                </h2>



                <form onSubmit={handleSubmit}>


                    <input
                        className="register-input"
                        type="text"
                        name="fullName"
                        placeholder="Họ và tên"
                        value={formData.fullName}
                        onChange={handleChange}
                    />


                    <input
                        className="register-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />


                    <input
                        className="register-input"
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                    />


                    <input
                        className="register-input"
                        type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        value={formData.address}
                        onChange={handleChange}
                    />


                    <input
                        className="register-input"
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={formData.password}
                        onChange={handleChange}
                    />



                    <button className="register-btn">

                        Đăng ký

                    </button>


                </form>




                <div className="register-footer">

                    Đã có tài khoản?

                    <Link to="/login">
                        {" "}Đăng nhập ngay
                    </Link>

                </div>



            </div>




            <style>{`

                *{
                    box-sizing:border-box;
                }


                .register-page{

                    min-height:100vh;

                    display:flex;

                    justify-content:center;

                    align-items:center;

                    background:
                    linear-gradient(
                        135deg,
                        #f0f8ff,
                        #e6f7ff
                    );

                    padding:20px;

                }



                .register-card{

                    width:100%;

                    max-width:420px;

                    background:white;

                    padding:35px;

                    border-radius:20px;

                    box-shadow:
                    0 10px 30px
                    rgba(0,102,204,0.1);
                    border: 1px solid #e6f7ff;
                }




                .brand-name{

                    text-align:center;

                    font-size:48px;

                    font-weight:900;

                    background:linear-gradient(
                        90deg,
                        #0066cc,
                        #3399ff
                    );
                    -webkit-background-clip:text;
                    -webkit-text-fill-color:transparent;

                    letter-spacing:5px;
                    margin-bottom:8px;
                }



                .brand-slogan{

                    text-align:center;

                    color:#666;
                    font-style:italic;
                    margin-bottom:25px;

                }




                .register-title{

                    text-align:center;

                    margin-bottom:25px;

                    color:#333;
                    font-weight:700;
                }





                .register-input{


                    width:100%;

                    padding:14px;

                    margin-bottom:15px;

                    border:

                    1px solid #b3e0ff;


                    border-radius:10px;

                    font-size:15px;


                    outline:none;

                }



                .register-input:focus{

                    border-color:#0066cc;
                    box-shadow:0 0 5px rgba(0,102,204,0.2);
                }





                .register-btn{


                    width:100%;

                    padding:14px;

                    border:none;

                    border-radius:10px;

                    background:#0066cc;

                    color:white;

                    font-size:16px;

                    font-weight:600;

                    cursor:pointer;
                    transition:.3s;

                }




                .register-btn:hover{

                    background:#004c99;

                }





                .register-footer{

                    text-align:center;

                    margin-top:15px;

                }




                .register-footer a{

                    color:#0066cc;

                    font-weight:600;

                    text-decoration:none;

                }


            `}</style>



        </div>

    );

}