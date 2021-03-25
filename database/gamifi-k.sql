-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-03-2021 a las 16:22:28
-- Versión del servidor: 5.6.34
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gamifi-k`
--

--
-- Volcado de datos para la tabla `rankings`
--

INSERT INTO `rankings` (`NomRanking`, `NomProfesor`, `Cod`, `Puntos`, `NomEquipo`) VALUES
('pruebacod', 'prueba', '29llvq', 0, ''),
('www', 'prueba', '12fo1t', 0, ''),
('pruebaaaa', 'prueba', 'Z2NRA1', 0, ''),
('adad', 'prueba', 'K1jCEI', 0, ''),
('1234', 'prueba', 'lxSkNr', 0, '');

--
-- Volcado de datos para la tabla `registro_alumno`
--

INSERT INTO `registro_alumno` (`nick`, `email`, `pwd`, `nombre`, `apellidos`, `puntos`) VALUES
('marti', 'a@asd', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 'asdf', 'asdf', 0);

--
-- Volcado de datos para la tabla `registro_profesor`
--

INSERT INTO `registro_profesor` (`nick`, `email`, `pwd`, `nombre`, `apellidos`, `centro`) VALUES
('prueba', 'prueba@gmail.com', '7c222fb2927d828af22f592134e8932480637c0d', 'prueba', '12345678', 'Ilerna');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
