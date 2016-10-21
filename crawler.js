var request=require("request");
var cheerio=require("cheerio");
var fs=require("fs");

request({
// url:"http://www.acfun.tv/v/list110/index.htm",
url:"http://www.csdn.net/",
methed:"get"
},function(e,r,b){
if(e||!b){
return;
} 

var $=cheerio.load(b); 
var result=[];
// var titles=$(".mainer .item a.title");
// var titles=$(".content clearfix .main fl .news clearfix .news_list ul li a.title");
var titles=$(".news_list ul li a"); 
for(var i=0;i<titles.length;i++){
result.push($(titles[i]).text());
console.log(JSON.stringify($(titles[i]).text())+"|"+JSON.stringify($(titles[i]).attr("href"))); 

}
 
fs.writeFileSync("result.json",JSON.stringify(result));
// console.log($);
})
