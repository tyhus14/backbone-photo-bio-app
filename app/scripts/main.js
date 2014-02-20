$(document).ready(function(){
	// start the app
	contacts = new ContactsCollection();

	contacts.fetch({
		success: function(){
			contacts.each(function(contact){
				new ListView({model: contact});
			})	
		},

		error: function(){
			console.log('error')
		}
	});


	$('.create-btn').click(function(){
		

		var character = new Contact()

			if($('.name-input').val()) {character.set({name: $('.name-input').val()})};
			if($('.bio-input').val()) {character.set({bio: $('.bio-input').val()})};
			if($('.avatar-input').val()) {character.set({avatar: $('.avatar-input').val()})};
			

		var freshModel = contacts.add(character);

		new ListView({model: freshModel});

		freshModel.save()
	});

		window.deleteFunction = function(){
			contacts.each(function(dataStuff){
				console.log(dataStuff)
				$.ajax({
					type: 'delete',
					url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
				})

			})
		}

	$('.delete-btn').click(function(){
		deleteFunction()
	})
	
});