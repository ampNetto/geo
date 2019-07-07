<?php

// error_reporting(E_ALL);
// ini_set("display_errors", true);

include_once 'config.php';

class Principal extends Config {

    public function __construct() {
        parent::__construct();
        if (!$this->valida()) {
            header("Location: geo.php");exit();
        }
        $this->acao();
        $this->inicio();
    }

    public function acao() {
        switch (isset($_GET["acao"]) ? $_GET["acao"] : false) {
            case 'sair':
                $this->sair();
            break;
        }
    }

    public function inicio() {
        $this->template('principal');
    }

    public function sair() {
        $_SESSION = array();
        session_destroy();
        header("Location: geo.php");exit();
    }
}

new Principal();
