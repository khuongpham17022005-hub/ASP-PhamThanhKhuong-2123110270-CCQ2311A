USE KhuongDev_CMS_DB;
GO

-- =============================================
-- CHỈ CẬP NHẬT: Tên, Mô tả, Tồn kho
-- KHÔNG thay đổi: Id, Price, ImageUrl, CategoryProductId, CategoryId, CreatedDate
-- =============================================

-- =============================================
-- 1. CẬP NHẬT DANH MỤC BÀI VIẾT (Categories)
-- =============================================
UPDATE Categories SET Name = N'Mẹo vặt gia đình', Description = N'Các mẹo vặt hữu ích cho gia đình' WHERE Id = 1;
UPDATE Categories SET Name = N'Đánh giá sản phẩm', Description = N'Review và đánh giá đồ gia dụng' WHERE Id = 2;
UPDATE Categories SET Name = N'Tin khuyến mãi', Description = N'Chương trình khuyến mãi, giảm giá' WHERE Id = 3;
UPDATE Categories SET Name = N'Hướng dẫn sử dụng', Description = N'Hướng dẫn sử dụng và bảo quản đồ gia dụng' WHERE Id = 4;
UPDATE Categories SET Name = N'Xu hướng nội thất', Description = N'Xu hướng thiết kế nội thất và đồ gia dụng' WHERE Id = 5;
GO

-- =============================================
-- 2. CẬP NHẬT DANH MỤC SẢN PHẨM (CategoriesProducts)
-- =============================================
UPDATE CategoriesProducts SET Name = N'Thiết bị nhà bếp', Description = N'Nồi chiên, lò nướng, máy xay, nồi cơm điện, bếp từ' WHERE Id = 1;
UPDATE CategoriesProducts SET Name = N'Máy giặt & Sấy', Description = N'Máy giặt cửa trước, cửa trên, máy sấy quần áo' WHERE Id = 2;
UPDATE CategoriesProducts SET Name = N'Điều hòa & Quạt', Description = N'Máy lạnh, quạt điện, quạt điều hòa' WHERE Id = 3;
UPDATE CategoriesProducts SET Name = N'Tủ lạnh & Máy lọc nước', Description = N'Tủ lạnh các loại, máy lọc nước RO' WHERE Id = 4;
UPDATE CategoriesProducts SET Name = N'Máy hút bụi & Robot', Description = N'Máy hút bụi cầm tay, robot hút bụi lau nhà' WHERE Id = 5;
UPDATE CategoriesProducts SET Name = N'Bàn ủi & Chăm sóc quần áo', Description = N'Bàn ủi hơi nước, tủ giặt hấp, máy sấy tóc' WHERE Id = 6;
GO

-- =============================================
-- 3. CẬP NHẬT BÀI VIẾT (Posts) - Tên & Nội dung tiếng Việt có dấu
-- =============================================
UPDATE Posts SET 
    Title = N'10 mẹo tiết kiệm điện khi dùng máy lạnh mùa hè', 
    Content = N'Mùa hè nóng bức, máy lạnh là thiết bị không thể thiếu. Tuy nhiên hóa đơn tiền điện cũng tăng vọt. Bài viết chia sẻ 10 mẹo giúp bạn tiết kiệm điện hiệu quả khi sử dụng máy lạnh: đặt nhiệt độ 26-28 độ, vệ sinh bộ lọc định kỳ, sử dụng quạt kết hợp...'
WHERE Id = 1;

UPDATE Posts SET 
    Title = N'Cách vệ sinh máy giặt đúng cách tại nhà', 
    Content = N'Máy giặt sau thời gian dài sử dụng sẽ tích tụ cặn bẩn, vi khuẩn gây mùi hôi. Hướng dẫn chi tiết cách vệ sinh lồng giặt bằng baking soda và giấm trắng.'
WHERE Id = 2;

UPDATE Posts SET 
    Title = N'Mẹo bảo quản thực phẩm trong tủ lạnh đúng cách', 
    Content = N'Bảo quản thực phẩm đúng cách giúp giữ được độ tươi ngon và an toàn vệ sinh. Phân chia ngăn tủ lạnh hợp lý, nhiệt độ phù hợp cho từng loại thực phẩm.'
WHERE Id = 3;

UPDATE Posts SET 
    Title = N'Review nồi chiên không dầu Philips HD9860 - Có đáng mua?', 
    Content = N'Đánh giá chi tiết nồi chiên không dầu Philips HD9860 sau 3 tháng sử dụng. Ưu điểm: nấu nhanh, ít dầu mỡ, dễ vệ sinh. Nhược điểm: giá cao, dung tích nhỏ cho gia đình đông người.'
WHERE Id = 4;

