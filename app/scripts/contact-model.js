var Contact = Backbone.Model.extend({
	defaults: {
		name: '?????',
		avatar: 'http://viewofthearts.files.wordpress.com/2012/02/game-of-thrones.png',
		bio: 'Game of Thrones'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact 
})