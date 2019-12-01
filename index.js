const app = require('./server/server');
require('dotenv').config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`\n*** Listening on port ${port} ***\n`);
});
