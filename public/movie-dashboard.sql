-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 20 mars 2020 à 08:21
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `movie-dashboard`
--

-- --------------------------------------------------------

--
-- Structure de la table `actors`
--

DROP TABLE IF EXISTS `actors`;
CREATE TABLE IF NOT EXISTS `actors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `countryId` int(11) NOT NULL,
  `genderId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `countryId` (`countryId`),
  KEY `genderId` (`genderId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `actors`
--

INSERT INTO `actors` (`id`, `firstname`, `lastname`, `birthdate`, `countryId`, `genderId`, `createdAt`, `updatedAt`) VALUES
(1, 'Jake', 'Gyllenhaal', '1980-12-19', 1, 1, '2020-03-19 09:32:31', '2020-03-19 09:32:31'),
(2, 'Marion', 'Cotillard', '1975-09-30', 2, 2, '2020-03-19 09:33:02', '2020-03-19 09:33:02'),
(3, 'Gérard', 'Depardieu', '1948-12-27', 2, 1, '2020-03-19 09:33:20', '2020-03-19 09:33:20'),
(4, 'Jean', 'Reno', '1948-07-30', 2, 1, '2020-03-19 09:33:32', '2020-03-19 09:33:32'),
(5, 'Amy', 'Adams', '1974-08-20', 1, 2, '2020-03-19 09:33:49', '2020-03-19 09:33:49'),
(6, 'Jeremy', 'Renner', '1971-01-07', 1, 1, '2020-03-19 17:43:42', '2020-03-19 17:53:45'),
(7, 'Joaquin', 'Phoenix', '1974-10-28', 1, 1, '2020-03-19 21:11:20', '2020-03-19 21:11:20');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Thriller', '2020-03-19 09:30:19', '2020-03-19 09:30:19'),
(2, 'Drama', '2020-03-19 09:30:26', '2020-03-19 09:30:26'),
(3, 'Comedy', '2020-03-19 09:30:31', '2020-03-19 09:30:31'),
(4, 'Fantasy', '2020-03-19 09:30:37', '2020-03-19 09:30:37'),
(5, 'Horror', '2020-03-19 09:30:43', '2020-03-19 09:30:43'),
(6, 'Science Fiction', '2020-03-19 09:31:02', '2020-03-19 09:31:02'),
(7, 'Romance', '2020-03-19 18:20:47', '2020-03-19 18:20:47');

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

DROP TABLE IF EXISTS `countries`;
CREATE TABLE IF NOT EXISTS `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `countries`
--

INSERT INTO `countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'USA', '2020-03-19 09:31:20', '2020-03-19 09:31:20'),
(2, 'France', '2020-03-19 09:31:23', '2020-03-19 09:31:23'),
(3, 'Sweden', '2020-03-19 09:31:28', '2020-03-19 09:31:28');

-- --------------------------------------------------------

--
-- Structure de la table `genders`
--

DROP TABLE IF EXISTS `genders`;
CREATE TABLE IF NOT EXISTS `genders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `genders`
--

INSERT INTO `genders` (`id`, `gender`, `createdAt`, `updatedAt`) VALUES
(1, 'male', '2020-03-19 09:31:43', '2020-03-19 09:31:43'),
(2, 'female', '2020-03-19 09:31:47', '2020-03-19 09:31:47');

-- --------------------------------------------------------

--
-- Structure de la table `movieactors`
--

DROP TABLE IF EXISTS `movieactors`;
CREATE TABLE IF NOT EXISTS `movieactors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movieId` int(11) NOT NULL,
  `actorId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movieId` (`movieId`),
  KEY `actorId` (`actorId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `movieactors`
--

INSERT INTO `movieactors` (`id`, `movieId`, `actorId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5, '2020-03-19 09:37:24', '2020-03-19 09:37:24'),
(2, 3, 2, '2020-03-19 09:37:57', '2020-03-19 09:37:57'),
(3, 2, 3, '2020-03-19 09:38:22', '2020-03-19 09:38:22'),
(4, 2, 4, '2020-03-19 09:38:25', '2020-03-19 09:38:25'),
(5, 4, 7, '2020-03-19 21:12:49', '2020-03-19 21:12:49'),
(6, 4, 5, '2020-03-19 21:18:39', '2020-03-19 21:18:39');

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `synopsis` text,
  `director` varchar(255) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `picture`, `synopsis`, `director`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Arrival', 2016, 'Arrival picture', 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.', 'Denis Villeneuve', 6, '2020-03-19 09:34:59', '2020-03-19 09:34:59'),
