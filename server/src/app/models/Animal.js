import mongoose, { Schema } from 'mongoose';

const AnimalSchema = new Schema({
  avatar: { type: String },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  deficiency: { type: String, required: true },
  name: { type: String, required: true },
});

export default mongoose.model('animals', AnimalSchema);
