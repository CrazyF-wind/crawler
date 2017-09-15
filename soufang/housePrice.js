/**
 * Created by Administrator on 2017/9/12.
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require('../utils/file');
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('GBK', 'UTF-8');

var temp = [
    {
        city: "北京",
        url: "http://esf.fang.com/"
    },
    {
        city: "上海",
        url: "http://esf.sh.fang.com/"
    },
    {
        city: "天津",
        url: "http://esf.tj.fang.com/"
    },
    {
        city: "重庆",
        url: "http://esf.cq.fang.com/"
    },
    {
        city: "邢台",
        url: "http://esf.xingtai.fang.com"
    },
    {
        city: "张家口",
        url: "http://esf.zhangjiakou.fang.com"
    },
    {
        city: "承德",
        url: "http://esf.chengde.fang.com"
    },
    {
        city: "沧州",
        url: "http://esf.cangzhou.fang.com"
    },
    {
        city: "张北",
        url: "http://esf.zhangbei.fang.com"
    },
    {
        city: "遵化",
        url: "http://esf.zunhua.fang.com"
    },
    {
        city: "迁安",
        url: "http://esf.qianan.fang.com"
    },
    {
        city: "邯郸",
        url: "http://esf.hd.fang.com"
    },
    {
        city: "保定",
        url: "http://esf.bd.fang.com"
    },
    {
        city: "衡水",
        url: "http://esf.hs.fang.com"
    },
    {
        city: "廊坊",
        url: "http://esf.lf.fang.com"
    },
    {
        city: "秦皇岛",
        url: "http://esf.qhd.fang.com"
    },
    {
        city: "石家庄",
        url: "http://esf.sjz.fang.com"
    },
    {
        city: "唐山",
        url: "http://esf.ts.fang.com"
    },
    {
        city: "定州",
        url: "http://esf.dingzhou.fang.com"
    },
    {
        city: "辛集",
        url: "http://esf.xinji.fang.com"
    },
    {
        city: "滦县",
        url: "http://esf.luanxian.fang.com"
    },
    {
        city: "玉田",
        url: "http://esf.yutian.fang.com"
    },
    {
        city: "晋州",
        url: "http://esf.hbjz.fang.com"
    },
    {
        city: "滦南",
        url: "http://esf.luannan.fang.com"
    },
    {
        city: "高碑店",
        url: "http://esf.gaobeidian.fang.com"
    },
    {
        city: "乐亭",
        url: "http://esf.hblt.fang.com"
    },
    {
        city: "迁西",
        url: "http://esf.qianxi.fang.com"
    },
    {
        city: "青龙",
        url: "http://esf.hbql.fang.com"
    },
    {
        city: "无极",
        url: "http://esf.hbwj.fang.com"
    },
    {
        city: "赵县",
        url: "http://esf.hbzx.fang.com"
    },
    {
        city: "元氏",
        url: "http://esf.hbys.fang.com"
    },
    {
        city: "文安",
        url: "http://esf.wenan.fang.com"
    },
    {
        city: "新乐",
        url: "http://esf.xinle.fang.com"
    },
    {
        city: "霸州",
        url: "http://esf.hbbz.fang.com"
    },
    {
        city: "昌黎",
        url: "http://esf.changli.fang.com"
    },
    {
        city: "平山",
        url: "http://esf.hbps.fang.com"
    },
    {
        city: "武安",
        url: "http://esf.wuan.fang.com"
    },
    {
        city: "任丘",
        url: "http://esf.renqiu.fang.com"
    },
    {
        city: "冀州",
        url: "http://esf.jz.fang.com"
    },
    {
        city: "三河",
        url: "http://esf.hbsh.fang.com"
    },
    {
        city: "深州",
        url: "http://esf.hbsz.fang.com"
    },
    {
        city: "大同",
        url: "http://esf.datong.fang.com"
    },
    {
        city: "阳泉",
        url: "http://esf.yangquan.fang.com"
    },
    {
        city: "长治",
        url: "http://esf.changzhi.fang.com"
    },
    {
        city: "朔州",
        url: "http://esf.shuozhou.fang.com"
    },
    {
        city: "晋中",
        url: "http://esf.jinzhong.fang.com"
    },
    {
        city: "忻州",
        url: "http://esf.xinzhou.fang.com"
    },
    {
        city: "临汾",
        url: "http://esf.linfen.fang.com"
    },
    {
        city: "吕梁",
        url: "http://esf.lvliang.fang.com"
    },
    {
        city: "运城",
        url: "http://esf.yuncheng.fang.com"
    },
    {
        city: "晋城",
        url: "http://esf.jc.fang.com"
    },
    {
        city: "临猗",
        url: "http://esf.sxly.fang.com"
    },
    {
        city: "太原",
        url: "http://esf.taiyuan.fang.com"
    },
    {
        city: "清徐",
        url: "http://esf.qingxu.fang.com"
    },
    {
        city: "阳曲",
        url: "http://esf.yangqu.fang.com"
    },
    {
        city: "怀仁",
        url: "http://esf.huairen.fang.com"
    },
    {
        city: "赤峰",
        url: "http://esf.chifeng.fang.com"
    },
    {
        city: "乌兰察布",
        url: "http://esf.wlcb.fang.com"
    },
    {
        city: "通辽",
        url: "http://esf.tl.fang.com"
    },
    {
        city: "阿拉善盟",
        url: "http://esf.alsm.fang.com"
    },
    {
        city: "鄂尔多斯",
        url: "http://esf.erds.fang.com"
    },
    {
        city: "包头",
        url: "http://esf.bt.fang.com"
    },
    {
        city: "乌海",
        url: "http://esf.wuhai.fang.com"
    },
    {
        city: "锡林郭勒盟",
        url: "http://esf.xlglm.fang.com"
    },
    {
        city: "兴安盟",
        url: "http://esf.xam.fang.com"
    },
    {
        city: "巴彦淖尔",
        url: "http://esf.byne.fang.com"
    },
    {
        city: "海拉尔",
        url: "http://esf.hailaer.fang.com"
    },
    {
        city: "呼伦贝尔",
        url: "http://esf.hlbe.fang.com"
    },
    {
        city: "呼和浩特",
        url: "http://esf.nm.fang.com"
    },
    {
        city: "锡林浩特",
        url: "http://esf.xilinhaote.fang.com"
    },
    {
        city: "抚顺",
        url: "http://esf.fushun.fang.com"
    },
    {
        city: "本溪",
        url: "http://esf.benxi.fang.com"
    },
    {
        city: "丹东",
        url: "http://esf.dandong.fang.com"
    },
    {
        city: "锦州",
        url: "http://esf.jinzhou.fang.com"
    },
    {
        city: "阜新",
        url: "http://esf.fuxin.fang.com"
    },
    {
        city: "辽阳",
        url: "http://esf.liaoyang.fang.com"
    },
    {
        city: "盘锦",
        url: "http://esf.panjin.fang.com"
    },
    {
        city: "铁岭",
        url: "http://esf.tieling.fang.com"
    },
    {
        city: "朝阳",
        url: "http://esf.chaoyang.fang.com"
    },
    {
        city: "葫芦岛",
        url: "http://esf.huludao.fang.com"
    },
    {
        city: "营口",
        url: "http://esf.yk.fang.com"
    },
    {
        city: "庄河",
        url: "http://esf.lnzh.fang.com"
    },
    {
        city: "普兰店",
        url: "http://esf.pulandian.fang.com"
    },
    {
        city: "鞍山",
        url: "http://esf.anshan.fang.com"
    },
    {
        city: "大连",
        url: "http://esf.dl.fang.com"
    },
    {
        city: "沈阳",
        url: "http://esf.sy.fang.com"
    },
    {
        city: "瓦房店",
        url: "http://esf.wafangdian.fang.com"
    },
    {
        city: "东港",
        url: "http://esf.donggang.fang.com"
    },
    {
        city: "凤城",
        url: "http://esf.fengcheng.fang.com"
    },
    {
        city: "新民",
        url: "http://esf.xinmin.fang.com"
    },
    {
        city: "辽中",
        url: "http://esf.liaozhong.fang.com"
    },
    {
        city: "法库",
        url: "http://esf.faku.fang.com"
    },
    {
        city: "康平",
        url: "http://esf.kangping.fang.com"
    },
    {
        city: "海城",
        url: "http://esf.haicheng.fang.com"
    },
    {
        city: "台安",
        url: "http://esf.lnta.fang.com"
    },
    {
        city: "四平",
        url: "http://esf.siping.fang.com"
    },
    {
        city: "辽源",
        url: "http://esf.liaoyuan.fang.com"
    },
    {
        city: "通化",
        url: "http://esf.tonghua.fang.com"
    },
    {
        city: "白山",
        url: "http://esf.baishan.fang.com"
    },
    {
        city: "松原",
        url: "http://esf.songyuan.fang.com"
    },
    {
        city: "白城",
        url: "http://esf.baicheng.fang.com"
    },
    {
        city: "延边",
        url: "http://esf.yanbian.fang.com"
    },
    {
        city: "长春",
        url: "http://esf.changchun.fang.com"
    },
    {
        city: "吉林",
        url: "http://esf.jl.fang.com"
    },
    {
        city: "农安",
        url: "http://esf.nongan.fang.com"
    },
    {
        city: "德惠",
        url: "http://esf.dehui.fang.com"
    },
    {
        city: "榆树",
        url: "http://esf.jlys.fang.com"
    },
    {
        city: "公主岭",
        url: "http://esf.gongzhuling.fang.com"
    },
    {
        city: "桦甸",
        url: "http://esf.huadian.fang.com"
    },
    {
        city: "齐齐哈尔",
        url: "http://esf.qiqihaer.fang.com"
    },
    {
        city: "鸡西",
        url: "http://esf.jixi.fang.com"
    },
    {
        city: "鹤岗",
        url: "http://esf.hegang.fang.com"
    },
    {
        city: "双鸭山",
        url: "http://esf.shuangyashan.fang.com"
    },
    {
        city: "伊春",
        url: "http://esf.hljyichun.fang.com"
    },
    {
        city: "佳木斯",
        url: "http://esf.jiamusi.fang.com"
    },
    {
        city: "七台河",
        url: "http://esf.qitaihe.fang.com"
    },
    {
        city: "牡丹江",
        url: "http://esf.mudanjiang.fang.com"
    },
    {
        city: "黑河",
        url: "http://esf.heihe.fang.com"
    },
    {
        city: "绥化",
        url: "http://esf.suihua.fang.com"
    },
    {
        city: "大兴安岭",
        url: "http://esf.dxal.fang.com"
    },
    {
        city: "大庆",
        url: "http://esf.daqing.fang.com"
    },
    {
        city: "哈尔滨",
        url: "http://esf.hrb.fang.com"
    },
    {
        city: "肇东",
        url: "http://esf.zhaodong.fang.com"
    },
    {
        city: "宾县",
        url: "http://esf.binxian.fang.com"
    },
    {
        city: "安达",
        url: "http://esf.anda.fang.com"
    },
    {
        city: "巴彦",
        url: "http://esf.bayan.fang.com"
    },
    {
        city: "尚志",
        url: "http://esf.shangzhi.fang.com"
    },
    {
        city: "五常",
        url: "http://esf.wuchang.fang.com"
    },
    {
        city: "依兰",
        url: "http://esf.yilan.fang.com"
    },
    {
        city: "肇源",
        url: "http://esf.zhaoyuan.fang.com"
    },
    {
        city: "肇州",
        url: "http://esf.zhaozhou.fang.com"
    },
    {
        city: "海林",
        url: "http://esf.hailin.fang.com"
    },
    {
        city: "宜兴",
        url: "http://esf.yixing.fang.com"
    },
    {
        city: "沭阳",
        url: "http://esf.shuyang.fang.com"
    },
    {
        city: "张家港",
        url: "http://esf.zjg.fang.com"
    },
    {
        city: "宿迁",
        url: "http://esf.sq.fang.com"
    },
    {
        city: "太仓",
        url: "http://esf.tc.fang.com"
    },
    {
        city: "邳州",
        url: "http://esf.pizhou.fang.com"
    },
    {
        city: "兴化",
        url: "http://esf.xinghua.fang.com"
    },
    {
        city: "如皋",
        url: "http://esf.rugao.fang.com"
    },
    {
        city: "溧阳",
        url: "http://esf.liyang.fang.com"
    },
    {
        city: "泰兴",
        url: "http://esf.taixing.fang.com"
    },
    {
        city: "东台",
        url: "http://esf.dongtai.fang.com"
    },
    {
        city: "启东",
        url: "http://esf.qidong.fang.com"
    },
    {
        city: "江都",
        url: "http://esf.jiangdu.fang.com"
    },
    {
        city: "海门",
        url: "http://esf.haimen.fang.com"
    },
    {
        city: "新沂",
        url: "http://esf.xinyi.fang.com"
    },
    {
        city: "高邮",
        url: "http://esf.gaoyou.fang.com"
    },
    {
        city: "靖江",
        url: "http://esf.jingjiang.fang.com"
    },
    {
        city: "常熟",
        url: "http://esf.changshu.fang.com"
    },
    {
        city: "常州",
        url: "http://esf.cz.fang.com"
    },
    {
        city: "淮安",
        url: "http://esf.huaian.fang.com"
    },
    {
        city: "江阴",
        url: "http://esf.jy.fang.com"
    },
    {
        city: "昆山",
        url: "http://esf.ks.fang.com"
    },
    {
        city: "连云港",
        url: "http://esf.lyg.fang.com"
    },
    {
        city: "南京",
        url: "http://esf.nanjing.fang.com"
    },
    {
        city: "南通",
        url: "http://esf.nt.fang.com"
    },
    {
        city: "苏州",
        url: "http://esf.suzhou.fang.com"
    },
    {
        city: "泰州",
        url: "http://esf.taizhou.fang.com"
    },
    {
        city: "无锡",
        url: "http://esf.wuxi.fang.com"
    },
    {
        city: "吴江",
        url: "http://esf.wj.fang.com"
    },
    {
        city: "徐州",
        url: "http://esf.xz.fang.com"
    },
    {
        city: "盐城",
        url: "http://esf.yancheng.fang.com"
    },
    {
        city: "扬州",
        url: "http://esf.yz.fang.com"
    },
    {
        city: "镇江",
        url: "http://esf.zhenjiang.fang.com"
    },
    {
        city: "如东",
        url: "http://esf.rudong.fang.com"
    },
    {
        city: "仪征",
        url: "http://esf.yizheng.fang.com"
    },
    {
        city: "金坛",
        url: "http://esf.jintan.fang.com"
    },
    {
        city: "睢宁",
        url: "http://esf.jssn.fang.com"
    },
    {
        city: "丰县",
        url: "http://esf.jsfx.fang.com"
    },
    {
        city: "沛县",
        url: "http://esf.peixian.fang.com"
    },
    {
        city: "宝应",
        url: "http://esf.baoying.fang.com"
    },
    {
        city: "句容",
        url: "http://esf.jr.fang.com"
    },
    {
        city: "阜宁",
        url: "http://esf.funing.fang.com"
    },
    {
        city: "高淳",
        url: "http://esf.njgc.fang.com"
    },
    {
        city: "姜堰",
        url: "http://esf.jiangyan.fang.com"
    },
    {
        city: "泉山",
        url: "http://esf.quanshan.fang.com"
    },
    {
        city: "铜山",
        url: "http://esf.tongshan.fang.com"
    },
    {
        city: "玉山",
        url: "http://esf.ksys.fang.com"
    },
    {
        city: "海安",
        url: "http://esf.haian.fang.com"
    },
    {
        city: "金湖",
        url: "http://esf.jinhu.fang.com"
    },
    {
        city: "东海",
        url: "http://esf.donghai.fang.com"
    },
    {
        city: "衢州",
        url: "http://esf.quzhou.fang.com"
    },
    {
        city: "长兴",
        url: "http://esf.changxing.fang.com"
    },
    {
        city: "德清",
        url: "http://esf.deqing.fang.com"
    },
    {
        city: "台州",
        url: "http://esf.tz.fang.com"
    },
    {
        city: "瑞安",
        url: "http://esf.ruian.fang.com"
    },
    {
        city: "丽水",
        url: "http://esf.ls.fang.com"
    },
    {
        city: "乐清",
        url: "http://esf.yueqing.fang.com"
    },
    {
        city: "海宁",
        url: "http://esf.haining.fang.com"
    },
    {
        city: "温岭",
        url: "http://esf.wenling.fang.com"
    },
    {
        city: "临海",
        url: "http://esf.linhai.fang.com"
    },
    {
        city: "诸暨",
        url: "http://esf.zhuji.fang.com"
    },
    {
        city: "慈溪",
        url: "http://esf.cixi.fang.com"
    },
    {
        city: "余姚",
        url: "http://esf.yuyao.fang.com"
    },
    {
        city: "桐乡",
        url: "http://esf.tongxiang.fang.com"
    },
    {
        city: "上虞",
        url: "http://esf.shangyu.fang.com"
    },
    {
        city: "平湖",
        url: "http://esf.pinghu.fang.com"
    },
    {
        city: "富阳",
        url: "http://esf.zjfy.fang.com"
    },
    {
        city: "宁海",
        url: "http://esf.ninghai.fang.com"
    },
    {
        city: "奉化",
        url: "http://esf.fenghua.fang.com"
    },
    {
        city: "杭州",
        url: "http://esf.hz.fang.com"
    },
    {
        city: "湖州",
        url: "http://esf.huzhou.fang.com"
    },
    {
        city: "嘉兴",
        url: "http://esf.jx.fang.com"
    },
    {
        city: "金华",
        url: "http://esf.jh.fang.com"
    },
    {
        city: "宁波",
        url: "http://esf.nb.fang.com"
    },
    {
        city: "绍兴",
        url: "http://esf.shaoxing.fang.com"
    },
    {
        city: "温州",
        url: "http://esf.wz.fang.com"
    },
    {
        city: "舟山",
        url: "http://esf.zhoushan.fang.com"
    },
    {
        city: "临安",
        url: "http://esf.linan.fang.com"
    },
    {
        city: "建德",
        url: "http://esf.jiande.fang.com"
    },
    {
        city: "桐庐",
        url: "http://esf.zjtl.fang.com"
    },
    {
        city: "象山",
        url: "http://esf.zjxs.fang.com"
    },
    {
        city: "玉环",
        url: "http://esf.yuhuan.fang.com"
    },
    {
        city: "淳安",
        url: "http://esf.chunan.fang.com"
    },
    {
        city: "镇海",
        url: "http://esf.zhenhai.fang.com"
    },
    {
        city: "安吉",
        url: "http://esf.aj.fang.com"
    },
    {
        city: "海盐",
        url: "http://esf.haiyan.fang.com"
    },
    {
        city: "淮北",
        url: "http://esf.huaibei.fang.com"
    },
    {
        city: "铜陵",
        url: "http://esf.tongling.fang.com"
    },
    {
        city: "安庆",
        url: "http://esf.anqing.fang.com"
    },
    {
        city: "黄山",
        url: "http://esf.huangshan.fang.com"
    },
    {
        city: "滁州",
        url: "http://esf.chuzhou.fang.com"
    },
    {
        city: "阜阳",
        url: "http://esf.fuyang.fang.com"
    },
    {
        city: "宿州",
        url: "http://esf.ahsuzhou.fang.com"
    },
    {
        city: "巢湖",
        url: "http://esf.chaohu.fang.com"
    },
    {
        city: "六安",
        url: "http://esf.luan.fang.com"
    },
    {
        city: "亳州",
        url: "http://esf.bozhou.fang.com"
    },
    {
        city: "池州",
        url: "http://esf.chizhou.fang.com"
    },
    {
        city: "宣城",
        url: "http://esf.xuancheng.fang.com"
    },
    {
        city: "霍邱",
        url: "http://esf.huoqiu.fang.com"
    },
    {
        city: "桐城",
        url: "http://esf.tongcheng.fang.com"
    },
    {
        city: "蚌埠",
        url: "http://esf.bengbu.fang.com"
    },
    {
        city: "合肥",
        url: "http://esf.hf.fang.com"
    },
    {
        city: "淮南",
        url: "http://esf.huainan.fang.com"
    },
    {
        city: "马鞍山",
        url: "http://esf.mas.fang.com"
    },
    {
        city: "芜湖",
        url: "http://esf.wuhu.fang.com"
    },
    {
        city: "肥西",
        url: "http://esf.feixi.fang.com"
    },
    {
        city: "庐江",
        url: "http://esf.lujiang.fang.com"
    },
    {
        city: "肥东",
        url: "http://esf.feidong.fang.com"
    },
    {
        city: "当涂",
        url: "http://esf.dangtu.fang.com"
    },
    {
        city: "长丰",
        url: "http://esf.ahcf.fang.com"
    },
    {
        city: "固镇",
        url: "http://esf.guzhen.fang.com"
    },
    {
        city: "怀远",
        url: "http://esf.huaiyuan.fang.com"
    },
    {
        city: "五河",
        url: "http://esf.wuhe.fang.com"
    },
    {
        city: "繁昌",
        url: "http://esf.fanchang.fang.com"
    },
    {
        city: "三明",
        url: "http://esf.sanming.fang.com"
    },
    {
        city: "南平",
        url: "http://esf.nanping.fang.com"
    },
    {
        city: "龙岩",
        url: "http://esf.longyan.fang.com"
    },
    {
        city: "宁德",
        url: "http://esf.ningde.fang.com"
    },
    {
        city: "福清",
        url: "http://esf.fq.fang.com"
    },
    {
        city: "平潭",
        url: "http://esf.pingtan.fang.com"
    },
    {
        city: "南安",
        url: "http://esf.nanan.fang.com"
    },
    {
        city: "龙海",
        url: "http://esf.longhai.fang.com"
    },
    {
        city: "惠安",
        url: "http://esf.huian.fang.com"
    },
    {
        city: "长乐",
        url: "http://esf.changle.fang.com"
    },
    {
        city: "石狮",
        url: "http://esf.shishi.fang.com"
    },
    {
        city: "福州",
        url: "http://esf.fz.fang.com"
    },
    {
        city: "莆田",
        url: "http://esf.putian.fang.com"
    },
    {
        city: "泉州",
        url: "http://esf.qz.fang.com"
    },
    {
        city: "厦门",
        url: "http://esf.xm.fang.com"
    },
    {
        city: "漳州",
        url: "http://esf.zhangzhou.fang.com"
    },
    {
        city: "安溪",
        url: "http://esf.fjax.fang.com"
    },
    {
        city: "连江",
        url: "http://esf.lianjiang.fang.com"
    },
    {
        city: "永春",
        url: "http://esf.yongchun.fang.com"
    },
    {
        city: "罗源",
        url: "http://esf.luoyuan.fang.com"
    },
    {
        city: "闽清",
        url: "http://esf.minqing.fang.com"
    },
    {
        city: "泉港",
        url: "http://esf.quangang.fang.com"
    },
    {
        city: "永泰",
        url: "http://esf.yongtai.fang.com"
    },
    {
        city: "福安",
        url: "http://esf.fuan.fang.com"
    },
    {
        city: "德化",
        url: "http://esf.dh.fang.com"
    },
    {
        city: "永安",
        url: "http://esf.ya.fang.com"
    },
    {
        city: "景德镇",
        url: "http://esf.jingdezhen.fang.com"
    },
    {
        city: "萍乡",
        url: "http://esf.pingxiang.fang.com"
    },
    {
        city: "新余",
        url: "http://esf.xinyu.fang.com"
    },
    {
        city: "鹰潭",
        url: "http://esf.yingtan.fang.com"
    },
    {
        city: "吉安",
        url: "http://esf.jian.fang.com"
    },
    {
        city: "宜春",
        url: "http://esf.yichun.fang.com"
    },
    {
        city: "抚州",
        url: "http://esf.jxfuzhou.fang.com"
    },
    {
        city: "上饶",
        url: "http://esf.shangrao.fang.com"
    },
    {
        city: "赣州",
        url: "http://esf.ganzhou.fang.com"
    },
    {
        city: "九江",
        url: "http://esf.jiujiang.fang.com"
    },
    {
        city: "南昌",
        url: "http://esf.nc.fang.com"
    },
    {
        city: "进贤",
        url: "http://esf.jinxian.fang.com"
    },
    {
        city: "新建",
        url: "http://esf.xinjian.fang.com"
    },
    {
        city: "瑞金",
        url: "http://esf.ruijin.fang.com"
    },
    {
        city: "丰城",
        url: "http://esf.jxfc.fang.com"
    },
    {
        city: "靖安",
        url: "http://esf.jxja.fang.com"
    },
    {
        city: "枣庄",
        url: "http://esf.zaozhuang.fang.com"
    },
    {
        city: "济宁",
        url: "http://esf.jining.fang.com"
    },
    {
        city: "泰安",
        url: "http://esf.taian.fang.com"
    },
    {
        city: "莱芜",
        url: "http://esf.laiwu.fang.com"
    },
    {
        city: "德州",
        url: "http://esf.dz.fang.com"
    },
    {
        city: "日照",
        url: "http://esf.rz.fang.com"
    },
    {
        city: "菏泽",
        url: "http://esf.heze.fang.com"
    },
    {
        city: "聊城",
        url: "http://esf.lc.fang.com"
    },
    {
        city: "临沂",
        url: "http://esf.linyi.fang.com"
    },
    {
        city: "东营",
        url: "http://esf.dy.fang.com"
    },
    {
        city: "章丘",
        url: "http://esf.zhangqiu.fang.com"
    },
    {
        city: "诸城",
        url: "http://esf.zhucheng.fang.com"
    },
    {
        city: "招远",
        url: "http://esf.zy.fang.com"
    },
    {
        city: "滕州",
        url: "http://esf.tengzhou.fang.com"
    },
    {
        city: "寿光",
        url: "http://esf.sg.fang.com"
    },
    {
        city: "平度",
        url: "http://esf.pingdu.fang.com"
    },
    {
        city: "新泰",
        url: "http://esf.xintai.fang.com"
    },
    {
        city: "邹城",
        url: "http://esf.zoucheng.fang.com"
    },
    {
        city: "肥城",
        url: "http://esf.feicheng.fang.com"
    },
    {
        city: "莱州",
        url: "http://esf.laizhou.fang.com"
    },
    {
        city: "邹平",
        url: "http://esf.zouping.fang.com"
    },
    {
        city: "胶南",
        url: "http://esf.jiaonan.fang.com"
    },
    {
        city: "龙口",
        url: "http://esf.longkou.fang.com"
    },
    {
        city: "淄博",
        url: "http://esf.zb.fang.com"
    },
    {
        city: "高密",
        url: "http://esf.gaomi.fang.com"
    },
    {
        city: "滨州",
        url: "http://esf.binzhou.fang.com"
    },
    {
        city: "济南",
        url: "http://esf.jn.fang.com"
    },
    {
        city: "青岛",
        url: "http://esf.qd.fang.com"
    },
    {
        city: "威海",
        url: "http://esf.weihai.fang.com"
    },
    {
        city: "潍坊",
        url: "http://esf.wf.fang.com"
    },
    {
        city: "烟台",
        url: "http://esf.yt.fang.com"
    },
    {
        city: "即墨",
        url: "http://esf.jimo.fang.com"
    },
    {
        city: "莱西",
        url: "http://esf.laixi.fang.com"
    },
    {
        city: "昌邑",
        url: "http://esf.changyi.fang.com"
    },
    {
        city: "广饶",
        url: "http://esf.guangrao.fang.com"
    },
    {
        city: "蓬莱",
        url: "http://esf.penglai.fang.com"
    },
    {
        city: "安丘",
        url: "http://esf.anqiu.fang.com"
    },
    {
        city: "青州",
        url: "http://esf.qingzhou.fang.com"
    },
    {
        city: "临朐",
        url: "http://esf.linqu.fang.com"
    },
    {
        city: "济阳",
        url: "http://esf.sdjy.fang.com"
    },
    {
        city: "商河",
        url: "http://esf.sdsh.fang.com"
    },
    {
        city: "昌乐",
        url: "http://esf.sdcl.fang.com"
    },
    {
        city: "莱阳",
        url: "http://esf.laiyang.fang.com"
    },
    {
        city: "平阴",
        url: "http://esf.sdpy.fang.com"
    },
    {
        city: "临清",
        url: "http://esf.linqing.fang.com"
    },
    {
        city: "栖霞",
        url: "http://esf.qixia.fang.com"
    },
    {
        city: "海阳",
        url: "http://esf.haiyang.fang.com"
    },
    {
        city: "长岛",
        url: "http://esf.ytcd.fang.com"
    },
    {
        city: "长清",
        url: "http://esf.jncq.fang.com"
    },
    {
        city: "胶州",
        url: "http://esf.jiaozhou.fang.com"
    },
    {
        city: "开封",
        url: "http://esf.kaifeng.fang.com"
    },
    {
        city: "平顶山",
        url: "http://esf.pingdingshan.fang.com"
    },
    {
        city: "安阳",
        url: "http://esf.anyang.fang.com"
    },
    {
        city: "鹤壁",
        url: "http://esf.hebi.fang.com"
    },
    {
        city: "焦作",
        url: "http://esf.jiaozuo.fang.com"
    },
    {
        city: "濮阳",
        url: "http://esf.puyang.fang.com"
    },
    {
        city: "许昌",
        url: "http://esf.xuchang.fang.com"
    },
    {
        city: "漯河",
        url: "http://esf.luohe.fang.com"
    },
    {
        city: "三门峡",
        url: "http://esf.sanmenxia.fang.com"
    },
    {
        city: "南阳",
        url: "http://esf.nanyang.fang.com"
    },
    {
        city: "商丘",
        url: "http://esf.shangqiu.fang.com"
    },
    {
        city: "信阳",
        url: "http://esf.xinyang.fang.com"
    },
    {
        city: "周口",
        url: "http://esf.zhoukou.fang.com"
    },
    {
        city: "驻马店",
        url: "http://esf.zhumadian.fang.com"
    },
    {
        city: "新乡",
        url: "http://esf.xx.fang.com"
    },
    {
        city: "禹州",
        url: "http://esf.hnyz.fang.com"
    },
    {
        city: "长葛",
        url: "http://esf.changge.fang.com"
    },
    {
        city: "鄢陵",
        url: "http://esf.yanling.fang.com"
    },
    {
        city: "巩义",
        url: "http://esf.gongyi.fang.com"
    },
    {
        city: "济源",
        url: "http://esf.jiyuan.fang.com"
    },
    {
        city: "洛阳",
        url: "http://esf.ly.fang.com"
    },
    {
        city: "郑州",
        url: "http://esf.zz.fang.com"
    },
    {
        city: "新郑",
        url: "http://esf.xinzheng.fang.com"
    },
    {
        city: "荥阳",
        url: "http://esf.xingyang.fang.com"
    },
    {
        city: "伊川",
        url: "http://esf.yichuan.fang.com"
    },
    {
        city: "偃师",
        url: "http://esf.yanshi.fang.com"
    },
    {
        city: "中牟",
        url: "http://esf.zhongmou.fang.com"
    },
    {
        city: "登封",
        url: "http://esf.dengfeng.fang.com"
    },
    {
        city: "新安",
        url: "http://esf.hnxa.fang.com"
    },
    {
        city: "宜阳",
        url: "http://esf.hnyy.fang.com"
    },
    {
        city: "新密",
        url: "http://esf.xinmi.fang.com"
    },
    {
        city: "嵩县",
        url: "http://esf.songxian.fang.com"
    },
    {
        city: "洛宁",
        url: "http://esf.luoning.fang.com"
    },
    {
        city: "孟津",
        url: "http://esf.mengjin.fang.com"
    },
    {
        city: "汝阳",
        url: "http://esf.ruyang.fang.com"
    },
    {
        city: "邓州",
        url: "http://esf.dengzhou.fang.com"
    },
    {
        city: "兰考",
        url: "http://esf.lankao.fang.com"
    },
    {
        city: "汝州",
        url: "http://esf.ruzhou.fang.com"
    },
    {
        city: "栾川",
        url: "http://esf.luanchuan.fang.com"
    },
    {
        city: "永城",
        url: "http://esf.yongcheng.fang.com"
    },
    {
        city: "舞钢",
        url: "http://esf.wg.fang.com"
    },
    {
        city: "十堰",
        url: "http://esf.shiyan.fang.com"
    },
    {
        city: "鄂州",
        url: "http://esf.ezhou.fang.com"
    },
    {
        city: "荆门",
        url: "http://esf.jingmen.fang.com"
    },
    {
        city: "孝感",
        url: "http://esf.xiaogan.fang.com"
    },
    {
        city: "荆州",
        url: "http://esf.jingzhou.fang.com"
    },
    {
        city: "黄冈",
        url: "http://esf.huanggang.fang.com"
    },
    {
        city: "咸宁",
        url: "http://esf.xianning.fang.com"
    },
    {
        city: "随州",
        url: "http://esf.suizhou.fang.com"
    },
    {
        city: "恩施",
        url: "http://esf.enshi.fang.com"
    },
    {
        city: "仙桃",
        url: "http://esf.xiantao.fang.com"
    },
    {
        city: "神农架",
        url: "http://esf.shennongjia.fang.com"
    },
    {
        city: "天门",
        url: "http://esf.tianmen.fang.com"
    },
    {
        city: "潜江",
        url: "http://esf.qj.fang.com"
    },
    {
        city: "黄石",
        url: "http://esf.huangshi.fang.com"
    },
    {
        city: "武汉",
        url: "http://esf.wuhan.fang.com"
    },
    {
        city: "襄阳",
        url: "http://esf.xiangyang.fang.com"
    },
    {
        city: "宜昌",
        url: "http://esf.yc.fang.com"
    },
    {
        city: "当阳",
        url: "http://esf.dangyang.fang.com"
    },
    {
        city: "宜都",
        url: "http://esf.yidu.fang.com"
    },
    {
        city: "枝江",
        url: "http://esf.zhijiang.fang.com"
    },
    {
        city: "汉南",
        url: "http://esf.whhn.fang.com"
    },
    {
        city: "京山",
        url: "http://esf.hbjs.fang.com"
    },
    {
        city: "钟祥",
        url: "http://esf.zhongxiang.fang.com"
    },
    {
        city: "老河口",
        url: "http://esf.lhk.fang.com"
    },
    {
        city: "宜城",
        url: "http://esf.hbyc.fang.com"
    },
    {
        city: "枣阳",
        url: "http://esf.hbzy.fang.com"
    },
    {
        city: "邵阳",
        url: "http://esf.shaoyang.fang.com"
    },
    {
        city: "张家界",
        url: "http://esf.zhangjiajie.fang.com"
    },
    {
        city: "益阳",
        url: "http://esf.yiyang.fang.com"
    },
    {
        city: "郴州",
        url: "http://esf.chenzhou.fang.com"
    },
    {
        city: "永州",
        url: "http://esf.yongzhou.fang.com"
    },
    {
        city: "怀化",
        url: "http://esf.huaihua.fang.com"
    },
    {
        city: "娄底",
        url: "http://esf.loudi.fang.com"
    },
    {
        city: "湘西",
        url: "http://esf.xiangxi.fang.com"
    },
    {
        city: "长沙",
        url: "http://esf.cs.fang.com"
    },
    {
        city: "常德",
        url: "http://esf.changde.fang.com"
    },
    {
        city: "衡阳",
        url: "http://esf.hengyang.fang.com"
    },
    {
        city: "湘潭",
        url: "http://esf.xt.fang.com"
    },
    {
        city: "岳阳",
        url: "http://esf.yueyang.fang.com"
    },
    {
        city: "株洲",
        url: "http://esf.zhuzhou.fang.com"
    },
    {
        city: "浏阳",
        url: "http://esf.liuyang.fang.com"
    },
    {
        city: "宁乡",
        url: "http://esf.ningxiang.fang.com"
    },
    {
        city: "醴陵",
        url: "http://esf.liling.fang.com"
    },
    {
        city: "湘乡",
        url: "http://esf.xiangxiang.fang.com"
    },
    {
        city: "攸县",
        url: "http://esf.youxian.fang.com"
    },
    {
        city: "望城",
        url: "http://esf.cswc.fang.com"
    },
    {
        city: "耒阳",
        url: "http://esf.leiyang.fang.com"
    },
    {
        city: "常宁",
        url: "http://esf.cn.fang.com"
    },
    {
        city: "韶山",
        url: "http://esf.ss.fang.com"
    },
    {
        city: "韶关",
        url: "http://esf.shaoguan.fang.com"
    },
    {
        city: "汕尾",
        url: "http://esf.shanwei.fang.com"
    },
    {
        city: "河源",
        url: "http://esf.heyuan.fang.com"
    },
    {
        city: "潮州",
        url: "http://esf.chaozhou.fang.com"
    },
    {
        city: "揭阳",
        url: "http://esf.jieyang.fang.com"
    },
    {
        city: "云浮",
        url: "http://esf.yunfu.fang.com"
    },
    {
        city: "顺德",
        url: "http://esf.shunde.fang.com"
    },
    {
        city: "阳春",
        url: "http://esf.yangchun.fang.com"
    },
    {
        city: "开平",
        url: "http://esf.kaiping.fang.com"
    },
    {
        city: "东莞",
        url: "http://esf.dg.fang.com"
    },
    {
        city: "佛山",
        url: "http://esf.fs.fang.com"
    },
    {
        city: "广州",
        url: "http://esf.gz.fang.com"
    },
    {
        city: "惠州",
        url: "http://esf.huizhou.fang.com"
    },
    {
        city: "江门",
        url: "http://esf.jm.fang.com"
    },
    {
        city: "茂名",
        url: "http://esf.maoming.fang.com"
    },
    {
        city: "梅州",
        url: "http://esf.meizhou.fang.com"
    },
    {
        city: "清远",
        url: "http://esf.qingyuan.fang.com"
    },
    {
        city: "汕头",
        url: "http://esf.st.fang.com"
    },
    {
        city: "深圳",
        url: "http://esf.sz.fang.com"
    },
    {
        city: "阳江",
        url: "http://esf.yangjiang.fang.com"
    },
    {
        city: "湛江",
        url: "http://esf.zj.fang.com"
    },
    {
        city: "肇庆",
        url: "http://esf.zhaoqing.fang.com"
    },
    {
        city: "中山",
        url: "http://esf.zs.fang.com"
    },
    {
        city: "珠海",
        url: "http://esf.zh.fang.com"
    },
    {
        city: "台山",
        url: "http://esf.taishan.fang.com"
    },
    {
        city: "恩平",
        url: "http://esf.enping.fang.com"
    },
    {
        city: "惠东",
        url: "http://esf.huidong.fang.com"
    },
    {
        city: "龙门",
        url: "http://esf.gdlm.fang.com"
    },
    {
        city: "博罗",
        url: "http://esf.boluo.fang.com"
    },
    {
        city: "鹤山",
        url: "http://esf.heshan.fang.com"
    },
    {
        city: "普宁",
        url: "http://esf.puning.fang.com"
    },
    {
        city: "罗定",
        url: "http://esf.ld.fang.com"
    },
    {
        city: "新丰",
        url: "http://esf.xf.fang.com"
    },
    {
        city: "梧州",
        url: "http://esf.wuzhou.fang.com"
    },
    {
        city: "钦州",
        url: "http://esf.qinzhou.fang.com"
    },
    {
        city: "百色",
        url: "http://esf.baise.fang.com"
    },
    {
        city: "贺州",
        url: "http://esf.hezhou.fang.com"
    },
    {
        city: "河池",
        url: "http://esf.hechi.fang.com"
    },
    {
        city: "来宾",
        url: "http://esf.laibin.fang.com"
    },
    {
        city: "崇左",
        url: "http://esf.chongzuo.fang.com"
    },
    {
        city: "玉林",
        url: "http://esf.yl.fang.com"
    },
    {
        city: "北海",
        url: "http://esf.bh.fang.com"
    },
    {
        city: "防城港",
        url: "http://esf.fangchenggang.fang.com"
    },
    {
        city: "贵港",
        url: "http://esf.guigang.fang.com"
    },
    {
        city: "桂林",
        url: "http://esf.guilin.fang.com"
    },
    {
        city: "柳州",
        url: "http://esf.liuzhou.fang.com"
    },
    {
        city: "南宁",
        url: "http://esf.nn.fang.com"
    },
    {
        city: "宾阳",
        url: "http://esf.gxby.fang.com"
    },
    {
        city: "横县",
        url: "http://esf.hengxian.fang.com"
    },
    {
        city: "邕宁",
        url: "http://esf.yongning.fang.com"
    },
    {
        city: "长寿",
        url: "http://esf.changshou.fang.com"
    },
    {
        city: "江津",
        url: "http://esf.jiangjin.fang.com"
    },
    {
        city: "永川",
        url: "http://esf.yongchuan.fang.com"
    },
    {
        city: "重庆",
        url: "http://esf.cq.fang.com"
    },
    {
        city: "璧山",
        url: "http://esf.bishan.fang.com"
    },
    {
        city: "大足",
        url: "http://esf.dazu.fang.com"
    },
    {
        city: "垫江",
        url: "http://esf.dianjiang.fang.com"
    },
    {
        city: "奉节",
        url: "http://esf.fengjie.fang.com"
    },
    {
        city: "开县",
        url: "http://esf.kaixian.fang.com"
    },
    {
        city: "梁平",
        url: "http://esf.liangping.fang.com"
    },
    {
        city: "荣昌",
        url: "http://esf.rongchang.fang.com"
    },
    {
        city: "石柱",
        url: "http://esf.shizhu.fang.com"
    },
    {
        city: "潼南",
        url: "http://esf.tongnan.fang.com"
    },
    {
        city: "武隆",
        url: "http://esf.wulong.fang.com"
    },
    {
        city: "巫山",
        url: "http://esf.wushan.fang.com"
    },
    {
        city: "云阳",
        url: "http://esf.yunyang.fang.com"
    },
    {
        city: "忠县",
        url: "http://esf.zhongxian.fang.com"
    },
    {
        city: "铜梁",
        url: "http://esf.tongliang.fang.com"
    },
    {
        city: "丰都",
        url: "http://esf.fengdu.fang.com"
    },
    {
        city: "自贡",
        url: "http://esf.zigong.fang.com"
    },
    {
        city: "攀枝花",
        url: "http://esf.panzhihua.fang.com"
    },
    {
        city: "广元",
        url: "http://esf.guangyuan.fang.com"
    },
    {
        city: "宜宾",
        url: "http://esf.yibin.fang.com"
    },
    {
        city: "广安",
        url: "http://esf.guangan.fang.com"
    },
    {
        city: "达州",
        url: "http://esf.dazhou.fang.com"
    },
    {
        city: "雅安",
        url: "http://esf.yaan.fang.com"
    },
    {
        city: "巴中",
        url: "http://esf.bazhong.fang.com"
    },
    {
        city: "资阳",
        url: "http://esf.ziyang.fang.com"
    },
    {
        city: "凉山",
        url: "http://esf.liangshan.fang.com"
    },
    {
        city: "阿坝州",
        url: "http://esf.abazhou.fang.com"
    },
    {
        city: "涪陵",
        url: "http://esf.fuling.fang.com"
    },
    {
        city: "黔江",
        url: "http://esf.qianjiang.fang.com"
    },
    {
        city: "万州",
        url: "http://esf.wanzhou.fang.com"
    },
    {
        city: "綦江",
        url: "http://esf.qijiang.fang.com"
    },
    {
        city: "合川",
        url: "http://esf.hechuan.fang.com"
    },
    {
        city: "甘孜",
        url: "http://esf.ganzi.fang.com"
    },
    {
        city: "成都",
        url: "http://esf.cd.fang.com"
    },
    {
        city: "德阳",
        url: "http://esf.deyang.fang.com"
    },
    {
        city: "乐山",
        url: "http://esf.leshan.fang.com"
    },
    {
        city: "泸州",
        url: "http://esf.luzhou.fang.com"
    },
    {
        city: "眉山",
        url: "http://esf.meishan.fang.com"
    },
    {
        city: "绵阳",
        url: "http://esf.mianyang.fang.com"
    },
    {
        city: "内江",
        url: "http://esf.neijiang.fang.com"
    },
    {
        city: "南充",
        url: "http://esf.nanchong.fang.com"
    },
    {
        city: "遂宁",
        url: "http://esf.suining.fang.com"
    },
    {
        city: "彭州",
        url: "http://esf.pengzhou.fang.com"
    },
    {
        city: "金堂",
        url: "http://esf.scjt.fang.com"
    },
    {
        city: "邛崃",
        url: "http://esf.qionglai.fang.com"
    },
    {
        city: "崇州",
        url: "http://esf.chongzhou.fang.com"
    },
    {
        city: "大邑",
        url: "http://esf.dayi.fang.com"
    },
    {
        city: "简阳",
        url: "http://esf.jianyang.fang.com"
    },
    {
        city: "都江堰",
        url: "http://esf.dujiangyan.fang.com"
    },
    {
        city: "新津",
        url: "http://esf.xinjin.fang.com"
    },
    {
        city: "峨眉山",
        url: "http://esf.emeishan.fang.com"
    },
    {
        city: "六盘水",
        url: "http://esf.lps.fang.com"
    },
    {
        city: "遵义",
        url: "http://esf.zunyi.fang.com"
    },
    {
        city: "安顺",
        url: "http://esf.anshun.fang.com"
    },
    {
        city: "铜仁",
        url: "http://esf.tongren.fang.com"
    },
    {
        city: "黔西南",
        url: "http://esf.qianxinan.fang.com"
    },
    {
        city: "毕节",
        url: "http://esf.bijie.fang.com"
    },
    {
        city: "黔东南",
        url: "http://esf.qdn.fang.com"
    },
    {
        city: "黔南",
        url: "http://esf.qiannan.fang.com"
    },
    {
        city: "贵阳",
        url: "http://esf.gy.fang.com"
    },
    {
        city: "开阳",
        url: "http://esf.kaiyang.fang.com"
    },
    {
        city: "修文",
        url: "http://esf.xiuwen.fang.com"
    },
    {
        city: "清镇",
        url: "http://esf.qingzhen.fang.com"
    },
    {
        city: "玉溪",
        url: "http://esf.yuxi.fang.com"
    },
    {
        city: "保山",
        url: "http://esf.baoshan.fang.com"
    },
    {
        city: "昭通",
        url: "http://esf.zhaotong.fang.com"
    },
    {
        city: "普洱",
        url: "http://esf.puer.fang.com"
    },
    {
        city: "临沧",
        url: "http://esf.lincang.fang.com"
    },
    {
        city: "楚雄",
        url: "http://esf.chuxiong.fang.com"
    },
    {
        city: "红河",
        url: "http://esf.honghe.fang.com"
    },
    {
        city: "文山",
        url: "http://esf.wenshan.fang.com"
    },
    {
        city: "西双版纳",
        url: "http://esf.xishuangbanna.fang.com"
    },
    {
        city: "大理",
        url: "http://esf.dali.fang.com"
    },
    {
        city: "德宏",
        url: "http://esf.dehong.fang.com"
    },
    {
        city: "迪庆",
        url: "http://esf.diqing.fang.com"
    },
    {
        city: "怒江",
        url: "http://esf.nujiang.fang.com"
    },
    {
        city: "昆明",
        url: "http://esf.km.fang.com"
    },
    {
        city: "丽江",
        url: "http://esf.lijiang.fang.com"
    },
    {
        city: "曲靖",
        url: "http://esf.qujing.fang.com"
    },
    {
        city: "安宁",
        url: "http://esf.anning.fang.com"
    },
    {
        city: "宜良",
        url: "http://esf.ynyl.fang.com"
    },
    {
        city: "三沙",
        url: "http://esf.sansha.fang.com"
    },
    {
        city: "五指山",
        url: "http://esf.wuzhishan.fang.com"
    },
    {
        city: "海南",
        url: "http://esf.hn.fang.com"
    },
    {
        city: "三亚",
        url: "http://esf.sanya.fang.com"
    },
    {
        city: "东方",
        url: "http://esf.dongfang.fang.com"
    },
    {
        city: "儋州",
        url: "http://esf.danzhou.fang.com"
    },
    {
        city: "万宁",
        url: "http://esf.wanning.fang.com"
    },
    {
        city: "铜川",
        url: "http://esf.tongchuan.fang.com"
    },
    {
        city: "渭南",
        url: "http://esf.weinan.fang.com"
    },
    {
        city: "延安",
        url: "http://esf.yanan.fang.com"
    },
    {
        city: "汉中",
        url: "http://esf.hanzhong.fang.com"
    },
    {
        city: "榆林",
        url: "http://esf.sxyulin.fang.com"
    },
    {
        city: "安康",
        url: "http://esf.ankang.fang.com"
    },
    {
        city: "商洛",
        url: "http://esf.shangluo.fang.com"
    },
    {
        city: "宝鸡",
        url: "http://esf.baoji.fang.com"
    },
    {
        city: "西安",
        url: "http://esf.xian.fang.com"
    },
    {
        city: "咸阳",
        url: "http://esf.xianyang.fang.com"
    },
    {
        city: "蓝田",
        url: "http://esf.lantian.fang.com"
    },
    {
        city: "户县",
        url: "http://esf.huxian.fang.com"
    },
    {
        city: "周至",
        url: "http://esf.zhouzhi.fang.com"
    },
    {
        city: "高陵",
        url: "http://esf.gaoling.fang.com"
    },
    {
        city: "嘉峪关",
        url: "http://esf.jiayuguan.fang.com"
    },
    {
        city: "金昌",
        url: "http://esf.jinchang.fang.com"
    },
    {
        city: "白银",
        url: "http://esf.baiyin.fang.com"
    },
    {
        city: "天水",
        url: "http://esf.tianshui.fang.com"
    },
    {
        city: "武威",
        url: "http://esf.wuwei.fang.com"
    },
    {
        city: "张掖",
        url: "http://esf.zhangye.fang.com"
    },
    {
        city: "平凉",
        url: "http://esf.pingliang.fang.com"
    },
    {
        city: "酒泉",
        url: "http://esf.jiuquan.fang.com"
    },
    {
        city: "定西",
        url: "http://esf.dingxi.fang.com"
    },
    {
        city: "陇南",
        url: "http://esf.longnan.fang.com"
    },
    {
        city: "甘南",
        url: "http://esf.gannan.fang.com"
    },
    {
        city: "临夏",
        url: "http://esf.linxia.fang.com"
    },
    {
        city: "兰州",
        url: "http://esf.lz.fang.com"
    },
    {
        city: "庆阳",
        url: "http://esf.qingyang.fang.com"
    },
    {
        city: "永登",
        url: "http://esf.yongdeng.fang.com"
    },
    {
        city: "榆中",
        url: "http://esf.yuzhong.fang.com"
    },
    {
        city: "石嘴山",
        url: "http://esf.shizuishan.fang.com"
    },
    {
        city: "吴忠",
        url: "http://esf.wuzhong.fang.com"
    },
    {
        city: "固原",
        url: "http://esf.guyuan.fang.com"
    },
    {
        city: "中卫",
        url: "http://esf.zhongwei.fang.com"
    },
    {
        city: "银川",
        url: "http://esf.yinchuan.fang.com"
    },
    {
        city: "玉树",
        url: "http://esf.yushu.fang.com"
    },
    {
        city: "果洛",
        url: "http://esf.guoluo.fang.com"
    },
    {
        city: "黄南",
        url: "http://esf.huangnan.fang.com"
    },
    {
        city: "海西",
        url: "http://esf.haixi.fang.com"
    },
    {
        city: "海东",
        url: "http://esf.haidong.fang.com"
    },
    {
        city: "海北",
        url: "http://esf.haibei.fang.com"
    },
    {
        city: "西宁",
        url: "http://esf.xn.fang.com"
    },
    {
        city: "克拉玛依",
        url: "http://esf.kelamayi.fang.com"
    },
    {
        city: "阿拉尔",
        url: "http://esf.alaer.fang.com"
    },
    {
        city: "博尔塔拉",
        url: "http://esf.betl.fang.com"
    },
    {
        city: "吐鲁番",
        url: "http://esf.tulufan.fang.com"
    },
    {
        city: "喀什",
        url: "http://esf.kashi.fang.com"
    },
    {
        city: "图木舒克",
        url: "http://esf.tmsk.fang.com"
    },
    {
        city: "五家渠",
        url: "http://esf.wujiaqu.fang.com"
    },
    {
        city: "哈密",
        url: "http://esf.hami.fang.com"
    },
    {
        city: "和田",
        url: "http://esf.hetian.fang.com"
    },
    {
        city: "库尔勒",
        url: "http://esf.kuerle.fang.com"
    },
    {
        city: "克孜勒苏",
        url: "http://esf.kzls.fang.com"
    },
    {
        city: "阿克苏",
        url: "http://esf.akesu.fang.com"
    },
    {
        city: "巴州",
        url: "http://esf.bazhou.fang.com"
    },
    {
        city: "昌吉",
        url: "http://esf.changji.fang.com"
    },
    {
        city: "石河子",
        url: "http://esf.shihezi.fang.com"
    },
    {
        city: "乌鲁木齐",
        url: "http://esf.xj.fang.com"
    },
    {
        city: "伊犁",
        url: "http://esf.yili.fang.com"
    },
    {
        city: "奎屯",
        url: "http://esf.kuitun.fang.com"
    },
    {
        city: "香港",
        url: "http://www.hkproperty.com/"
    },
    {
        city: "澳门",
        url: "http://esf.macau.fang.com/"
    },
    {
        city: "台湾",
        url: "http://www.twproperty.com.tw/"
    },
    {
        city: "新加坡",
        url: "http://www.sgproperty.com/"
    },
    {
        city: "温哥华",
        url: "http://vancouver.fang.com/"
    }
]
var recordTime=new Date().getTime()

temp.forEach(function (val) {
    // 搜房网二手房价格
    request({
        url: val["url"],
        methed: "get",
        gzip: true
    }, function (e, r, b) {
        if (e || !b) {
            console.log(val['city'] + '请求失败！')
            return;
        }
        //var result = iconv.convert(new Buffer(b, 'binary')).toString();
        var $ = cheerio.load(b);
        var titles = $(".newcardR ");
        var args = ""

        for (var i = 0; i < titles.length; i++) {
            //console.log("{城市:" + val["city"] + ",8月参考均价:" +
            //    JSON.stringify($(titles[i]).children("dl").children("dd").children("p").children("b").eq(1).text()) +
            //    ",7月成交量:" +
            //    JSON.stringify($(titles[i]).children("dl").children("dd").children("p").children("b").eq(0).text()) +
            //    "}"
            //);
            args += "{'城市':'" + val["city"] + "','9月参考均价':" +
                Number($(titles[i]).children("dl").children("dd").children("p").children("b").eq(1).text()) +
                "}";
            fs("../files/soufang/" + recordTime + ".txt", args);
            //console.log("{city:" + val["city"] + ",price:" +
            //    JSON.stringify($(titles[i]).children("dl").children("dd").children("p").children("b").eq(1).text()) +
            //    ",number:" +
            //    JSON.stringify($(titles[i]).children("dl").children("dd").children("p").children("b").eq(0).text()) +
            //    "}"
            //);
        }
    })
})
