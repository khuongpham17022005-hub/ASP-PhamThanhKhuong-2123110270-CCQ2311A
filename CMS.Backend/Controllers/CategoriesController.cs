/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 2
 * Ngay thuc hien: 4/6/2026
 */
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CMS.Data;
using System.Threading.Tasks;
using System.Linq;

namespace CMS.Backend.Controllers
{
    // C?u hình c?ng du?ng d?n phân bi?t rõ ràng: api/Categories
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Hàm HTTP GET l?y toàn b? chuyên m?c bài vi?t tin t?c
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                // L?y d? li?u t? b?ng chuyên m?c tin t?c
                var categories = await _context.Categories
                    .Select(c => new {
                        c.Id,
                        c.Name,
                        c.Description
                    })
                    .ToListAsync();

                return Ok(categories);
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "L?i k?t n?i co s? d? li?u chuyên m?c",
                    detail = ex.Message
                });
            }
        }
    }
}