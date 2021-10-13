import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  agent: String,
});

const Model = model('record', schema, 'record');

export default Model;
