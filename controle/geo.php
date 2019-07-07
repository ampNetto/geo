<?php

// error_reporting(E_ALL);
// ini_set("display_errors", true);

include_once 'config.php';

class Geo extends Config {

    public function __construct() {
        parent::__construct();
        if ($this->valida()) {
            header("Location: ../controle/principal.php");exit();
        }
        $this->acao();
        $this->inicio();
    }

    public function acao() {
        switch (isset($_POST["acao"])) {
            case 'acessar':
                $this->acessar();
            break;
        }
    }

    public function inicio() {
        $this->template("geo");
    }

    public function acessar() {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $nome = $_POST['username'];
            $senha = $_POST['password'];
            $usuDAO = new UsuarioDAO();
            $result = $usuDAO->getLogin($nome, $senha);
            if ($result) {
                $_SESSION['usuario'] = $result;
                $_SESSION['aviso'] = ['Conectado',0];
                 header("Location: principal.php"); exit();
            } else {
                 
                $_SESSION['aviso'] = ['Login ou senha errado',2];
                header("Location: geo.php"); exit();
            }
        } 
        header("Location: geo.php"); exit();
    }
}

new Geo();
