-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Gazda: localhost
-- Timp de generare: 23 Noi 2014 la 10:06
-- Versiune server: 5.6.12-log
-- Versiune PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Bază de date: `task_heroes`
--
CREATE DATABASE IF NOT EXISTS `task_heroes` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `task_heroes`;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `activitate`
--

CREATE TABLE IF NOT EXISTS `activitate` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_proiect` int(11) NOT NULL,
  `id_user_manager_activitate` int(11) NOT NULL,
  `nume_activitate` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Salvarea datelor din tabel `activitate`
--

INSERT INTO `activitate` (`ID`, `id_proiect`, `id_user_manager_activitate`, `nume_activitate`) VALUES
(1, 51, -1, 'Lista 1'),
(2, 51, -1, 'aSDSA'),
(3, 51, -1, 'ADFASDAS'),
(4, 51, -1, 'Liviu'),
(5, 52, -1, 'Lista 1 Artandar'),
(6, 51, -1, 'Lista 3'),
(7, 52, -1, 'Lista 2');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `departament`
--

CREATE TABLE IF NOT EXISTS `departament` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_team` int(11) NOT NULL,
  `nume_departament` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Salvarea datelor din tabel `departament`
--

INSERT INTO `departament` (`ID`, `id_team`, `nume_departament`) VALUES
(6, 2, 'Consiliul Director'),
(2, 2, 'Public Relations'),
(3, 2, 'Organizare Evenimente'),
(4, 2, 'Human Resources'),
(5, 2, 'Studii Info'),
(7, 2, 'Social'),
(9, 2, 'Studii Mate'),
(10, 2, 'Studii TI'),
(11, 2, 'Comisia De Imagine si Poiecte'),
(12, 2, 'asd'),
(13, 3, 'Oev');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `erou`
--

CREATE TABLE IF NOT EXISTS `erou` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `xp` int(11) NOT NULL,
  `nume_erou` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `lista`
--

