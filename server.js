// const Usertest = require('./src/routes/test.route.js');
const Order = require('./src/routes/order.route.js')
const Status = require('./src/routes/status.route.js')
const User = require('./src/routes/test.route.js')
const Item = require('./src/routes/item.route.js')
const Cus = require('./src/routes/cus.route.js')
const Service = require('./src/routes/service.route.js')

const connectDB = require('./src/data/db.mongo.config.js');
const express = require('express');

const app = express();
const port = 3000;

connectDB();
app.use(express.json());


// app.use('/api', Usertest);
app.use('/api', Order);
app.use('/api', Status);
app.use('/api', User);
app.use('/api', Item);
app.use('/api', Cus);
app.use('/api', Service);

app.listen(port, () => {
  console.log(`Customer app listening at http://localhost:${port}`);
});