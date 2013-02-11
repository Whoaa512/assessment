/*
	_.each(list, iterator, [context]) will use the iterator arguement on each element in a list that can be either an array or object.
*/

(function() {
	//each method taken from my own branch on the underscore lesson repo
	var each = function(obj, iterator) {
    if(Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
          iterator(obj[i], i, obj);
        } 
    } else {
      for(var i in obj) {
        if(obj.hasOwnProperty(i)){
          iterator(obj[i], i, obj);
        }
      }
    }
  };

	// Return the results of applying an iterator to each element.
	var map = function(obj, iterator) {
    var results = [];
    _.each(obj , function(val, key, obj){
      results[results.length] = iterator(val);
    });
    return results;
  };

  // Return an array of all elements of a given obj that pass a truth test.
	var filter = function(obj, iterator)) {
		var results = [];
    var val = _.map(obj,iterator);
    for(var i in obj){
      if(val[i] === true) {
        results.push(obj[i]);
      }
    }
    return results;
	};

	this._ = {
    each: each,
    map: map,
    filter: filter
  };
}).call(this);
