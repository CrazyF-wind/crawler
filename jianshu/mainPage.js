/**
 * Created by Administrator on 2017/9/15.
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require('../utils/file');

var temp = [{'url': ''}]
var recordTime = new Date()

//temp.forEach(function (val) {
    // 简书首页投稿
    request({
        //url: val["url"],
        url:'http://www.jianshu.com/?seen_snote_ids%5B%5D=17115396&seen_snote_ids%5B%5D=17057503&seen_snote_ids%5B%5D=16945858&seen_snote_ids%5B%5D=17116747&seen_snote_ids%5B%5D=16795443&seen_snote_ids%5B%5D=17103676&seen_snote_ids%5B%5D=17113693&seen_snote_ids%5B%5D=16965730&seen_snote_ids%5B%5D=16942814&seen_snote_ids%5B%5D=16959171&seen_snote_ids%5B%5D=16943828&seen_snote_ids%5B%5D=17110324&seen_snote_ids%5B%5D=17087739&seen_snote_ids%5B%5D=16944487&seen_snote_ids%5B%5D=16955225&seen_snote_ids%5B%5D=16940003&seen_snote_ids%5B%5D=16702141&seen_snote_ids%5B%5D=16803444&seen_snote_ids%5B%5D=16876374&seen_snote_ids%5B%5D=17110136&page=2',
        methed: "get"
    }, function (e, r, b) {
        if (e || !b) {
            //console.log(val['url'] + '请求失败！')
            return;
        }
        console.log("r:"+JSON.stringify(r))

        var $ = cheerio.load(b);
        var titles = $("#list-container ul li .content");
        var args = ""

        for (var i = 0; i < titles.length; i++) {
            //args += "{'writer':'" + $(titles[i]).children(".author").children(".name").children("a").text()
            //    + "','writeTime':'" + $(titles[i]).children(".author").children(".name").children("span").text()
            //    + "','title':'" + $(titles[i]).children("a").text()
            //    + "','url':'http://www.jianshu.com" + $(titles[i]).children("a").attr('href')
            //    + "','introduce':'" + JSON.stringify($(titles[i]).children("p").text())
            //    + "','label':'" + JSON.stringify($(titles[i]).children(".meta").children("a").eq(0).text())
            //    + "','readerNum':" + Number($(titles[i]).children(".meta").children("a").eq(1).text())
            //    + ",'messageNum':" + Number($(titles[i]).children(".meta").children("a").eq(2).text())
            //    + ",'likeNum':" + Number($(titles[i]).children(".meta").children("span").eq(0).text())
            //    + ",'moneyNum':" + Number($(titles[i]).children(".meta").children("span").eq(1).text())
            //    + "}";
            //fs("../files/jianshu/" + recordTime + ".txt", args);
        }
    })
//})