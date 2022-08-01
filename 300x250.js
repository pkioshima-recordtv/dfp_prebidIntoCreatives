var sizes = [
        [300, 250], [300, 100], [300, 50], [250, 250]
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
