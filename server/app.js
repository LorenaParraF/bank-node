const express = require('express');

// import db
const { db } = require('./utils/database');
// import routes
const { usersRouter } = require('./routes/users.Router');
const { transfersRouter } = require('./routes/transfers.Router');

const app = express();

// autenticar base de datos
db.authenticate()
  .then(() => console.log('db autenticate'))
  .catch(err => console.log(err));

// endpoints
// http://localhost:4002/api/v1/users
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);

const PORT = 4002;

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT} `));
