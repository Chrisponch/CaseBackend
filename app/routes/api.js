
var User = require('../models/user');
var config = require('../../config');

var secretKey = config.secretKey

module.exports = function(app, express){
	var api = express.Router;

	//API FOR SIGNUP USER
	api.post('/signup/', function(req,res){
		var user = new User({
			name: req.query.name,
			username: req.params.username,
			password: req.body.password
		});

		User,save(function(err){
			if(err){
				res.send(err);
			}
			res.json({ message:'Insert Message Here'});
		});
	})

	//API FOR USER LOGIN
	api.post('/login', function(req,res){
		User.findOne({
			username: req.query.username;
		}).selet('pasword').exec(function(err,user){
			
			if(err) throw error;
			
			if(!user){
				res.send({message:"User Does not Exist"})
			} else if (user){
				
				var validPassword="Método";

				if(!validPassword){
					res.send({message:"Invalid Password"})
				} else {

					//Login
					//Generate token or cookie

					res.json({
						token: "token goes here"
					})
				}
			}


		})
	})

	//MIDDLEWARE 
	//------------
	//MIDDLEWARE 

	return api;	
}