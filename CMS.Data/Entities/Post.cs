/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.0
 * Ngay thuc hien: 21/5/2026
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Data.Entities
{
        public class Post
        {
            public int Id { get; set; }
            public string Title { get; set; } // Tiêu d? bài vi?t
            public string Content { get; set; } // N?i dung chi ti?t
            public string ImageUrl { get; set; } // Hình ?nh d?i di?n
            public DateTime CreatedDate { get; set; } = DateTime.Now;

            // Khóa ngo?i liên k?t t?i Category
            public int CategoryId { get; set; }
            public virtual Category Category { get; set; }
        }
}
