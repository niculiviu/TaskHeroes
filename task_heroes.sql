-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Gazda: localhost
-- Timp de generare: 15 Noi 2014 la 17:17
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `departament`
--

CREATE TABLE IF NOT EXISTS `departament` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_team` int(11) NOT NULL,
  `nume_departament` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

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
(11, 2, 'Comisia De Imagine si Poiecte');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

--
-- Salvarea datelor din tabel `proiect`
--

INSERT INTO `proiect` (`ID_proiect`, `id_user_project_manager`, `nume_proiect`, `start_date`, `end_date`, `descriere`, `id_team`) VALUES
(43, 6, 'sd', '2014-11-14', '2014-11-27', 'asds', 2),
(37, 0, 'qweqw', '2014-11-07', '2014-12-06', 'qqweqw', 2),
(42, 3, 'were', '2014-11-14', '2014-11-27', 'asdas', 2),
(40, 5, 'Lool', '2014-11-12', '2014-11-29', 'asdsa', 2),
(41, 3, 'Balul Bobocilor', '2014-11-14', '2014-12-06', 'asdasa', 2),
(36, 5, 'imSMART', '2014-11-07', '2014-11-22', 'asdadasdas', 2),
(39, 5, 'Artandar', '2014-11-13', '2014-11-15', 'asda', 2);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_activitate` int(11) NOT NULL,
  `id_proiect` int(11) NOT NULL,
  `titlu` varchar(225) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `descriere` varchar(225) DEFAULT NULL,
  `punctaj_dificultate` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

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
(12, 745255892, 2, 'Andreea', 'Popa', 'pcandreea@gmail.com', '12345', 0, 6, 0, '2014-11-15');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
