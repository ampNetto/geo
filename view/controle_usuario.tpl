<div class="col-md-12 col-md-offset-0 text-left">
    <div class="row row-mt-15em">
        <div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
            <div class="form-wrap">
                <div class="tab">
                    <div class="tab-content">
                        <div class="tab-content-inner active" data-content="signup">
                            <form action="../controle/controle_usuario.php" method="POST">
                                <div class="row form-group">

                                    <div class="col-md-12">
                                        <label for="username"> Nome</label>
                                        <input type="text" required name="arrUsu[usu-nome-Nome]" value="{$smarty.session.usuario.usu_nome|default:''}" class="form-control" id="username">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="username">Nome de Usuario</label>
                                        <input type="text" required name="arrUsu[usu-usu-Usuario]" value="{$smarty.session.usuario.usu_usu|default:''}" class="form-control" id="username">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="password">Password</label>
                                        <input type="{$smarty.session.usuario.usu_id|default:'password'}" required name="arrUsu[usu-senha-Senha]" value="{$smarty.session.usuario.usu_senha|default:''}" class="form-control" id="password">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="password2">Repeat Password</label>
                                        <input type="{$smarty.session.usuario.usu_id|default:'password'}" required name="novoSenhaRep" value="{$smarty.session.usuario.usu_senha|default:''}" class="form-control" id="password2">
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" required class="btn btn-primary" value="Sign up">
                                    </div>
                                </div>

                                <input type="hidden" name="acao" value="{$controle}">
                                <a HREF="../controle/login.php" > 
                                    <button type="button" class="btn btn-secondary"value="Voltar">Voltar</button>
                                </a>
                            </form>	
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</div>




