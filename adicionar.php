<?php
    include 'cors_policy.php';
	include 'conexao.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

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