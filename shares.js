var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

request({
    // url:"http://www.acfun.tv/v/list110/index.htm",
    url: "http://www.weather.com.cn/weather/101030100.shtml",
    methed: "get"
}, function(e, r, b) {
    if (e || !b) {
        return;
    }

    var $ = cheerio.load(b);
    var result = [];
    var titles = $("#7d ul.t li");
    // console.log(titles);
    console.log(titles.length)
    for (var i = 0; i < titles.length; i++) {
        result.push($(titles[i]).text());
        console.log(JSON.stringify($(titles[i]).children("h1").text()) + "|" +
            JSON.stringify($(titles[i]).children("p.wea").text()) + "|" +
            JSON.stringify($(titles[i]).children("p.tem").children("span").text()) + "/" +
            JSON.stringify($(titles[i]).children("p.tem").children("i").text())+"|"+
            JSON.stringify($(titles[i]).children("p.win").children("i").text())
          );
    }
    // console.log(("\n24/15℃\n").replace("\n", ""));
    // fs.writeFileSync("result.json",JSON.stringify(result));
    // console.log($);
})
