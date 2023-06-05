import { Schema, model, models } from "mongoose";
//permission   robot, member,admin
const userSchema = new Schema(
  {
    fullname: { type: String, required: true, lowercase: true },
    email: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    amount: { type: Number, required: true },
    message: { type: String, required: true },
    status: { type: Boolean, default: true },
    type: { type: String, default: "palpal" },
  },
  { timestamps: true, autoIndex: true }
);

const UserModel = models.User || model("User", userSchema);

export default UserModel;
