-- =============================================
-- Script cập nhật mật khẩu từ dạng thô sang SHA256 + Salt
-- Salt: "ThanhKhuong_Salt_2026!"
-- Chạy script này SAU KHI đã triển khai PasswordHasher
-- =============================================

USE KhuongDev_CMS_DB;
GO

-- =============================================
-- 1. CẬP NHẬT MẬT KHẨU BẢNG USERS
-- =============================================

-- admin123 => b5b98ecc6af4ee38f100938ab095d2d4d9b792fb3813a699aa399f947cc5649a
UPDATE Users SET PasswordHash = 'b5b98ecc6af4ee38f100938ab095d2d4d9b792fb3813a699aa399f947cc5649a'
WHERE Username = 'admin';

-- editor123 => 09effb0e64a4cdc0a2fc3e96ccdd4be000ee0e052d13e6556ea61ab6ed0321b5
UPDATE Users SET PasswordHash = '09effb0e64a4cdc0a2fc3e96ccdd4be000ee0e052d13e6556ea61ab6ed0321b5'
WHERE Username = 'editor';

-- author123 => e0010679ff707151c179d9728ecc4ad9c438731db5022320f0f7b4154c0094cf
UPDATE Users SET PasswordHash = 'e0010679ff707151c179d9728ecc4ad9c438731db5022320f0f7b4154c0094cf'
WHERE Username = 'author';

PRINT N'=== DA CAP NHAT MAT KHAU USERS THANH CONG ===';
GO


-- =============================================
-- 2. CẬP NHẬT MẬT KHẨU BẢNG CUSTOMERS
-- =============================================

-- pass123 => d123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1
UPDATE Customers SET Password = 'd123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1'
WHERE Password = 'pass123';

PRINT N'=== DA CAP NHAT MAT KHAU CUSTOMERS THANH CONG ===';
GO


-- =============================================
-- 3. CẬP NHẬT SEED-DATA CHO LẦN CHẠY SAU
-- Các mật khẩu sau khi hash:
-- admin123 => b5b98ecc6af4ee38f100938ab095d2d4d9b792fb3813a699aa399f947cc5649a
-- editor123 => 09effb0e64a4cdc0a2fc3e96ccdd4be000ee0e052d13e6556ea61ab6ed0321b5
-- author123 => e0010679ff707151c179d9728ecc4ad9c438731db5022320f0f7b4154c0094cf
-- pass123 => d123c8a5f0e2425aab03ea6b7fd5a53f110675e1ed6556a2f5d193e59b1d83c1
-- 123456 => bb1c95b958c68da64266ae793c08e9339adcfc5dd2f25307f60bdd56abc3b640
-- =============================================

PRINT N'';
PRINT N'============================================';
PRINT N'  THONG TIN DANG NHAP SAU KHI CAP NHAT:';
PRINT N'============================================';
PRINT N'  Admin: admin / admin123';
PRINT N'  Editor: editor / editor123';
PRINT N'  Author: author / author123';
PRINT N'  Khach hang: <email> / pass123';
PRINT N'============================================';
GO
