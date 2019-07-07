<?php
require_once 'Conexao.php';

class UsuarioDAO extends Conexao {
	public $nomeId = "usu_id";
	public function __construct() {
		$this->conex = self::getConnection ();
	}
	public function getLogin($nome, $senha) {
		$sql = 'SELECT 
                     *
                 FROM 
                     public.usuariogeo 
                 WHERE 
                     uge_email = :nome
                     AND uge_senha = :senha';

		$stmt = $this->conex->prepare ( $sql );
		$stmt->bindValue ( ':nome', $nome );
		$stmt->bindValue ( ':senha', $senha );
		$stmt->execute ();
		// reescrever o $stmt para retorna
		$stmt = $stmt->fetch ( PDO::FETCH_ASSOC );
		return $stmt;
	}
}
