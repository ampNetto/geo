<div class="col-md-12 col-md-offset-0 text-left">
    <div class="row row-mt-15em">
        <div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
            <div class="form-wrap">
                <div class="tab">
                    <div class="tab-content">
                        <div class="tab-content-inner active" data-content="signup">
                            <form action="../controle/controle_pessoa.php" method="POST">
                                <div class="row form-group">
                                    <div class="col-md-12">
                                       <label for="nome">Nome</label>
                                       <input required  type="text" class="form-control" name="arrPes[pes-nome-Nome]"  value="{$pessoa.pes_nome|default:''}" id="pesnome">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="dataNas">Data de Nascimento</label>
                                       <input required type="date" class="form-control" id="dataNas" name="arrPes[pes-datanas-Daranas]" value="{$pessoa.pes_datanas|default:''}"/>
                                     </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="cpf">CPF</label>
                                         
                                         {if $pessoa.pes_cpf|default:''}
                                            <input readonly="" class="form-control" value="{$pessoa.pes_cpf|default:''}" >
                                        
                                        {else}
                                             <input required id="cpfpes" maxlength="14" type="text" class="form-control"  name="arrPes[pes-cpf-Cpf]" value="{$pessoa.pes_cpf|default:''}" >
                                    
                                           {/if}
                                    
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label >Status</label>
                                        <input type="checkbox" name="arrPes[pes-status-Statsu]"  value="TRUE" CHECKED>Ativo

                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label >Responsavel</label>
                                        <input type="checkbox" name="arrPes[pes-resp-Resp]"  value="TRUE" CHECKED>Sim

                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-primary" value="Enviar">
                                    </div>
                                </div>
                                <input type="hidden" name="id" value="{$pessoa.pes_id|default:''}">
                                <input type="hidden" name="acao" value="{$controle}">
                            </form>	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

     
 