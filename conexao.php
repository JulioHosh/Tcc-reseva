<?php

// Pegar os dados formulario

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];


// Conectar no banco de dados e conexão
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ludo";


$conn = new mysqli(hostname: $servername, username: $username, password: $password, database: $dbname);

// Inserir os dados
$sql = "INSERT INTO conta (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conn -> query($sql) === TRUE){
    echo "<h2>Usuário cadastrado com sucesso!</h2>";
} else {
    echo "<h2>Erro ao cadastrar o usuário: " . $conn ->error;
}

//fechar a conexão com o bando
$conn ->close();
?>