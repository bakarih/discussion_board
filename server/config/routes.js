module.exports = function(app)
{
	//=======================================================
	//require any controllers you may need so I can access their methods
	//routes pick up url request and call appropriate controller method (RESTful routes)
	//=======================================================
	var users = require('./../controllers/users.js');
	var topics = require('./../controllers/topics.js');
	var comments = require('./../controllers/comments.js');
	var posts = require('./../controllers/posts.js');

	// root route
	app.get('/', function(req, res){
		res.render('index');
	});

	// login routes (index.html)
	app.post('/checkUserExists/:any', function(req, res){
		console.log(routes);
		users.checkUserExists(req, res);
	});

	app.post('/addUser', function(req, res){
		users.addUser(req, res);
	});

	// dashboard.html routes
	app.post('/addTopic', function(req, res){
		topics.addTopic(req, res);
	});

	app.get('/getTopics', function(req, res){
		topics.getTopics(req, res);
	});

	// user
	app.get('/showUser/:any', function(req, res){
		
	});
}
