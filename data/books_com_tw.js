//get isbn from product page in books.com.tw
d = document;

b_isbn = d.querySelectorAll("ul.prd002 span+dfn")[0].innerHTML;
self.postMessage(b_isbn);

self.port.on('add3hr', function (id){
    var _url = "http://www.taaze.tw/apredir.html?ap124294093_a_" + encodeURIComponent(id);
    var insertBeforeNode = d.querySelectorAll("#pr_func .prf002 li")[0];
        
    _l = d.createElement('li');
    _h = d.createElement('h3');
    _a = d.createElement('a');
        _a.setAttribute('style', 'text-align:center; display:block; color:red;');
        _a.setAttribute('href', _url);
        
    _s = d.createElement('span');
        _s.setAttribute('style', 'paddint-top:15px;');
        _s.appendChild(d.createTextNode('TAAZE \u6709 3 \u5C0F\u6642\u5230\u8CA8'));

    _a.appendChild(_s);
    _h.appendChild(_a);
    _l.appendChild(_h);
    
    insertBeforeNode.parentNode.insertBefore(_l, insertBeforeNode);
});