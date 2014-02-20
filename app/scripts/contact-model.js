var Contact = Backbone.Model.extend({
	
	idAttribute: '_id',


	defaults: {
		name: '?????',
		avatar: 'http://viewofthearts.files.wordpress.com/2012/02/game-of-thrones.png',
		bio: 'Game of Thrones'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'
})