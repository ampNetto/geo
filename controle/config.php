<?php

// error_reporting(E_ALL);
// ini_set("display_errors", true);

$fileDir = str_replace("config.php", "", __FILE__);
$dir = str_replace("\\", "/", $fileDir);

require_once '../lib/smarty-3.1.30/libs/Smarty.class.php';

// Troca as barras do caminho do diretório
$server = str_replace("\\", "/", $_SERVER["DOCUMENT_ROOT"]);

define("URL_PROJETO", 			"/geo");
define("CAMINHO_PROJETO", 		$server.URL_PROJETO);
define("LIB", 					CAMINHO_PROJETO."");

define("CRIPTOGRAFIA", 			true);

// // Inicia a sessão
// if(!isset($_SESSION))@session_start();

// Executada toda vez antes de criar uma classe
spl_autoload_register(function($classe){
	getClass($classe);
});

// Faz a busca de uma determinada classe no projeto
function getClass($class){
	// Cria o array
	$dir = array();
	
	// Recupera todos os diretótirios do projeto
	//$dir = glob(CAMINHO_PROJETO."*", GLOB_ONLYDIR);
	
	// Adiciona o caminho das lib
	$dir[] = LIB;
	$dir[] = CAMINHO_PROJETO."";
	$dir[] = LIB."/../";
	
	// Ajusta o nome da classe
	$class = $class.".class.php";
	
	// Percorre os diretórios procurando a classe
	foreach ($dir as $caminho_file) {
		
		//Pesquisa no diretório atual
		if (file_exists($caminho_file.$class)){
			require_once $caminho_file.$class;
			break;
		}
		// Pesquisa no diretórios dao
		else if (file_exists($caminho_file."/dao/".$class)){
// 			var_dump($dir."/dao/".$class);die;
			require_once $caminho_file."/dao/".$class;
			break;
		}
	}
}

class Config {

    public $smarty;

    public function __construct() {
        session_name("netto");
        session_start();

        $this->smarty = new Smarty();
        $this->smarty->compile_dir = '/tmp';
        $this->aviso();        
    }
    
    private function aviso(){
        $msg = isset($_SESSION["aviso"])?$_SESSION["aviso"]:null;
        if ($msg) {
            if ($msg[1] == 0) {
                $msg["tipo"] = "success";
            } else if ($msg[1] == 1) {
                $msg["tipo"] = "danger";
            } else if ($msg[1] == 2) {
                $msg["tipo"] = "warning";
            }
            $msg["mensagem"] = $msg[0];
            $this->smarty->assign("msg", $msg);
            $_SESSION["aviso"]=null;
        }
    }
    
    public function arrayTratado($arr){
        $err = NULL;
        foreach ($arr as $key => $value) {
            $exColumn = explode("-", $key);
            $column = $exColumn[0] . "_" . $exColumn[1];
            $valor = trim($value);
            if (empty($valor)) {
                $err .= " " . $exColumn[2];
            }
            $arrTratado[$column] = $valor;
        }
        if ($err) {
            $_SESSION['aviso'] = ['Erro! Campo(s) ' . $err . ' estão(á) vazio(s). Porfavor preencha corretamente', 2];
        }
        return $arrTratado;
    }

    /**
     * Em $msg recebe um array com duas posições ( string mensagem , int tipo).
     * @param type $tela
     * @param type $msg
     * @tipo: 0(sucesso), 1(erro), 2(alerta)
     */
    public function template($tela) {
        $this->smarty->assign("content","../view/".$tela.".tpl");
        $this->smarty->display("../view/menu.tpl");
    }

    public function valida() {
        isset($_SESSION['usuario']) && $_SESSION['usuario'] != null ? $novoValor = TRUE : $novoValor = FALSE;
        return $novoValor;
    }

}

?>