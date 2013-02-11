var TaskListView = Backbone.View.extend({
	el: $('.task-list'),

	tagName: 'table',

	events: {
		'click input#add' : 'myAlert'
	},

	tasks: [],

	myAlert: function() {
		alert('hi');
	},

	initialize: function() {
		_.bindAll(this, 'render'); //fixes loss of 'this' context

		this.render();
	},

	render: function() {
		if(this.tasks.length === 0) {
			this.$el.append('<tr><td>empty task list</td></tr>');
		} else {
			this.$el.html('<h2>Tasks to be Done</h2>');
		}

		// var self = this;      
  //   $(this.el).append("<button id='add'>Add list item</button>");
  //   $(this.el).append("<ul></ul>");
  //   _(this.collection.models).each(function(item){ // in case collection is not empty
  //     self.appendItem(item);
  //   }, this);
	}
});
