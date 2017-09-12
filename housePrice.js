/**
 * Created by Administrator on 2017/9/12.
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

// 搜房网二手房价格
request({
    url: "http://esf.hz.fang.com/",
    methed: "get",
    gzip:true
}, function (e, r, b) {
    if (e || !b) {
        return;
    }
    var $ = cheerio.load(b,{decodeEntities: false});
    var titles = $(".newcardR ");
    for (var i = 0; i < titles.length; i++) {
        console.log("temp:" +
            JSON.stringify($(titles[i]).children("dl").children("dd").children("p").children("b").eq(1).text())
        );
        //console.log("temp:" + JSON.stringify($(titles[i]).children("dl.dd.p.b").text()));
    }

    //titles.each(function(item){
    //    console.log($(this).find('span').children().first().text())
    //})
})