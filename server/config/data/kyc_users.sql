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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userUid` varchar(255) NOT NULL,
  `userIDD` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userPhone` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `token` text,
  `resetPasswordToken` text,
  `resetPasswordExpires` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'f7dabba2-9f43-48ff-a0c7-c5f15ee35bff','1234567','musa enoch','23279482050','men270992@gmail.com','$2b$10$wctrtUinV0rt9ORN5HsRJuGvM93rB.2q5bYg7Qe3WpCI/DlQy4EAe','admin',NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVWlkIjoiZjdkYWJiYTItOWY0My00OGZmLWEwYzctYzVmMTVlZTM1YmZmIiwiaWF0IjoxNjc4OTA5NzgzLCJleHAiOjE2Nzg5MTAwODN9.lWSS1HpCVW7hqW-KAc-EwTbxorJyvkFyXpDxxOWzVI4','1678910083465','2023-03-09 01:56:23','2023-03-15 19:49:43'),(2,'98d920e5-936a-4b8d-92b8-9daee040ee2b','1234567','musa mennn','23279482050','men270992@gmail.com','$2b$10$aQ7dsar8YoC3Wgt6F./vg.j7tbV/9a79AHdqYid4r4mfb7yU5K11S','admin',NULL,NULL,NULL,'2023-03-09 01:56:29','2023-03-14 17:58:36'),(3,'491ee3a2-1e6a-458e-8203-a939df05e091','1234567','musa johnny','23279482050','men270992@gmail.com','$2b$10$SDv/s0YoDAqdydk/HB7QQeUc1T5hRovixzbl/GbXG2vTIp0cSSoHu','admin',NULL,NULL,NULL,'2023-03-09 01:57:22','2023-03-09 02:05:16'),(4,'9e5cbf1f-79f4-4188-b168-691b18774baa','1234567','musa johnny','23279482050','men270992@gmail.com','$2b$10$Jm.mAAMxXki6W2XmMl8ubuo76BU98grOLWiVlBv/IQhkibXRBL2g6','admin',NULL,NULL,NULL,'2023-03-10 09:22:20','2023-03-10 09:22:20'),(5,'c7114849-086b-433c-ba14-a4f6505d98d3','1234567','musa johnny','23279482050','men270992@gmail.com','$2b$10$QuLFwvDH1.bGdbTnXEGatOxEUWxijAv.M8QLQ50SI4jg1EEjYnwZe','admin',NULL,NULL,NULL,'2023-03-10 09:22:22','2023-03-10 09:22:22'),(6,'1aaa1dd6-ab2d-45ef-80e4-31ff48570326','1234567','musa johnny','23279482050','men270992@gmail.com','$2b$10$tdiGOkPBgcZ.FrwNHIykgeFkPNXUy.LTcqSqaN30Mhx2YbThRX70C','admin',NULL,NULL,NULL,'2023-03-10 09:22:24','2023-03-10 09:22:24'),(7,'baac1373-1e90-45d4-b6b6-34b584bf1d13','1234567','musa johnny','23279482050','men270992@gmail.com','$2b$10$8wyha6uHDfZpDKjjpQjGP.d/HI/p8dCEYhJ23fc4UzSiUerkZGqyy','admin',NULL,NULL,NULL,'2023-03-10 09:22:26','2023-03-10 09:22:26'),(8,'1abda31c-1f5b-4cdd-922b-cb7ebdff56dc','123','musaaaaa ','23279482050','men270992@gmail.com','$2b$10$jQtQrlkVj4tLa9I12nmFuOmvCxLADmLRuPCeEYDvZ82I68DfKB9MO','admin',NULL,NULL,NULL,'2023-03-10 12:21:48','2023-03-10 12:21:48'),(9,'57628c5e-bee8-4ec4-aa88-661b0a752b96','123','musaaaaa ','23279482050','men270992@gmail.com','$2b$10$lXrxenJEebU0taoq7nydDuzE.vrJFBhs9/J1IbOM5esCymaKl9exy','admin',NULL,NULL,NULL,'2023-03-10 12:21:51','2023-03-10 12:21:51'),(10,'47f06df8-5c6b-4352-a710-97bdc51d2e03','123','musaa teeen ','23279482050','men270992@gmail.com','$2b$10$zMamK.C6wY7lagEDBdBQPuzJHcxgwOra0p2rCEreKk5rtFr4a5EQG','admin',NULL,NULL,NULL,'2023-03-10 12:22:23','2023-03-10 12:22:23'),(11,'618d3348-4d17-4c5d-98c0-9dc35b40fbaf','2345678','Musa Enoch Men','23279482050','men@270992@gmail.com','$2b$10$ARXxtZXafdK8bTYjEGTLd.Qu4wsXLclavu0vk7krFuECHlT3eW6Zi','admin',NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVWlkIjoiNjE4ZDMzNDgtNGQxNy00YzVkLTk4YzAtOWRjMzViNDBmYmFmIiwiaWF0IjoxNjc4NzA1NDU0LCJleHAiOjE2Nzg3MDU3NTR9.XI0sTadXzsvaLpkkRHxQULY0XXnjkUEoya50l97BOl4','1678705754899','2023-03-13 06:18:40','2023-03-13 11:04:14'),(12,'60141397-c9a8-4a72-b695-dee8c44edc50','OSL2023','Web Dev Bah ITN','23279123456','werdev12@gmail.com','$2b$10$jqzaxWHfORD4SZcXxb.kquZnuIbPVY4vftBvpMqavY50Nj.Q2UCTm','user',NULL,NULL,NULL,'2023-03-14 15:50:44','2023-03-14 15:50:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
