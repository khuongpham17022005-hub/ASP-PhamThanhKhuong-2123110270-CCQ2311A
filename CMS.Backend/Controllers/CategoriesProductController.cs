/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.2
 * Ngay thuc hien: 21/5/2026
 */
using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CMS.Backend.Controllers
{
    [Authorize(Roles = "Admin")]
    public class CategoriesProductController : Controller
    {
        private readonly ApplicationDbContext _context;

        // "Tiêm" k?t n?i vào Controller
        public CategoriesProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            // L?y d? li?u TH?T t? b?ng CategoriesProducts trong SQL
            var data = _context.CategoriesProducts.ToList();
            return View(data);
        }
        public IActionResult Details(int id)
        {
            var category = _context.CategoriesProducts.FirstOrDefault(c => c.Id == id);
            if (category == null)
            {
                return NotFound(); // Tr? v? trang l?i 404 n?u không tìm th?y
            }
            return View(category);
        }

        // 3. GET: Hi?n th? form Thêm m?i danh m?c
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        // 4. POST: Th?c hi?n luu danh m?c m?i vào CSDL
        [HttpPost]
        public IActionResult Create(CategoriesProduct model)
        {
            _context.CategoriesProducts.Add(model);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        // 5. GET: Hi?n th? form S?a kèm d? li?u cu c?a danh m?c
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var category = _context.CategoriesProducts.Find(id);
            if (category == null) return NotFound();

            return View(category);
        }

        // 6. POST: Th?c hi?n c?p nh?t thay d?i danh m?c
        [HttpPost]
        public IActionResult Edit(CategoriesProduct model)
        {
            _context.CategoriesProducts.Update(model);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        // 7. GET/POST: Xóa danh m?c s?n ph?m theo Id
        public IActionResult Delete(int id)
        {
            var category = _context.CategoriesProducts.Find(id);
            if (category != null)
            {
                _context.CategoriesProducts.Remove(category);
                _context.SaveChanges();
            }
            return RedirectToAction("Index");
        }
    }
}
