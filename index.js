require('dotenv').config(); //read from a .env file from the root folder

const server = require('./api/server.js');


//make the port be assigned by the Server
//heroku will place the .PORT environment valu4e ohn their server
const port = process.env.PORT || 5000;  //<-- process.env.PORT || 5000 uses server assigned port or defualts to 5000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