UPDATE Posts SET 
    Title = N'So sánh robot hút bụi Ecovacs vs Roborock - Hãng nào tốt hơn?', 
    Content = N'So sánh chi tiết hai thương hiệu robot hút bụi hàng đầu hiện nay. Đánh giá về lực hút, khả năng điều hướng, thời lượng pin và giá cả.'
WHERE Id = 5;

UPDATE Posts SET 
    Title = N'Top 5 máy lọc nước tốt nhất 2026', 
    Content = N'Tổng hợp và đánh giá 5 máy lọc nước bán chạy nhất năm 2026 từ các thương hiệu Kangaroo, Karofi, Sunhouse, AO Smith và Coway.'
WHERE Id = 6;

UPDATE Posts SET 
    Title = N'Flash Sale tháng 6 - Giảm đến 50% đồ gia dụng', 
    Content = N'Chương trình Flash Sale lớn nhất tháng 6 với hàng trăm sản phẩm gia dụng giảm giá sốc đến 50%. Áp dụng từ ngày 1-15/6/2026.'
WHERE Id = 7;

UPDATE Posts SET 
    Title = N'Mua máy giặt Samsung tặng bàn ủi hơi nước', 
    Content = N'Khi mua máy giặt Samsung từ 9kg trở lên, khách hàng sẽ được tặng kèm bàn ủi hơi nước Tefal trị giá 1.500.000đ. Chương trình áp dụng đến hết 30/6.'
WHERE Id = 8;

UPDATE Posts SET 
    Title = N'Giảm 30% toàn bộ quạt điện và quạt điều hòa', 
    Content = N'Nhân dịp hè, giảm 30% toàn bộ quạt điện, quạt điều hòa của các thương hiệu Panasonic, Midea, Sunhouse. Số lượng có hạn.'
WHERE Id = 9;

UPDATE Posts SET 
    Title = N'Hướng dẫn sử dụng lò vi sóng an toàn', 
    Content = N'Những lưu ý quan trọng khi sử dụng lò vi sóng: không dùng đồ kim loại, không đun nước quá lâu, cách chọn bát đĩa phù hợp và quy trình vệ sinh đúng cách.'
WHERE Id = 10;

UPDATE Posts SET 
    Title = N'Cách sử dụng máy rửa chén hiệu quả nhất', 
    Content = N'Hướng dẫn xếp bát đĩa đúng cách, chọn chế độ rửa phù hợp, sử dụng viên rửa chén và bảo trì máy rửa chén để máy hoạt động bền bỉ.'
WHERE Id = 11;

UPDATE Posts SET 
    Title = N'Bảo trì máy lạnh định kỳ - Những điều cần biết', 
    Content = N'Máy lạnh cần được bảo trì ít nhất 2 lần/năm. Hướng dẫn các bước kiểm tra gas, vệ sinh dàn lạnh, kiểm tra ống đồng và board mạch.'
WHERE Id = 12;

UPDATE Posts SET 
    Title = N'Xu hướng bếp thông minh 2026', 
    Content = N'Bếp thông minh với các thiết bị kết nối IoT đang trở thành xu hướng. Từ tủ lạnh thông minh, bếp từ điều khiển qua app đến nồi cơm có AI.'
WHERE Id = 13;

UPDATE Posts SET 
    Title = N'Phong cách tối giản trong nhà bếp hiện đại', 
    Content = N'Thiết kế nhà bếp tối giản với tông màu trắng-xám, đồ gia dụng âm tủ, bề mặt sạch sẽ gọn gàng đang là lựa chọn hàng đầu của các gia đình trẻ.'
WHERE Id = 14;

UPDATE Posts SET 
    Title = N'Đồ gia dụng thân thiện môi trường - Xu hướng tất yếu', 
    Content = N'Người tiêu dùng ngày càng ưu tiên các sản phẩm gia dụng tiết kiệm năng lượng, sử dụng vật liệu tái chế và thân thiện với môi trường.'
WHERE Id = 15;
GO

-- =============================================
-- 4. CẬP NHẬT SẢN PHẨM (Products) - Tên, Mô tả tiếng Việt + Tồn kho
-- Nếu StockQuantity đang = 0 thì cập nhật lại giá trị hợp lý
-- Nếu StockQuantity đang > 0 thì giữ nguyên
-- =============================================

-- Thiết bị nhà bếp (Cat 1)
UPDATE Products SET 
    Name = N'Nồi chiên không dầu Philips HD9860',
    Description = N'Dung tích 7.3L, công nghệ Rapid Air, màn hình cảm ứng, 5 chế độ nấu tự động. Nấu ăn healthy không cần dầu mỡ.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 50 ELSE StockQuantity END
WHERE Id = 1;

