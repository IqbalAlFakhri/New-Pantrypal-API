const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'isi dengan host yang sesuai',
    user: 'isi dengan user root yang digunakan',
    password: 'isi dengan password anda',
    database: 'dataset_bahan' //contoh database
});

module.exports = dbPool.promise();
