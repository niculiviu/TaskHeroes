CREATE TABLE `team` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nume_team` varchar(255) NOT NULL,
  `tip` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `departament` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_team` int(11) NOT NULL,
  `nume_departament` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_team` int(11) NOT NULL,
  `nume_user` varchar(225) NOT NULL,
  `prenume_user` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `parola` varchar(60) NOT NULL,
  `rol` int(11) NOT NULL,
  `id_departament` int(11),
  `id_erou` int(11) NOT NULL,
  `join_date` date,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `erou` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `xp` int(11) NOT NULL,
  `nume_erou` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `proiect` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_project_manager` int(11) NOT NULL,
  `nume_proiect` varchar(225) NOT NULL,
  `start_date` date,
  `end_date` date,
  `descriere` varchar(225),
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `activitate` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_proiect` int(11) NOT NULL,
  `id_user_manager_activitate` int(11) NOT NULL,
  `nume_activitate` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `task` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_activitate` int(11) NOT NULL,
  `id_proiect` int(11) NOT NULL,
  `titlu` varchar(225) NOT NULL,
  `start_date` date,
  `end_date` date,
  `descriere` varchar(225),
  `punctaj_dificultate` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `task_assignments` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_task` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `task_comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `id_task` int(11) NOT NULL,
  `comment` varchar(225) NOT NULL,
  `comment_date` date,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
