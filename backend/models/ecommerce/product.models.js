import mongoose from 'mongoose'

const productCategory = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    rating:{
      type: Number,
    },
    quantity:{
      type: Number,
      required: true,
      default: 0
    },
    category:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    }
    
  },
  {timestamps:true})

export const Product = mongoose.model("Product",productCategory) 