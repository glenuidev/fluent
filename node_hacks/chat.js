// basic chat server
// usage: telnet localhost 8001
var net, server;
net = require( 'net' );
server = net.createServer();

server.listen( 8001 );

// represents all connections
var connections = [];


server.on( 'connection', function connection ( socket ) {
	socket.write( 'hello! welcome to the chat server' );
	console.log( 'New connection' );
	// give them a way to get to multiple connections
	connections.push(socket);
	
	socket.on( 'data', function ( data ) {
		for ( var i=0; i < connections.length; i++ ){
			if( connections[i].writeable ){
				connections[i].write( data );
			}
		}
		console.log( data.toString() );
	});
	
	socket.on( 'close', function (){
		connections.splice( connections.indexOf( socket ), 1 );
	})
});
