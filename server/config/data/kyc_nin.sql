CREATE DATABASE  IF NOT EXISTS `kyc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kyc`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: kyc
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nin`
--

DROP TABLE IF EXISTS `nin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nin` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `confirmnininfo_by_customer` varchar(255) NOT NULL,
  `date_created` varchar(255) NOT NULL,
  `dateofbirth` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `id_number` varchar(255) NOT NULL,
  `id_type` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `permanent_residential_address` varchar(255) NOT NULL,
  `confirmName` varchar(255) DEFAULT NULL,
  `confirm` varchar(255) DEFAULT NULL,
  `confirmDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nin`
--

LOCK TABLES `nin` WRITE;
/*!40000 ALTER TABLE `nin` DISABLE KEYS */;
INSERT INTO `nin` VALUES (1,'confirm','2023-03-10 14:56 ','1999-03-10','Musa Nfia Turay','Male','e041234567','passport','sierra leonean','14 kallon drive hill station','Web Dev Bah ITN','Rejected','16: 16  14-03-2023','2023-03-10 14:41:43','2023-03-14 16:16:24',1),(2,'confirm','2023-03-10 14:56 ','1999-03-10','Musa Nfia Turay','Male','e041234567','passport','sierra leonean','14 kallon drive hill station','musa enoch','Rejected','15: 10  14-03-2023','2023-03-10 14:42:11','2023-03-14 15:10:19',1),(3,'confirm','2023-03-10 14:56 ','1999-03-10','Musa Nfia Turay','Male','e041234567','passport','sierra leonean','14 kallon drive hill station','webdev','confirmed','11: 52  14-03-2023','2023-03-10 14:43:33','2023-03-14 11:52:29',1),(4,'confirm','2023-03-10 14:56 ','1999-03-10','Abubakarr Bah','Male','e041234554','passport','sierra leonean','spur road','bah','confirmed','11: 49  14-03-2023','2023-03-10 14:44:31','2023-03-14 11:49:52',1),(5,'confirm','2023-03-10 14:56 ','1999-03-10','Boss Alan','Male','e041234588','passport','sierra leonean','hill station','Web Dev Bah ITN','Rejected','16: 25  14-03-2023','2023-03-10 14:45:20','2023-03-14 16:25:50',1),(6,'confirm','2023-03-10 14:56 ','1999-03-10','Boss Alan','Male','e041234588','passport','sierra leonean','hill station','Web Dev Bah ITN','confirmed','18: 35  15-03-2023','2023-03-14 09:02:15','2023-03-15 18:35:39',1);
/*!40000 ALTER TABLE `nin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-15 20:04:33
