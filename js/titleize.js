//added to make this js file self contained
Array.prototype.first = function() {
	return this[0];
};
Array.prototype.last = function() {
	return this[this.length-1];
};


//start of titleize
var titleize = function(inputStr) {
	strArray = inputStr.split(' ');

	var strArray = [],
			start = strArray.first(),
			last = strArray.last();

	for (var i = 0; i < strArray.length; i++) {
  	switch(strArray[i]) {
  		case 'and':
  	        break;
  		case 'but':
  	        break;
  		case 'or':
  	        break;
  		case 'nor':
  	        break;
  		case 'yet':
  	        break;
  		case 'so':
  	        break;
  		case 'the':
  	        break;
  		case 'a':
  	        break;
  		case 'an':
  	        break;
  		case 'on':
  	        break;
  		case 'off':
  	        break;
  		case 'in':
  	        break;
  		case 'to':
  	        break;
  		case 'of':
  	        break;
  		case 'at':
  	        break;
  		case 'by':
  	        break;
  		case 'up':
  	        break;
  		case 'with':
  	        break;
  		case 'for':
  	        break;
  		case 'as':
  	        break;
  		case 'in':
  	        break;
      default :
      		strArray[i][0] = strArray[i][0].toUpperCase();
  	}
	}

	strArray[0] = start.toUpperCase();
	strArray[strArray.length-1] = last.toUpperCase();


	return strArray.join(' ');
};