/** Database setup for BizTime. */
const { Client } = require('pg');

  
  let  client = new Client({
    connectionString: "postgresql://postgres:aniya123@localhost:5432/biztime"
  });
  
client.connect();
  
  module.exports = client;
