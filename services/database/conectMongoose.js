import mongoose from "mongoose";
let isConnected = false;
const connectMongoDB = async () => {
  mongoose.set("strictQuery");
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "free",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    return;
  } catch (err) {
    console.log(err.message);
  }
};

export default connectMongoDB;
