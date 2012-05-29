// express oriented around roots
var express = require("express");
var app = express.createServer();

//good
app.get( '/', function ( req, res ) {
    var page = "unknown";
	if ( req.query.page ) { 
		page = req.query.page
	}
	res.cookie('monster', "cookies!!");
	res.send( 'hello world, you are at page' + page );

});

//good
app.get( '/products', function ( req, res ) {
	res.send( 'these are your rad products' );
});

// 2 diff pages



// redirect
app.get( '/old', function ( req, res ) {
	res.redirect('/new');
	res.send( 'this is the old url' );
});

app.get( '/new', function ( req, res ) {
	res.send( 'this is a new url' );
});


app.listen ( 3000 );

/*

var express = require("express");

app.configure(function(){
	var public = __dirname _ "/../public/";
	public = require("path".normalize(public);

	app.set("views", __dirname + "/views");
	app.set("view engine", "jade");
	
	
});

app.get("/", function(req,res){
	res.render("index", {
		locals : {
			h1: 'Router Stats',
			scripts : [
			"foo.js"
			]
		}
	});
});

*/