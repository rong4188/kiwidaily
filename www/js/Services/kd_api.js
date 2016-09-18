(function () {
    "use strict";
    angular
        .module('kdMain')
        .factory('$api', $api);
    $api.$inject = ['$resource'];
    function $api($resource) {
        return {
            newsList: {
                get: function () {
					let NewsList = $resource('http://news-at.zhihu.com/api/4/news/latest');
					return NewsList.get();
                }
            },
            newsContent: {
                get: function (id) {
                    let NewsContent = $resource("http://news-at.zhihu.com/api/4/news/" + id);
                    return NewsContent.get()
                }
            }
        }
    }
})();