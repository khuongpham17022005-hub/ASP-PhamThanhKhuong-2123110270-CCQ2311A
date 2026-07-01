/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.3
 * Ngay thuc hien: 18/6/2026
 */

using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace CMS.Backend.Controllers
{
    [Authorize]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;


        // "Tiêm" kết nối vào Controller
        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }



        // 1. GET: Danh sách sản phẩm + phân trang 6 sản phẩm
        public IActionResult Index(int page = 1)
        {

            int pageSize = 6;


            // Tổng số sản phẩm
            int totalProducts = _context.Products.Count();


            // Lấy sản phẩm theo trang
            var data = _context.Products
                               .Include(p => p.CategoryProduct)
                               .OrderByDescending(p => p.Id)
                               .Skip((page - 1) * pageSize)
                               .Take(pageSize)
                               .ToList();



            // Gửi dữ liệu phân trang sang View

            ViewBag.CurrentPage = page;


            ViewBag.TotalPages = (int)Math.Ceiling(
                totalProducts / (double)pageSize
            );



            return View(data);
        }



        // 2. GET: Xem chi tiết sản phẩm

        public IActionResult Details(int id)
        {

            var product = _context.Products
                                  .Include(p => p.CategoryProduct)
                                  .FirstOrDefault(p => p.Id == id);


            if (product == null)
            {
                return NotFound();
            }


            return View(product);

        }




        // 3. GET: Thêm sản phẩm

        [HttpGet]

        public IActionResult Create()
        {

            ViewBag.CategoryList =
                new SelectList(
                    _context.CategoriesProducts,
                    "Id",
                    "Name"
                );


            return View();

        }



        // 4. POST: Lưu sản phẩm mới

        [HttpPost]

        public IActionResult Create(Product model, IFormFile uploadImage)
        {


            if (uploadImage != null && uploadImage.Length > 0)
            {

                var fileName =
                    Guid.NewGuid().ToString()
                    + Path.GetExtension(uploadImage.FileName);



                var filePath =
                    Path.Combine(
                        Directory.GetCurrentDirectory(),
                        "wwwroot/images",
                        fileName
                    );



                using (var stream =
                    new FileStream(filePath, FileMode.Create))
                {
                    uploadImage.CopyTo(stream);
                }
                model.ImageUrl =
                    "/images/" + fileName;

            }

            _context.Products.Add(model);
            _context.SaveChanges();
            return RedirectToAction("Index");

        }




        // 5. GET: Sửa sản phẩm

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var product =
                _context.Products.Find(id);
            if (product == null)
                return NotFound();
            ViewBag.CategoryList =
                new SelectList(
                    _context.CategoriesProducts,
                    "Id",
                    "Name",
                    product.CategoryProductId
                );

            return View(product);

        }



        // 6. POST: Cập nhật sản phẩm

        [HttpPost]
        public IActionResult Edit(Product model, IFormFile uploadImage)
        {

            if (uploadImage != null && uploadImage.Length > 0)
            {

                var fileName =
                    Guid.NewGuid().ToString()
                    + Path.GetExtension(uploadImage.FileName);

                var filePath =
                    Path.Combine(
                        Directory.GetCurrentDirectory(),
                        "wwwroot/images",
                        fileName
                    );

                using (var stream =
                    new FileStream(filePath, FileMode.Create))
                {

                    uploadImage.CopyTo(stream);

                }
                model.ImageUrl =
                    "/images/" + fileName;

            }
            _context.Products.Update(model);

            _context.SaveChanges();

            return RedirectToAction("Index");

        }


        // 7. Xóa sản phẩm
        public IActionResult Delete(int id)
        {
            var product =
                _context.Products.Find(id);

            if (product != null)
            {

                _context.Products.Remove(product);

                _context.SaveChanges();

            }

            return RedirectToAction("Index");

        }

    }
}