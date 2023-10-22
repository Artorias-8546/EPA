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
            $sql = "DELETE FROM favoritos WHERE '$exercicio->nome_exercicio'";
            $connection->query($sql);
          
        }
        $response = ['mensagem' => 'Exercício deletado com sucesso'];
        
        echo json_encode($response);
    }
?>