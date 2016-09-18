(function () {
    "use strict";
    angular
        .module('kdMain')
        .constant('$API_BASE', {
            url: 'http://192.168.1.81:8100/api'
        })
        .factory('$api', $api);
    $api.$inject = ['$resource', '$API_BASE'];
    function $api($resource, $API_BASE) {
        return {
            newsList: {
                get: function () {
                    var NewsList = $resource($API_BASE.url + '/news/latest');
                    return NewsList.get();
                }
            },
            newsContent: {
                get: function (id) {
                    var NewsContent = $resource($API_BASE.url + "/news/" + id);
                    return NewsContent.get()
                }
            }
        }
    }
})();