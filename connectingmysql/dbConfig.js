import mysql from "mysql2";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myshop',
    connectionLimit: 100
});

export default pool;