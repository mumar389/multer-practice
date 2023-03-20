const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const POST_PATH = path.join("/uploads/posts");

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    fileType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", POST_PATH));
  },
  filename: function (req, file, cb) {
    let [filename, extension] = file.originalname.split('.');
    cb(null, file.fieldname + "-" + Date.now()+'.'+extension);
  },
});

fileSchema.statics.uploadedFile = multer({ storage: storage }).single("notice");
fileSchema.statics.filePath = POST_PATH;

const File = mongoose.model("File", fileSchema);

module.exports = File;
