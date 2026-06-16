import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const globalForMongoose = globalThis as unknown as { mongoose?: typeof mongoose };

export async function connectDB() {
  if (!MONGODB_URI) throw new Error("MONGODB_URI is not set");
  if (mongoose.connection.readyState === 1) return true;
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    return true;
  } catch (error) {
    console.error("[db] MongoDB connection failed:", error);
    throw error;
  }
}

export function isConnected() {
  return mongoose.connection.readyState === 1;
}

export default mongoose;
