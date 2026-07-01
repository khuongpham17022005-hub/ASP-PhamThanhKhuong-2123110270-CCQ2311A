USE KhuongDev_CMS_DB;
GO

-- =============================================
-- 1. USERS
-- =============================================
INSERT INTO Users (Username, PasswordHash, FullName, Role) VALUES
(N'admin', N'b5b98ecc6af4ee38f100938ab095d2d4d9b792fb3813a699aa399f947cc5649a', N'Nguyễn Văn Admin', N'Admin'),
(N'editor', N'09effb0e64a4cdc0a2fc3e96ccdd4be000ee0e052d13e6556ea61ab6ed0321b5', N'Trần Thị Editor', N'Editor'),
(N'author', N'e0010679ff707151c179d9728ecc4ad9c438731db5022320f0f7b4154c0094cf', N'Lê Văn Author', N'Author');
GO

-- =============================================
-- 2. CATEGORIES (Danh mục bài viết)
-- =============================================
INSERT INTO Categories (Name, Description) VALUES
(N'Mẹo vặt gia đình', N'Các mẹo vặt hữu ích cho gia đình'),
(N'Đánh giá sản phẩm', N'Review và đánh giá đồ gia dụng'),
(N'Tin khuyến mãi', N'Chương trình khuyến mãi, giảm giá'),
(N'Hướng dẫn sử dụng', N'Hướng dẫn sử dụng và bảo quản đồ gia dụng'),
(N'Xu hướng nội thất', N'Xu hướng thiết kế nội thất và đồ gia dụng');
GO

-- =============================================
-- 3. POSTS (Bài viết) - 15 bài
-- =============================================
INSERT INTO Posts (Title, Content, ImageUrl, CreatedDate, CategoryId) VALUES
(N'10 mẹo tiết kiệm điện khi dùng máy lạnh mùa hè', N'Mùa hè nóng bức, máy lạnh là thiết bị không thể thiếu. Tuy nhiên hóa đơn tiền điện cũng tăng vọt. Bài viết chia sẻ 10 mẹo giúp bạn tiết kiệm điện hiệu quả khi sử dụng máy lạnh: đặt nhiệt độ 26-28 độ, vệ sinh bộ lọc định kỳ, sử dụng quạt kết hợp...', N'/images/tiet-kiem-dien.jpg', '2026-05-01', 1),
(N'Cách vệ sinh máy giặt đúng cách tại nhà', N'Máy giặt sau thời gian dài sử dụng sẽ tích tụ cặn bẩn, vi khuẩn gây mùi hôi. Hướng dẫn chi tiết cách vệ sinh lồng giặt bằng baking soda và giấm trắng.', N'/images/ve-sinh-may-giat.jpg', '2026-05-05', 1),
(N'Mẹo bảo quản thực phẩm trong tủ lạnh đúng cách', N'Bảo quản thực phẩm đúng cách giúp giữ được độ tươi ngon và an toàn vệ sinh. Phân chia ngăn tủ lạnh hợp lý, nhiệt độ phù hợp cho từng loại thực phẩm.', N'/images/bao-quan-tu-lanh.jpg', '2026-05-10', 1),

(N'Review nồi chiên không dầu Philips HD9860 - Có đáng mua?', N'Đánh giá chi tiết nồi chiên không dầu Philips HD9860 sau 3 tháng sử dụng. Ưu điểm: nấu nhanh, ít dầu mỡ, dễ vệ sinh. Nhược điểm: giá cao, dung tích nhỏ cho gia đình đông người.', N'/images/review-philips.jpg', '2026-05-12', 2),
(N'So sánh robot hút bụi Ecovacs vs Roborock - Hãng nào tốt hơn?', N'So sánh chi tiết hai thương hiệu robot hút bụi hàng đầu hiện nay. Đánh giá về lực hút, khả năng điều hướng, thời lượng pin và giá cả.', N'/images/robot-hut-bui.jpg', '2026-05-15', 2),
(N'Top 5 máy lọc nước tốt nhất 2026', N'Tổng hợp và đánh giá 5 máy lọc nước bán chạy nhất năm 2026 từ các thương hiệu Kangaroo, Karofi, Sunhouse, AO Smith và Coway.', N'/images/may-loc-nuoc.jpg', '2026-05-18', 2),

