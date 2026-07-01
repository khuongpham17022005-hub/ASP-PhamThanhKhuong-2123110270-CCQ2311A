import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axiosClient.post(
                "/customers/login",
                {
                    email,
                    password
                }
            );

            const data = res;

            localStorage.setItem(
                "customer",
                JSON.stringify(data)
            );

            alert("Đăng nhập thành công");

            navigate("/");

        } catch (error) {

            alert("Email hoặc mật khẩu không đúng");

        }

    };

    return (
        <>

            <style>{`

.login-page{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(
        135deg,
        #f0f8ff,
        #e6f7ff
    );
    padding:20px;
}

.login-card{
    width:100%;
    max-width:420px;
    background:white;
    padding:35px;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,102,204,0.1);
    border:1px solid #e6f7ff;
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

.login-title{
    text-align:center;
    color:#333;
    font-weight:700;
    margin-bottom:25px;
}

.login-input{
    width:100%;
    padding:14px;
    margin-bottom:15px;
    border:1px solid #b3e0ff;
    border-radius:10px;
    outline:none;
    font-size:15px;
}

.login-input:focus{
    border-color:#0066cc;
    box-shadow:0 0 5px rgba(0,102,204,0.2);
}

.login-btn{
    width:100%;
    border:none;
    background:#0066cc;
    color:white;
    padding:14px;
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
}

.login-btn:hover{
    background:#004c99;
}

.login-footer{
    margin-top:15px;
    text-align:center;
}

.login-footer a{
    color:#0066cc;
    text-decoration:none;
    font-weight:600;
}

`}</style>

            <div className="login-page">

                <div className="login-card">

                    <h1 className="brand-name">
                        ThanhKhuong
                    </h1>

                    <p className="brand-slogan">
                        Smart Shopping & Tech Store
                    </p>

                    <h2 className="login-title">
                        Đăng nhập tài khoản
                    </h2>

                    <form onSubmit={handleLogin}>

                        <input
                            type="email"
                            placeholder="Nhập email"
                            className="login-input"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className="login-input"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                        <button
                            type="submit"
                            className="login-btn"
                        >
                            Đăng nhập
                        </button>

                    </form>

                    <div className="login-footer">

                        Chưa có tài khoản?{" "}

                        <Link to="/register">
                            Đăng ký ngay
                        </Link>

                        <br />
                        <Link to="/forgot-password" style={{ marginTop: '10px', display: 'inline-block' }}>
                            Quên mật khẩu?
                        </Link>

                    </div>

                </div>

            </div>

        </>
    );
}
