
const mongoose = require('mongoose');
const app = require('./app');
const { MongoDB_URI } = require('./utils/config');

mongoose.connect(MongoDB_URI)
.then(()=>{
  console.log('Connected to MongoDB')
//   start the application server
   app.listen(3001,()=>{
    console.log('server is running on port 3001');
   })
})
.catch(err=>{
 console.log(`Error connecting to MongoDB:${err}`);
})