UPDATE Products SET 
    Name = N'Nồi cơm điện tử Cuckoo CRP-LHTR1010F',
    Description = N'Nồi cơm điện cao tần IH 1.8L, lòng nồi chống dính, nấu cơm ngon với 12 chế độ nấu khác nhau.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 30 ELSE StockQuantity END
WHERE Id = 2;

UPDATE Products SET 
    Name = N'Bếp từ đôi Bosch PPI82560MS',
    Description = N'Bếp từ âm 2 vùng nấu, công suất 3000W, mặt kính Schott Ceran, 9 mức nhiệt, chức năng hẹn giờ và khóa trẻ em.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 15 ELSE StockQuantity END
WHERE Id = 3;

UPDATE Products SET 
    Name = N'Lò nướng đối lưu Panasonic NB-H3801',
    Description = N'Lò nướng 38L, 2 thanh nhiệt trên dưới, đối lưu 360 độ, 5 chế độ nướng tự động. Phù hợp nướng bánh, gà, pizza.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 40 ELSE StockQuantity END
WHERE Id = 4;

UPDATE Products SET 
    Name = N'Máy xay sinh tố Vitamix E310',
    Description = N'Máy xay công suất 1380W, lưỡi dao thép không gỉ, cối 1.4L, xay nhuyễn mọi nguyên liệu trong 60 giây.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 20 ELSE StockQuantity END
WHERE Id = 5;

UPDATE Products SET 
    Name = N'Máy pha cà phê DeLonghi Magnifica S',
    Description = N'Máy pha cà phê tự động, xay hạt tươi, pha Espresso và Cappuccino, áp suất 15 bar, bình nước 1.8L.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 12 ELSE StockQuantity END
WHERE Id = 6;

UPDATE Products SET 
    Name = N'Nồi áp suất điện Instant Pot Duo 7-in-1',
    Description = N'Nồi đa năng 7 chức năng: áp suất, nấu chậm, hấp, xào, hâm nóng, làm sữa chua, nấu cơm. Dung tích 5.7L.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 35 ELSE StockQuantity END
WHERE Id = 7;

-- Máy giặt & Sấy (Cat 2)
UPDATE Products SET 
    Name = N'Máy giặt cửa ngang Samsung WW10TP44DSH',
    Description = N'Máy giặt 10kg, công nghệ AI Wash, giặt hơi nước diệt khuẩn, inverter tiết kiệm điện, 23 chế độ giặt.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 20 ELSE StockQuantity END
WHERE Id = 8;

UPDATE Products SET 
    Name = N'Máy giặt cửa trên LG T2350VSAB',
    Description = N'Máy giặt 10.5kg, Smart Inverter, giặt nước nóng, 8 chương trình giặt tự động, vận hành êm ái.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 25 ELSE StockQuantity END
WHERE Id = 9;

UPDATE Products SET 
    Name = N'Máy giặt sấy Electrolux EWW1142Q7WB',
    Description = N'Máy giặt 11kg sấy 7kg, UltraMix, HygienicCare diệt 99.9% vi khuẩn, SensorWash tự động cảm biến.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 10 ELSE StockQuantity END
WHERE Id = 10;

UPDATE Products SET 
    Name = N'Máy sấy quần áo Beko DF7412GA',
    Description = N'Máy sấy ngưng tụ 7kg, 15 chương trình sấy, cảm biến độ ẩm thông minh, tiết kiệm điện năng.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 18 ELSE StockQuantity END
WHERE Id = 11;

-- Điều hòa & Quạt (Cat 3)
UPDATE Products SET 
    Name = N'Điều hòa Daikin Inverter FTKZ35XVMV',
    Description = N'Điều hòa 1.5HP, Inverter tiết kiệm điện, làm lạnh nhanh, kháng khuẩn, lọc bụi mịn PM2.5.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 30 ELSE StockQuantity END
WHERE Id = 12;

UPDATE Products SET 
    Name = N'Điều hòa Panasonic CU/CS-XU12ZKH-8',
    Description = N'Điều hòa 1.5HP, nanoe X lọc không khí, Inverter, Eco mode, vận hành siêu êm 19dB.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 25 ELSE StockQuantity END
WHERE Id = 13;

UPDATE Products SET 
    Name = N'Quạt điều hòa Midea AC120-18AR',
    Description = N'Quạt điều hòa 18L, 3 chế độ gió, bộ lọc bụi, điều khiển từ xa, tiêu thụ chỉ 80W.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 60 ELSE StockQuantity END
WHERE Id = 14;

UPDATE Products SET 
    Name = N'Quạt trần Panasonic F-60TDN',
    Description = N'Quạt trần 5 cánh, 3 tốc độ gió, motor DC tiết kiệm điện, hoạt động êm ái, đường kính 1.5m.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 40 ELSE StockQuantity END
