/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 2
 * Ngay thuc hien: 4/6/2026
 */
using Microsoft.AspNetCore.Mvc;
using CMS.Data; // Thay b?ng Namespace c?a project ch?a ApplicationDbContext c?a b?n

namespace CMS.Backend.Controllers
{
    // 1. Ð?nh nghia du?ng d?n d? g?i API. [controller] s? t? l?y tên "Posts"
    // Khi ch?y, d?a ch? s? là: https://localhost:xxxx/api/posts
    [Route("api/[controller]")]

    // 2. Ðánh d?u dây là m?t API Controller d? h? th?ng h? tr? các tính nang RESTful
    [ApiController]

    // 3. API Controller ph?i k? th?a t? ControllerBase (thay vì Controller nhu MVC)
    public class PostsController : ControllerBase
    {
        // 4. Khai báo bi?n k?t n?i Database
        private readonly ApplicationDbContext _context;

        // 5. Hàm kh?i t?o (Constructor): "Tiêm" k?t n?i Database vào d? s? d?ng
        public PostsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            // L?y d? li?u t? b?ng Posts
            var posts = _context.Posts
                .OrderByDescending(p => p.Id) // S?p x?p bài m?i nh?t lên d?u
                .Select(p => new {            // "G?t t?a" d? li?u: ch? l?y nh?ng tru?ng c?n thi?t
                    p.Id,
                    p.Title,
                    p.ImageUrl,
                    p.CreatedDate,
                    CategoryName = p.Category.Name // L?y tên danh m?c thay vì ch? l?y ID
                })
                .ToList();

            // Tr? v? k?t qu? cho Frontend kèm mã tr?ng thái 200 (Thành công)
            return Ok(posts);
        }
        // 2. Ð?nh nghia du?ng d?n có tham s?: api/posts/category/{id}
        [HttpGet("category/{categoryId}")]
        public IActionResult GetByCategory(int categoryId)
        {
            // L?c các bài vi?t có CategoryId trùng v?i ID truy?n vào t? URL
            var posts = _context.Posts
                .Where(p => p.CategoryId == categoryId)
                .Select(p => new {
                    p.Id,
                    p.Title,
                    p.ImageUrl,
                    p.CreatedDate
                })
                .ToList();

            return Ok(posts);
        }
        // 1. Ð?nh nghia du?ng d?n nh?n ID: api/posts/{id}
        [HttpGet("{id}")]
        public IActionResult GetDetail(int id)
        {
            // 2. Tìm bài vi?t d?u tiên có Id kh?p v?i tham s? truy?n vào
            var post = _context.Posts
                .FirstOrDefault(p => p.Id == id);

            // 3. X? lý tru?ng h?p không tìm th?y (ID không t?n t?i)
            if (post == null)
            {
                // Tr? v? l?i 404 kèm thông báo du?i d?ng JSON
                return NotFound(new { message = "Không tìm th?y bài vi?t này trong h? th?ng" });
            }

            // 4. Tr? v? bài vi?t tìm th?y kèm mã 200 (Thành công)
            return Ok(post);
        }



    }
}
