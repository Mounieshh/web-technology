-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2020 at 12:51 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Database: `test_db`

-- --------------------------------------------------------

-- Table structure for table `person`

CREATE TABLE `person` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `college_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `mobile` VARCHAR(15) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `event` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `person`

INSERT INTO `person` (`id`, `college_id`, `name`, `mobile`, `password`, `event`) VALUES
(1, 'COL123', 'Ela', '1234567890', '$2y$10$EhzEDVqseBF.XpTIgeK9Hu.P3kqgntfwcRyy9vMZ9jZcOkEYCK.eC', 'Tech Talk'),
(2, 'COL456', 'Elias', '0987654321', '$2y$10$EhzEDVqseBF.XpTIgeK9Hu.P3kqgntfwcRyy9vMZ9jZcOkEYCK.eC', 'Workshop');

-- AUTO_INCREMENT for table `person`
ALTER TABLE `person`
  MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
