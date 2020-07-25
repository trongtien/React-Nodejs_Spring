-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 19, 2020 lúc 12:41 PM
-- Phiên bản máy phục vụ: 10.4.10-MariaDB
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `lvtn`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `admin_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `level` int(11) NOT NULL,
  `avartar` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`admin_id`, `level`, `avartar`, `fullname`, `username`, `password`, `email`, `phone`, `address`, `created_at`, `updated_at`) VALUES
('hieu', 1, 'hieu', 'Đặng Thanh Hiếu', 'hieumap1997', '123456', 'dangthanhhieu105@gmail.com', '0936825790', '130 đường 68 F10 Q6', '2020-07-14 08:04:02', '2020-07-14 08:04:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(10) NOT NULL,
  `name` varchar(36) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `create_at`, `update_at`) VALUES
(1, 'Sầu Riêng', '2020-07-19 10:34:06', '2020-07-19 10:34:06'),
(2, 'Bưởi', '2020-07-19 10:34:11', '2020-07-19 10:34:11'),
(3, 'Mãng Cầu', '2020-07-19 10:34:14', '2020-07-19 10:34:14'),
(4, 'Cam', '2020-07-19 10:34:18', '2020-07-19 10:34:18'),
(5, 'Quýt', '2020-07-19 10:34:21', '2020-07-19 10:34:21'),
(6, 'Dưa Hấu', '2020-07-19 10:34:25', '2020-07-19 10:34:25'),
(7, 'Dâu', '2020-07-19 10:34:29', '2020-07-19 10:34:29'),
(8, 'Dừa', '2020-07-19 10:34:34', '2020-07-19 10:34:34'),
(9, 'Xoài', '2020-07-19 10:34:46', '2020-07-19 10:34:46'),
(10, 'Ổi', '2020-07-19 10:34:50', '2020-07-19 10:34:50'),
(11, 'Măng Cụt', '2020-07-19 10:35:00', '2020-07-19 10:35:00'),
(12, 'ABC', '2020-07-19 10:35:20', '2020-07-19 10:35:20'),
(13, 'cccccc', '2020-07-19 10:35:25', '2020-07-19 10:35:25'),
(14, 'âccâccc', '2020-07-19 10:35:28', '2020-07-19 10:35:28'),
(15, '1', '2020-07-19 10:35:38', '2020-07-19 10:35:38'),
(16, '2', '2020-07-19 10:35:41', '2020-07-19 10:35:41'),
(17, '3', '2020-07-19 10:35:43', '2020-07-19 10:35:43'),
(18, '4', '2020-07-19 10:35:46', '2020-07-19 10:35:46'),
(19, '5', '2020-07-19 10:35:48', '2020-07-19 10:35:48'),
(20, '6', '2020-07-19 10:35:50', '2020-07-19 10:35:50'),
(21, '7', '2020-07-19 10:35:52', '2020-07-19 10:35:52'),
(22, '8', '2020-07-19 10:35:54', '2020-07-19 10:35:54'),
(23, '99', '2020-07-19 10:35:56', '2020-07-19 10:35:56'),
(24, '22', '2020-07-19 10:35:59', '2020-07-19 10:35:59'),
(25, '33', '2020-07-19 10:36:03', '2020-07-19 10:36:03'),
(26, '111', '2020-07-19 10:36:06', '2020-07-19 10:36:06'),
(27, '3232', '2020-07-19 10:36:09', '2020-07-19 10:36:09'),
(28, '2', '2020-07-19 10:36:11', '2020-07-19 10:36:11'),
(29, '4141', '2020-07-19 10:36:13', '2020-07-19 10:36:13'),
(30, '1231', '2020-07-19 10:36:16', '2020-07-19 10:36:16'),
(31, '1313', '2020-07-19 10:36:18', '2020-07-19 10:36:18'),
(32, '22', '2020-07-19 10:36:25', '2020-07-19 10:36:25'),
(33, '33', '2020-07-19 10:36:27', '2020-07-19 10:36:27'),
(34, '44', '2020-07-19 10:36:30', '2020-07-19 10:36:30'),
(35, '55', '2020-07-19 10:36:32', '2020-07-19 10:36:32'),
(36, '66', '2020-07-19 10:36:34', '2020-07-19 10:36:34'),
(37, '345', '2020-07-19 10:36:43', '2020-07-19 10:36:43'),
(38, '123', '2020-07-19 10:36:46', '2020-07-19 10:36:46'),
(39, '234', '2020-07-19 10:36:51', '2020-07-19 10:36:51'),
(40, '234', '2020-07-19 10:36:55', '2020-07-19 10:36:55'),
(41, '25', '2020-07-19 10:37:00', '2020-07-19 10:37:00'),
(42, '868', '2020-07-19 10:37:02', '2020-07-19 10:37:02'),
(43, '345', '2020-07-19 10:37:04', '2020-07-19 10:37:04'),
(44, '231123', '2020-07-19 10:37:07', '2020-07-19 10:37:07'),
(45, 'aa', '2020-07-19 10:37:30', '2020-07-19 10:37:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `comment_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetails`
--

CREATE TABLE `orderdetails` (
  `order_detail_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `order_id` char(36) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` char(36) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `status_order` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status_product` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `product_name`, `price`, `discount`, `amount`, `image`, `status_product`, `content`, `created_at`, `updated_at`) VALUES
(1, 28, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:17', '2020-07-19 10:39:17'),
(2, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:29', '2020-07-19 10:39:29'),
(4, 2, 'acccbc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:44', '2020-07-19 10:39:44'),
(5, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(6, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(7, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(8, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(9, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(10, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(11, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(12, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(13, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(14, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png'', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(15, 22, 'abc', 50000, 0, 50, 'aenvy_new_zealand.png, 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(16, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(17, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(18, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(19, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(20, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(21, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(22, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(23, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(24, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:39:57', '2020-07-19 10:39:57'),
(25, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(26, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(27, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(28, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(29, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(30, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(31, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(32, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(33, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:10', '2020-07-19 10:40:10'),
(34, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(35, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(36, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(37, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(38, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(39, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(40, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20'),
(41, 22, 'abc', 50000, 0, 50, 'envy_new_zealand.png', 'a', 'a', '2020-07-19 10:40:20', '2020-07-19 10:40:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `level` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`level`, `fullname`, `username`, `password`, `email`, `phone`, `address`, `created_at`, `updated_at`) VALUES
('1', 'phan le trng tien', 'user1', '$2b$10$AYQrVsfqaBwprt1TimXxjefM465khoweSCEINQ/4Eb7Ukumu9ESqq', '', '0707525136', '180 cao lo phuong 3 quan 10', '2020-07-11 11:22:14', '2020-07-11 11:22:14'),
('1', 'phan le trng tien', 'user13101', '$2b$10$thhju1i/aPbifDc7e4JTTOPyTUQU7wx/3aXJ31Li6uKXcJG4Lqj.u', 'phanletrongtien@gmail.com', '0707525136', '180 cao lo phuong 3 quan 10', '2020-07-06 10:43:19', '2020-07-06 10:43:19');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Chỉ mục cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `order_detail_id` (`order_detail_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
