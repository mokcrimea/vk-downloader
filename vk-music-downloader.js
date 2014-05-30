// ==UserScript==
// @name MusicDownload from VK
// @description Download music from vk.com
// @author Valentine Khatsayuk
// @license MIT
// @version 0.0.2
// @include http://vk.com/*
// ==/UserScript==

// wrap the script in a closure (opera, ie)
// do not spoil the global scope
// The script can be transformed into a bookmarklet easily :)
(function(window, undefined) {

    // normalized window
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }

    // You can inject almost any javascript library here.
    // Just pass the w as the window reference,
    // e.g. jquery.min.js embedding:
    // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

    // do not run in frames
    if (w.self != w.top) {
        return;
    }

    // additional url check.
    if (/http:\/\/vk.com\/\w{6}\d*/.test(w.location.href)) {
        var list = w.document.getElementsByClassName('play_new');
        addGlobalStyle('.download_new { display: block; margin-left: -20px; top: 9px; position: absolute; background-image: url(data:image/gif;base64,R0lGODlhEAAQAJEAAJqxxv///199nf///yH5BAEAAAMALAAAAAAQABAAAAIlHISpCLafzgsBQmpnzQrz5H1C+JGcqVHqlq5siy7rI3Uv43xNAQA7); width: 16px; height: 16px;  }');
        for (var elem of list) {

            console.log(elem);
            var url = elem.parentNode.parentNode.children[1].value;
            var urlParent = elem.parentNode.parentNode.children[0];

            createIcon('empty', url, urlParent);
        }
    }

    function createIcon(title, url, parent, onOk) {
        var temp;
        temp = w.document.createElement('a');
        temp.className = 'download_new';
        temp.href = url;
        temp.innerHTML = ' ';
        parent.appendChild(temp);
    }

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
})(window);
