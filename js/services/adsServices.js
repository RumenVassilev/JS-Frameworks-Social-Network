'use strict';

app.factory('adsService',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);
