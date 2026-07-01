import React, {
    useEffect,
    useState
} from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {

        const userData =
            JSON.parse(
                localStorage.getItem("user")
            );

        const customerData =
            JSON.parse(
                localStorage.getItem("customer")
            );

        setUser(
            userData || customerData
        );

        const updateCartCount = () => {
            try {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
                setCartCount(count);
            } catch (e) {}
        };
        
        updateCartCount();
        const intervalId = setInterval(updateCartCount, 1000);
        
        return () => clearInterval(intervalId);

    }, []);

    const logout = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("customer");

        setUser(null);

        navigate("/");

    };

    return (

        <>

            <style>{`

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

.header-wrapper{
position:sticky;
top:0;
z-index:1000;
}

.header{
height:90px;
background:linear-gradient(
135deg,
#f0f8ff,
#e6f7ff
);
display:flex;
align-items:center;
justify-content:space-between;
padding:0 50px;
box-shadow:0 3px 15px rgba(0,0,0,.08);
}

.logo{
display:flex;
align-items:center;
gap:10px;
font-size:30px;
font-weight:700;
color:#0066cc;
cursor:default;
}

.logo span:first-child{
font-size:36px;
}

.search-box{
width:45%;
display:flex;
background:white;
border-radius:50px;
overflow:hidden;
border:2px solid #b3e0ff;
}

.search-box input{
flex:1;
border:none;
outline:none;
padding:14px 20px;
}

.search-box button{
border:none;
background:#0066cc;
color:white;
padding:14px 24px;
cursor:pointer;
}

.right{
display:flex;
align-items:center;
gap:15px;
}

.cart{
position:relative;
background:white;
padding:12px 18px;
border-radius:30px;
display:flex;
align-items:center;
gap:8px;
text-decoration:none;
color:#444;
font-weight:600;
border:1px solid #b3e0ff;
}

.cart-badge{
position:absolute;
top:-5px;
right:-5px;
width:22px;
height:22px;
border-radius:50%;
background:red;
color:white;
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
}

.auth{
display:flex;
align-items:center;
gap:8px;
}

.auth-link{
text-decoration:none;
color:#0066cc;
font-weight:600;
}

.account{
display:flex;
align-items:center;
gap:8px;
font-weight:600;
color:#555;
}

.logout{
border:none;
background:none;
cursor:pointer;
color:#dc3545;
font-weight:600;
}

.menu{
height:55px;
background:white;
display:flex;
justify-content:center;
align-items:center;
gap:50px;
}

.menu a{
text-decoration:none;
color:#444;
font-weight:600;
}

.menu a:hover{
color:#0066cc;
}

@media(max-width:768px){

.header{
flex-wrap:wrap;
height:auto;
padding:15px;
}

.search-box{
width:100%;
}

.menu{
overflow:auto;
justify-content:flex-start;
padding:0 20px;
}

}

`}</style>

            <div className="header-wrapper">

                <header className="header">

                    <div className="logo">
                        <span>🏠</span>
                        <span>ThanhKhuong</span>
                    </div>

                    <div className="search-box">
                        <input
                            placeholder="Tìm sản phẩm..."
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && searchKeyword.trim()) {
                                    navigate(`/shop?keyword=${encodeURIComponent(searchKeyword.trim())}`);
                                    setSearchKeyword("");
                                }
                            }}
                        />
                        <button
                            onClick={() => {
                                if (searchKeyword.trim()) {
                                    navigate(`/shop?keyword=${encodeURIComponent(searchKeyword.trim())}`);
                                    setSearchKeyword("");
                                }
                            }}
                        >
                            🔍
                        </button>
                    </div>

                    <div className="right">

                        <Link
                            to="/cart"
                            className="cart"
                        >
                            <span>🛒</span>

                            <span>
                                Giỏ hàng
                            </span>

                            <span className="cart-badge">
                                {cartCount}
                            </span>
                        </Link>

                        {
                            user ?

                                <div className="account">

                                    <span>
                                        👤
                                    </span>

                                    <span>
                                        {
                                            user.fullName ||
                                            user.name ||
                                            user.username ||
                                            user.email ||
                                            "Tài khoản"
                                        }
                                    </span>

                                    <button
                                        className="logout"
                                        onClick={logout}
                                    >
                                        Đăng xuất
                                    </button>

                                </div>

                                :

                                <div className="auth">

                                    <Link
                                        to="/login"
                                        className="auth-link"
                                    >
                                        Đăng nhập
                                    </Link>

                                    <span>/</span>

                                    <Link
                                        to="/register"
                                        className="auth-link"
                                    >
                                        Đăng ký
                                    </Link>

                                </div>
                        }

                    </div>

                </header>

                <nav className="menu">

                    <Link to="/">
                        Trang chủ
                    </Link>

                    <Link to="/shop">
                        Cửa hàng
                    </Link>

                    <Link to="/blog">
                        Tin tức / Blog
                    </Link>

                    <Link to="/about">
                        Về chúng tôi
                    </Link>

                </nav>

            </div>

        </>

    );

};

export default Header;