(N'Flash Sale tháng 6 - Giảm đến 50% đồ gia dụng', N'Chương trình Flash Sale lớn nhất tháng 6 với hàng trăm sản phẩm gia dụng giảm giá sốc đến 50%. Áp dụng từ ngày 1-15/6/2026.', N'/images/flash-sale.jpg', '2026-06-01', 3),
(N'Mua máy giặt Samsung tặng bàn ủi hơi nước', N'Khi mua máy giặt Samsung từ 9kg trở lên, khách hàng sẽ được tặng kèm bàn ủi hơi nước Tefal trị giá 1.500.000đ. Chương trình áp dụng đến hết 30/6.', N'/images/khuyen-mai-samsung.jpg', '2026-06-05', 3),
(N'Giảm 30% toàn bộ quạt điện và quạt điều hòa', N'Nhân dịp hè, giảm 30% toàn bộ quạt điện, quạt điều hòa của các thương hiệu Panasonic, Midea, Sunhouse. Số lượng có hạn.', N'/images/giam-gia-quat.jpg', '2026-06-10', 3),

(N'Hướng dẫn sử dụng lò vi sóng an toàn', N'Những lưu ý quan trọng khi sử dụng lò vi sóng: không dùng đồ kim loại, không đun nước quá lâu, cách chọn bát đĩa phù hợp và quy trình vệ sinh đúng cách.', N'/images/lo-vi-song.jpg', '2026-06-12', 4),
(N'Cách sử dụng máy rửa chén hiệu quả nhất', N'Hướng dẫn xếp bát đĩa đúng cách, chọn chế độ rửa phù hợp, sử dụng viên rửa chén và bảo trì máy rửa chén để máy hoạt động bền bỉ.', N'/images/may-rua-chen.jpg', '2026-06-15', 4),
(N'Bảo trì máy lạnh định kỳ - Những điều cần biết', N'Máy lạnh cần được bảo trì ít nhất 2 lần/năm. Hướng dẫn các bước kiểm tra gas, vệ sinh dàn lạnh, kiểm tra ống đồng và board mạch.', N'/images/bao-tri-may-lanh.jpg', '2026-06-18', 4),

(N'Xu hướng bếp thông minh 2026', N'Bếp thông minh với các thiết bị kết nối IoT đang trở thành xu hướng. Từ tủ lạnh thông minh, bếp từ điều khiển qua app đến nồi cơm có AI.', N'/images/bep-thong-minh.jpg', '2026-06-20', 5),
(N'Phong cách tối giản trong nhà bếp hiện đại', N'Thiết kế nhà bếp tối giản với tông màu trắng-xám, đồ gia dụng âm tủ, bề mặt sạch sẽ gọn gàng đang là lựa chọn hàng đầu của các gia đình trẻ.', N'/images/bep-toi-gian.jpg', '2026-06-22', 5),
(N'Đồ gia dụng thân thiện môi trường - Xu hướng tất yếu', N'Người tiêu dùng ngày càng ưu tiên các sản phẩm gia dụng tiết kiệm năng lượng, sử dụng vật liệu tái chế và thân thiện với môi trường.', N'/images/than-thien-mt.jpg', '2026-06-24', 5);
GO

-- =============================================
-- 4. CATEGORIES PRODUCTS (Danh mục sản phẩm gia dụng)
-- =============================================
INSERT INTO CategoriesProducts (Name, Description) VALUES
(N'Thiết bị nhà bếp', N'Nồi chiên, lò nướng, máy xay, nồi cơm điện, bếp từ'),
(N'Máy giặt & Sấy', N'Máy giặt cửa trước, cửa trên, máy sấy quần áo'),
(N'Điều hòa & Quạt', N'Máy lạnh, quạt điện, quạt điều hòa'),
(N'Tủ lạnh & Máy lọc nước', N'Tủ lạnh các loại, máy lọc nước RO'),
(N'Máy hút bụi & Robot', N'Máy hút bụi cầm tay, robot hút bụi lau nhà'),
(N'Bàn ủi & Chăm sóc quần áo', N'Bàn ủi hơi nước, tủ giặt hấp, máy sấy tóc');
GO

