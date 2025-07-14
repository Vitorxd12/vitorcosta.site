<?php
    $host = "localhost";
    $user = "root";
    $senha = "senha123";
    $banco = "todo_list";

    //conexão - criando um novo objeto da classe mysqli do php com os parâmetros de conexão
    $conexao = new mysqli($host, $user, $senha, $banco);
    //verifica se a conexão foi bem sucedida
    if ($conexao -> connect_error) {
        die("Conexão falhou: " . $conexao -> connect_error);
    }
    //----------------------------------------------------------------------//
    //criação da tarefas
    if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['descricao'])) {
        $descricao = $conexao -> real_escape_string($_POST['descricao']); // Protege contra SQL Injection e limpa os caracteres de coisas bizarras

        $sqlInsert = "INSERT INTO tarefas (descricao) VALUES ('$descricao')"; // Cria a string de inserção no banco de dados
        if ($conexao -> query($sqlInsert) === TRUE) { // Executa a query de inserção
            header("Location: todo_crud.php"); // Redireciona para a mesma página para evitar reenvio do formulário
            exit;
        }
    }

    //---------------------------------------------------------------------//
    //leitura de tarefas
    //array que vai armazenar as tarefas que vierem do banco de dados
    $tarefas = [];

    //fazer a seleção dos dados q eu vou usar. cria uma string com o comando sql
    $sqlSelect = "SELECT * FROM tarefas ORDER BY data_criacao DESC"; 

    //result é uma objeto que armazena o resultado da consulta ao banco de dados
    //conexção é um objeto de mysqli, query é um metodo deste objeto, -> é acessar algo dentro do objeto
    //O PHP USA -> ENQUANTO O JAVA USA .
    $result = $conexao -> query($sqlSelect);

    if ($result -> num_rows > 0) { //se o resultado tiver mais de 0 linhas
        while ($row = $result -> fetch_assoc()) {     //fetch_assoc() - transforma o resultado em um array associativo
            $tarefas[] = $row;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <h2>Adicionar Tarefa</h2>
    <form action="todo_crud.php" method="POST"> <!-- metodo post para criar no banco de dados -->
        <input type="text" name="descricao" required placeholder="Digite sua tarefa aqui">
        <button type="submit">Adicionar</button>
    </form>

    <h2>Lista de Tarefas</h2>
    <?php if(!empty($tarefas)): ?>
        <ul>
            <?php foreach($tarefas as $tarefa): ?>
                <li>
                    <?php echo htmlspecialchars($tarefa['descricao']); ?> <!-- htmlspecialchars para evitar XSS -->
                    <span><?php echo $tarefa['data_criacao']; ?></span> <!-- Exibe a data de criação da tarefa -->
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>Não há tarefas</p>
    <?php endif; ?>

</body>
</html>