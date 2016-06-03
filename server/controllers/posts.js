// posts controller (Server side)
// routes get processed here, use post model (instance of Schema) to query database
// http response from DB is sent as pure JSON to appropriate front end factory
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');

model.exports = (function()
{
	return {
		addPost: function(req, res)
		{
			var post = new Post(req.body);
			post.save(function(err, record){
				if(err)
				{
					res.json({status: 'failed', err:err});
				}
				else
				{
					User.update({username: req.body.author}, {$inc: {posts: 1}}, {multi: true}, function(err1, record1)
					{
						if(err)
						{
							res.json({status: 'failed', err: err1});
						}
						else
						{
							Topic.update({_id: record.topic_id}, {$inc: {posts: 1}}, {multi: true}, function(err2, record2)
							{
								if(err)
								{
									res.json({status: 'failed', err: err2});
								}
								else
								{
									res.json({status: 'success'});
								}
							});
						}
					});
				}
			});
		}
	}

});