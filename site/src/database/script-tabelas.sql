-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database FMK;

use FMK;

create table formulario(
idFormulario int primary key auto_increment,
historia varchar(60),
opening varchar(60),
ost varchar(60),
ending varchar(60),
nome varchar(60),
email varchar(60),
dtNasc date,
sexo char(1) constraint chk_sexo check (sexo = 'M' or  sexo = 'F'),
cidade char(2)
);