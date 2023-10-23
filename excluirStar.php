<?php
include 'cors_policy.php';
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Obtém o corpo da solicitação DELETE
    $data = file_get_contents("php://input");
    // Decodifica o JSON para um objeto PHP
    $requestData = json_decode($data);
    
    $mensagem = 'Erro ao remover exercício';

    foreach ($requestData as $id) {
        $sql = "DELETE FROM favoritos WHERE id = $id";
        if ($connection->query($sql) === true) {
            $mensagem = 'Exercicio removido com sucesso!';
        }
    }

    echo json_encode(['mensagem' => $mensagem]);
    } else {
        // Trate outras condições (por exemplo, não é uma solicitação DELETE) conforme necessário.
        echo json_encode(['mensagem' => 'Método de solicitação não suportado.']);
    }
?>