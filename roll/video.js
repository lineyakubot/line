var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function mushroomcloud() {
	rply = {
    "type": "audio",
    "duration": "35300",
    "contentProvider.originalContentUrl": "https://drive.google.com/uc?export=download&id=1bZC81tfqPLrbk7tySsieI30YYwlFVrWM"
};
	return rply;
}



module.exports = {
	mushroomcloud: mushroomcloud
};
