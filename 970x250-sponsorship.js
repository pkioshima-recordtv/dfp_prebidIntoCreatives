var sizes = [
        [970, 250], [970,90], [728, 90]
        ];
        var PREBID_TIMEOUT = 2300;            
        var adUnits = [{
            code: 'postbid_iframe',
            mediaTypes: {
                banner: {
                    sizes: sizes
                }
            },

            /* -- Floor Price Beginning -- 
            floors: {
                currency: "BRL",
                default: 4.00
            },
             -- Floor Price End-- */

            
            bids: [
            {
              bidder: 'appnexus',
              params: {
                placementId: "23972503"
            }
        },{
              bidder: 'smartadserver',
              params: {
                siteId: "297790",
                pageId: "1527373",
                formatId: "78788"
            }
        },{
              bidder: 'rubicon',
              params: {
                accountId: "15284",
                siteId: "406242",
                zoneId: "2278888"
            }
        },{
              bidder: 'onemobile',
              params: {
                dcn: "8a96982a017e7e7945e2795155b20001",
                pos: "8a9694a2017e7e79505979572e140001"
            }
        }
        ]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

/*
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
*/

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
