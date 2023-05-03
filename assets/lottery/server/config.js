/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    title: "特别奖",
    text: "天仙下凡"
  },
  {
    type: 1,
    count: 1,
    text: "十连抽",
    title: "神秘大礼",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "六连抽",
    title: "六六大顺",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "五连抽",
    title: "五福临门",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 1,
    text: "四连抽",
    title: "四季平安",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 1,
    text: "三连抽",
    title: "三羊开泰",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 1,
    text: "二连抽",
    title: "二龙腾飞",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 1,
    text: "单抽",
    title: "单抽出奇迹",
    img: "../img/edifier.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "WuYiBan";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
