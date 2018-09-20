var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


function ability(TEXT){
	let ReStr = TEXT[0] + '：';

	let Debuff = 0;
	let AppDebuff = 0;
	let EDUinc = 0;
	let manArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let man = manArr[Math.floor((Math.random() * (manArr.length)) + 0)];
	let girlArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let girl = girlArr[Math.floor((Math.random() * (girlArr.length)) + 0)];
	let cuteArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let cute = cuteArr[Math.floor((Math.random() * (cuteArr.length)) + 0)];
	let cookArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let cook = cookArr[Math.floor((Math.random() * (cookArr.length)) + 0)];
	let moneyArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let money = moneyArr[Math.floor((Math.random() * (moneyArr.length)) + 0)];	
	let lifeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let life = lifeArr[Math.floor((Math.random() * (lifeArr.length)) + 0)];
  let fbiArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let fbi = fbiArr[Math.floor((Math.random() * (fbiArr.length)) + 0)];
  let lulaArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let lula = lulaArr[Math.floor((Math.random() * (lulaArr.length)) + 0)];
	let afcArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let afc = afcArr[Math.floor((Math.random() * (afcArr.length)) + 0)];
	let euArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
	let eu = euArr[Math.floor((Math.random() * (euArr.length)) + 0)];
	let oldArr = [15,20,40,50,60,70,80]
	let DebuffArr = [5,0,5,10,20,40,80]
	let AppDebuffArr = [0,0,5,10,15,20,25]
	let EDUincArr = [0,1,2,3,4,4,4]
	
	
	for ( i=0 ; man >= manArr[i] ; i ++){
		Debuff = DebuffArr[i];
		AppDebuff = AppDebuffArr[i];
		EDUinc = EDUincArr[i];
	}
	ReStr = ReStr + '\n【萌力】：' + cute ;
	ReStr = ReStr + '\n【廚藝】：' + cook ;
	ReStr = ReStr + '\n【財力】：' + money ;	
	ReStr = ReStr + '\n【生命力】：' + life ;
  ReStr = ReStr + '\n【羈押度】：' + fbi ;
  ReStr = ReStr + '\n【露娜的愛】：' + lulla ;
	if (afc >= 50 && eu >= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc >= 60 && eu <= 40)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc <= 40 && eu >= 60)	ReStr = ReStr + '\n【非洲之力】：' + '0' + '\n【歐皇之力】：' + eu ; 
	else
	if (afc <= 50 && eu <= 50)	ReStr = ReStr + '\n【非洲之力】：' + '100' + '\n【歐皇之力】：' + '0' ; 
	else
	if (afc > 50 && eu < 50)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + eu ; 
	else
	if (afc < 50 && eu > 50)	ReStr = ReStr + '\n【非洲之力】：' + afc + '\n【歐皇之力】：' + eu ; 
	ReStr = ReStr + '\n\n【八雲點評】：' ;
	ReStr = ReStr + '在你的萌力方面，' ;
	if (cute >= 50)	ReStr = ReStr + '你很適合去賣萌喔~一定有人說你可愛的！' ; 
	if (cute < 50)	ReStr = ReStr + '我還是建議你別去做出賣萌的行為，會嚇到人的！' ; 
	ReStr = ReStr + '我' ;
	if (cook >= 50)	ReStr = ReStr + '看你的廚藝的分數滿高的~可以煮東西給八雲吃嗎？' ; 
	if (cook < 50)	ReStr = ReStr + '看你的廚藝分數…嗯…還可以啦……記得別進廚房喔……你很危… 不！廚房很危險的，我為了你安全着想你還是別進廚房吧！' ; 
	ReStr = ReStr + '然後，' ;
	if (money >= 50)	ReStr = ReStr + '你財力那麽高，你很有做課長的天賦喔！' ; 
	if (money < 50)	ReStr = ReStr + '財力不高也沒差啦~你還有信用卡可以課金嘛~~刷爆了你還有家人的卡可以刷嘛~~人生不課金，那這人生還有意義嗎？' ; 
	ReStr = ReStr + '嗯…' ;
	if (life >= 50 && money < 50)	ReStr = ReStr + '你的生命力還滿強的嘛~就算你沒財力，以你這生命力來說每餐都吃土也能活下去的。' ; 
	else
	if (life < 50 && money < 50)	ReStr = ReStr + '沒生命力又沒錢……好慘…(用同情的眼神吃着名貴的食物遠望中)。' ; 
	else
	if (life >= 50)	ReStr = ReStr + '你的生命力還滿強的嘛~' ; 
	else
	if (life < 50)	ReStr = ReStr + '你這樣的生命力…記得好好享受人生喔!' ; 
	ReStr = ReStr + '在你的運氣方面…' ;
	if (afc >= 50 && eu >= 50)	ReStr = ReStr + '頂級非洲人沒得救了…' ; 
	else
	if (afc >= 60 && eu <= 40)	ReStr = ReStr + '原來你是非洲大酋長喔…' ; 
	else
	if (afc <= 40 && eu >= 60)	ReStr = ReStr + '你這個歐洲人今天就會被我大八雲燒死！' ; 
	else
	if (afc <= 50 && eu <= 50)	ReStr = ReStr + '頂級非洲人沒得救了…' ; 
	else
	if (afc > 50 && eu < 50)	ReStr = ReStr + '你是一個非洲人呢~' ; 
	else
	if (afc < 50 && eu > 50)	ReStr = ReStr + '你這個歐洲人今天就會被我大八雲燒死！' ; 
  ReStr = ReStr + '當提及到露娜時，' ;
  if (lula >= 50 && fbi >= 25) ReStr = ReStr + '紅茶~你門口有FBI在按門鈴。' ;
  if (lula >= 50 && fbi < 25) ReStr = ReStr + '看來露娜是滿喜歡紅茶的嘛，但你別以為做一些過火的事不會被羈押。' ;
  if (lula < 50 && lula >= 25) ReStr = ReStr + '看來露娜也不是很喜歡你呢～' ;
  if (lula < 25) ReStr = ReStr + '紅茶，露娜在用厭惡的眼神看着你。' ;


	


	


	


	rply.text = ReStr;
	return rply;
	} 



module.exports = {
	ability: ability,
};
