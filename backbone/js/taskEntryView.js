var TaskEntryView = Backbone.View.extend({
	tagName: 'tr',

	events: {
    "click": "markComplete"
  },

  template: _.template("<td class='checkbox'>*checkbox*</td><td class='task-name'>*task name*</td>"),

  render: function() {
  	return this.$el.html(this.template(this.model.attributes));
  },

  markComplete: function() {}

});
