document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    //alert("alo");

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function sincronizar() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda=%27USD%27&@dataInicial=%2708-15-2021%27&@dataFinalCotacao=%2708-18-2021%27&format=json", false );
    xmlHttp.send(null);

    alert(xmlHttp.responseText);
}

function cotacao() {
    window.open("cotacao.html", "_self");
}