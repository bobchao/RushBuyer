var data = require("self").data;
var pageWorkers = require("page-worker");
var Request = require("request").Request;

var pageMod_book = require("page-mod");
var pageMod_iread = require("page-mod");
var pageMod_kingstone = require("page-mod");
var pageMod_eslite = require("page-mod");

pageMod_book.PageMod({
    include: ["http://www.books.com.tw/exep/prod/booksfile.php*"],
    contentScriptFile: data.url('books_com_tw.js'),
    onAttach: attachWorker
});

pageMod_iread.PageMod({
    include: ["http://www.iread.com.tw/ProdDetails.aspx?prodid=*"],
    contentScriptFile: data.url('iread_com_tw.js'),
    onAttach: attachWorker
});

pageMod_kingstone.PageMod({
    include: ["http://www.kingstone.com.tw/book/book_page.asp*"],
    contentScriptFile: data.url('kingstone_com_tw.js'),
    onAttach: attachWorker
});

pageMod_eslite.PageMod({
    include: ["http://www.eslite.com/product.aspx*"],
    contentScriptFile: data.url('eslite_com.js'),
    onAttach: attachWorker
});

function attachWorker(worker){
    worker.on('message', function (isbn){
        Request({
            url: "http://www.taaze.tw/beta/searchAgent.jsp?resp_num=1&keyword="+encodeURIComponent(isbn),
            onComplete: function (response) {

                var result = JSON.parse(response.json[1].RESULT1)[0];
                if (/.*"prodCatId\":\"d\".*/.test(result.prodCatCount))
                    worker.port.emit('add3hr', JSON.parse(result.item)[0].orgProdId);
            }
        }).get();
    });
}