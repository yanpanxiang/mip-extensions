/**
 * @file mip-kp-detail 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();
    var $ = require('zepto');

    function getRequest() {
        var url = window.location.search;
        var theRequest = {};
        if (url.indexOf('?') !== -1) {
            var str = url.substr(1);
            var strs = str.split('&');
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
            }
        }
        return theRequest;
    }
    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        // TODO
        var url = getRequest();
        console.log(url);
        if(url.type === 'video') {
            fetch('http://www.dianjinghu.com/web.php?m=m&c=video&a=detailData&id=' + url.id).then(function(res) {
                return res.json();
            }).then(function(data) {
                console.log(data);
            })
        }else if(url.type === 'news') {
            fetch('http://www.dianjinghu.com/web.php?m=m&c=news&a=detaildata&id=' + url.id).then(function(res) {
                return res.json();
            }).then(function(data) {
                console.log(data);
               var content = data.info.content;
               $('.detail-title').html(content.title);
               console.log(content)
            })
        }

    };

    return customElement;
});
