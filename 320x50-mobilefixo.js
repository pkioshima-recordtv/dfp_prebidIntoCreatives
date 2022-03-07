var sizes = [
        [320, 50],[300, 50]
        ];
        var PREBID_TIMEOUT = 2300;            
        var adUnits = [{
            code: 'postbid_iframe',
            mediaTypes: {
                banner: {
                    sizes: sizes
                }
            },

            /* -- Floor Price Beginning -- */
            floors: {
                currency: "BRL",
                default: 4.00
            },
            /* -- Floor Price End-- */
            
            bids: [
            {
              bidder: 'appnexus',
              params: {
                placementId: "23560609"
            }
        },{
              bidder: 'smartadserver',
              params: {
                siteId: "297790",
                pageId: "1495461",
                formatId: "78792"
            }
        },{
              bidder: 'rubicon',
              params: {
                accountId: "15284",
                siteId: "404604",
                zoneId: "2266404"
            }
        }/*,{
              bidder: 'seedtag',
              params: {
                publisherId: "4680-0330-01",
                adUnitId: "19038154",
                placement: "inScreen"
            }
        }*/
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
passbackTagHtml += "googletag.defineSlot('\/7542\/TESTE\/prebid_passback', [[320, 50]], 'gpt-passback').addService(googletag.pubads());";
passbackTagHtml += "googletag.pubads().setTargeting('pos', ['mobilefixo']);";
passbackTagHtml += "googletag.pubads().enableSingleRequest();";
passbackTagHtml += "googletag.enableServices();";
passbackTagHtml += "googletag.display('gpt-passback');";
passbackTagHtml += "});";
passbackTagHtml += "<\/script>";
passbackTagHtml += "<\/div>";

/*var passbackTagHtml="";
passbackTagHtml += "<script type=\"text\/javascript\">window._seedtagq = window._seedtagq || [];";
passbackTagHtml += "window._seedtagq.push(['_setId', '4680-0330-01']);";
passbackTagHtml += "(function () {";
passbackTagHtml += "  var st = document.createElement('script');";
passbackTagHtml += "  st.type = 'text\/javascript';";
passbackTagHtml += "  st.async = true;";
passbackTagHtml += "  st.src = ('https:' == document.location.protocol";
passbackTagHtml += "    ? 'https'";
passbackTagHtml += "    : 'http') + ':\/\/config.seedtag.com\/loader.js?v=' + Math.random();";
passbackTagHtml += "  var s = document.getElementsByTagName('script')[0];";
passbackTagHtml += "  s.parentNode.insertBefore(st, s);";
passbackTagHtml += "})();";
passbackTagHtml += "<\/script>";
passbackTagHtml += "<script src=\"https:\/\/creatives.seedtag.com\/dfp\/st-passback.js?inScreen\"><\/script>";*/