-- =============================================
-- 5. PRODUCTS (Sản phẩm gia dụng) - 30 sản phẩm
-- =============================================
INSERT INTO Products (Name, Description, Price, StockQuantity, ImageUrl, CategoryProductId) VALUES
-- Thiết bị nhà bếp (Cat 1)
(N'Nồi chiên không dầu Philips HD9860', N'Dung tích 7.3L, công nghệ Rapid Air, màn hình cảm ứng, 5 chế độ nấu tự động. Nấu ăn healthy không cần dầu mỡ.', 4290000, 50, N'/images/philips-hd9860.jpg', 1),
(N'Nồi cơm điện tử Cuckoo CRP-LHTR1010F', N'Nồi cơm điện cao tần IH 1.8L, lòng nồi chống dính, nấu cơm ngon với 12 chế độ nấu khác nhau.', 3590000, 30, N'/images/cuckoo-1010f.jpg', 1),
(N'Bếp từ đôi Bosch PPI82560MS', N'Bếp từ âm 2 vùng nấu, công suất 3000W, mặt kính Schott Ceran, 9 mức nhiệt, chức năng hẹn giờ và khóa trẻ em.', 12990000, 15, N'/images/bosch-bep-tu.jpg', 1),
(N'Lò nướng đối lưu Panasonic NB-H3801', N'Lò nướng 38L, 2 thanh nhiệt trên dưới, đối lưu 360 độ, 5 chế độ nướng tự động. Phù hợp nướng bánh, gà, pizza.', 2190000, 40, N'/images/panasonic-lo-nuong.jpg', 1),
(N'Máy xay sinh tố Vitamix E310', N'Máy xay công suất 1380W, lưỡi dao thép không gỉ, cối 1.4L, xay nhuyễn mọi nguyên liệu trong 60 giây.', 8990000, 20, N'/images/vitamix-e310.jpg', 1),
(N'Máy pha cà phê DeLonghi Magnifica S', N'Máy pha cà phê tự động, xay hạt tươi, pha Espresso và Cappuccino, áp suất 15 bar, bình nước 1.8L.', 11990000, 12, N'/images/delonghi-cafe.jpg', 1),
(N'Nồi áp suất điện Instant Pot Duo 7-in-1', N'Nồi đa năng 7 chức năng: áp suất, nấu chậm, hấp, xào, hâm nóng, làm sữa chua, nấu cơm. Dung tích 5.7L.', 2790000, 35, N'/images/instant-pot.jpg', 1),

-- Máy giặt & Sấy (Cat 2)
(N'Máy giặt cửa ngang Samsung WW10TP44DSH', N'Máy giặt 10kg, công nghệ AI Wash, giặt hơi nước diệt khuẩn, inverter tiết kiệm điện, 23 chế độ giặt.', 11490000, 20, N'/images/samsung-ww10.jpg', 2),
(N'Máy giặt cửa trên LG T2350VSAB', N'Máy giặt 10.5kg, Smart Inverter, giặt nước nóng, 8 chương trình giặt tự động, vận hành êm ái.', 7990000, 25, N'/images/lg-t2350.jpg', 2),
(N'Máy giặt sấy Electrolux EWW1142Q7WB', N'Máy giặt 11kg sấy 7kg, UltraMix, HygienicCare diệt 99.9% vi khuẩn, SensorWash tự động cảm biến.', 16990000, 10, N'/images/electrolux-1142.jpg', 2),
(N'Máy sấy quần áo Beko DF7412GA', N'Máy sấy ngưng tụ 7kg, 15 chương trình sấy, cảm biến độ ẩm thông minh, tiết kiệm điện năng.', 6990000, 18, N'/images/beko-df7412.jpg', 2),

