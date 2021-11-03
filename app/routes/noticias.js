var db = require('../../config/db');

module.exports = function (app) {
    var connection = db();
    app.get('/noticias', function (req, res) {
        connection.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', {noticias: result});
        });
    });
}
