/**
 * Created by Administrator on 2017/9/13.
 */
var request = require("request");
var cheerio = require("cheerio");
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('GBK', 'UTF-8');

// 搜房网二手房价格
request({
    url: "http://esf.nc.fang.com/newsecond/esfcities.aspx",
    methed: "get",
    encoding: null,
    gzip:true
}, function (e, r, b) {
    if (e || !b) {
        return;
    }
    //var $ = cheerio.load(b,{decodeEntities: false});
    var result = iconv.convert(new Buffer(b, 'binary')).toString();
    var $ = cheerio.load(result);
    var titles = $("#c02 ul li a");
    for (var i = 0; i < titles.length; i++) {
        console.log("{city:" +
            JSON.stringify($(titles[i]).eq(0).text())+
                ",url:"+
            JSON.stringify($(titles[i]).eq(0).attr('href'))+"},"
        );
    }
})