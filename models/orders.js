import mongoose from "mongoose"

const { Schema } = mongoose

const OrderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: {
      type: JSON,
      required: true,
    },
    userData: {
      type: JSON,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model("Order", OrderSchema)
