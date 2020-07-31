-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2020 at 03:58 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tweet`
--

CREATE TABLE `tweet` (
  `id` int(10) NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tweet`
--

INSERT INTO `tweet` (`id`, `title`, `content`) VALUES
(1, 'hello', 'world'),
(2, 'hello2', 'hi'),
(3, 'hi', 'mytweet'),
(4, 'hi', 'mytweet'),
(5, 'final tweet', 'idk'),
(6, 'live', 'tweet'),
(7, 'newtweet', 'hello world');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_fname` text NOT NULL,
  `user_lname` text NOT NULL,
  `user_email` text NOT NULL,
  `user_password` text NOT NULL,
  `created` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_fname`, `user_lname`, `user_email`, `user_password`, `created`) VALUES
(1, 'elonwa', '', 'spaceX@gmail.com', '$2b$10$teq8a5ohPCJGwYcYB43XhuBmfuzZqV6OWvf0pLXL0/ZpZKy7n58iO', '2020-07-29 11:14:28'),
(2, 'balaji', 'bechara', 'jaanede@gmail.com', '$2b$10$oUIIUVk.y5I1sCmNzW6M5eI2pkIs5BOzyo6oDZkPeASoCOSNqIA5.', '2020-07-29 17:36:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tweet`
--
ALTER TABLE `tweet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweet`
--
ALTER TABLE `tweet`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
