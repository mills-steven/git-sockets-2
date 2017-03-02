var name = getQueryVariable('name') || 'Anonoymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join '+ room);

jQuery('.room-name').text(room);

socket.on('connect', function() {
	console.log('connected to socket.io server');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = jQuery('.messages');

	console.log('New Message: ');
	console.log(message.text);

	$message.append('<p><strong>' + message.name  + ' sent on ' + momentTimestamp.local().format('MMM Do YYYY@h:mma') + ': </strong></p>');
	$message.append('</p>' + message.text + '</p>');
});

// Handles submitting of new message.
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]')

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');

});
