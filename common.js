var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

request({
    // url:"http://www.acfun.tv/v/list110/index.htm",
    // url: "http://www.weather.com.cn/weather/101030100.shtml",
    url: "http://www.csdn.net",
    methed: "get"
}, function(e, r, b) {
    if (e || !b) {
        return;
    }

    var $ = cheerio.load(b);
    var val=$("div").attr("class");//这里获取class值
    var array=val.split(" ");
    console.log(array);
    var childrennode="";
    var datanode="";
    $("div").each(function(index,item) {
        $(this);
        console.log($(this).attr("class"));
        childrennode=$("."+$(this).attr("class"));
        childrennode=($("."+$(this).attr("class")+" ul li")!=undefined)?($("."+$(this).attr("class")+" ul li")):($("."+$(this).attr("class")+" a"));
        if(childrennode!=undefined)
        {
            for (var i = 0; i < childrennode.length; i++) {
                // datanode=JSON.stringify($(childrennode[i]).text());
                // datanode.replace(/[\n]/g," ")
                console.log(($(childrennode[i]).text()).replace(/[\n]/g, " "));

            }
        }
    });
})
