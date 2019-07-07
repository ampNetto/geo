
//* Funções de medição linha e polygono *//
function toggleControl(element) {
    for (var key in measureControls) {
        if (element.value === key && element) {
            var maxSegments = 100;
            measureControls[key].maxSegments = maxSegments;
            measureControls[key].activate();
        } else {
            var maxSegments = 100;
            measureControls[key].maxSegments = maxSegments;
            measureControls[key].deactivate();
        }
    }
}//fim da function toggleControl
//* Transação de tela das informação do lote e cadastro
function trocarInformacaoTela(){
    if ($(".menu-lateral-filtro").is(":visible")) {
        $(".menu-lateral-filtro-mapa").show("slide", { direction: "right" }, 100);
        $(".menu-lateral-filtro").hide("slide", { direction: "right" }, 1000);
    } else {
        $(".menu-lateral-filtro").show("slide", { direction: "right" }, 1000);
        $(".menu-lateral-filtro-mapa").hide("slide", { direction: "right" }, 1000);
    }
}//function trocarInformacaoTela()

//* Fechar a tela de informação no mapa webgis
function fecharTelaInformacao(){
    select.destroyFeatures();
    clearInfo();
    clearBusca();
}//fim da function fecharTelaInformacao