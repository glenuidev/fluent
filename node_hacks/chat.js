// basic chat server
// usage: telnet localhost 8001
var net = require( 'net' );
var server = net.createServer();

server.listen(8001);

// represents all connections
var connections = [];


server.on( 'connection', function connection ( socket ) {
	socket.write('hello');
	console.log( 'New connection' );
	// give them a way to get to multiple connections
	connections.push(socket);

	socket.on( 'data', function ( data ) {
		for (var i=0;i<connections.length;i++){
			if(connections[i].writeable){
				connections[i].write(data);
			}
		}
		console.log(data);
	});

	socket.on( 'close', function (){
		connections.splice(connections.indexOf(socket),1);
	})
});
