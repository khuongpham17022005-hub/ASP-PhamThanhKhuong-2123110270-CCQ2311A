import React from "react";

const Footer = () => {
    return (
        <>
            <style>{`
                .footer {
                    background: linear-gradient(135deg, #f0f8ff, #e6f7ff);
                    color: #333;
                    padding-top: 60px;
                    margin-top: 80px;
                    border-top: 1px solid #b3e0ff;
                }

                .footer-container {
                    max-width: 1300px;
                    margin: auto;
                    padding: 0 5%;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                }

                .footer-column h3 {
                    font-size: 26px;
                    color: #0066cc;
                    margin-bottom: 20px;
                }

                .footer-column h4 {
                    font-size: 18px;
                    margin-bottom: 18px;
                    color: #004c99;
                }

                .footer-column p {
                    color: #555;
                    line-height: 1.8;
                    margin-bottom: 10px;
                }

                .footer-column ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-column ul li {
                    margin-bottom: 12px;
                }

                .footer-column ul li a {
                    text-decoration: none;
                    color: #555;
                    transition: .3s;
                }

                .footer-column ul li a:hover {
                    color: #0066cc;
                    padding-left: 5px;
                }

                .social-links {
                    display: flex;
                    gap: 12px;
                    margin-top: 15px;
                }

                .social-links a {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: #0066cc;
                    font-size: 18px;
                    border: 1px solid #b3e0ff;
                    transition: .3s;
                }

                .social-links a:hover {
                    background: #0066cc;
                    color: white;
                    transform: translateY(-3px);
                }

                .footer-bottom {
                    border-top: 1px solid #b3e0ff;
                    text-align: center;
                    margin-top: 50px;
                    padding: 25px 15px;
                    color: #777;
                    font-size: 14px;
                }

                .newsletter {
                    display: flex;
                    margin-top: 15px;
                }

                .newsletter input {
                    flex: 1;
                    padding: 12px;
                    border: 1px solid #b3e0ff;
                    outline: none;
                    border-radius: 8px 0 0 8px;
                }

                .newsletter button {
                    border: none;
                    background: #0066cc;
                    color: white;
                    padding: 12px 18px;
                    cursor: pointer;
                    border-radius: 0 8px 8px 0;
                    font-weight: 600;
                    transition: .3s;
                }

                .newsletter button:hover {
                    background: #004c99;
                }

                @media(max-width:768px){
                    .footer-container{
                        grid-template-columns:1fr;
                    }
                }
            `}</style>

            <footer className="footer">
                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-column">
                        <h3>🏠 ThanhKhuong</h3>
                        <p>
                            Thương hiệu đồ gia dụng uy tín, mang đến sản phẩm
                            chất lượng cao cho ngôi nhà của bạn.
                        </p>

                        <div className="social-links">
                            <a href="#">📘</a>
                            <a href="#">📷</a>
                            <a href="#">🎵</a>
                            <a href="#">▶️</a>
                        </div>
                    </div>

                    {/* Chính sách */}
                    <div className="footer-column">
                        <h4>Chính Sách</h4>
                        <ul>
                            <li><a href="#">Bảo mật thông tin</a></li>
                            <li><a href="#">Đổi trả hàng</a></li>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                            <li><a href="#">Vận chuyển</a></li>
                        </ul>
                    </div>

                    {/* Danh mục */}
                    <div className="footer-column">
                        <h4>Sản Phẩm</h4>
                        <ul>
                            <li><a href="#">Tủ lạnh</a></li>
                            <li><a href="#">Máy giặt</a></li>
                            <li><a href="#">Điều hoà</a></li>
                            <li><a href="#">Lò vi sóng</a></li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div className="footer-column">
                        <h4>Liên Hệ</h4>
                        <p>📍 TP. Hồ Chí Minh</p>
                        <p>📞 0123 456 789</p>
                        <p>✉ support@thanhkhuong.com</p>

                    </div>

                </div>

                <div className="footer-bottom">
                    © 2026 ThanhKhuong. All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;