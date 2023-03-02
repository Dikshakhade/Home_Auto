const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};
module.exports = connectdb;
