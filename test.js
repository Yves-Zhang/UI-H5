const https = require("https");

const url = "https://www.baidu.com/";
// const url = "https://kyfw.12306.cn/otn/leftTicket/init"

var option = {
  hostname: "kyfw.12306.cn",
  path: "/otn/leftTicket/query?leftTicketDTO.train_date=2020-08-28&leftTicketDTO.from_station=SHH&leftTicketDTO.to_station=TJP&purpose_codes=ADULT",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "utf-8", //这里设置返回的编码方式 设置其他的会是乱码
    "Accept-Language": "zh-CN,zh;q=0.8",
    Connection: "keep-alive",
    'Cookie':'_uab_collina=159756499047709815226732; JSESSIONID=A82F94D8E9D6C0D7901F7B8D79FD18F3; route=6f50b51faa11b987e576cdb301e545c4; BIGipServerotn=988807690.64545.0000; RAIL_EXPIRATION=1597844894037; RAIL_DEVICEID=n-VN5Dbodf0ScN-Y9BFBGWhgl3EkQSl_ne5E4e0R1yDPsaZI08hmCH86QAxZSIgjsKHve0xFSA1N5YcO-JZLAlGt8BL9qMYQOZkO7jPKaEYRBbU8rc9eDBt-qII3zW4CAPusQXnSfkPmNQbCqDuk71dwYfy5K7Pa; BIGipServerpool_passport=200081930.50215.0000; _jc_save_fromStation=%u4E0A%u6D77%2CSHH; _jc_save_toStation=%u5929%u6D25%2CTJP; _jc_save_fromDate=2020-08-28; _jc_save_toDate=2020-08-16; _jc_save_wfdc_flag=dc',
    Host: "kyfw.12306.cn",
    // 'Referer':'https://m.baidu.com/tcx?appui=alaxs&page=detail&gid=4305265392&from=dushu'
    // "Upgrade-Insecure-Requests": 1,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
  },
};
https.get(option, function (res) {
  var chunks = [];
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  res.on("end", function () {
    console.log(Buffer.concat(chunks).toString());
  });
});
