var sizes = [
        [300, 250]
        ];
        var PREBID_TIMEOUT = 2300;            
        var adUnits = [{
            code: 'r7adunit',
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
