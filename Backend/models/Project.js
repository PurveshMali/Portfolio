const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required'],
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
    },
    features: [
      {
        icon: {
          type: String,
          required: [true, 'Feature icon is required'],
        },
        text: {
          type: String,
          required: [true, 'Feature text is required'],
        },
      },
    ],
    siteLink: {
      live: {
        type: String,
      },
      github: {
        type: String,
        required: [true, 'GitHub link is required'],
      },
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
