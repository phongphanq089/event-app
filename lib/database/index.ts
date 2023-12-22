import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://phongphanq089:0905890925zZ@cluster0.95axkol.mongodb.net/?retryWrites=true&w=majority";

const MONGODB_URI1 = process.env.MONGODB_URI;

console.log(MONGODB_URI1);

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "event-app",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
