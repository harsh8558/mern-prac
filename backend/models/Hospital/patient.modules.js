import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
  hospital:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  },
  cabin:{
    type: String,
    required: true
  }
}) 

const patientSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
    },
    problem:{
      type: String,
      required: true
    },
    age:{
      type: Number,
      required: true
    },
    Gender:{
      type: String,
      enum: ["Male","Female","Others"],
      required: true
    },
    contact:{
      type: Number,
      required: true,
      default: 0
    },
    hospital:{
      type: [hospitalSchema],
    }
  },
  {timestamps: true})

export const Patient = mongoose.model("Patient" , patientSchema)