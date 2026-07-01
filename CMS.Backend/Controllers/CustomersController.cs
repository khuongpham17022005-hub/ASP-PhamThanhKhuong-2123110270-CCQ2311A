/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 2.2
 * Ngay thuc hien: 4/6/2026
 */

using CMS.Data;
using CMS.Data.Entities;
using CMS.Data.Helpers; // Sử dụng PasswordHasher
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace CMS.Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {


        private readonly ApplicationDbContext _context;



        public CustomersController(ApplicationDbContext context)
        {
            _context = context;
        }




        // GET api/customers
        [HttpGet]
        public IActionResult GetAll()
        {

            var customers =
                _context.Customers
                .Select(x => new
                {
                    x.Id,
                    x.FullName,
                    x.Email,
                    x.Phone,
                    x.Address
                })
                .ToList();



            return Ok(customers);

        }






        // GET api/customers/1
        [HttpGet("{id}")]
        public IActionResult GetDetail(int id)
        {

            var customer =
                _context.Customers
                .FirstOrDefault(x => x.Id == id);



            if (customer == null)
            {
                return NotFound(
                    new
                    {
                        message = "Không tìm thấy khách hàng"
                    }
                );
            }



            return Ok(customer);

        }








        // POST api/customers/register
        [HttpPost("register")]
        public IActionResult Register([FromBody] Customer customer)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }





            var exist =
                _context.Customers
                .FirstOrDefault(x => x.Email == customer.Email);



            if (exist != null)
            {

                return BadRequest(
                    new
                    {
                        message = "Email đã tồn tại"
                    }
                );

            }





            // để SQL tự tăng Id
            customer.Id = 0;




            // Mã hóa mật khẩu trước khi lưu vào database
            customer.Password = PasswordHasher.HashPassword(customer.Password);

            _context.Customers.Add(customer);


            _context.SaveChanges();





            return Ok(
                new
                {
                    message = "Đăng ký thành công",
                    customer.Id,
                    customer.FullName,
                    customer.Email
                }
            );

        }


        // POST api/customers/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // Sử dụng PasswordHasher để so khớp mật khẩu đã băm
            var customer = _context.Customers
                .FirstOrDefault(x => x.Email == request.Email);

            if (customer == null || !PasswordHasher.VerifyPassword(customer.Password, request.Password))
            {
                return Unauthorized(new { message = "Email hoặc mật khẩu không đúng" });
            }

            return Ok(new
            {
                customer.Id,
                customer.FullName,
                customer.Email,
                customer.Phone,
                customer.Address
            });
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        // POST api/customers/forgot-password
        [HttpPost("forgot-password")]
        public IActionResult ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            // Tìm khách hàng theo email
            var customer = _context.Customers.FirstOrDefault(x => x.Email == request.Email);
            if (customer == null)
            {
                return NotFound(new { message = "Email không tồn tại trong hệ thống" });
            }

            // Tạo mật khẩu tạm ngẫu nhiên (6 ký tự)
            var random = new Random();
            string tempPassword = "TK" + random.Next(100000, 999999).ToString();

            // Mã hóa mật khẩu mới và cập nhật vào database
            customer.Password = PasswordHasher.HashPassword(tempPassword);
            _context.SaveChanges();

            // Gửi email mật khẩu mới cho khách hàng
            try
            {
                var mail = new System.Net.Mail.MailMessage();
                mail.From = new System.Net.Mail.MailAddress("khuongpham17022005@gmail.com", "ThanhKhuong Store");
                mail.To.Add(customer.Email);
                mail.Subject = "Khôi phục mật khẩu - ThanhKhuong Store";
                mail.Body = $@"
                    <h2>Khôi phục mật khẩu</h2>
                    <p>Xin chào <b>{customer.FullName}</b>,</p>
                    <p>Mật khẩu mới của bạn là: <b style='color:#0066cc;font-size:20px;'>{tempPassword}</b></p>
                    <p>Vui lòng đăng nhập và đổi mật khẩu ngay sau khi đăng nhập.</p>
                    <p>Trân trọng,<br/>ThanhKhuong Store</p>";
                mail.IsBodyHtml = true;

                using var smtp = new System.Net.Mail.SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new System.Net.NetworkCredential("khuongpham17022005@gmail.com", "rihyefvmlgmqtukx");
                smtp.EnableSsl = true;
                smtp.Send(mail);

                Console.WriteLine($"[Email] Đã gửi mật khẩu mới cho {customer.Email}: {tempPassword}");
            }
            catch (Exception ex)
            {
                // Log lỗi nhưng vẫn trả về thành công vì mật khẩu đã được cập nhật trong DB
                Console.WriteLine($"[Email] Lỗi gửi email quên mật khẩu: {ex.Message}");
                Console.WriteLine($"[ForgotPassword] Mật khẩu mới cho {customer.Email}: {tempPassword}");
            }

            return Ok(new { message = "Mật khẩu mới đã được gửi đến email của bạn" });
        }

        public class ForgotPasswordRequest
        {
            public string Email { get; set; }
        }

    }

}
