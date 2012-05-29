var http = require('http');
var server = http.createServer();
server.on('request', function ( req, res ) {
	res.writeHead( 200, {"Content-Type" : "text/html"} );
	res.write("I\'m learning node");
	res.write("<p>" + req.headers['user-agent'] + "</p>");
	res.end( "thank you for visiting ..ending response now" );
})

server.listen( 9000 );



