const File = require("../models/File");
const path = require("path");
module.exports.homePage = async (req, res) => {
  let allFiles = await File.find({});
  if (!allFiles) {
    console.log("Error");
  }

    // console.log(allFiles);
    return res.render("index", {
      files: allFiles,
    });
  
};

module.exports.handleFile = async (req, res) => {
  try {
    File.uploadedFile(req, res, async (err) => {
      if (err) {
        console.log("Error");
        return res.redirect("back");
      }
      if (req.file) {
        let typeString = req.file.mimetype.split("/", req.file.mimetype.length);
        // console.log("length of type", typeString[1]);
        let newFile = await File.create({
          name: File.filePath + "/" + req.file.filename,
          fileType: typeString[1],
        });
        // console.log("New File-:", newFile);
      }
      return res.redirect("/");
    });
  } catch (error) {
    return res.redirect("back");
  }
};
module.exports.dowloadFile = async (req, res) => {
  try {
    let fileId = req.params.id;
    let currentFile = await File.findById(fileId);
    if (!currentFile) {
      console.log("Error");
      return res.redirect("back");
    } else {
      return res.download(path.join(__dirname, "..", currentFile.name));
    }
  } catch (error) {
    return res.redirect("back");
  }
};
