var Task = Backbone.Model.extend({
	initialize: function() {},

});

var Tasks = Backbone.Collection.extend({
	model: Task,
});