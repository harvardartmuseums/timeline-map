'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/index.html', function(req, res){
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/control.html', function(req, res){
	res.sendFile(path.join(__dirname, '/control.html'));
});

app.get('/cursor.png', function(req, res){
	res.sendFile(path.join(__dirname, '/cursor.png'));
});

server.listen(PORT);


var screensIO = io.of('/screens-namespace');
var projectorIO = io.of('/projectors-namespace');
var control = false;

projectorIO.on('connection', function(socket) {
	if (control) {
		projectorIO.to(socket.id).emit('reject');
	} else {
		control = true;
		socket.on('cursor', function(x, y) {
			screensIO.emit('cursor', x, y);
		});
		socket.on('close', function() {
			control = false;
		});
	}
});