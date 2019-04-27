import * as mongoose from 'mongoose';

export const TemplateSchema = new mongoose.Schema({
  name: String,
  user: String,
  template: {
    typeGradient: String,
    orientationGradient: String,
    ColorA: {
      hex: String,
      rgb: {
        a: Number,
        b: Number,
        g: Number,
        r: Number
      }
    },
    ColorB: {
      hex: String,
      rgb: {
        a: Number,
        b: Number,
        g: Number,
        r: Number
      }
    },
    outputFormat: String,
    cssString: String,
    showingColorA: Boolean,
    showingColorB: Boolean
  }
});