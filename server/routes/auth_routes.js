
module.exports = function(app) {

    var passport = require('passport');
    var mongoose = require('mongoose');
    var LocalStrategy = require('passport-local').Strategy;
    var models = require('../database/models');
    var User = models.User;
    var session = require('express-session');
    var MongoStore = require('connect-mongo')(session);
    var bcrypt = require('bcryptjs');
    var FacebookStrategy = require('passport-facebook').Strategy;

    var configAuth = require('./config');


    app.use(session({
        store: new MongoStore({
            //url: 'mongodb://localhost/Movie_Store'
            url: 'mongodb://ahmed:12345@ds011462.mlab.com:11462/movie_store'
        }),
        secret: 'codetutorialsecret',
        resave:false,
        saveUninitialized:false
    }));

    app.use(passport.initialize());

    app.use(passport.session());


    passport.use(new LocalStrategy(
        function (username, password, done) {


            User.findOne({username: username}, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {alert: 'Incorrect username.'});
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, {alert: 'Incorrect password.'});
                }
                return done(null, user);
            });
        }

        ));


    passport.use(new FacebookStrategy({
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields: ['id', 'displayName', 'photos','email', 'gender','birthday']
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile);
            process.nextTick(function(){
                User.findOne({'fb_id': profile.id}, function(err, user){
                    if(err)
                        return done(err);
                    if(user)
                        return done(null, user);
                    else {
                        var newUser = new User();
                        newUser.fb_id = profile.id;
                        newUser.fb_token = accessToken;
                        newUser.username = profile.displayName;
                        newUser.firstName = profile.displayName.split(" ")[0];
                        newUser.lastName = profile.displayName.split(" ")[1];
                        newUser.gender = profile.gender;
                       // newUser.email = profile.emails[0].value;
                        newUser.photo = profile.photos[0].value;

                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        })
                        console.log(profile);
                    }
                });
            });
        }

    ));

app.get('/auth/facebook',
passport.authenticate('facebook', { scope: 'email'}),
    function(req, res){
});

    app.get('/auth/facebook/callback', 
      passport.authenticate('facebook', { successRedirect: '/#/Home',
                                          failureRedirect: '/' }));




    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
           done(err, user);
       });
    });

    function isAuthenticated(req,res,next){
        if(req.isAuthenticated())return next();
        res.sendStatus(401);
    }


    app.post('/auth/login', passport.authenticate('local'),function(req, res){
        res.json(req.user);
    });


    app.get('/auth/currentuser',isAuthenticated,function(req,res){
        res.json(req.user);
    });

    app.post('/auth/signup',function(req,res){

        

        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('firstName', 'First Name is required').notEmpty();
        req.checkBody('lastName', 'Last Name is required').notEmpty();

        if(req.body.email == "" || req.body.email == undefined)
        req.checkBody('email', 'Email is required').notEmpty();

        if(req.body.email != "" && req.body.email != undefined)
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


        var errors = req.validationErrors();

        var errs = {};
        for(var i = 0; i < errors.length; i++) {
            var e = errors[i];

            var param, msg;
            for(var key in e) {
                if(key == 'param') param = e[key];
                if(key == 'msg') msg = e[key];
            }
            errs[param] = msg;
        }

        if(req.body.strenth > 0 && req.body.strenth < 50 && req.body.password !="" )
            {errs.weakPass ="Your password is too weak please change it";}


        User.findOne({username: req.body.username}, function (err, user) {
            User.findOne({email: req.body.email}, function (err, user2) {


                if (user && req.body.username != undefined && req.body.username != "") {
                    errs.usernameNotUnique = "username already exists!";
                }

                if (user2 && req.body.email != undefined && req.body.email != "") {
                    errs.emailNotUnique = "email already exists!";
                }

                





        if (Object.getOwnPropertyNames(errs).length != 0) {
            res.send(errs);
            return;
        }

        else {



            var u =  new User();

            for (prop in req.body) {
              u[prop] = req.body[prop];
          }

          var hash = bcrypt.hashSync(u.password, 10);

          u.password = hash ;

          if (req.body.email == "admin@craftacademy.eu")
            {u.role = 'admin';}
          else
            {u.role = 'registered_user';}

          u.save(function(err){
            if (err) {
                res.json({'alert':'Registration error'});
            }else{
                res.json({'alert':'Registration success'});
            }
        });
      }

      });
         });

  });


    app.get('/auth/logout', function(req, res){
       console.log('logout');
       req.logout();
       res.sendStatus(200);
   });


};