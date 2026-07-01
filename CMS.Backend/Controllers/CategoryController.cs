/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.2
 * Ngay thuc hien: 21/5/2026
 */
using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization; // C?n thêm namespace này
namespace CMS.Backend.Controllers;

[Authorize] 
public class CategoryController : Controller
{
    private readonly ApplicationDbContext _context;

    public CategoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        // L?y toàn b? dòng trong b?ng Categories
        var data = await _context.Categories.ToListAsync();

        // G?i sang Views/Category/Index.cshtml (IEnumerable&lt;Category&gt;)
        return View(data);
    }
    // 1. Hàm GET: Dùng d? hi?n th? giao di?n Form cho  nh?p
    [HttpGet]
    public IActionResult Create()
    {
        return View();
    }

    // 2. Hàm POST: Dùng d? dón d? li?u t? Form g?i lên và luu vào SQL
    [HttpPost]
    public IActionResult Create(Category model)
    {
        // BU?C 1: Thêm d? li?u vào b? nh? t?m c?a Entity Framework
        _context.Categories.Add(model);

        // BU?C 2: Ra l?nh cho h? th?ng ghi d? li?u th?t s? vào SQL Server
        _context.SaveChanges();

        // Sau khi luu thành công, t? d?ng quay v? trang danh sách
        return RedirectToAction("Index");
    }
    // Action nh?n vào Id c?a danh m?c c?n xóa
    public IActionResult Delete(int id)
    {
        // Bu?c 1: Tìm d?i tu?ng danh m?c trong Database b?ng Id
        var category = _context.Categories.Find(id);

        // Ki?m tra n?u tìm th?y thì m?i xóa
        if (category != null)
        {
            // Bu?c 2: L?nh xóa kh?i b? nh? t?m (Tracking)
            _context.Categories.Remove(category);

            // Bu?c 3: Ch?t phiên làm vi?c, xóa th?c s? trong SQL Server
            _context.SaveChanges();
        }

        // Sau khi xóa xong, quay l?i trang danh sách d? c?p nh?t giao di?n
        return RedirectToAction("Index");
    }
    // 1. Hàm GET: Tìm d? li?u cu và d? lên Form
    [HttpGet]
    public IActionResult Edit(int id)
    {
        // Tìm danh m?c trong Database theo Id [cite: 348, 350]
        var category = _context.Categories.Find(id);

        if (category == null) return NotFound();

        return View(category); // G?i d?i tu?ng tìm du?c sang giao di?n Edit
    }

    // 2. Hàm POST: Nh?n d? li?u m?i t? ngu?i dùng và luu l?i
    [HttpPost]
    public IActionResult Edit(Category model)
    {
        // L?nh c?p nh?t d?i tu?ng vào b? nh? t?m
        _context.Categories.Update(model);

        // Luu thay d?i th?c s? xu?ng SQL Server [cite: 504, 509]
        _context.SaveChanges();

        // Quay l?i trang danh sách d? xem k?t qu?
        return RedirectToAction("Index");
    }


}
