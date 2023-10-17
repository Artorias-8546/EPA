<?php
    include 'cors_policy.php';
	include 'conexao.php';

    $acao = isset($_GET['acao']) ? $_GET['acao'] : null;

    if($_SERVER['REQUEST_METHOD'] == 'POST' || $acao == 'adicionar'){

        $data = file_get_contents("php://input");
        $requestData = json_decode($data);
        $nome = $requestData->Nome;
        $sql = "INSERT INTO favoritos VALUES ('$nome');";
        
        $mensagem = 'Erro ao adicionar exercícios';

        if($connection->query($sql) == true)
            $mensagem = 'Adicionado aos favoritos!';

        echo json_encode($response = ['mensagem' => $mensagem]);
    }    
?>