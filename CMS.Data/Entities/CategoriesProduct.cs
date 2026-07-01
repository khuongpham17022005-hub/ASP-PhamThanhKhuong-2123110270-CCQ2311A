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
using System.ComponentModel.DataAnnotations;
namespace CMS.Data.Entities
{
    public class CategoriesProduct
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Tên danh m?c không du?c d? tr?ng")]
        [StringLength(100)]
        public string Name { get; set; }

        public string? Description { get; set; }

        // Quan h?: M?t danh m?c có nhi?u s?n ph?m
        public virtual ICollection<Product>? Products { get; set; }
    }
}
