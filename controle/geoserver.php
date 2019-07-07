<?php
// error_reporting ( E_ALL );
// ini_set ( "display_errors", true );

include_once "config.php";

class ConsultaGeoserver extends Config {
	public function __construct() {
		parent::__construct ();
		if ($this->valida()) {
			header("Location: ../controle/principaladmin.php");exit();
		}
		$this->acao ();
	}
	// função de busca por ajax
	public function acao() {
// 		var_dump($_POST ["acao"]);die;
		switch (isset ( $_POST ["acao"] ) ? $_POST ["acao"] : false) {
			case "BuscaInsc" :
				$this->buscaInsc ();
				break;
			case "BuscaBairro" :
				$this->buscaBairro ();
				break;
			case "BuscaCadastro" :
				$this->buscaCadastro ();
				break;
		}
	}

	// buscar endereço pela inscrição
	public function buscaInsc() {
		// recupera inscrição
		$insc = isset ( $_POST ["insc"] ) ? $_POST ["insc"] : False;
		$geoDAO = new GeoserverDAO ();
		// valida se tem a inscrição
		if ($endereco = $geoDAO->getEndereco ( $insc )) {
			$endereco = $geoDAO->getEndereco ( $insc );
			$msgm = false;
		} else {
			// erro nao tem a isncrição ira mostra essa mensagem
			$msgm = 'Desculpe, não foi possível encontrar essa inscrição nos registros !!';
		}
		// var_dump($endereco);die;
		// salvo na arry para mostrar depois no js
		$msg = [ 
				'endereco' => $endereco,
				'msgm' => $msgm
		];
		echo json_encode ( $msg );
		exit ();
	}
	// buscar endereço pela Bairro
	public function buscaBairro() {
		// recupera Bairro
		$bairro = isset ( $_POST ["bairro"] ) ? $_POST ["bairro"] : False;
		$geoDAO = new GeoserverDAO ();
		// valida se tem encontra o bairro
// 		var_dump($geoDAO->getBairro ( "'%". $bairro ."'%" ));die;
		if ($endereco = $geoDAO->getBairro ( '%'. $bairro .'%' )) {
			$endereco = $geoDAO->getBairro ( '%' . $bairro . '%' );
			$msgm = false;
		} else {
			// erro nao tem a isncrição ira mostra essa mensagem
			$msgm = 'Desculpe, não foi possível encontrar esse Bairro nos registros !!';
		}
		// salvo na arry para mostrar depois no js
		$msg = [ 
				'endereco' => $endereco,
				'msgm' => $msgm
		];
		echo json_encode ( $msg );
		exit ();
	}
	public function buscaCadastro() {
		$cadastro = isset ( $_POST ["cadastro"] ) ? $_POST ["cadastro"] : False;
		$geoDAO = new GeoserverDAO ();

		if ($endereco = $geoDAO->getCadastro ( $cadastro )) {
			$endereco = $geoDAO->getCadastro ( $cadastro );
			$msgm = false;
		} else {
			// erro nao tem a isncrição ira mostra essa mensagem
			$msgm = 'Desculpe, não foi possível encontrar esse cadastro nos registros !!';
		}
		// salvo na arry para mostrar depois no js
		$msg = [ 
				'endereco' => $endereco,
				'msgm' => $msgm
		];
		echo json_encode ( $msg );
		exit ();
	}
}
new ConsultaGeoserver ();