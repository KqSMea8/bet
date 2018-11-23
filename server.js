const app = require('./app');

// On connect start web server
app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server listening on port ${app.get('port')} in ${process.env.NODE_ENV || 'development'}`);
});