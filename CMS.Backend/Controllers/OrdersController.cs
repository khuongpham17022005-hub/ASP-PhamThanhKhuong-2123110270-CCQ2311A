/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 3.0
 * Ngay thuc hien: 30/6/2026
 */
using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;

namespace CMS.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private readonly ApplicationDbContext _context;


        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpGet]
        public IActionResult GetAll()
        {

            var orders = _context.Orders
                .Select(x => new
                {
                    x.Id,
                    x.OrderDate,
                    x.Status,
                    x.Notes,
                    x.CustomerId
                })
                .ToList();


            return Ok(orders);

        }




        // POST api/orders - Đặt hàng mới kèm chi tiết đơn hàng
        [HttpPost]
        public IActionResult Create(
            [FromBody] OrderRequest request
        )
        {
            // Bước 1: Tạo bản ghi Order
            var order = new Order
            {
                CustomerId = request.CustomerId,
                Notes = request.Notes,
                OrderDate = DateTime.Now,
                Status = 0
            };

            _context.Orders.Add(order);
            _context.SaveChanges(); // Lưu để lấy Order.Id

            // Bước 2: Tạo chi tiết đơn hàng (OrderDetail) và trừ tồn kho
            if (request.Items != null && request.Items.Count > 0)
            {
                foreach (var item in request.Items)
                {
                    // Tìm sản phẩm trong database
                    var product = _context.Products.Find(item.ProductId);
                    if (product == null)
                    {
                        return BadRequest(new { message = $"Không tìm thấy sản phẩm có Id = {item.ProductId}" });
                    }

                    // Kiểm tra tồn kho
                    if (product.StockQuantity < item.Quantity)
                    {
                        return BadRequest(new { message = $"Sản phẩm '{product.Name}' không đủ hàng trong kho! (Còn {product.StockQuantity}, yêu cầu {item.Quantity})" });
                    }

                    // Trừ số lượng tồn kho
                    product.StockQuantity -= item.Quantity;

                    // Tạo bản ghi OrderDetail
                    var detail = new OrderDetail
                    {
                        OrderId = order.Id,
                        ProductId = item.ProductId,
                        Quantity = item.Quantity,
                        UnitPrice = item.UnitPrice
                    };
                    _context.OrderDetails.Add(detail);
                }
                _context.SaveChanges();
            }

            // Bước 3: Gửi email thông báo đơn hàng cho khách
            try
            {
                var customer = _context.Customers.Find(request.CustomerId);
                if (customer != null && !string.IsNullOrEmpty(customer.Email))
                {
                    SendOrderEmail(customer, order, request.Items);
                }
            }
            catch (Exception ex)
            {
                // Ghi log lỗi email nhưng không làm gián đoạn đặt hàng
                Console.WriteLine($"[Email] Lỗi gửi email: {ex.Message}");
            }

            return Ok(new
            {
                message = "Đặt hàng thành công",
                id = order.Id
            });

        }

        /// <summary>
        /// Gửi email thông tin đơn hàng cho khách hàng
        /// </summary>
        private void SendOrderEmail(Customer customer, Order order, List<OrderItemRequest>? items)
        {
            var body = $@"
                <h2>Xác nhận đơn hàng #{order.Id}</h2>
                <p>Xin chào <b>{customer.FullName}</b>,</p>
                <p>Cảm ơn bạn đã đặt hàng tại ThanhKhuong Store!</p>
                <h3>Chi tiết đơn hàng:</h3>
                <table border='1' cellpadding='8' cellspacing='0' style='border-collapse:collapse;'>
                    <tr style='background:#0066cc;color:white;'>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>";

            decimal totalAmount = 0;
            if (items != null)
            {
                foreach (var item in items)
                {
                    var product = _context.Products.Find(item.ProductId);
                    var subtotal = item.UnitPrice * item.Quantity;
                    totalAmount += subtotal;
                    body += $@"
                    <tr>
                        <td>{product?.Name ?? "Sản phẩm"}</td>
                        <td>{item.Quantity}</td>
                        <td>{item.UnitPrice:N0}đ</td>
                        <td>{subtotal:N0}đ</td>
                    </tr>";
                }
            }

            body += $@"
                </table>
                <h3 style='color:#d93025;'>Tổng tiền: {totalAmount:N0}đ</h3>
                <p>Đơn hàng sẽ được xử lý trong thời gian sớm nhất.</p>
                <p>Trân trọng,<br/>ThanhKhuong Store</p>";

            var mail = new MailMessage();
            mail.From = new MailAddress("khuongpham17022005@gmail.com", "ThanhKhuong Store");
            mail.To.Add(customer.Email);
            mail.Subject = $"Xác nhận đơn hàng #{order.Id} - ThanhKhuong Store";
            mail.Body = body;
            mail.IsBodyHtml = true;

            using var smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("khuongpham17022005@gmail.com", "rihyefvmlgmqtukx");
            smtp.EnableSsl = true;
            smtp.Send(mail);

            Console.WriteLine($"[Email] Đã gửi email đơn hàng #{order.Id} cho {customer.Email}");
        }


    }


    // DTO nhận dữ liệu đặt hàng từ Frontend
    public class OrderRequest
    {
        public int CustomerId { get; set; }
        public string? Notes { get; set; }
        public List<OrderItemRequest>? Items { get; set; }
    }

    // DTO cho từng sản phẩm trong đơn hàng
    public class OrderItemRequest
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}