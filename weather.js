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

    // console.log(titles);
    
    // console.log(JSON.stringify($("div a").text()));
    // var result = [];
    // var titles = $("#7d ul.t li");  
    // // var titles = $(".c7d");
    // for (var i = 0; i < titles.length; i++) {
    //     // result.push($(titles[i]).text());
    //     //console.log("c7d"+$(titles[i]).text());
    //     console.log(JSON.stringify($(titles[i]).children("h1").text()) + "|" +
    //         JSON.stringify($(titles[i]).children("p.wea").text()) + "|" +
    //         JSON.stringify($(titles[i]).children("p.tem").children("span").text()) + "/" +
    //         JSON.stringify($(titles[i]).children("p.tem").children("i").text())+"|"+
    //         JSON.stringify($(titles[i]).children("p.win").children("i").text())
    //         );
    //     // console.log("temp:"+(JSON.stringify($(titles[i]).text())).replace(/[\n]/g, ""));
    //      console.log("temp:"+($(titles[i]).text()).replace(/[\n]/g, ""));
    // }
    // console.log(("\n24/15℃\n").replace("\n", ""));
    // fs.writeFileSync("result.json",JSON.stringify(result));
 
})
