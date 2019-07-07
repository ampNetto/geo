<div>
	<div class="map" style="width: 100%; height: 100vh">
		<div id="map" class="map" style="width: 100%; height: 100%;"></div>
	</div>
</div>
<!-- ./fim meio -->
<!-- 	 modal -->
<div class="modal fade" id="extradoModal" tabindex="-1" role="dialog"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Lote</h5>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
									<label>Inscrição</label> 
									<input type="text"
										class="form-control" name="arr[Inscricao]"
										value="" id="id_insc" readonly>
									<label>Proprietário</label> 
									<input type="text"
										class="form-control" name="arr[Proprietário]"
										value="" id="id_Prop" readonly>
									<label>Endereço</label> 
									<input type="text"
										class="form-control" name="arr[Enderecoo]"
										value="" id="id_end" readonly>
									<label>Quatra</label> 
									<input type="text"
										class="form-control" name="arr[Quatra]"
										value="" id="id_qua" readonly>
									<label>Lote</label> 
									<input type="text"
										class="form-control" name="arr[Loteo]"
										value="" id="id_lot" readonly>
									<label>Area Terreno</label> 
									<input type="text"
										class="form-control" name="arr[AreaTerreno]"
										value="" id="id_Art" readonly>
									<label>Valor venal</label> 
									<input type="text"
										class="form-control" name="arr[ValorVenal]"
										value="" id="id_valv" readonly>
									<label>Area Edificada</label> 
									<input type="text"
										class="form-control" name="arr[AreaEdificada]"
										value="" id="id_ared" readonly>	
								</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
			</div>
		</div>
	</div>
</div>
<script src="../view/js/clickAdmin.js"></script>
<!-- 	fim do modal -->



