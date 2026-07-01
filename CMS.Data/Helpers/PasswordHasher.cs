/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Lop tien ich ma hoa mat khau SHA256 + Salt
 */
using System.Security.Cryptography;
using System.Text;

namespace CMS.Data.Helpers
{
    /// <summary>
    /// Lớp tiện ích mã hóa mật khẩu một chiều sử dụng SHA256 kèm chuỗi Salt
    /// </summary>
    public static class PasswordHasher
    {
        // Chuỗi Salt cố định của dự án
        private const string Salt = "ThanhKhuong_Salt_2026!";

        /// <summary>
        /// Băm mật khẩu bằng SHA256 kèm Salt
        /// </summary>
        public static string HashPassword(string password)
        {
            if (string.IsNullOrEmpty(password))
                return string.Empty;

            // Ghép mật khẩu + Salt trước khi băm
            string saltedPassword = password + Salt;

            using (var sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(saltedPassword));

                // Chuyển mảng byte thành chuỗi hex
                var builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        /// <summary>
        /// Kiểm tra mật khẩu nhập vào có khớp với mật khẩu đã băm không
        /// </summary>
        public static bool VerifyPassword(string hashedPassword, string password)
        {
            if (string.IsNullOrEmpty(hashedPassword) || string.IsNullOrEmpty(password))
                return false;

            string hashOfInput = HashPassword(password);
            return hashOfInput == hashedPassword;
        }
    }
}
