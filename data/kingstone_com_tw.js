//get isbn from product page in kingstone.com.tw
d = document;

b_isbn = d.querySelectorAll('ul.item_list')[0].innerHTML.match(/<li><span>ISBN：<\/span><em>(\d*)<\/em><\/li>/)[1];
self.postMessage(b_isbn);
//extra_info
self.port.on('add3hr', function (id){
    var _url = "http://www.taaze.tw/apredir.html?ap124294093_a_" + encodeURIComponent(id);    
    var insertNode = d.querySelectorAll("div.extra_info")[0];    
    var taazeNode = d.createElement('div');
    
    taazeNode.setAttribute('style', 'text-align:center; border: 1px solid rgb(204, 204, 204); background-color:rgb(242, 242, 242); margin: 0 0 10px; width: 198px; padding: 10px;');
    _a = d.createElement('a');
        _a.setAttribute('style', 'color:red;');
        _a.setAttribute('href', _url);
        _a.appendChild(d.createTextNode('TAAZE \u6709 3 \u5C0F\u6642\u5230\u8CA8'));
        
    taazeNode.appendChild(_a);
    
    insertNode.insertBefore(taazeNode, insertNode.firstChild);
});