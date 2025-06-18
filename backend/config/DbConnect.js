import mongoose from "mongoose";

export const DbConnect = async () => {
  const URL = process.env.MONGO_URL;
  try {
    const Db = await mongoose.connect(`${URL}`);
    console.log(`Db Connect Successfully`);
  } catch (error) {
    console.log(`Error while Connecting Database`);
  }
};
