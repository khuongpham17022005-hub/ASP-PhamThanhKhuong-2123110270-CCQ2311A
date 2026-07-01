/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.2
 * Ngay thuc hien: 21/5/2026
 */
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using CMS.Data; // Thay bằng Namespace của project Data
using CMS.Data.Helpers; // Sử dụng PasswordHasher để mã hóa mật khẩu

public class AccountController : Controller
{
    private readonly ApplicationDbContext _context;

    public AccountController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Login()
    {
        return View();
    }
    [HttpGet]
    public IActionResult AccessDenied()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Login(string username, string password)
    {
        // 1. Kiểm tra tài khoản trong Database
        // Sử dụng PasswordHasher để so khớp mật khẩu đã được mã hóa SHA256
        var user = _context.Users.FirstOrDefault(u => u.Username == username);
        if (user != null && !PasswordHasher.VerifyPassword(user.PasswordHash, password))
        {
            user = null; // Mật khẩu không khớp
        }

        if (user != null)
        {
            // 2. Thiết lập danh tính (Claims)
            var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Role, user.Role), // Lưu vai trò: Admin/Editor
            new Claim("FullName", user.FullName)
        };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            // 3. Đăng nhập và lưu Cookie vào trình duyệt
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity));

            return RedirectToAction("Index", "Home");
        }

        ViewBag.Error = "Tên đăng nhập hoặc mật khẩu không đúng!";
        return View();
    }

    // Hàm đăng xuất
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return RedirectToAction("Login");
    }

}
