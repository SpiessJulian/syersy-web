const express  = require('express');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const cookieParser = require('cookie-parser');



app.set('port', process.env.PORT || 3000);
require('./config/passport')(passport);

var options = {
    host: 'localhost',
    port: 3306,
    user: 'syeraeba_seswebuser',
    password: 'aceitedemoto',
    database: 'syeraeba_seswebdata'
};
var sessionStore = new MySQLStore(options);

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
	store: sessionStore,
	secret: 'tharsten',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


require('./Routes/index.js')(app, passport);

app.use(express.static(path.join(__dirname, 'Public')));
app.use('/contactenos',express.static(path.join(__dirname, 'Public')));
app.use('/register',express.static(path.join(__dirname, 'Public')));
app.use('/login',express.static(path.join(__dirname, 'Public')));
app.use('/profile',express.static(path.join(__dirname, 'Public')));
app.use('/sobreNosotros',express.static(path.join(__dirname, 'Public')));
app.use('/team',express.static(path.join(__dirname, 'Public')));
app.use('/Servicios',express.static(path.join(__dirname, 'Public')));

app.listen(app.get('port'), ()  =>{
	console.log('Server Up! on port: ' + app.get('port'));
});
