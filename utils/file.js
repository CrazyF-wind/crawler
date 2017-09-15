/**
 * Created by Administrator on 2017/9/15.
 */
// 加载File System读写模块
var fs = require('fs');

module.exports  = function(file,list){
    var arr = list;
    console.log(arr);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.appendFile(file, arr, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}
