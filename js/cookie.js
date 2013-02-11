var BakedGood = function() {
	var eat = function(bakedGoodInstance) {
		alert('You have eaten a ' + bakedGoodInstance);
	};
};

Cookie.prototype = new BakedGood();
Cookie.prototype.constructor = Cookie;

var Cookie = function() {
	var sprinkles = false;
	alert("You've just baked a new cookie!");
};

var sprinkles = function(cookie) {
	cookie.sprinkles = true;
	alert('you just put sprinkles on your cookie!');
};