var ListView = Backbone.View.extend({

	className: 'list-item',
	createTemplate: _.template($('#list-item-template').text()),

	 events: {
    "click .avatar-btn": "createMainView",

  	},

	initialize: function(){
		$('.js-contact-list').prepend(this.el);

		this.render();
	},

	render: function(){
		var renderedTemplate = this.createTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	createMainView: function(){
		console.log(this.model.attributes)
		new MainView( { model: this.model })
	}

});

