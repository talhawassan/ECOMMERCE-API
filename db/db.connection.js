const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATA_BASE_URI, {
    useNewUrlParser: true,
}).then(() => {
    console.log('database connected')
}).catch((e) => {
  console.log(e)
})
