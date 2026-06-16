import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  country: { type: String, required: true },
  industry: { type: String, required: true },
  scope: { type: String, required: true },
  result: { type: String, required: true },
  image: { type: String, required: true },
  published: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);
export default Work;
