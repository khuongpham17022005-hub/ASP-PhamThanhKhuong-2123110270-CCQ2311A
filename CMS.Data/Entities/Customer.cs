/*
 * Ho va ten: Pham Thanh Khuong
 * Mssv: 2123110270
 * Version 1.1
 * Ngay thuc hien: 21/5/2026
 */

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.Data.Entities
{
    public class Customer
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [Required]
        public string FullName { get; set; }



        [Required]
        [EmailAddress]
        public string Email { get; set; }



        public string? Phone { get; set; }



        public string? Address { get; set; }



        [Required]
        public string Password { get; set; }



        public virtual ICollection<Order>? Orders { get; set; }

    }
}