CREATE TABLE IF NOT EXISTS `lista` (
  `id_lista` int(11) NOT NULL AUTO_INCREMENT,
  `id_team` int(11) NOT NULL,
  `nume_lista` varchar(255) NOT NULL,
  `id_manager` int(11) NOT NULL,
  PRIMARY KEY (`id_lista`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `membrii_proiect`
--

CREATE TABLE IF NOT EXISTS `membrii_proiect` (
  `ID_a` int(11) NOT NULL AUTO_INCREMENT,
  `ID_project` int(11) NOT NULL,
  `ID_user` int(11) NOT NULL,
  PRIMARY KEY (`ID_a`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Salvarea datelor din tabel `membrii_proiect`
--

INSERT INTO `membrii_proiect` (`ID_a`, `ID_project`, `ID_user`) VALUES
(1, 51, 5),
(2, 51, 11),
(3, 51, 12),
(4, 51, 10),
(5, 51, 3),
(6, 52, 5),
(7, 53, 11),
(8, 53, 12),
(9, 51, 15),
(10, 51, 3),
(11, 52, 11),
(12, 52, 15),
(13, 55, 5),
(14, 57, 13),
(15, 57, 5),
(16, 54, 5);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `proiect`
--

CREATE TABLE IF NOT EXISTS `proiect` (
  `ID_proiect` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_project_manager` int(11) NOT NULL,
  `nume_proiect` varchar(225) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `descriere` varchar(225) DEFAULT NULL,
  `id_team` int(11) NOT NULL,
  PRIMARY KEY (`ID_proiect`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Salvarea datelor din tabel `proiect`
--

INSERT INTO `proiect` (`ID_proiect`, `id_user_project_manager`, `nume_proiect`, `start_date`, `end_date`, `descriere`, `id_team`) VALUES
(53, 12, 'Balul Bobocilor', '2014-11-18', '2014-11-29', 'asdasdas', 2),
(54, 5, 'Ratusca', '2014-11-18', '2014-11-29', 'asdasdas', 2),
(55, 11, 'Deschiderea anului', '2014-11-18', '2014-11-29', 'asdasdas', 2),
(52, 11, 'Arta n Dar', '2014-11-18', '2014-12-06', 'ArtÄƒâ€™n Dar este un eveniment caritabil, marca ASMI, aflat deja la ediÈ›ia a treia, prin care promovÄƒm cultura È™i arta Ã®n rÃ¢ndul studenÈ›ilor È™i reuÈ™im sÄƒ ne unim forÈ›ele pentru a ajuta persoanele care au nevoie de ', 2),
(47, 2, 'wwwwww', '2014-11-15', '2014-11-18', 'wwww', 2),
(46, 0, 'kkljl', '2014-11-19', '2014-11-24', 'asdad', 2),
(37, 0, 'qweqw', '2014-11-07', '2014-12-06', 'qqweqw', 2),
(45, 0, 'sdf', '2014-11-15', '2014-11-26', 'sfsdfs', 2),
(44, 0, 'lkjfsdfq', '2014-11-15', '2014-11-29', 'sdfsdfsd', 2),
(51, 5, 'imSMART', '2014-11-17', '2014-12-06', 'Informatics and Mathematics Students Moving Ahead in Research and Technology este un proiect realizat de AsociaÅ£ia StudenÅ£ilor la MatematicÄƒ ÅŸi InformaticÄƒ (ASMI) È™i Facultatea de MatematicÄƒ ÅŸi InformaticÄƒ din cadrul', 2),
(56, 5, 'Bumtzi!', '2014-11-18', '2014-11-29', 'asdasdas', 2),
(57, 5, 'Bumtzi! 2', '2014-11-18', '2014-11-29', 'asdasdas', 2),
(64, 0, 'PROIECT', '2014-11-20', '2014-12-06', '1234', 3),
(65, 14, '1234', '2014-11-20', '2014-11-29', '1234', 3);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `ID_task` int(11) NOT NULL AUTO_INCREMENT,
  `id_activitate` int(11) NOT NULL,
  `id_proiect` int(11) NOT NULL,
  `titlu` varchar(225) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `descriere` varchar(225) DEFAULT NULL,
  `punctaj_dificultate` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`ID_task`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Salvarea datelor din tabel `task`
--

INSERT INTO `task` (`ID_task`, `id_activitate`, `id_proiect`, `titlu`, `start_date`, `end_date`, `descriere`, `punctaj_dificultate`, `status`) VALUES
(1, 2, 51, 'Task1', NULL, NULL, NULL, 8, 1),
(2, 6, 51, 'Task2', NULL, NULL, NULL, 3, 1),
(3, 4, 51, 'Task3', NULL, NULL, NULL, 12, 1),
(4, 5, 52, 'Task1 Artandar', NULL, NULL, NULL, 0, 1),
(5, 1, 51, 'Locatie finala', NULL, NULL, NULL, 12, 1),
(6, 2, 51, 'asdsadsa', NULL, NULL, NULL, 3, 1),
(7, 3, 51, 'asdas', NULL, NULL, NULL, 8, 1),
(8, 3, 51, 'adfas', NULL, NULL, NULL, 12, 1),
(9, 1, 51, 'loool', NULL, NULL, NULL, 1, 1),
(10, 1, 51, 'zxc', NULL, NULL, NULL, 8, 1),
(11, 1, 51, 'looooolll', NULL, NULL, NULL, 2, 1),
(12, 3, 51, 'kkjjkjjk', NULL, NULL, NULL, 5, 1);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `task_assignments`
--

CREATE TABLE IF NOT EXISTS `task_assignments` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_task` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `task_comment`
--

CREATE TABLE IF NOT EXISTS `task_comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_task` int(11) NOT NULL,
  `comment` varchar(225) NOT NULL,
  `comment_date` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nume_team` varchar(255) NOT NULL,
  `tip` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Salvarea datelor din tabel `team`
--

INSERT INTO `team` (`ID`, `nume_team`, `tip`) VALUES
(1, 'ASMI', ''),
(2, 'ASMI', ''),
(3, 'ASAA', ''),
(4, 'as.ds', ''),
(5, '123', ''),
(6, 'aaaa', '1');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `tel` int(11) NOT NULL,
  `id_team` int(11) NOT NULL,
  `nume_user` varchar(225) NOT NULL,
  `prenume_user` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `parola` varchar(60) NOT NULL,
  `rol` int(11) NOT NULL,
  `id_departament` int(11) DEFAULT NULL,
  `id_erou` int(11) NOT NULL,
  `join_date` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Salvarea datelor din tabel `user`
--

INSERT INTO `user` (`ID`, `tel`, `id_team`, `nume_user`, `prenume_user`, `email`, `parola`, `rol`, `id_departament`, `id_erou`, `join_date`) VALUES
(6, 0, 3, 'Test2', 'Test2', 'nicu.liviu@yahoo.com', '123', 1, NULL, 1, '2014-11-02'),
(3, 0, 2, 'Test', 'test', 'test', 'test', 1, 2, 1, '2014-11-01'),
(7, 0, 4, ';lakdf;l', 'asd', 'asdalk@h.as,d/ascp', '123123', 1, NULL, 1, '2014-11-02'),
(5, 0, 2, 'Liviu', 'Nicu', 'nicu.liviu@gmail.com', '1', 1, 3, 1, '2014-11-02'),
(8, 0, 5, '123', '123', '123@123.123', '123', 1, NULL, 1, '2014-11-02'),
(9, 0, 6, 'aaa', 'aaa', 'aa@aa.com', 'a', 1, NULL, 1, '2014-11-02'),
(10, 741011240, 2, 'Pixel', 'Pixel', 'test@test', '12345', 0, 6, 0, '2014-11-15'),
(11, 745244578, 2, 'Ancuta', 'Diana-Dobos', 'ancuta@dobos.com', '123456', 0, 3, 0, '2014-11-15'),
(12, 745255892, 2, 'Andreea', 'Popa', 'pcandreea@gmail.com', '12345', 0, 6, 0, '2014-11-15'),
(13, 741011240, 2, 'Stamate', 'Oana', 'Oana@oana', '12345', 0, 11, 0, '2014-11-15'),
(14, 98764432, 3, 'Liviu', 'Nicu', 'asdas@asdas.com', '12345', 0, 13, 0, '2014-11-21'),
(15, 742041277, 2, 'Ene', 'Andreea-Daniela', 'dene@gmail.com', '1234', 0, 2, 0, '2014-11-22');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
