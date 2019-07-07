<?php
require_once 'Conexao.php';

class GeoserverDAO extends Conexao {
	
	public function __construct() {
		$this->conex = self::getConnection ();
	}
// 	buscar o endereço pela inscrição
	public function getEndereco($insc) {
		$sql = "SELECT \"BETHA_endereco\" FROM public.lotes WHERE \"INSCR\" = :insc
				LIMIT 1";

		$stmt = $this->conex->prepare ( $sql );
// 		var_dump($sql);die;
		$stmt->bindValue ( ':insc', $insc );
		$stmt->execute ();
		// reescrever o $stmt para retorna
		$stmt = $stmt->fetch ( PDO::FETCH_COLUMN );
		return $stmt;
	}
// 	buscar o endereço pelo Bairro
	public function getBairro($bairro) {
		$sql = "SELECT 
					\"BETHA_endereco\" 
					FROM 
						public.lotes 
					WHERE 
						\"BETHA_BAIRRO\" 
						ILIKE :bairro 
						AND 
						id = (
						SELECT 
							max(id) 
						FROM 
							public.lotes 
						WHERE 
							\"BETHA_BAIRRO\" 
							ILIKE :bairro
						) ";
// 		var_dump($sql);die;
		$stmt = $this->conex->prepare ( $sql );
				
		$stmt->bindValue ( ':bairro', $bairro );
		$stmt->execute ();
		// reescrever o $stmt para retorna
		$stmt = $stmt->fetch ( PDO::FETCH_COLUMN );
		return $stmt;
	}
// 	buscar o endereço pelo cadastro
	public function getCadastro($cadastro) {
		$sql = "SELECT \"BETHA_endereco\" FROM public.lotes WHERE \"BETHA_i_imoveis\" = :cadastro
				LIMIT 1";
		// 		var_dump($sql);die;
		$stmt = $this->conex->prepare ( $sql );
		
		$stmt->bindValue ( ':cadastro', $cadastro );
		$stmt->execute ();
		// reescrever o $stmt para retorna
		$stmt = $stmt->fetch ( PDO::FETCH_COLUMN );
		return $stmt;
	}
}
//VILA KENEDDY II