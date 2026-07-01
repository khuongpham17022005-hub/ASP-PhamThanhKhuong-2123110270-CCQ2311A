import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Link } from "react-router-dom";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            alert("Vui lòng nhập email");
            return;
        }

        setLoading(true);

        try {
            const res = await axiosClient.post(
                "/customers/forgot-password",
                { email }
            );

            setMessage(res.message || "Mật khẩu mới đã được gửi đến email của bạn!");

        } catch (error) {
            alert("Email không tồn tại trong hệ thống");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>{`

.forgot-page{
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

.forgot-card{
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

.forgot-title{
    text-align:center;
    color:#333;
    font-weight:700;
    margin-bottom:25px;
}

.forgot-input{
    width:100%;
    padding:14px;
    margin-bottom:15px;
    border:1px solid #b3e0ff;
    border-radius:10px;
    outline:none;
    font-size:15px;
}

.forgot-input:focus{
    border-color:#0066cc;
    box-shadow:0 0 5px rgba(0,102,204,0.2);
}

.forgot-btn{
    width:100%;
    border:none;
    background:#0066cc;
    color:white;
    padding:14px;
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
    transition:.3s;
    font-size:16px;
}

.forgot-btn:hover{
    background:#004c99;
}

.forgot-btn:disabled{
    opacity:.6;
    cursor:not-allowed;
}

.forgot-footer{
    margin-top:15px;
    text-align:center;
}

.forgot-footer a{
    color:#0066cc;
    text-decoration:none;
    font-weight:600;
}

.success-msg{
    text-align:center;
    color:#16a34a;
    font-weight:700;
    font-size:16px;
    margin-top:15px;
    padding:15px;
    border-radius:10px;
    background:#f0fdf4;
    border:1px solid #bbf7d0;
}

            `}</style>

            <div className="forgot-page">

                <div className="forgot-card">

                    <h1 className="brand-name">
                        ThanhKhuong
                    </h1>

                    <p className="brand-slogan">
                        Smart Shopping & Tech Store
                    </p>

                    <h2 className="forgot-title">
                        Quên mật khẩu
                    </h2>

                    {message ? (
                        <div className="success-msg">
                            ✅ {message}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>

                            <p style={{ color: '#666', textAlign: 'center', marginBottom: '20px' }}>
                                Nhập email đã đăng ký, chúng tôi sẽ gửi mật khẩu mới cho bạn.
                            </p>

                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="forgot-input"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                            <button
                                type="submit"
                                className="forgot-btn"
                                disabled={loading}
                            >
                                {loading ? "Đang xử lý..." : "Gửi yêu cầu"}
                            </button>

                        </form>
                    )}

                    <div className="forgot-footer">

                        <Link to="/login">
                            ← Quay lại đăng nhập
                        </Link>

                    </div>

                </div>

            </div>

        </>
    );
}