WHERE Id = 15;

UPDATE Products SET 
    Name = N'Quạt đứng Xiaomi Mi Smart Standing Fan 2',
    Description = N'Quạt đứng thông minh, điều khiển qua app Mi Home, 100 mức gió, motor DC không chổi than, siêu êm.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 80 ELSE StockQuantity END
WHERE Id = 16;

-- Tủ lạnh & Máy lọc nước (Cat 4) - BẮT ĐẦU TỪ ID 17
UPDATE Products SET 
    Name = N'Tủ lạnh Samsung Inverter RT38CG6584B1SV',
    Description = N'Tủ lạnh 382L, Twin Cooling Plus, Digital Inverter, ngăn đông mềm -1°C, khử mùi than hoạt tính.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 15 ELSE StockQuantity END
WHERE Id = 17;

UPDATE Products SET 
    Name = N'Tủ lạnh LG Side-by-Side GR-D257JS',
    Description = N'Tủ lạnh 635L, Door-in-Door, Linear Inverter, làm đá tự động, kết nối WiFi.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 8 ELSE StockQuantity END
WHERE Id = 18;

UPDATE Products SET 
    Name = N'Máy lọc nước Karofi KAD-D52',
    Description = N'Máy lọc nước RO 10 lõi, công suất 20L/h, tự động rửa lõi, tích hợp nóng-lạnh-nguội.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 25 ELSE StockQuantity END
WHERE Id = 19;

UPDATE Products SET 
    Name = N'Máy lọc nước AO Smith G1',
    Description = N'Máy lọc nước RO 5 lõi, công suất 12L/h, chỉ báo thay lõi thông minh, thiết kế nhỏ gọn.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 30 ELSE StockQuantity END
WHERE Id = 20;

-- Máy hút bụi & Robot (Cat 5) - BẮT ĐẦU TỪ ID 21
UPDATE Products SET 
    Name = N'Robot hút bụi lau nhà Ecovacs Deebot T30S',
    Description = N'Robot hút bụi lau nhà, lực hút 11000Pa, LiDAR, tự động giặt giẻ, sấy khô, đổ rác tự động.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 15 ELSE StockQuantity END
WHERE Id = 21;

UPDATE Products SET 
    Name = N'Robot hút bụi Roborock S8 MaxV Ultra',
    Description = N'Lực hút 10000Pa, camera AI tránh vật cản, dock tự động giặt giẻ + đổ rác + đổ nước.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 10 ELSE StockQuantity END
WHERE Id = 22;

UPDATE Products SET 
    Name = N'Máy hút bụi cầm tay Dyson V15 Detect',
    Description = N'Máy hút bụi không dây, laser phát hiện bụi mịn, lực hút 230AW, pin 60 phút, 5 đầu hút.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 12 ELSE StockQuantity END
WHERE Id = 23;

UPDATE Products SET 
    Name = N'Máy hút bụi Xiaomi G11',
    Description = N'Máy hút bụi cầm tay không dây, lực hút 185AW, pin 60 phút, màn hình LED hiển thị.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 45 ELSE StockQuantity END
WHERE Id = 24;

-- Bàn ủi & Chăm sóc quần áo (Cat 6) - BẮT ĐẦU TỪ ID 25
UPDATE Products SET 
    Name = N'Bàn ủi hơi nước Tefal FV5718',
    Description = N'Bàn ủi hơi nước 2500W, phun hơi 200g/phút, mặt đế Durilium AirGlide, chống cặn.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 50 ELSE StockQuantity END
WHERE Id = 25;

UPDATE Products SET 
    Name = N'Bàn ủi hơi nước đứng Philips GC628',
    Description = N'Bàn ủi hơi nước đứng 2400W, phun hơi liên tục 40g/phút, bình nước 1.6L, diệt khuẩn 99.9%.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 30 ELSE StockQuantity END
WHERE Id = 26;

UPDATE Products SET 
    Name = N'Tủ giặt hấp LG Styler S5GFO',
    Description = N'Tủ giặt hấp thông minh, công nghệ TrueSteam, diệt 99.9% vi khuẩn, làm mới quần áo, sấy khô nhẹ nhàng.',
    StockQuantity = CASE WHEN StockQuantity = 0 THEN 5 ELSE StockQuantity END
WHERE Id = 27;
GO

PRINT N'=== CẬP NHẬT DỮ LIỆU THÀNH CÔNG! ===';
PRINT N'- Danh mục bài viết: 5 danh mục';
PRINT N'- Danh mục sản phẩm: 6 danh mục';
PRINT N'- Bài viết: 15 bài';
PRINT N'- Sản phẩm: 27 sản phẩm (tên tiếng Việt + tồn kho đã cập nhật)';
GO
