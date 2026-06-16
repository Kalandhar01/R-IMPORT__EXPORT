import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: String,
  country: String,
  subject: String,
  services: String,
  message: String,
  read: { type: Boolean, default: false },
}, { timestamps: true });

const Submission = mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
export default Submission;
