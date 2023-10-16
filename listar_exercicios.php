<?php
	include 'cors_policy.php';
	include 'conexao.php';

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
        $sql = "SELECT * FROM favoritos;";
    
        $result = $connection->query($sql);

        $favoritos = 'Nenhum exercício favorito encontrado...';
    
        if ($result->num_rows > 0) {
            //pode-se adicionar o objeto direto ou tratar o resp
            $favoritos = [];
            while ($row = $result->fetch_assoc()) {
                array_push($favoritos, $row);
            }
        }
    
        echo json_encode($response = ['favoritos' => $favoritos]);
    }
?>