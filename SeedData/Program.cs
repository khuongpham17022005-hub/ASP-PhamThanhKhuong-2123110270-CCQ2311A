using CMS.Data;
using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<ApplicationDbContext>()
    .UseSqlServer("Server=localhost;Database=KhuongDev_CMS_DB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True")
    .Options;

using var db = new ApplicationDbContext(options);

// Update Product images - loremflickr tra anh that theo keyword
var products = db.Products.OrderBy(p => p.Id).ToList();
var productImages = new[] {
    "https://loremflickr.com/400/400/airfryer",             // 1 Noi chien khong dau
    "https://loremflickr.com/400/400/ricecooker",           // 2 Noi com dien
    "https://loremflickr.com/400/400/inductionstove",       // 3 Bep tu
    "https://loremflickr.com/400/400/oven,baking",          // 4 Lo nuong
    "https://loremflickr.com/400/400/blender,smoothie",     // 5 May xay sinh to
    "https://loremflickr.com/400/400/coffeemachine",        // 6 May pha ca phe
    "https://loremflickr.com/400/400/pressurecooker",       // 7 Noi ap suat
    "https://loremflickr.com/400/400/washingmachine",       // 8 May giat Samsung
    "https://loremflickr.com/400/400/washingmachine",       // 9 May giat LG
    "https://loremflickr.com/400/400/washerdryer",          // 10 May giat say
    "https://loremflickr.com/400/400/clothesdryer",         // 11 May say quan ao
    "https://loremflickr.com/400/400/airconditioner",       // 12 Dieu hoa Daikin
    "https://loremflickr.com/400/400/airconditioner",       // 13 Dieu hoa Panasonic
    "https://loremflickr.com/400/400/aircooler",            // 14 Quat dieu hoa
    "https://loremflickr.com/400/400/ceilingfan",           // 15 Quat tran
    "https://loremflickr.com/400/400/standingfan",          // 16 Quat dung
    "https://loremflickr.com/400/400/refrigerator",         // 17 Tu lanh Samsung
    "https://loremflickr.com/400/400/refrigerator",         // 18 Tu lanh LG
    "https://loremflickr.com/400/400/waterpurifier",        // 19 May loc nuoc Karofi
    "https://loremflickr.com/400/400/waterfilter",          // 20 May loc nuoc AO Smith
    "https://loremflickr.com/400/400/robotvacuum",          // 21 Robot Ecovacs
    "https://loremflickr.com/400/400/robotvacuum",          // 22 Robot Roborock
    "https://loremflickr.com/400/400/vacuumcleaner",        // 23 Dyson V15
    "https://loremflickr.com/400/400/vacuumcleaner",        // 24 Xiaomi hut bui
    "https://loremflickr.com/400/400/steamiron",            // 25 Ban ui Tefal
    "https://loremflickr.com/400/400/garmentsteamer",       // 26 Ban ui dung Philips
    "https://loremflickr.com/400/400/wardrobe",             // 27 Tu giat hap LG
};
for (int i = 0; i < products.Count && i < productImages.Length; i++)
    products[i].ImageUrl = productImages[i] + "?lock=" + products[i].Id;

// Update Post images
var posts = db.Posts.OrderBy(p => p.Id).ToList();
var postImages = new[] {
    "https://loremflickr.com/400/400/airconditioner,saving",  // Tiet kiem dien may lanh
    "https://loremflickr.com/400/400/washingmachine,clean",   // Ve sinh may giat
    "https://loremflickr.com/400/400/refrigerator,food",       // Bao quan tu lanh
    "https://loremflickr.com/400/400/airfryer,review",        // Review noi chien
    "https://loremflickr.com/400/400/robotvacuum,compare",    // So sanh robot hut bui
    "https://loremflickr.com/400/400/waterpurifier,best",     // Top may loc nuoc
    "https://loremflickr.com/400/400/sale,discount,shopping",  // Flash sale
    "https://loremflickr.com/400/400/washingmachine,promo",   // KM may giat Samsung
    "https://loremflickr.com/400/400/electricfan,summer",     // Giam gia quat
    "https://loremflickr.com/400/400/microwaveoven",          // Lo vi song
    "https://loremflickr.com/400/400/dishwasher",              // May rua chen
    "https://loremflickr.com/400/400/aircon,maintenance",      // Bao tri may lanh
    "https://loremflickr.com/400/400/smartkitchen",           // Bep thong minh
    "https://loremflickr.com/400/400/minimalistkitchen",      // Phong cach toi gian
    "https://loremflickr.com/400/400/ecofriendly,green",      // Than thien moi truong
};
for (int i = 0; i < posts.Count && i < postImages.Length; i++)
    posts[i].ImageUrl = postImages[i] + "?lock=" + posts[i].Id;

db.SaveChanges();
Console.WriteLine("=== Cap nhat thanh cong " + products.Count + " san pham va " + posts.Count + " bai viet ===");
