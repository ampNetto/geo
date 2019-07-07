<div class="container">
    <div >
        <div class="text-right" >
            <a aling href="../controle/controle_pessoa.php">
                <button type="submit" class="btn btn-primary btn-sm" value="Cadastrar Pessoa">Cadastrar Pessoa</button>
            </a>
            <br>
        </div>
    </div>
    <div>
        <table class="table table-bordered" boder="2">
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>Status</th>
                <th>Resposavel</th>
                <th>Ação</th>
            </tr>
            {foreach $pessoa as $value}
                <tr align="center">
                    <td>{$value.pes_id} </td>
                    <td>{$value.pes_nome} </td>
                    <td>{$value.pes_datanas|date_format:"%d/%m/%Y"} </td>
                    <td>{$value.pes_cpf} </td>
                    <td>{$value.pes_status|default:''} </td>
                    <td>{$value.pes_resp|default:''} </td>
                    <td>
                        <form action="../controle/controle_pessoa.php" method="POST">
                            <input type="hidden" name="id" value="{$value.pes_id}">
                            <input type="hidden" name="acao" value="{$controle}">
                            <button class="btn btn-warning btn-xs">EDITAR</button>
                        </form>
                        <input type="hidden" name="acao" value="{$controle}">
                        <button idpes="{$value.pes_id}" class="btn btn-excluir btn-danger btn-xs">EXCLUIR</button>
                        <br>
                        <br>
                        <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#exampleModal{$value.pes_id}">
                            consulta viagens
                        </button>
                    </td>
                    <td>
                          <!-- Modal -->
                        <div class="modal fade" id="exampleModal{$value.pes_id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="row">
                                      <div class="form-group col-md-12">
                                            <label for="desc">Descrição</label>
                                            <input type="text" id="descr{$value.pes_id}" class="form-control" value="" />
                                        </div>
                                      <div class="form-group col-md-6">
                                            <label for="dataIni">Data de Inicio</label>
                                            <input required type="date" id="xdataini{$value.pes_id}" class="form-control"  value=" ">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="dataFim">Data Fim</label>
                                            <input required type="date" id="xdatafim{$value.pes_id}" class="form-control"  value=" ">
                                        </div>
                                      <table class="table">
                                        <thead>
                                          <tr>
                                            <th scope="col">Descricao</th>
                                            <th scope="col">Data Ini</th>
                                            <th scope="col">Data Fim</th>
                                          </tr>
                                        </thead>
                                        <tbody id="tbody-{$value.pes_id}">
                                          
                                            {foreach $viagens item=via}
                                                {if $value.pes_id == $via.pes_id }
                                                    <tr>
                                                        <td>{$via.pla_des}</td>
                                                        <td>{$via.pla_dataini|date_format:"%d/%m/%Y"}</td>
                                                        <td>{$via.pla_datafim|date_format:"%d/%m/%Y"}</td>
                                                    </tr>
                                                {/if}
                                            {/foreach}
                                          
                                        </tbody>
                                      </table>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                  <button type="button" idpes="{$value.pes_id}" class="btn btn-primary pegar">Cadastrar</button>
                                </div>
                              </div>
                            </div>
                        </div>
                    </td>
                </tr>
            {/foreach}
        </table>
    </div>
</div>
    


      

