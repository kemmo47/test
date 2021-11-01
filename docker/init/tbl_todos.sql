-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2021 lúc 04:48 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `backend`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_todos`
--

CREATE TABLE `tbl_todos` (
  `todo_id` int(11) NOT NULL,
  `todo_info` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `todo_check` int(11) NOT NULL,
  `todo_complete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_todos`
--

INSERT INTO `tbl_todos` (`todo_id`, `todo_info`, `todo_check`, `todo_complete`) VALUES
(27, 'thong tin 2', 0, 0),
(28, 'cong viec moi nhat', 0, 0),
(29, 'cong viec 1', 0, 0),
(30, 'cong viec 2', 0, 0),
(31, 'cong viec 3', 0, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_todos`
--
ALTER TABLE `tbl_todos`
  ADD PRIMARY KEY (`todo_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_todos`
--
ALTER TABLE `tbl_todos`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
