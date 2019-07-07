var OpenLayers, map, alterarTela = false;

// *** Endereço do Geoserver

//var urlGeoServerLocal = 'http://localhost:8085/'; // LOCAL
 var urlGeoServerLocal = 'http://179.189.29.3:8085/';
	 
$(function() {

	var mercator = new OpenLayers.Projection("EPSG:3857");
    var wgs = new OpenLayers.Projection("EPSG:4326");
    
	var bounds = new OpenLayers.Bounds(
	// / Limite do Município, esse esta para mapa todo
	-4234187.11596, 6216626.39309, 4436434.82663, 10778756.88521

	);
	var options = {
		numZoomLevels : 30,
		maxExtent : bounds,
		allOverlays : true,
		// maximo que zoom para fora
		maxResolution : 50,
		projection : 'EPSG:31982',
		units : 'm'
	};

	map = new OpenLayers.Map('map',{
		projection: mercator
	},options);

	// * Configuração da seleção da camada *//
	var defStyle = {
		strokeColor : '#0033CC',
		fillColor : '#006600',
		strokeOpacity : '0.7',
		strokeWidth : 3,
		cursor : 'pointer'
	};

	var sty = OpenLayers.Util.applyDefaults(defStyle,
			OpenLayers.Feature.Vector.style['default']);

	var sm = new OpenLayers.StyleMap({
		'default' : sty
	});

	select = new OpenLayers.Layer.Vector('Selection', {
		styleMap : sm,
		displayInLayerSwitcher : false
	// ,fontColor : '#ffffff'
	});
	// nome da vriavel = função que sera chamado( URL ,nomeCamada , Titulo);
	// var imgMap2 = criarCamadaTileWMS(null, 'araucaria', 'AraucariaLotes');
	var imgMap2 = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:jgv', 'Jaquariaiva');
	var imgJGV = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:lotes_opaco', 'JGV_opaco');
	var asfalto = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:Logradouro', 'Asfalto');
	var edificacoes = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:edificacoes', 'Edificacoes');
	var lotes = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:lotes', 'Lotes');
	var quadras = criarCamadaTileWMS(urlGeoServerLocal + 'geoserver/wms',
			'jgv:quadra', 'Quadras');
	var oms = new OpenLayers.Layer.OSM("OpenStreeMap");
  
	// armazena em uma array com os nomes das camadas
	// cuidado com a ortem pode sobre por a outra
	var camadas = [
				oms,
				imgMap2,
				asfalto,
				lotes, 
				edificacoes,
				imgJGV,
				quadras,
				select 
				];
//	essa camada tem que ficar visivel para consultas
	imgJGV.setVisibility(true);
	
	// pocição do mauser
	map.addControl(new OpenLayers.Control.MousePosition());

	// mostrar a escala do mapa
	map.addControl(new OpenLayers.Control.ScaleLine());

//	paramentros para centralizar o mapa
	var centro = new OpenLayers.LonLat(-49.7026, -24.2479);
	centro.transform(wgs,mercator);

//    adicionar camadas na tela
	map.addLayers(camadas);
    
//	centralizar o mapa
	map.setCenter(centro, 16);

	map.raiseLayer(select, 10);

	// * Info click no mapa na camada *//
	infoControls = {
		click : new OpenLayers.Control.WMSGetFeatureInfo({
			url : urlGeoServerLocal + 'geoserver/wms',
			title : 'Camadas',
			layers : ([ imgJGV ]),
			infoFormat : 'application/vnd.ogc.gml',//'text/html'  ----- application/vnd.ogc.gml
			queryVisible : true
		})
	};
	for ( var i in infoControls) {
		infoControls[i].events.register("getfeatureinfo", this, mostrarInfo);
		map.addControl(infoControls[i]);
	}

	infoControls.click.activate();
	
	// * Controle de medição linha e poligono *//
	measureControls = {
		line : new OpenLayers.Control.DynamicMeasure(OpenLayers.Handler.Path),
		polygon : new OpenLayers.Control.DynamicMeasure(
				OpenLayers.Handler.Polygon)
	};
	map.addControls([ measureControls.line, measureControls.polygon ]);

	// evento do click para chamar as camadas nas checkbox
	$('#chkLotes').click(function() {
		var bool = $('#chkLotes').is(':checked') ? true : false;
		
		if ($('#chkLotes').is(':checked')) {
			lotes.setVisibility(bool);
		} else {
			lotes.setVisibility(bool);
		}

	});
	
	$('#chkEdificacao').click(function() {
		var bool = $('#chkEdificacao').is(':checked') ? true : false;

		if ($('#chkEdificacao').is(':checked')) {
			edificacoes.setVisibility(bool);
		} else {
			edificacoes.setVisibility(bool);
		}

	});
	$('#chkMapAeria').click(function() {
		var bool = $('#chkMapAeria').is(':checked') ? true : false;

		if ($('#chkMapAeria').is(':checked')) {
			imgMap2.setVisibility(bool);
		} else {
			imgMap2.setVisibility(bool);
		}

	});
	$('#chkQuadras').click(function() {
		var bool = $('#chkQuadras').is(':checked') ? true : false;

		if ($('#chkQuadras').is(':checked')) {
			quadras.setVisibility(bool);
		} else {
			quadras.setVisibility(bool);
		}

	});
	$('#chkRuas').click(function() {
		var bool = $('#chkRuas').is(':checked') ? true : false;

		if ($('#chkRuas').is(':checked')) {
			asfalto.setVisibility(bool);
		} else {
			asfalto.setVisibility(bool);
		}

	});

	$('#map_move').click(function() {
		$('.icon-mapa').removeClass('icon-mapa-ativo');
		bool = false;
		lotes.setVisibility(bool);
		asfalto.setVisibility(bool);
		quadras.setVisibility(bool);
		imgMap2.setVisibility(bool);
		edificacoes.setVisibility(bool);
		$('.checkBox').prop("checked", false);
		
		$(this).addClass('icon-mapa-ativo');

		for (key in measureControls) {
			var control = measureControls[key];
			control.deactivate();
		}
	});
	// eventos que pega no arquivo siew/lib/js/fontes.js
	$('#map_medir').click(function() {
		toggleControl(this);
	});

	$('#map_area').click(function() {
		toggleControl(this);
	});
	// -------

	// ------ evento do zoom-----
//	map.events.on({
//		"zoomend" : function(e) {
//			if(this.getZoom() >= 7){
//				$('#chkImgUm').prop("checked", true);
//				lotes.setVisibility(true);
//				asfalto.setVisibility(true);
//				
//			}else{
//				$('#chkImgUm').prop("checked", false);
//				lotes.setVisibility(false);
//				asfalto.setVisibility(false);
//			}
////			 console.log(this.getZoom());
////			 console.log(lotes.backBufferResolution);
//
//		}
//	});
	// ------ fim do evento do zoom-----

	map.events.on('pointermove', function(e) {
		if (e.dragging) {
			return;
		}
		var pixel = map.getEventPixel(e.originalEvent);
		var hit = map.forEachLayerAtPixel(pixel, function() {
			return true;
		});
		map.getTargetElement().style.cursor = hit ? 'pointer' : '';
	});

});

function criarCamadaTileWMS(url, camada, description) {
	var layer;

	var format = 'image/png';
	if (url) {
		layer = new OpenLayers.Layer.WMS(description, url, {
			LAYERS : camada,
			STYLES : '',
			format : format,
			transparent : 'true'
		}, {
			visibility : false,
			displayInLayerSwitcher:'false',
// 			isBaseLayer : 'false'
		});
	} else {
		layer = new OpenLayers.Layer.OSM()
	}

	return layer;
};