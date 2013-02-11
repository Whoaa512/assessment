var startsWith = function(givenStr, startStr) {
	var regExp = new RegExp(startStr, 'i');
	return givenStr.match(regExp)? true : false;
};