(2, 'Tais-toi !', 2003, 'Tais-toi ! picture', 'Ruby n\'a qu\'une idée en tête : se venger de l\'homme qui a assassiné la femme qu\'il aimait. Quentin, aussi gentil que faible d\'esprit, croise par hasard sa route. La gentillesse catastrophique de Quentin parviendra-t-elle à désamorcer la violence meurtrière de Ruby ?', 'Francis Veber', 3, '2020-03-19 09:35:32', '2020-03-19 09:35:32'),
(3, 'La Môme', 2007, 'La Môme picture', 'De son enfance à la gloire, de ses victoires à ses blessures, de Belleville à New York, l\'exceptionnel parcours d\'Edith Piaf. A travers un destin plus incroyable qu\'un roman, découvrez l\'âme d\'une artiste et le coeur d\'une femme. Intime, intense, fragile et indestructible, dévouée à son art jusqu\'au sacrifice, voici la plus immortelle des chanteuses.', 'Olivier Dahan', 2, '2020-03-19 09:36:35', '2020-03-19 09:36:35'),
(4, 'Her', 2013, 'Her picture', 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need. ', 'Spike Jonze', 2, '2020-03-19 19:06:42', '2020-03-19 19:06:42');

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` int(11) DEFAULT NULL,
  `movieId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movieId` (`movieId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id`, `note`, `movieId`, `createdAt`, `updatedAt`) VALUES
(1, 5, 1, '2020-03-19 09:39:35', '2020-03-19 18:44:46'),
(4, 5, 1, '2020-03-19 09:47:30', '2020-03-19 09:47:30'),
(5, 4, 1, '2020-03-19 09:48:44', '2020-03-19 09:48:44'),
(6, 3, 2, '2020-03-19 18:42:23', '2020-03-19 18:42:23');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('01-create-country.js'),
('02-create-category.js'),
('03-create-gender.js'),
('04-create-movie.js'),
('05-create-user.js'),
('06-create-note.js'),
('07-create-actor.js'),
('08-create-movieActor.js');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'john.doe@gmail.com', '$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e', '2020-03-19 10:03:44', '2020-03-19 10:03:44'),
(2, 'jane.doe@gmail.com', '1234', '2020-03-19 10:04:06', '2020-03-19 20:49:48'),
(4, 'michel.dubois@gmail.com', '$2b$10$fTD/7nv9XrDo13LZjAxyCO4wvUQcXJSoh9UNeDw9QLzDoQcwQFlXC', '2020-03-19 10:05:53', '2020-03-19 10:06:32'),
(5, 'jean.dubois@gmail.com', '$2b$10$cl3lQJl0LQzbjz0WA2DrqeSNcrMpbEgiRGrBOaWAiE..ixsbCUFcO', '2020-03-19 10:35:03', '2020-03-19 10:35:03'),
(6, 'walt.disney@gmail.com', '$2b$10$km9LHY.P0T.1BA3vUN.QcOXuox8NGw3Nie/2egD.U0AUtka04qIdS', '2020-03-19 10:36:50', '2020-03-19 10:36:50');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `actors`
--
ALTER TABLE `actors`
  ADD CONSTRAINT `actors_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actors_ibfk_2` FOREIGN KEY (`genderId`) REFERENCES `genders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `movieactors`
--
ALTER TABLE `movieactors`
  ADD CONSTRAINT `movieactors_ibfk_1` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movieactors_ibfk_2` FOREIGN KEY (`actorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
