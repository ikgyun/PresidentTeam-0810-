-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- president 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `president` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `president`;

-- 테이블 president.blike 구조 내보내기
CREATE TABLE IF NOT EXISTS `blike` (
  `id` int(11) unsigned NOT NULL,
  `board_id` int(11) unsigned DEFAULT NULL,
  `user_idx` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_blike_board` (`board_id`),
  KEY `FK_blike_user` (`user_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.blike:~0 rows (대략적) 내보내기
DELETE FROM `blike`;
/*!40000 ALTER TABLE `blike` DISABLE KEYS */;
/*!40000 ALTER TABLE `blike` ENABLE KEYS */;

-- 테이블 president.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writer` int(11) unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `hit` int(11) unsigned DEFAULT 0,
  `like` int(11) unsigned DEFAULT 0,
  `del` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_board_user` (`writer`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.board:~45 rows (대략적) 내보내기
DELETE FROM `board`;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `subject`, `content`, `writer`, `createdAt`, `updatedAt`, `hit`, `like`, `del`) VALUES
	(1, '하이', '하이', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 1),
	(2, '안녕하세요', '안녕하세요.', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 0),
	(3, '안녕하세요', '안녕하세요.', 2, '2021-07-30 00:00:00', '2021-07-30 00:00:00', 0, 0, 0),
	(4, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:47', '2021-07-30 17:04:47', 0, 0, 0),
	(5, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:48', '2021-07-30 17:04:48', 0, 0, 0),
	(6, '안녕하세요', '안녕하세요.', 2, '2021-07-30 17:04:49', '2021-07-30 17:04:49', 0, 0, 0),
	(7, '안녕하세요', '안녕하세요.', 2, '2021-07-31 22:04:49', '2021-07-31 22:04:49', 0, 0, 0),
	(8, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:39', '2021-08-03 19:15:39', 0, 0, 0),
	(9, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:44', '2021-08-03 19:15:44', 0, 0, 0),
	(10, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:45', '2021-08-03 19:15:45', 0, 0, 0),
	(11, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:45', '2021-08-03 19:15:45', 0, 0, 0),
	(12, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:46', '2021-08-03 19:15:46', 0, 0, 0),
	(13, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:47', '2021-08-03 19:15:47', 0, 0, 0),
	(14, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:47', '2021-08-03 19:15:47', 0, 0, 0),
	(15, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:48', '2021-08-03 19:15:48', 0, 0, 0),
	(16, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:49', '2021-08-03 19:15:49', 0, 0, 0),
	(17, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:49', '2021-08-03 19:15:49', 0, 0, 0),
	(18, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:51', '2021-08-03 19:15:51', 0, 0, 0),
	(19, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:51', '2021-08-03 19:15:51', 0, 0, 0),
	(20, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:52', '2021-08-03 19:15:52', 0, 0, 0),
	(21, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:52', '2021-08-03 19:15:52', 0, 0, 0),
	(22, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:53', '2021-08-03 19:15:53', 0, 0, 0),
	(23, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:54', '2021-08-03 19:15:54', 0, 0, 0),
	(24, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:54', '2021-08-03 19:15:54', 0, 0, 0),
	(25, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:55', '2021-08-03 19:15:55', 0, 0, 0),
	(26, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:55', '2021-08-03 19:15:55', 0, 0, 0),
	(27, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:56', '2021-08-03 19:15:56', 0, 0, 0),
	(28, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:56', '2021-08-03 19:15:56', 0, 0, 0),
	(29, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:57', '2021-08-03 19:15:57', 0, 0, 0),
	(30, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:58', '2021-08-03 19:15:58', 0, 0, 0),
	(31, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:58', '2021-08-03 19:15:58', 0, 0, 0),
	(32, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:59', '2021-08-03 19:15:59', 0, 0, 0),
	(33, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:15:59', '2021-08-03 19:15:59', 0, 0, 0),
	(34, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:00', '2021-08-03 19:16:00', 0, 0, 0),
	(35, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:01', '2021-08-03 19:16:01', 0, 0, 0),
	(36, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:01', '2021-08-03 19:16:01', 0, 0, 0),
	(37, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:02', '2021-08-03 19:16:02', 0, 0, 0),
	(38, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:02', '2021-08-03 19:16:02', 0, 0, 0),
	(39, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:03', '2021-08-03 19:16:03', 0, 0, 0),
	(40, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:03', '2021-08-03 19:16:03', 0, 0, 0),
	(41, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:04', '2021-08-03 19:16:04', 0, 0, 0),
	(42, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:05', '2021-08-03 19:16:05', 0, 0, 0),
	(43, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:05', '2021-08-03 19:16:05', 0, 0, 0),
	(44, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:06', '2021-08-03 19:16:06', 0, 0, 0),
	(45, '안녕하세요', '안녕하세요.', 2, '2021-08-03 19:16:07', '2021-08-03 19:16:07', 0, 0, 0);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 president.clike 구조 내보내기
CREATE TABLE IF NOT EXISTS `clike` (
  `id` int(11) unsigned NOT NULL,
  `comment_id` int(11) unsigned DEFAULT NULL,
  `user_idx` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_blike_user` (`user_idx`) USING BTREE,
  KEY `FK_blike_board` (`comment_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.clike:~0 rows (대략적) 내보내기
DELETE FROM `clike`;
/*!40000 ALTER TABLE `clike` DISABLE KEYS */;
/*!40000 ALTER TABLE `clike` ENABLE KEYS */;

-- 테이블 president.comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `board_id` int(11) unsigned NOT NULL DEFAULT 0,
  `writer` int(11) unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `master` int(11) unsigned DEFAULT 0,
  `like` int(11) unsigned DEFAULT 0,
  `del` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_board_user` (`writer`) USING BTREE,
  KEY `FK_comment_board` (`board_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- 테이블 데이터 president.comment:~0 rows (대략적) 내보내기
DELETE FROM `comment`;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 테이블 president.hit 구조 내보내기
CREATE TABLE IF NOT EXISTS `hit` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `board_id` int(11) unsigned NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__board` (`board_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.hit:~0 rows (대략적) 내보내기
DELETE FROM `hit`;
/*!40000 ALTER TABLE `hit` DISABLE KEYS */;
/*!40000 ALTER TABLE `hit` ENABLE KEYS */;

-- 테이블 president.party 구조 내보내기
CREATE TABLE IF NOT EXISTS `party` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.party:~3 rows (대략적) 내보내기
DELETE FROM `party`;
/*!40000 ALTER TABLE `party` DISABLE KEYS */;
INSERT INTO `party` (`idx`, `name`, `img`) VALUES
	(1, '민주당', NULL),
	(2, '한국당', NULL),
	(3, '국민의당', NULL);
/*!40000 ALTER TABLE `party` ENABLE KEYS */;

-- 테이블 president.politician 구조 내보내기
CREATE TABLE IF NOT EXISTS `politician` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.politician:~3 rows (대략적) 내보내기
DELETE FROM `politician`;
/*!40000 ALTER TABLE `politician` DISABLE KEYS */;
INSERT INTO `politician` (`idx`, `name`, `img`) VALUES
	(1, '문재인', NULL),
	(2, '홍준표', NULL),
	(3, '안철수', NULL);
/*!40000 ALTER TABLE `politician` ENABLE KEYS */;

-- 테이블 president.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userid` int(11) unsigned NOT NULL DEFAULT 0,
  `nickname` varchar(50) NOT NULL,
  `hometown` varchar(50) DEFAULT NULL,
  `residence` varchar(50) DEFAULT NULL,
  `age` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `gender` tinyint(4) unsigned NOT NULL,
  `show` tinyint(4) unsigned NOT NULL DEFAULT 0,
  `status` tinyint(3) unsigned DEFAULT 0,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE,
  UNIQUE KEY `email` (`userid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.user:~11 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`idx`, `userid`, `nickname`, `hometown`, `residence`, `age`, `gender`, `show`, `status`, `image`) VALUES
	(1, 11111111, '"김동철"', '"서울"', '"서울"', 28, 0, 17, 1, NULL),
	(2, 11111112, '"김동철"', '"서울"', '"서울"', 28, 0, 0, 0, NULL),
	(4, 11111113, '김동철', '서울', '서울', 28, 0, 0, 1, NULL),
	(7, 11111114, '김동철', '서울', '서울', 28, 0, 0, 0, NULL),
	(9, 11111116, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(10, 11111119, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(12, 11111120, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(13, 11111121, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(14, 11111124, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(15, 11111127, '김동', '서울', '서울', 28, 0, 0, 0, NULL),
	(16, 11111129, '김동', '서울', '서울', 28, 0, 0, 0, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 테이블 president.vote 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote` (
  `user_idx` int(11) unsigned DEFAULT NULL,
  `politician` int(11) unsigned DEFAULT NULL,
  `vote_idx` int(11) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.vote:~0 rows (대략적) 내보내기
DELETE FROM `vote`;
/*!40000 ALTER TABLE `vote` DISABLE KEYS */;
/*!40000 ALTER TABLE `vote` ENABLE KEYS */;

-- 테이블 president.vote_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote_info` (
  `vote_idx` int(11) unsigned DEFAULT NULL,
  `politician_idx` int(11) unsigned DEFAULT NULL,
  `party_idx` int(11) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.vote_info:~3 rows (대략적) 내보내기
DELETE FROM `vote_info`;
/*!40000 ALTER TABLE `vote_info` DISABLE KEYS */;
INSERT INTO `vote_info` (`vote_idx`, `politician_idx`, `party_idx`) VALUES
	(9, 1, 1),
	(9, 2, 2),
	(9, 3, 3);
/*!40000 ALTER TABLE `vote_info` ENABLE KEYS */;

-- 테이블 president.vote_title 구조 내보내기
CREATE TABLE IF NOT EXISTS `vote_title` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- 테이블 데이터 president.vote_title:~9 rows (대략적) 내보내기
DELETE FROM `vote_title`;
/*!40000 ALTER TABLE `vote_title` DISABLE KEYS */;
INSERT INTO `vote_title` (`idx`, `name`) VALUES
	(1, '테스트'),
	(2, '테스트'),
	(3, '테스트'),
	(4, '테스트'),
	(5, '테스트'),
	(6, '테스트'),
	(7, '테스트'),
	(8, '테스트'),
	(9, '테스트');
/*!40000 ALTER TABLE `vote_title` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
