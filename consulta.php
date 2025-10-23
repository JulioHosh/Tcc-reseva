<?php
 $id= $_POST['id'];
  // Conectar ao banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ludo";
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT id, nome, email FROM conta where id='$id'";
$result = $conn->query($sql);

// Verificando se a consulta retornou resultados
if ($result->num_rows > 0) {
    // Iniciando a estrutura HTML
    echo "<h1>Contas</h1>";
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
            </tr>";

    // Exibindo os resultados linha por linha
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["nome"] . "</td>
                <td>" . $row["email"] . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "Nenhum resultado encontrado.";
}

// Fechando a conexão com o banco de dados
$conn->close();
?>