-- Điều hòa & Quạt (Cat 3)
(N'Điều hòa Daikin Inverter FTKZ35XVMV', N'Điều hòa 1.5HP, Inverter tiết kiệm điện, làm lạnh nhanh, kháng khuẩn, lọc bụi mịn PM2.5.', 13990000, 30, N'/images/daikin-ftkz35.jpg', 3),
(N'Điều hòa Panasonic CU/CS-XU12ZKH-8', N'Điều hòa 1.5HP, nanoe X lọc không khí, Inverter, Eco mode, vận hành siêu êm 19dB.', 12490000, 25, N'/images/panasonic-xu12.jpg', 3),
(N'Quạt điều hòa Midea AC120-18AR', N'Quạt điều hòa 18L, 3 chế độ gió, bộ lọc bụi, điều khiển từ xa, tiêu thụ chỉ 80W.', 3490000, 60, N'/images/midea-ac120.jpg', 3),
(N'Quạt trần Panasonic F-60TDN', N'Quạt trần 5 cánh, 3 tốc độ gió, motor DC tiết kiệm điện, hoạt động êm ái, đường kính 1.5m.', 2990000, 40, N'/images/panasonic-quat-tran.jpg', 3),
(N'Quạt đứng Xiaomi Mi Smart Standing Fan 2', N'Quạt đứng thông minh, điều khiển qua app Mi Home, 100 mức gió, motor DC không chổi than, siêu êm.', 1290000, 80, N'/images/xiaomi-quat.jpg', 3),

-- Tủ lạnh & Máy lọc nước (Cat 4)
(N'Tủ lạnh Samsung Inverter RT38CG6584B1SV', N'Tủ lạnh 382L, Twin Cooling Plus, Digital Inverter, ngăn đông mềm -1°C, khử mùi than hoạt tính.', 11490000, 15, N'/images/samsung-rt38.jpg', 4),
(N'Tủ lạnh LG Side-by-Side GR-D257JS', N'Tủ lạnh 635L, Door-in-Door, Linear Inverter, làm đá tự động, kết nối WiFi.', 21990000, 8, N'/images/lg-gr-d257.jpg', 4),
(N'Máy lọc nước Karofi KAD-D52', N'Máy lọc nước RO 10 lõi, công suất 20L/h, tự động rửa lõi, tích hợp nóng-lạnh-nguội.', 7490000, 25, N'/images/karofi-d52.jpg', 4),
(N'Máy lọc nước AO Smith G1', N'Máy lọc nước RO 5 lõi, công suất 12L/h, chỉ báo thay lõi thông minh, thiết kế nhỏ gọn.', 5990000, 30, N'/images/aosmith-g1.jpg', 4),

-- Máy hút bụi & Robot (Cat 5)
(N'Robot hút bụi lau nhà Ecovacs Deebot T30S', N'Robot hút bụi lau nhà, lực hút 11000Pa, LiDAR, tự động giặt giẻ, sấy khô, đổ rác tự động.', 14990000, 15, N'/images/ecovacs-t30s.jpg', 5),
(N'Robot hút bụi Roborock S8 MaxV Ultra', N'Lực hút 10000Pa, camera AI tránh vật cản, dock tự động giặt giẻ + đổ rác + đổ nước.', 19990000, 10, N'/images/roborock-s8.jpg', 5),
(N'Máy hút bụi cầm tay Dyson V15 Detect', N'Máy hút bụi không dây, laser phát hiện bụi mịn, lực hút 230AW, pin 60 phút, 5 đầu hút.', 16490000, 12, N'/images/dyson-v15.jpg', 5),
(N'Máy hút bụi Xiaomi G11', N'Máy hút bụi cầm tay không dây, lực hút 185AW, pin 60 phút, màn hình LED hiển thị.', 3490000, 45, N'/images/xiaomi-g11.jpg', 5),

-- Bàn ủi & Chăm sóc quần áo (Cat 6)
(N'Bàn ủi hơi nước Tefal FV5718', N'Bàn ủi hơi nước 2500W, phun hơi 200g/phút, mặt đế Durilium AirGlide, chống cặn.', 1590000, 50, N'/images/tefal-fv5718.jpg', 6),
(N'Bàn ủi hơi nước đứng Philips GC628', N'Bàn ủi hơi nước đứng 2400W, phun hơi liên tục 40g/phút, bình nước 1.6L, diệt khuẩn 99.9%.', 3290000, 30, N'/images/philips-gc628.jpg', 6),
(N'Tủ giặt hấp LG Styler S5GFO', N'Tủ giặt hấp thông minh, công nghệ TrueSteam, diệt 99.9% vi khuẩn, làm mới quần áo, sấy khô nhẹ nhàng.', 39990000, 5, N'/images/lg-styler.jpg', 6);
GO

