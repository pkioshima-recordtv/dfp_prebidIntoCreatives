var sizes = [
        [970, 250], [970, 90], [728, 90], [300, 250]
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
            {
              bidder: 'teads',
              params: {
                pageId: "138995",
                placementId: "156239"
            }
        },{
              bidder: 'appnexus',
              params: {
                placementId: "23560609"
            }
        },{
              bidder: 'smartadserver',
              params: {
                siteId: "297790",
                pageId: "1495461",
                formatId: "78788"
            }
        },{
              bidder: 'rubicon',
              params: {
                accountId: "15284",
                siteId: "404604",
                zoneId: "2266404"
            }
        },{
              bidder: 'onemobile',
              params: {
                dcn: "8a96905a017e7e78c12c7934ff0e0017",
                pos: "8a969551017e7e78c5ff793ff129001b"
            }
        }
        ]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

/*pbjs.setConfig({
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
});*/

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
passbackTagHtml += "googletag.defineSlot('\/7542\/TESTE\/prebid_passback', [[970, 250]], 'gpt-passback').addService(googletag.pubads());";
passbackTagHtml += "googletag.pubads().enableSingleRequest();";
passbackTagHtml += "googletag.enableServices();";
passbackTagHtml += "googletag.display('gpt-passback');";
passbackTagHtml += "});";
passbackTagHtml += "<\/script>";
passbackTagHtml += "<\/div>";
