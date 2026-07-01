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
        public class Category
        {
            public int Id { get; set; }
            public string Name { get; set; } // Tên danh m?c (vd: Tin Giáo D?c)
            public string Description { get; set; }

            // Quan h?: M?t danh m?c có nhi?u bài vi?t
            public virtual ICollection<Post> Posts { get; set; }
        }
}
