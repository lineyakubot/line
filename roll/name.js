var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' };

function gename(text01) {
let nameid ="";
let ReStr = '【' ;
if (text01 == undefined) {
nameid = '沒有預設值' ;
ReStr = ReStr + nameid + '】：';
}
else 
{
nameid = text01;
ReStr = ReStr + nameid + '】：';
}
let firstnameArr = ['佐野','杉本','大西','古川','濱田','浜田','市川','小松','高野','水野','吉川','山內','西田','西川','菊池','北村','五十嵐','福島','安田','中田','平田','本田','川崎','飯田','東','服部','澤田','久保田','吉村','中西','岩田','川口','辻關','関','富田','川上','樋口','永井','松岡','山中','田口','森本','秋山','小沢','広瀬','土屋','松下','馬場','大橋','吉岡','荒木','小池','大保','野','谷','野田','川村','田辺','星野','大谷','尾崎','永田','松村','望月','内藤','菅野','西山','堀','岩本','平井','片山','川島','本間','岡崎','横田','早川','荒井','鐮田','小田','成田','宮田','大石','石橋','篠原','高山','須藤','萩原','大沢','小西','栗原','松原','伊東','三宅','大森','福井','奧村','松永','片岡','桑原','內山','關口','古賀','奧田','岡','北川','八木','上原','吉野','白石','今村','中沢','田島','渋谷','小泉','上村','中尾','平山','青山','牧野','岡村','寺田','坂口','児玉','大山','河合','多田','竹田','宮下','小倉','小寺','小笠原','足立','村山','天野','坂井','杉浦','西','坂田','小原','豊田','角田','武藤','河村','根本','関根','水谷','中井','森下','神田','塚本','佐久間','植田','飯塚','安部','前川','山根','浅井','白井','宮川','岡部','大川','長田','堀内','松崎','飯島','榎本','稲垣','若林','森山','金沢','江口','神谷','中谷','畠山','谷','細川','及川','安达','今野','三上','西尾','田代','石塚','岸本','津田','荒川','中原','長尾','戸田','本多','高島','森川','滝沢','土井','三好','金井','松山','米田','岡野','稲葉','村松','佐藤','鈴木','高橋','田中','渡邊','伊藤','山本','中村','小林','齋藤','加藤','吉田','山田','佐々木','山口','松本','井上','木村','林','清水','山崎','中島','池田','阿部','橋本','山下','森','石川','前田','小川','藤田','岡田','後藤','長谷川','石井','村上','近藤','坂本','遠藤','青木','藤井','西村','福田','太田','三浦','藤原','岡本','松田','中川','中野','原田','小野','田村','竹內','金子','和田','中山','石田','上田','森田','小島','柴田','原','宮崎','酒井','工藤','橫山','宮本','內田','高木','安藤','島田','谷口','大野','高田','丸山','今井','河野','藤本','村田','武田','上野','杉山','增田','小山','大塚','平野','菅原','久保','松井','千葉','岩崎','桜井','木下','野口','松尾','菊地','野村','新井','渡部','和彥','蒼空','大地','雅彦','彌生','悠辰','卓也','皓司','裕彦','優平','耕平','康平','健悟','涼平','悠馬','圭悟','隼人','慎悟','皓耕','佑','耕樹','謙祐','謙吾','哲也','皓介克彌皓平','聖也','慎也','聖夜','闇夜','龍介','信吾','宗太郎','真司','聖朋','柊吾','羽織','千奈','千娜','千夏','千紗','美羽','真希','奈緒子','薰','葵','萱','咲','桜','優里','優莉','美菜','結衣','海兒','可兒','双兒','芽衣','娜美','早苗','紗雪','紗羅','安芸','雪乃','千雪','千歳','千佳','亜里紗','優奈','美優','優菜','真理子','美紀','千花','緒美','紗緒','晴華','千晴','夢姫','莉香','沙耶香','惠理香','由梨香','可鈴','悠','未來','真弓','悠悠','風間','工藤','村上','高見澤','黑石','立石','白石 ','柏原','藤原','朝倉','秋澤','北園','雨宮','千葉','天羽','服部','筱崎','大野','西田','後藤','伊東','佐野','山崎','伊集院','圓城寺','西園寺','萱野','小野','小嶋','久保田','竹之内','二階堂','小松','原姫野','新井','小泉','柴田','鬼塚','日比野','小笠原','宇佐美','早乙女','宮崎','秋月','菅野','上原','宇多田','栗原','橘','源','楠','桑田','兒玉','南野','新保','夏目','柿沼','芹澤','芹沢','西森','持田','石岡','松橋','辻村','長坂','梶田','寺崎','我妻','大關','大関','長沼','木島','浦','安川','大越','柳瀨','土肥','磯崎','上島','北岡','牛島','石村','平原','古市','鵜飼','的場','野間','大前','倉橋','寺內','河崎','真野','古橋','小村','本鄉','河上','住田','柿崎','船木','船越','竹澤','竹沢','鹿野','二瓶','伴','野尻','鹽崎','塩崎','粕谷','安東','江頭','東野','藤谷','加瀬','津村','湯川','中条','安原','迫田','加賀','平本','小俣','五島','上岡','浜中','河口','高坂','大宮','相良','室井','花井','仲野','新川','江田','赤井','森崎','坪田','神保','小暮','小山田','山脇','鮫島','坂','梅木','平島','保田','矢吹','矢崎','金野','金','塚越','益子','伏見','中森','金原','水本','垣内','関本','關本','竹島','赤沢','赤澤','増山','郡司','渥美','谷内','福元','松林','増子','住吉','淵上','赤塚','東山','稻村','谷田','下野','河井','鳴海','高津','村越','南雲','道','大坂','片野','金本','東条','東條','久田','吉見','斎木','齋木','榊','梶山','杉崎','柿本','薄井','堺','玉川','藤卷','大原','長山','大岩','小竹','小橋','川内','小浜','小濱','神','棚橋','梶','高森','畑山','湯本','八卷','小山内','八幡','須永','桑野','椿','宇田','綠川','緑川','櫻庭','桜庭','櫻庭','下地','高須','沢口澤口','衛藤','永瀨','米谷','竹林','芝田','西崎','伊勢','丸岡','向山','人見','國井','安西','末廣','知念','大迫','芝','二村','磯貝','村本','馬淵','山浦','木谷','篠塚','清原','山谷','浦川','吉武','高本','福留','植野','小宮山','安岡','勝山','飯村','袴田','青島','高杉'];
let firstname = firstnameArr[Math.floor((Math.random() * (firstnameArr.length)) + 0)];
let lastnameArr = ['佐野','杉本','大西','古川','濱田','浜田','市川','小松','高野','水野','吉川','山內','西田','西川','菊池','北村','五十嵐','福島','安田','中田','平田','本田','川崎','飯田','東','服部','澤田','久保田','吉村','中西','岩田','川口','辻關','関','富田','川上','樋口','永井','松岡','山中','田口','森本','秋山','小沢','広瀬','土屋','松下','馬場','大橋','吉岡','荒木','小池','大保','野','谷','野田','川村','田辺','星野','大谷','尾崎','永田','松村','望月','内藤','菅野','西山','堀','岩本','平井','片山','川島','本間','岡崎','横田','早川','荒井','鐮田','小田','成田','宮田','大石','石橋','篠原','高山','須藤','萩原','大沢','小西','栗原','松原','伊東','三宅','大森','福井','奧村','松永','片岡','桑原','內山','關口','古賀','奧田','岡','北川','八木','上原','吉野','白石','今村','中沢','田島','渋谷','小泉','上村','中尾','平山','青山','牧野','岡村','寺田','坂口','児玉','大山','河合','多田','竹田','宮下','小倉','小寺','小笠原','足立','村山','天野','坂井','杉浦','西','坂田','小原','豊田','角田','武藤','河村','根本','関根','水谷','中井','森下','神田','塚本','佐久間','植田','飯塚','安部','前川','山根','浅井','白井','宮川','岡部','大川','長田','堀内','松崎','飯島','榎本','稲垣','若林','森山','金沢','江口','神谷','中谷','畠山','谷','細川','及川','安达','今野','三上','西尾','田代','石塚','岸本','津田','荒川','中原','長尾','戸田','本多','高島','森川','滝沢','土井','三好','金井','松山','米田','岡野','稲葉','村松','佐藤','鈴木','高橋','田中','渡邊','伊藤','山本','中村','小林','齋藤','加藤','吉田','山田','佐々木','山口','松本','井上','木村','林','清水','山崎','中島','池田','阿部','橋本','山下','森','石川','前田','小川','藤田','岡田','後藤','長谷川','石井','村上','近藤','坂本','遠藤','青木','藤井','西村','福田','太田','三浦','藤原','岡本','松田','中川','中野','原田','小野','田村','竹內','金子','和田','中山','石田','上田','森田','小島','柴田','原','宮崎','酒井','工藤','橫山','宮本','內田','高木','安藤','島田','谷口','大野','高田','丸山','今井','河野','藤本','村田','武田','上野','杉山','增田','小山','大塚','平野','菅原','久保','松井','千葉','岩崎','桜井','木下','野口','松尾','菊地','野村','新井','渡部','和彥','蒼空','大地','雅彦','彌生','悠辰','卓也','皓司','裕彦','優平','耕平','康平','健悟','涼平','悠馬','圭悟','隼人','慎悟','皓耕','佑','耕樹','謙祐','謙吾','哲也','皓介克彌皓平','聖也','慎也','聖夜','闇夜','龍介','信吾','宗太郎','真司','聖朋','柊吾','羽織','千奈','千娜','千夏','千紗','美羽','真希','奈緒子','薰','葵','萱','咲','桜','優里','優莉','美菜','結衣','海兒','可兒','双兒','芽衣','娜美','早苗','紗雪','紗羅','安芸','雪乃','千雪','千歳','千佳','亜里紗','優奈','美優','優菜','真理子','美紀','千花','緒美','紗緒','晴華','千晴','夢姫','莉香','沙耶香','惠理香','由梨香','可鈴','悠','未來','真弓','悠悠','風間','工藤','村上','高見澤','黑石','立石','白石 ','柏原','藤原','朝倉','秋澤','北園','雨宮','千葉','天羽','服部','筱崎','大野','西田','後藤','伊東','佐野','山崎','伊集院','圓城寺','西園寺','萱野','小野','小嶋','久保田','竹之内','二階堂','小松','原姫野','新井','小泉','柴田','鬼塚','日比野','小笠原','宇佐美','早乙女','宮崎','秋月','菅野','上原','宇多田','栗原','橘','源','楠','桑田','兒玉','南野','新保','夏目','柿沼','芹澤','芹沢','西森','持田','石岡','松橋','辻村','長坂','梶田','寺崎','我妻','大關','大関','長沼','木島','浦','安川','大越','柳瀨','土肥','磯崎','上島','北岡','牛島','石村','平原','古市','鵜飼','的場','野間','大前','倉橋','寺內','河崎','真野','古橋','小村','本鄉','河上','住田','柿崎','船木','船越','竹澤','竹沢','鹿野','二瓶','伴','野尻','鹽崎','塩崎','粕谷','安東','江頭','東野','藤谷','加瀬','津村','湯川','中条','安原','迫田','加賀','平本','小俣','五島','上岡','浜中','河口','高坂','大宮','相良','室井','花井','仲野','新川','江田','赤井','森崎','坪田','神保','小暮','小山田','山脇','鮫島','坂','梅木','平島','保田','矢吹','矢崎','金野','金','塚越','益子','伏見','中森','金原','水本','垣内','関本','關本','竹島','赤沢','赤澤','増山','郡司','渥美','谷内','福元','松林','増子','住吉','淵上','赤塚','東山','稻村','谷田','下野','河井','鳴海','高津','村越','南雲','道','大坂','片野','金本','東条','東條','久田','吉見','斎木','齋木','榊','梶山','杉崎','柿本','薄井','堺','玉川','藤卷','大原','長山','大岩','小竹','小橋','川内','小浜','小濱','神','棚橋','梶','高森','畑山','湯本','八卷','小山内','八幡','須永','桑野','椿','宇田','綠川','緑川','櫻庭','桜庭','櫻庭','下地','高須','沢口澤口','衛藤','永瀨','米谷','竹林','芝田','西崎','伊勢','丸岡','向山','人見','國井','安西','末廣','知念','大迫','芝','二村','磯貝','村本','馬淵','山浦','木谷','篠塚','清原','山谷','浦川','吉武','高本','福留','植野','小宮山','安岡','勝山','飯村','袴田','青島','高杉'];
let lastname = lastnameArr[Math.floor((Math.random() * (lastnameArr.length)) + 0)];
let dependArr = [1,1,2]
let depend = dependArr[Math.floor((Math.random() * (dependArr.length)) + 0)];
let shameArr = ['八雲','安特','垃圾','智障','扶他','偽娘','母湯','幹狗','紅茶','吹雪','笨蛋','渣渣','萌新','大佬','偽男','甲甲','娘泡','Gay泡','GayDer','月亮枯枝','變態','光頭','沒頭','無頭','肥宅','油宅','噁宅','變態大叔','白痴','魔法少女','光明會成員','瑞樹','女裝','大爆射','騙水','大雞雞','有很多根','媽的','他媽的','三小','淦','大佬','幹話']	
let shame = shameArr[Math.floor((Math.random() * (shameArr.length)) + 0)];
if (depend == 1) {
ReStr = ReStr + firstname + lastname ;
}
else 
{
ReStr = ReStr + shame + '的' + firstname + lastname ;
}


	
ReStr = ReStr;
rply.text = ReStr;
return rply;
}



module.exports = {
	gename: gename
};
