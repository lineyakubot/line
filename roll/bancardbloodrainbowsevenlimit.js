
var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改


function MultiDrawBan(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) 
	{
	cards[0] = rollbase.FunnyDice(11); 
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(11);
		if (cards.indexOf(tmpcard) === -1) 
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + BanRevReply(revs[i]);
	}

	} else if (type == 2) 
	{
	cards[0] = rollbase.FunnyDice(11);
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 7; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(11);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 7; i++) {
		if (i == 0) returnStr += '1: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 1) returnStr += '2: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 2) returnStr += '3: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 3) returnStr += '4: ' + BanCardReply(cards[i]) + ' ' + '\n';
    if (i == 4) returnStr += '5: ' + BanCardReply(cards[i]) + ' ' + '\n';
		if (i == 5) {
		if (revs[i] == 0) 
			returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
		else
			returnStr += '6: ' + BanCardReply(cards[i]) + ' ' + '\n';
		}
		if (i == 6) returnStr += '7: ' + BanCardReply(cards[i]) + ' ' ;

	}


	} else {

	if (text == null)
		returnStr = BanCardReply(rollbase.FunnyDice(11)) + ' ' ;
	else
		returnStr = BanCardReply(rollbase.FunnyDice(11)) + ' ' + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}


function NomalDrawBan(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = BanCardReply(rollbase.FunnyDice(22)) + ' ' ;
	else
	returnStr = BanCardReply(rollbase.FunnyDice(22)) + ' ' + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}

function BanCardReply(count) {
	let returnStr = '';
	if (count == 0) returnStr = '普爾森-虹';
	if (count == 1) returnStr = '狂戀的華鎧‧薇拉-虹';
	if (count == 2) returnStr = '狼人之王‧華茲-虹';
	if (count == 3) returnStr = '毒牙公主‧梅杜莎-虹';
	if (count == 4) returnStr = '沃普爾吉斯-虹';
	if (count == 5) returnStr = '邪惡妖精‧卡拉波斯-虹';
	if (count == 6) returnStr = '耶夢加得-虹';
	if (count == 7) returnStr = '闇夜公主‧班比-虹';
	if (count == 8) returnStr = '噬闇巨蝠-虹';
	if (count == 9) returnStr = '深淵的來訪者-虹';
	if (count == 10) returnStr = '狄亞波羅斯‧偽語-虹';





	return returnStr;
	//return rply;

}


module.exports = {
	MultiDrawBan,
	NomalDrawBan,
	BanCardReply	
};
