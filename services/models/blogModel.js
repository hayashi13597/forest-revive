import { Schema, models, model } from "mongoose";
// if time null ->> show  createdAt
const BlogSchema = new Schema(
  {
    title: { type: String, required: true, lowercase: true },
    description: { type: String, required: true },
    time: { type: String, default: null },
    address: { type: String, default: "Hồ Chí Minh" },
  },
  { timestamps: true }
);
const BlogModel = models.Blog || model("Blog", BlogSchema);
export default BlogModel;
