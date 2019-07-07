$(function() {
//	limpa os campos ao entrar em um desses campos
//	so pode escolher 1 para fazer a pesquisa
	$('#bairro').click(function(){
		$('#endereco, #cadastro, #inscricao').val('');
	});
	$('#endereco').click(function(){
		$('#bairro, #cadastro, #inscricao').val('');
	});
	$('#cadastro').click(function(){
		$('#endereco, #bairro, #inscricao').val('');
	});
	$('#inscricao').click(function(){
		$('#endereco, #cadastro, #bairro').val('');
	});
	setTimeout(DezSegundos, 1000*10);
});
function mostrarInfo(evt) {
	
	if(evt.features[0]){
		if (evt.features[0].fid.indexOf("lote") > -1) {
			feature = evt.features[0];
			select.destroyFeatures();
			$('#extradoModal').modal()
			var numero = evt.features[0].attributes['BETHA_NRO']?' ,N° '+evt.features[0].attributes['BETHA_NRO']:'Sem Numero';
			// $('#id-menu-lateral-filtro, #resultadoMapa').show();
			$('#id_insc').val(evt.features[0].attributes['INSCR']);
			$('#id_Prop').val(evt.features[0].attributes['BETHA_proprietario']);
			$('#id_end').val(evt.features[0].attributes['BETHA_endereco']);
			$('#id_qua').val(evt.features[0].attributes['BETHA_quadra']);
			$('#id_lot').val(evt.features[0].attributes['BETHA_lote']);
			$('#id_Art').val(evt.features[0].attributes['BETHA_area_terreno']);
			$('#id_valv').val(evt.features[0].attributes['BETHA_valor_venal1']);
			$('#id_ared').val(evt.features[0].attributes['BETHA_area_edificada2']);
	//		console.log(evt);
		}
}
}// fim do mostrarInfo(evt){
//o botão chama essa função ao clicka
function selectSetorClick() {
	// bairro,endereco,cadastro,inscricao
	
	var campoBairro = $('#bairro').val();
	var campoEndereco = $('#endereco').val();
	var campoCadastro = $('#cadastro').val();
	var campoInscricao = $('#inscricao').val();
	var textoBusca;
//	se em un desses tiver valor ele chama suas respectiva função
	if(campoBairro){
//		função,		variavel, zoom
		getBairro(campoBairro,10);
	}else
	if(campoEndereco){
//		função,		variavel, zoom
		localizacao(campoEndereco,18) ;	
	}else
	if(campoCadastro){
//		função,		variavel, zoom
		getCadastro(campoCadastro,18);
	}else
	if(campoInscricao){
//		função,		variavel, zoom
		getIscricao(campoInscricao,18);

	}
	
//	valida de um dos campos tem algum valor
	if (!campoBairro && !campoEndereco && !campoCadastro && !campoInscricao) {
		alert('infome o que deseja buscar');
		return false;
	} 
}
//buscar por inscriçao
function getIscricao(insc) {
	var nomeRua;
	$.ajax({
		url : "geoserver.php",
		type : 'POST',
		data : {
			acao : "BuscaInsc",
			insc: insc
		},success : function(resul) {
			console.log(resul);
			obj = JSON.parse(resul);
			if(obj.msgm){
				alert(obj.msgm);
			}else{
				nomeRua = obj.endereco;
				localizacao(nomeRua);
			}
		}
	});
}//fim da busca inscrição

//busca por bairro
function getBairro(bairro) {

	var nomeRua;
	$.ajax({
		url : "geoserver.php",
		type : 'POST',
		data : {
			acao : "BuscaBairro",
			bairro: bairro
		},success : function(resul) {
			console.log(resul)
			obj = JSON.parse(resul);
			if(obj.msgm){
				alert(obj.msgm);
			}else{
				nomeRua = obj.endereco;
				localizacao(nomeRua);
			}
		}
	});
}// fim da busca por bairro

//busca por cadastro
function getCadastro(cadastro) {

	var nomeRua;
	$.ajax({
		url : "geoserver.php",
		type : 'POST',
		data : {
			acao : "BuscaCadastro",
			cadastro: cadastro
		},success : function(resul) {
			obj = JSON.parse(resul);
			if(obj.msgm){
				alert(obj.msgm);
			}else{
				nomeRua = obj.endereco;
				localizacao(nomeRua);
			}
		}
	});
}// fim da busca por bairro

//Localização por openstreetmap
function localizacao(textoBusca,zoom) {
//	console.log(textoBusca);
//	mensagem de erro se nao encontrar o endereço
	var msg = 'Desculpe, não foi possível encontrar a logalização em Jaquariaíva';
	$.ajax({
//		url do openstreetmap para consulta
		url : "http://nominatim.openstreetmap.org/search/"+textoBusca+",Jaguariaiva?format=json",
		type : 'GET',
		dataType : 'json',
		success : function(resul) {
//			console.log(resul);
//			retorna todas as ruas com o nome que foi enviado
			$.each(resul, function(chave, nome) {
//				quebra em arry o display_name para pegar a cidade certa
				var cidade = resul[chave]['display_name'].split(",");
				$.each(cidade, function(id, NomeCidade) {
//					se a cidade for ' Jaguariaíva' entra na condição	
					if(NomeCidade ===' Jaguariaíva'){
//						endereco encontrado retor a msg como false
						msg = retornoTelaCentralizar(resul[chave],zoom)
					}
				});
			});
//			retorno da msg foi true mostra o alert com a msg
			if(msg){
				alert(msg);
			}
		}
	});	
}//Fim da localização por openstreetmap

//centralizar na tela o endereço
function retornoTelaCentralizar(resul,zoom){
	var comparar = $('#endereco').val();
	
//	remove os caracteres indesejáveis
	var letrasEspeciais = ['á','é','í','ó','ú','ã','õ','ô'];
	var letrasNormais = ['a','e','i','o','u','a','o','o'];
	$.each(letrasEspeciais, function(chave, letras) {
		$.each(letrasNormais, function(chaves, letra) {
			if(chaves == chave){
				resul['display_name'] = resul['display_name'].replace(letras, letra);
				comparar = comparar.replace(letras, letra);	
			}
		});
	});
	
	var msgm, rua = [];
	rua = comparar.split(',');
//	valida se sta certo endereço
	if(resul['display_name'].toUpperCase().indexOf(rua[0].toUpperCase()) > -1){
//		comandos openlayer para centralizar no mapa a localização
		var centre = new OpenLayers.LonLat(resul['lon'],resul['lat']);
		centre.transform(new OpenLayers.Projection("EPSG:4326"),
				new OpenLayers.Projection("EPSG:900913"));
		map.setCenter(centre, zoom);
//		foi encontrado o endereço retorna a msgm com false
		msgm =  false;
	}else{
//		nao foi encontrado o endereço, mostra a mensagem
		msgm = 'Desculpe, não foi possível encontrar ';
	}
	return msgm;
}
function DezSegundos(){
    $('#msgDiv').hide();
}
setTimeout(DezSegundos, 1000*10);

