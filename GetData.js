/**
 * Created by Administrator on 2016/11/15.
 */
var request = require('request');

var options = {
    url: 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=0000011,3990012,3990052,3990062,hsi5,djia7&sty=MPNSBAS&st=&sr=1&p=1&ps=1000&token=44c9d251add88e27b65ed86506f6e5da&cb=callback09259811047383137&callback=callback09259811047383137&_=1479199915003',
    //port: 10086,
    //path: '/pay/pay_callback?' + content,
    //path:'/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=0000011,3990012,3990052,3990062,hsi5,djia7&sty=MPNSBAS&st=&sr=1&p=1&ps=1000&token=44c9d251add88e27b65ed86506f6e5da&cb=callback09259811047383137&callback=callback09259811047383137&_=1479199915003',
    method: 'GET'
};

 request(options, function (err, res, body) {
    //console.log('err: ' + err);
    console.log('BODY: ' + body);
    //console.log('res'+JSON.stringify(res));
});
