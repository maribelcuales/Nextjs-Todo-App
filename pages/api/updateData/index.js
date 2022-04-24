const { Ref } = require("faunadb"); 
const faunadb = require("faunadb"); 
const secret = process.env.DB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret }); 

module.exports = async (req, res) => {}; 
