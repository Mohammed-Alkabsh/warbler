const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URL, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log("db is connected!");
  return res;
}).catch(err => {
  console.log(Error, err);
  return err;
})

module.exports.User = require("./user");
module.exports.Message = require("./message");
