$(document).ready(function(){
	// start the app
	contacts = new ContactsCollection(data);

	contacts.each(function(contact){
		new ListView({model: contact});
	})
});