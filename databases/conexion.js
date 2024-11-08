import mysql2  from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql2.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE ,
    port: process.env.DB_PORT 
});


db.connect( (err ) => {
    if ( err ) {
        throw err;
    };

    console.log('Base de datos conectada');
});

export default db;