<?php
    include 'cors_policy.php';
	include 'conexao.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtém o corpo da solicitação POST
        $data = file_get_contents("php://input");
        // Decodifica o JSON para um objeto PHP
        $requestData = json_decode($data);
        // Agora você pode acessar os dados usando $requestData
        $exercicios = $requestData;

 

        foreach ($requestData as $index => $exercicio) {
            // CodFun é o nome da coluna que está sendo enviado pelo cliente
            $sql = "INSERT INTO favoritos VALUES (0, '$exercicio->nome_exercicio');";
            $connection->query($sql);
          
        }

        $response = ['mensagem' => 'Exercício salvo com sucesso'];
        
    
        // if ($connection->query($sql) === true) {
        //     $response = ['mensagem' => 'Exercício salvo com sucesso'];
        // } else {
        //     $response = ['mensagem' => $connection->error];
        // }
        echo json_encode($response);
    }
?>