-- =============================================
-- 6. CUSTOMERS (Khách hàng) - 10 khách
-- =============================================
INSERT INTO Customers (FullName, Email, Phone, Address, Password) VALUES
(N'Nguyễn Văn An', N'an.nguyen@gmail.com', N'0901234567', N'123 Nguyễn Huệ, Quận 1, TP.HCM', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Trần Thị Bích', N'bich.tran@gmail.com', N'0912345678', N'456 Lê Lợi, Quận 3, TP.HCM', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Lê Minh Châu', N'chau.le@gmail.com', N'0923456789', N'789 Trần Hưng Đạo, Quận 5, TP.HCM', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Phạm Đức Dũng', N'dung.pham@gmail.com', N'0934567890', N'12 Hai Bà Trưng, Hoàn Kiếm, Hà Nội', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Hoàng Thị Em', N'em.hoang@gmail.com', N'0945678901', N'34 Bạch Đằng, Hải Châu, Đà Nẵng', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Võ Thanh Phong', N'phong.vo@gmail.com', N'0956789012', N'56 Lý Thường Kiệt, Quận 10, TP.HCM', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Đỗ Thị Giang', N'giang.do@gmail.com', N'0967890123', N'78 Phan Đình Phùng, Ba Đình, Hà Nội', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Bùi Quốc Huy', N'huy.bui@gmail.com', N'0978901234', N'90 Ngô Quyền, Sơn Trà, Đà Nẵng', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Ngô Thị Kim', N'kim.ngo@gmail.com', N'0989012345', N'15 Pasteur, Quận 1, TP.HCM', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'),
(N'Mai Xuân Long', N'long.mai@gmail.com', N'0990123456', N'22 Hoàng Diệu, Thanh Khê, Đà Nẵng', N'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1');
GO

-- =============================================
-- 7. ORDERS (Đơn hàng) - 10 đơn
-- =============================================
INSERT INTO Orders (OrderDate, CustomerId, Status, Notes) VALUES
('2026-05-10', 1, 2, N'Giao hàng thành công'),
('2026-05-15', 2, 2, N'Đã nhận hàng'),
('2026-05-20', 3, 2, N'Giao thành công, khách hài lòng'),
('2026-06-01', 4, 1, N'Đang vận chuyển'),
('2026-06-05', 5, 1, N'Đang giao bởi Giao Hàng Nhanh'),
('2026-06-10', 6, 0, N'Chờ xác nhận'),
('2026-06-15', 7, 0, N'Chờ duyệt đơn hàng'),
('2026-06-18', 1, 2, N'Đơn hàng thứ 2 của khách An'),
('2026-06-20', 8, 1, N'Đang giao hàng'),
('2026-06-24', 9, 0, N'Khách yêu cầu giao buổi chiều');
GO

-- =============================================
-- 8. ORDER DETAILS
-- =============================================
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, UnitPrice) VALUES
(1, 1, 1, 4290000),   -- Nồi chiên Philips
(1, 4, 1, 2190000),   -- Lò nướng Panasonic

(2, 8, 1, 11490000),  -- Máy giặt Samsung
(2, 27, 1, 1590000),  -- Bàn ủi Tefal

(3, 12, 1, 13990000), -- Điều hòa Daikin
(3, 17, 1, 1290000),  -- Quạt Xiaomi

(4, 22, 1, 14990000), -- Robot Ecovacs
(4, 20, 1, 7490000),  -- Máy lọc nước Karofi

(5, 18, 1, 11490000), -- Tủ lạnh Samsung
(5, 2, 1, 3590000),   -- Nồi cơm Cuckoo

(6, 24, 2, 16490000), -- 2x Dyson V15
(6, 7, 1, 2790000),   -- Instant Pot

(7, 19, 1, 21990000), -- Tủ lạnh LG Side-by-Side
(7, 6, 1, 11990000),  -- Máy pha cà phê DeLonghi

(8, 10, 1, 16990000), -- Máy giặt sấy Electrolux
(8, 28, 1, 3290000),  -- Bàn ủi đứng Philips

(9, 3, 1, 12990000),  -- Bếp từ Bosch
(9, 5, 1, 8990000),   -- Máy xay Vitamix

(10, 14, 1, 3490000), -- Quạt điều hòa Midea
(10, 25, 1, 3490000); -- Máy hút bụi Xiaomi G11
GO

PRINT N'=== DA THEM DU LIEU MAU THANH CONG! ===';
GO
