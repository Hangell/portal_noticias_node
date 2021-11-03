var mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        host: 'DKSERVER',
        user: 'hangell',
        password: 'Digo3110',
        database: 'apinewnode'
    });
}
