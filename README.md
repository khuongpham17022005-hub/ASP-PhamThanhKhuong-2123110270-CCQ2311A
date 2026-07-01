# ThanhKhuongCMS Solution

## Thông tin sinh viên
- **Họ tên:** Nguyễn Thị Thanh Khuông
- **MSSV:** 2123110270

## Mô tả dự án
Website quản lý bán hàng mỹ phẩm (CMS) xây dựng theo kiến trúc **3 phân tầng**:
- `CMS.Data` – Tầng dữ liệu (Entities, DbContext, Migrations, Helpers)
- `CMS.Backend` – Tầng xử lý nghiệp vụ (ASP.NET Core MVC + Web API)
- `cms.frontend` – Tầng giao diện (ReactJS)

## Yêu cầu hệ thống
- **.NET 8 SDK** (hoặc mới hơn)
- **Node.js** (phiên bản 18.x trở lên)
- **SQL Server** (LocalDB hoặc SQL Server Express)
- **Visual Studio 2022** (khuyến nghị)

## Hướng dẫn chạy dự án

### 1. Chạy Backend (ASP.NET Core)

```bash
# Bước 1: Mở file ThanhKhuongCMS_Solution.sln bằng Visual Studio 2022

# Bước 2: Cấu hình chuỗi kết nối database
# Mở file CMS.Backend/appsettings.json
# Chỉnh sửa ConnectionString "DefaultConnection" cho đúng với SQL Server của bạn

# Bước 3: Chạy dự án
# Nhấn F5 hoặc Ctrl+F5 để chạy
# Backend sẽ chạy tại: https://localhost:7041 (HTTPS) hoặc http://localhost:5129 (HTTP)
```

### 2. Chạy Frontend (ReactJS)

```bash
# Bước 1: Mở terminal/cmd, di chuyển vào thư mục frontend
cd cms.frontend

# Bước 2: Cài đặt các thư viện cần thiết
npm install

# Bước 3: Chạy ứng dụng React
npm start

# Frontend sẽ chạy tại: http://localhost:3000
```

### 3. Cấu hình biến môi trường Frontend
File `.env` trong thư mục `cms.frontend`:
```env
REACT_APP_API_URL=http://localhost:5129/api
REACT_APP_IMAGE_BASE_URL=https://localhost:7041
```

## Cấu trúc thư mục chính

```
ThanhKhuongCMS_Solution/
├── CMS.Data/                  # Tầng dữ liệu
│   ├── Entities/              # Các lớp thực thể (User, Product, Order...)
│   ├── Helpers/               # PasswordHasher (SHA256 + Salt)
│   ├── Migrations/            # Database migrations
│   └── ApplicationDbContext.cs
│
├── CMS.Backend/               # Tầng Backend
│   ├── Controllers/           # MVC Controllers + API Controllers
│   ├── Views/                 # Razor Views (Admin)
│   └── Program.cs             # Cấu hình ứng dụng
│
├── cms.frontend/              # Tầng Frontend (ReactJS)
│   ├── src/
│   │   ├── api/               # Axios client
│   │   ├── components/        # Components dùng chung
│   │   ├── pages/             # Các trang giao diện
│   │   └── services/          # Service gọi API
│   └── .env                   # Biến môi trường
│
├── .gitignore                 # Loại bỏ node_modules, bin, obj
└── README.md                  # File hướng dẫn này
```

## Database
- **SQL Server** với database `KhuongDev_CMS_DB`
- **8 bảng chính:** User, Category, Post, CategoriesProduct, Product, Customer, Order, OrderDetail

## Tính năng chính
- **Admin:** CRUD đầy đủ cho 8 thực thể, phân quyền Admin
- **Frontend:** Trang chủ, Cửa hàng (lọc, phân trang), Blog, Chi tiết sản phẩm, Giỏ hàng, Thanh toán
- **Bảo mật:** Mã hóa mật khẩu SHA256 + Salt, Cookie Authentication, [Authorize]
- **CORS:** Chính sách `AllowReactApp` chỉ mở cho `http://localhost:3000`
