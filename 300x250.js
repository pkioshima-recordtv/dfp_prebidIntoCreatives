var words = /xxxxx|cancer|morte|guerra/; // Lista de palavras consideradas como HardNews.

var bodytext = document.body.innerText.toLowerCase().replace(/[.,\s]/g, ' '); // Coleta de strings da page convertendo em Lower Case e substituindo as quebras de linhas por espaço.

var bodytext = bodytext.replace(/[àáâãäå]/g,"a"); // Remocao de caracteres especiais.
var bodytext = bodytext.replace(/[éèêë]/g,"e"); // Remocao de caracteres especiais.
var bodytext = bodytext.replace(/[íì]/g,"i"); // Remocao de caracteres especiais.
var bodytext = bodytext.replace(/[õôö]/g,"o"); // Remocao de caracteres especiais.
var bodytext = bodytext.replace(/[ç]/g,"c"); // Remocao de caracteres especiais.

/* Verificacao da lista  e strings da pagina e criacao e atribuicao de valor na var hardnews*/
if(words.test(bodytext)){
	var hardnews = "1"
}else{
	var hardnews = "0"
}

/* Tag do Google para gerar a key-value, hardnews, junto com a funcao para servir no Head */
(function() {
var s = document.createElement('script');
s.innerHTML = 'googletag.cmd.push(function() { googletag.pubads().setTargeting("hardnews",hardnews); });';
document.head.appendChild(s);
})();


// -----------------------------

var bodytext = document.body.innerText;

var bodytext = bodytext.toLowerCase().replace(/[.,\s]/g, ' ');
var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
var bodytext = bodytext.replace(/[éèêë]/g,"e");
var bodytext = bodytext.replace(/[íì]/g,"i");
var bodytext = bodytext.replace(/[õôö]/g,"o");
var bodytext = bodytext.replace(/[úùü]/g,"u");
var bodytext = bodytext.replace(/[ç]/g,"c");


// -----------------------------

var words = / pf | revolver | homicidio | culposo /;

var bodytext = " " + document.querySelector('meta[name="twitter:title"]').content;
var bodytext = bodytext + " " + document.querySelector('meta[name="twitter:description"]').content + " ";

var bodytext = bodytext.toLowerCase().replace(/[.,\s]/g, ' ');
var bodytext = bodytext.replace(/'/g,'');
var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
var bodytext = bodytext.replace(/[éèêë]/g,"e");
var bodytext = bodytext.replace(/[íì]/g,"i");
var bodytext = bodytext.replace(/[õôö]/g,"o");
var bodytext = bodytext.replace(/[úùü]/g,"u");
var bodytext = bodytext.replace(/[ç]/g,"c");

if(words.test(bodytext)){
		var hardnews = "1"
	}else{
		var hardnews = "0"
	}
  	  (function() {
	    var s = document.createElement('script');
	    s.innerHTML = 'googletag.cmd.push(function() { googletag.pubads().setTargeting("hardnews",hardnews); });';
	    document.head.appendChild(s);
	  })();


// -----


var sizes = [
        [300, 250]
        ];
        var PREBID_TIMEOUT = 2300;            
        var adUnits = [{
            code: 'postbid_iframe',
            mediaTypes: {
                banner: {
                    sizes: sizes
                }
            },
            bids: [
            /*{
              bidder: 'teads',
              params: {
                pageId: "138995",
                placementId: "156239"
            }
        },*/{
              bidder: 'appnexus',
              params: {
                placementId: "23560609"
            }
        },{
              bidder: 'yahoossp',
              params: {
                dcn: "8a96905a017e7e78c12c7934ff0e0017",
                pos: "8a969551017e7e78c5ff793602f0001a"
            }
        },{
              bidder: 'smartadserver',
              params: {
                siteId: "297790",
                pageId: "1495461",
                formatId: "107561"
            }
        },{
              bidder: 'rubicon',
              params: {
                accountId: "15284",
                siteId: "404604",
                zoneId: "2266404"
            }
        },{
              bidder: 'rubicon',
              params: {
                accountId: "15284",
                siteId: "95022",
                zoneId: "446956"
            }
        }
        ]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];


pbjs.setConfig({
userSync: {
    filterSettings: {
            iframe: {
                bidders: '*',   // '*' means all bidders
                filter: 'include'
            }
        },
    userIds: [{
        name: "criteo",
    }]
}
});



pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        bidsBackHandler: function() {
            var iframe = document.getElementById('postbid_iframe');
            var iframeDoc = iframe.contentWindow.document;
            var adServerTargeting = pbjs.getAdserverTargetingForAdUnitCode('postbid_iframe');

                        // If any bidders return any creatives
                        if (adServerTargeting && adServerTargeting['hb_adid']) {
                            pbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
                        } else {
                            iframe.width = sizes[0][0];
                            iframe.height = sizes[0][1];
                            iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
                            iframeDoc.close();
                        }
                    }
                });
});     

var passbackTagHtml="";
passbackTagHtml += "<script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>";
passbackTagHtml += "<div id=\"gpt-passback\">";
passbackTagHtml += "<script>";
passbackTagHtml += "window.googletag = window.googletag || {cmd: []};";
passbackTagHtml += "googletag.cmd.push(function() {";
passbackTagHtml += "googletag.defineSlot('\/7542\/TESTE\/prebid_passback', [[300, 250]], 'gpt-passback').addService(googletag.pubads());";
passbackTagHtml += "googletag.pubads().enableSingleRequest();";
passbackTagHtml += "googletag.enableServices();";
passbackTagHtml += "googletag.display('gpt-passback');";
passbackTagHtml += "});";
passbackTagHtml += "<\/script>";
passbackTagHtml += "<\/div>";


