//get isbn from product page in eslite.com
//(only get ISBN-13)
d = document;

b_isbn = d.getElementById('ctl00_ContentPlaceHolder1_Product_detail_book1_dlSpec').parentNode.innerHTML.match(/ISBN 13.*(\d{13}).*<br/)[1];
self.postMessage(b_isbn);

self.port.on('add3hr', function (id){
    var _url = "http://www.taaze.tw/apredir.html?ap124294093_a_" + encodeURIComponent(id);
    var insertBeforeNode = d.querySelectorAll("div.PI_info table")[0];
    var taazeNode = d.createElement('div');
    
    taazeNode.setAttribute('style', 'text-align:center; border: 1px solid rgb(204, 204, 204); background-color:rgb(242, 242, 242); margin: 0 0 10px; width: 160px; padding: 10px;');
    _a = d.createElement('a');
        _a.setAttribute('style', 'color:red;');
        _a.setAttribute('href', _url);
        _a.appendChild(d.createTextNode('TAAZE \u6709 3 \u5C0F\u6642\u5230\u8CA8'));

    taazeNode.appendChild(_a);
    
    insertBeforeNode.setAttribute('style', 'margin-top: 5px;');
    insertBeforeNode.parentNode.insertBefore(taazeNode, insertBeforeNode);
});