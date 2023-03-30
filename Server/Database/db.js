const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ps_root_user",
    host: "parcel-state-dev.cfxadsi6rhvf.eu-central-1.rds.amazonaws.com",
    database: "postgres",
    password: "parc3lstat3",
    port: 5432,
});

module.exports = pool;