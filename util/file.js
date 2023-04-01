const fs = require('fs');

const deleteFile = (filePath) => {
  // unlink method deletes the name and the file connected to it
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
